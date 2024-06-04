import { colorPrimary } from '$common'
import { StyleProvider, type StyleProviderProps } from '@ant-design/cssinjs'
import { cache as emotionCssDefaultCache } from '@emotion/css'
import { CacheProvider, type EmotionCache } from '@emotion/react'
import { ConfigProvider, theme } from 'antd'
import type { ReactNode } from 'react'

// https://github.com/emotion-js/emotion/issues/1105
emotionCssDefaultCache.compat = true

function compose(...fns: ((c: ReactNode) => ReactNode)[]) {
  return function (c: ReactNode) {
    return fns.reduceRight((content, fn) => fn(content), c)
  }
}

export function AntdApp({
  children,
  emotionCache = emotionCssDefaultCache,
  styleProviderProps,
}: {
  children: ReactNode
  emotionCache?: EmotionCache
  styleProviderProps?: StyleProviderProps
}) {
  const wrap = compose(
    // emotion cache
    (c) => <CacheProvider value={emotionCache}>{c}</CacheProvider>,

    // antd style
    (c) => <StyleProvider {...styleProviderProps}>{c}</StyleProvider>,

    // antd config
    (c) => (
      <ConfigProvider
        button={{ autoInsertSpace: false }}
        theme={{
          cssVar: true,
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary,
            colorBgSpotlight: colorPrimary, // tooltip bg
            zIndexPopupBase: 11000, // base-modal 10002
          },
          components: {},
        }}
      >
        {c}
      </ConfigProvider>
    ),
  )

  return wrap(children)
}
