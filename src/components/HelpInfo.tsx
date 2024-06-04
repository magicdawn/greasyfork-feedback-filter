import { C } from '$common/emotion-css'
import { css } from '@emotion/react'
import { size } from 'polished'
import type { ReactNode, SVGProps } from 'react'
import IconParkOutlineTips from '~icons/icon-park-outline/tips'
import { AntdTooltip } from './antd'

export function HelpInfo({
  children,
  size: sizeVal = 14,
  ...restProps
}: { children?: ReactNode; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <AntdTooltip title={children}>
      <IconParkOutlineTips
        {...size(sizeVal)}
        {...restProps}
        css={[
          C.ml(6),
          css`
            cursor: pointer;
          `,
        ]}
      />
    </AntdTooltip>
  )
}
