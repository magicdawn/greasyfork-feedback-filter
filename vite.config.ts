import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import monkey, { cdn } from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: 'src/main.tsx',
      userscript: {
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
          'react': cdn.jsdelivr('React', 'umd/react.production.min.js'),
          'react-dom': cdn.jsdelivr('ReactDOM', 'umd/react-dom.production.min.js'),
        },
      },
    }),
  ],
})
