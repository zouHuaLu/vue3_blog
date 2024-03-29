import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 自动引入element-ui
      resolvers: [ElementPlusResolver()]
    })

  ],
  resolve: {
    alias: [{ find: '@/', replacement: '/src/' }]
  },
  server: {
    // host: '0.0.0.0',
    port: 8991,
    // 是否开启 https
    // https: false,
  },
})
