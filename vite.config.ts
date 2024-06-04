import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),

    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),

    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),

    monkey({
      entry: 'src/main.tsx',
      userscript: {
        name: 'GreasyFork Feedback Filter',
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'https://magicdawn.fun/greasyfork-feedback-filter',
        match: ['https://greasyfork.org/*'],
      },
      server: {
        prefix: false,
        mountGmApi: true,
      },
      build: {
        externalGlobals: {
          'react': cdn.npmmirror('React', 'umd/react.production.min.js'),
          'react-dom': cdn.npmmirror('ReactDOM', 'umd/react-dom.production.min.js'),
        },
      },
    }),
  ],
})
