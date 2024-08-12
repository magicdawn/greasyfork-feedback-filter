import { APP_NAME, APP_NAME_DISPLAY } from '$common'
import { AntdTooltip } from '$components/antd'
import { AntdApp } from '$components/antd/AntdApp'
import { ERating, type ERatingKey } from '$enums'
import { styled } from '$libs'
import { useConfigSnapshot } from '$modules/config'
import { showModalConfig } from '$modules/config/ModalConfig'
import { Global, css } from '@emotion/react'
import { Button } from 'antd'
import { useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import IconParkSolidConfig from '~icons/icon-park-solid/config'
import { HAS_ADDMIN_PERMISSION } from './admin-permission'

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

function handleFeedbackItem(item: HTMLDivElement) {
  if (processed.has(item)) return
  processed.add(item)

  const { uid, username, title, rating } = parseFeedbackItem(item)

  if (rating) {
    const ratingKey = ERating[rating] as ERatingKey
    item.setAttribute(ATTR_NAME_RATING, ratingKey)
  }

  if (uid) {
    item.setAttribute(ATTR_NAME_UID, uid)
  }

  if (username) {
    item.setAttribute(ATTR_NAME_USERNAME, username)
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

export function addConfigGmCommand() {
  GM.registerMenuCommand('Config', () => {
    showModalConfig()
  })
}

function ConfigUi() {
  return (
    <AntdApp>
      <HideWithStyles />
      <AntdTooltip title={`config for [${APP_NAME_DISPLAY}]`}>
        <Button onClick={showModalConfig}>
          <IconParkSolidConfig /> Config
        </Button>
      </AntdTooltip>
    </AntdApp>
  )
}

const ATTR_NAME_RATING = `data-${APP_NAME}-rating`
const ATTR_NAME_UID = `data-${APP_NAME}-uid`
const ATTR_NAME_USERNAME = `data-${APP_NAME}-username`

const regUid = /^\d+$/
// sample: 12345(some one, I hate u)
const regUidWithRemark = /^(?<uid>\d+)\([\S ]+\)$/

function HideWithStyles() {
  const { filterEnabled, hiddenRatings, blacklist } = useConfigSnapshot()

  // rating level
  const selectors: string[] = useMemo(() => {
    return [...hiddenRatings.map((x) => `[${ATTR_NAME_RATING}="${x}"]`)]
  }, [hiddenRatings])

  // blacklist
  const blacklistSelectors: string[] = useMemo(() => {
    const blacklistUids = new Set<string>()
    const blacklistUsernames = new Set<string>()

    blacklist.forEach((x) => {
      if (regUidWithRemark.test(x)) {
        const uid = regUidWithRemark.exec(x)?.groups?.uid
        if (uid) blacklistUids.add(uid)
      } else if (regUid.test(x)) {
        blacklistUids.add(x)
        blacklistUsernames.add(x)
      } else {
        blacklistUsernames.add(x)
      }
    })

    return [
      ...Array.from(blacklistUids).map((x) => `[${ATTR_NAME_UID}="${x}"]`),
      ...Array.from(blacklistUsernames).map((x) => `[${ATTR_NAME_USERNAME}="${x}"]`),
    ]
  }, [blacklist])

  return (
    <Global
      styles={
        filterEnabled && [
          // hide in MY script feedback-list
          HAS_ADDMIN_PERMISSION &&
            css`
              ${selectors.join(',')} {
                display: none !important;
              }
            `,

          // hide anywhere
          css`
            ${blacklistSelectors.join(',')} {
              display: none !important;
            }
          `,
        ]
      }
    />
  )
}
