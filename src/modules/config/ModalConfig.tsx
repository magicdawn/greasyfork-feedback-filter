import { __DEV__, __PROD__ } from '$common'
import { C, flexVerticalCenterStyle } from '$common/emotion-css'
import { HelpInfo } from '$components/HelpInfo'
import { AntdApp } from '$components/antd/AntdApp'
import { type ERatingKey } from '$enums'
import { css } from '@emotion/react'
import { useMemoizedFn } from 'ahooks'
import { Checkbox, Modal, Switch } from 'antd'
import { once } from 'lodash-es'
import { useEffect, type ComponentProps } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { proxy, useSnapshot } from 'valtio'
import { EditableList } from './EditableList'
import { configState, useConfigSnapshot } from './index'

const modalState = proxy({
  show: __PROD__
    ? false
    : // when dev
      false,
})

export function showModalConfig() {
  renderOnce()
  modalState.show = true
}

if (__DEV__) {
  // setTimeout(showModalConfig)
}

export function hideModalConfig() {
  modalState.show = false
}

let root: Root | undefined
const renderOnce = once(() => {
  root ||= (() => {
    const rcEl = document.createElement('div')
    document.body.appendChild(rcEl)
    return createRoot(rcEl)
  })()
  root.render(
    <>
      <AntdApp>
        <ModalConfig />
      </AntdApp>
    </>,
  )
})

const S = {
  configSection: css`
    margin-top: 20px;
    margin-bottom: 5px;
  `,
}

export function ModalConfig() {
  const { show } = useSnapshot(modalState)

  useEffect(() => {
    const html = document.documentElement
    if (show) {
      html.style.overflowY = 'hidden'
    } else {
      html.style.overflowY = ''
    }
  }, [show])

  const handleOk = useMemoizedFn(() => {
    hideModalConfig()
  })

  const { hiddenRatings, blacklist, filterEnabled } = useConfigSnapshot()

  return (
    <Modal
      open={show}
      onOk={handleOk}
      onCancel={hideModalConfig}
      centered
      footer={null}
      title='Configuration'
      width={700}
    >
      <p css={[flexVerticalCenterStyle, S.configSection]}>
        Enable Filter
        <HelpInfo>this is the MAIN switch</HelpInfo>
      </p>
      <Switch checked={filterEnabled} onChange={(val) => (configState.filterEnabled = val)} />

      <p css={[flexVerticalCenterStyle, S.configSection]}>
        Hide Ratings
        <HelpInfo>
          Hide feedbacks of checked types. <br />
          P.S ONLY apply the scripts you own or when you have admin permission.
        </HelpInfo>
      </p>
      <div>
        {(['Bad', 'Ok', 'NoRating', 'Good'] satisfies ERatingKey[] as ERatingKey[]).map((key) => {
          const checked = hiddenRatings.includes(key)

          const onChange: ComponentProps<typeof Checkbox>['onChange'] = (e) => {
            const set = new Set<ERatingKey>(hiddenRatings)

            const val = e.target.checked
            if (val) {
              set.add(key)
            } else {
              set.delete(key)
            }

            configState.hiddenRatings = Array.from(set)
          }

          return (
            <Checkbox
              key={key}
              css={css`
                &.ant-checkbox-wrapper + .ant-checkbox-wrapper {
                  margin-left: 20px;
                }
                .ant-checkbox + span {
                  user-select: none;
                }
              `}
              checked={checked}
              onChange={onChange}
              disabled={!filterEnabled}
            >
              {key}
            </Checkbox>
          )
        })}
      </div>

      <p css={[flexVerticalCenterStyle, S.configSection, C.mb(0)]}>
        Blacklist
        <HelpInfo>
          blacklist feedbacks by UIDs and usernames
          <br />
          P.S this section applies to all scripts
        </HelpInfo>
      </p>
      <EditableList
        disabled={!filterEnabled}
        searchProps={{ placeholder: '`Username` or `UID` or `UID(remark)`' }}
        list={blacklist}
        onChange={(val) => (configState.blacklist = val)}
        displayListCss={css`
          min-height: 100px;
        `}
      />
    </Modal>
  )
}
