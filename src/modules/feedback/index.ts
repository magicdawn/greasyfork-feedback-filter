import { snapshot } from 'valtio'
import { blacklist } from './blacklist'

export function initFeedback() {
  initFilterFeedbacks()
}

async function initFilterFeedbacks() {
  processFeedbacks()
  const ob = new MutationObserver(processFeedbacks)
  ob.observe(document.body, {
    childList: true,
    subtree: true,
  })
  window.addEventListener('unload', () => ob.disconnect(), { capture: false, passive: true })
}

const processed = new WeakSet<HTMLDivElement>()

async function processFeedbacks() {
  const items = [
    ...document.querySelectorAll<HTMLDivElement>(
      '.script-discussion-list .discussion-list-container .discussion-list-item',
    ),
  ].filter((item) => !processed.has(item))

  for (const item of items) {
    handleFeedbackItem(item)
  }
}

/**
 No rating - just a question, comment, or feature request
 Bad - script does not work
 OK - script works, but has bugs
 Good - script works
 */

enum Rating {
  NoRating = 'No rating',
  Bad = 'Bad',
  OK = 'OK',
  Good = 'Good',
}

function getHasAdminPermission() {
  const adminUrl = new URL('./admin', location.href)
  const adminUrlPath = adminUrl.pathname
  const hasAdminEntry = !!document.querySelector<HTMLAnchorElement>(
    `#script-links a[href^='${adminUrlPath}']`,
  )
  return hasAdminEntry
}

const hasAdminPermission = getHasAdminPermission()

function handleFeedbackItem(item: HTMLDivElement) {
  if (processed.has(item)) return
  processed.add(item)

  const { uid, username, title, rating } = parseFeedbackItem(item)
  if (!uid || !username || !title || !rating) return

  // hide
  if (hasAdminPermission) {
    if (rating !== Rating.Good) {
      return hideFeedback(item)
    }
  }

  /**
   * blacklist
   */
  if (blacklist.has(uid) || blacklist.has(username)) {
    return hideFeedback(item)
  }
  // sample: 12345(some one, I hate u)
  const reg = /^(?<uid>\d+)\([\S ]+\)$/
  const uidsWithRemark = Array.from(snapshot(blacklist))
    .filter((x) => reg.test(x))
    .map((x) => reg.exec(x)?.groups?.uid)
    .filter(Boolean)
  if (uidsWithRemark.includes(uid)) {
    return hideFeedback(item)
  }
}

function parseFeedbackItem(item: HTMLDivElement) {
  // author
  const authorMeta = item.querySelectorAll<HTMLDivElement>('.discussion-meta-item')[0]
  const authorHref =
    authorMeta?.querySelector<HTMLAnchorElement>('.user-link')?.getAttribute('href') || ''
  const authorHrefPath = new URL(authorHref, location.href).pathname // /zh-CN/users/<uid>-<name>
  const lastPath = authorHrefPath.split('/').at(-1) // <uid>-<name>
  const match = /^(?<uid>\d+)-(?<username>\S+)$/.exec(lastPath || '')
  const uid = match?.groups?.uid
  const username = match?.groups?.username

  // info
  const title = item.querySelector<HTMLAnchorElement>(
    '.discussion-title .discussion-snippet',
  )?.innerText
  const ratingSpan = item.querySelector<HTMLSpanElement>('.discussion-title .rating-icon')
  const ratingText = ratingSpan?.innerText.trim().toLocaleLowerCase() || ''
  const ratingClassName = [...(ratingSpan?.classList || [])]
    .filter((x) => x.startsWith('rating-icon-'))
    .map((x) => x.replace(/^rating-icon-?/, ''))
    .filter(Boolean)[0]
  const rating = (() => {
    if (!ratingText) return Rating.NoRating
    if (ratingText === 'good' || ratingClassName === 'good') return Rating.Good
    if (ratingText === 'ok' || ratingClassName === 'ok') return Rating.OK
    if (ratingText === 'bad' || ratingClassName === 'bad') return Rating.Bad
  })()

  return { uid, username, title, rating }
}

function hideFeedback(item: HTMLDivElement) {
  item.style.display = 'none'
}
