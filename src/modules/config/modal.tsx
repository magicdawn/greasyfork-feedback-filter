import { __PROD__ } from '$common'
import { C, flexVerticalCenterStyle } from '$common/emotion-css'
import { AntdTooltip } from '$components/antd'
import { type ERatingKey } from '$enums'
import { css } from '@emotion/react'
import { useMemoizedFn } from 'ahooks'
import { Checkbox, Modal } from 'antd'
import { size } from 'polished'
import { useEffect, type ComponentProps } from 'react'
import { proxy, useSnapshot } from 'valtio'
import IconParkOutlineTips from '~icons/icon-park-outline/tips'
import { configState } from './index'

const modalState = proxy({
  show: __PROD__
    ? false
    : // when dev
      true,
})

export function showModalConfig() {
  modalState.show = true
}

export function hideModalConfig() {
  modalState.show = false
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

  const { hiddenRatings } = useSnapshot(configState)

  return (
    <Modal
      open={show}
      onOk={handleOk}
      onCancel={hideModalConfig}
      centered
      footer={null}
      title='Configuration'
    >
      <p css={[flexVerticalCenterStyle]}>
        Hide Ratings
        <AntdTooltip
          title={
            <>
              Will hide feedbacks for your scripts. <br />
              (when U are the script owner or U has admin perssion of current script) <br />
            </>
          }
        >
          <IconParkOutlineTips {...size(14)} css={C.ml(6)} />
        </AntdTooltip>
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
              `}
              checked={checked}
              onChange={onChange}
            >
              {key}
            </Checkbox>
          )
        })}
      </div>
    </Modal>
  )
}
