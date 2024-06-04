import { APP_NAME, APP_NAME_DISPLAY } from '$common'
import { AntdTooltip } from '$components/antd'
import { AntdApp } from '$components/antd/AntdApp'
import { styled } from '$libs'
import { useConfigSnapshot } from '$modules/config'
import { ModalConfig, showModalConfig } from '$modules/config/modal'
import { Global, css } from '@emotion/react'
import { Button } from 'antd'
import { createRoot } from 'react-dom/client'
import { snapshot } from 'valtio'
import IconParkSolidConfig from '~icons/icon-park-solid/config'
import { ERating, type ERatingKey } from '../../enums'
import { blacklist } from './blacklist'

export function initFeedback() {
  initFilterFeedbacks()
  addConfigUi()
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

  // attr
  if (rating) {
    const ratingKey = ERating[rating] as ERatingKey
    item.setAttribute(RATING_ATTR_NAME, ratingKey)
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
  const ratingClassname = [...(ratingSpan?.classList || [])]
    .filter((x) => x.startsWith('rating-icon-'))
    .map((x) => x.replace(/^rating-icon-/, ''))
    .filter(Boolean)[0]
  const rating = (() => {
    if (!ratingText) return ERating.NoRating
    if (ratingText === 'good' || ratingClassname === 'good') return ERating.Good
    if (ratingText === 'ok' || ratingClassname === 'ok') return ERating.Ok
    if (ratingText === 'bad' || ratingClassname === 'bad') return ERating.Bad
  })()

  return { uid, username, title, rating }
}

function hideFeedback(item: HTMLDivElement) {
  item.style.display = 'none'
}

function addConfigUi() {
  const rcEl = document.createElement('span')
  rcEl.classList.add(styled.generateClassName`
    margin-left: 20px;
  `)
  document.querySelector('.post-discussion > p')?.appendChild(rcEl)

  const root = createRoot(rcEl)
  root.render(<ConfigUi />)
}

const RATING_ATTR_NAME = `data-${APP_NAME}-rating`

function ConfigUi() {
  const { hiddenRatings } = useConfigSnapshot()
  return (
    <AntdApp>
      <AntdTooltip title={`config for [${APP_NAME_DISPLAY}]`}>
        <Button onClick={showModalConfig}>
          <IconParkSolidConfig /> Config
        </Button>
      </AntdTooltip>

      <ModalConfig />

      <Global
        styles={[
          hasAdminPermission &&
            css`
              ${hiddenRatings.map((x) => `[${RATING_ATTR_NAME}="${x}"]`).join(',')} {
                display: none !important;
              }
            `,
        ]}
      />
    </AntdApp>
  )
}
