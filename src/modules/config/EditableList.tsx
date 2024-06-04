import { colorPrimary } from '$common'
import { C } from '$common/emotion-css'
import { cx } from '$libs'
import type { TheCssType } from '$utility/type'
import { css } from '@emotion/react'
import { Empty, Input, message } from 'antd'
import { uniq } from 'lodash-es'
import { forwardRef, useMemo, type ComponentProps, type ComponentPropsWithoutRef } from 'react'
import IconParkOutlineCloseSmall from '~icons/icon-park-outline/close-small'

const { Search } = Input

export function EditableList({
  searchProps,
  disabled,
  list,
  onChange,
  displayListCss,
}: {
  searchProps?: ComponentProps<typeof Search>
  disabled?: boolean
  list: string[]
  onChange: (newList: string[]) => void
  displayListCss?: TheCssType
}) {
  list = useMemo(() => uniq(list), [list])

  return (
    <>
      <Search
        css={css`
          margin-top: 5px;
          margin-bottom: 5px;
        `}
        enterButton='Add'
        allowClear
        disabled={disabled}
        {...searchProps}
        onSearch={(val, e) => {
          if (!val) return

          const set = new Set<string>([...list])
          if (!set.has(val)) {
            set.add(val)
          } else {
            message.warning(`${val} already exists`)
          }

          onChange(Array.from(set))

          // clear
          // 非受控组件, 有内部状态, 不能简单设置 input.value
          if (e?.target) {
            const el = e.target as HTMLElement
            const clearBtn = el
              .closest('.ant-input-wrapper')
              ?.querySelector<HTMLElement>('.ant-input-clear-icon')
            clearBtn?.click()
          }
        }}
      />

      <div
        css={[
          css`
            min-height: 82px;
            border-radius: 6px;
            border: 1px solid #eee;
            margin-top: 3px;
            body.dark & {
              border-color: #333;
            }
          `,
          disabled &&
            css`
              color: var(--ant-color-text-disabled);
              background-color: var(--ant-color-bg-container-disabled);
              border-color: var(--ant-color-border);
              box-shadow: none;
              opacity: 1;
              pointer-events: none;
              cursor: not-allowed;
            `,
          displayListCss,
        ]}
      >
        {list.length ? (
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              padding: 5px;
              gap: 5px 10px;
              align-items: flex-start;
            `}
          >
            {list.map((t) => {
              return (
                <TagItemDisplay
                  key={t}
                  tag={t}
                  enableDragging={false}
                  onDelete={(tag) => {
                    const s = new Set([...list])
                    s.delete(tag)
                    onChange(Array.from(s))
                  }}
                />
              )
            })}
          </div>
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description='Empty'
            css={css`
              &.ant-empty-normal {
                margin-block: 5px;
              }
            `}
          />
        )}
      </div>
    </>
  )
}

const TagItemDisplay = forwardRef<
  HTMLDivElement,
  {
    tag: string
    enableDragging?: boolean
    dragging?: boolean
    onDelete?: (tag: string) => void
  } & Omit<ComponentPropsWithoutRef<'div'>, 'children'>
>(({ tag, enableDragging = true, dragging, className, onDelete, ...restProps }, ref) => {
  return (
    <div
      {...restProps}
      ref={ref}
      className={cx(className, { dragging })}
      css={[
        css`
          border-radius: 5px;
          padding: 2px 15px;
          position: relative;
          border: 1px solid #ddd;
          body.dark & {
            border-color: #333;
          }

          display: inline-flex;
          align-items: center;

          &:hover,
          &.dragging {
            border-color: ${colorPrimary};
            color: ${colorPrimary};
            .anticon {
              visibility: visible;
            }
          }

          &.dragging {
            z-index: 10;
          }
        `,
        enableDragging &&
          css`
            cursor: move;
          `,
      ]}
    >
      {tag}
      <IconParkOutlineCloseSmall
        onClick={() => {
          onDelete?.(tag)
        }}
        css={css`
          ${C.size(16)};
          ${C.ml(5)};
          cursor: pointer;
          font-size: 12px;
        `}
      />
    </div>
  )
})
