// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // 關鍵設定：將 ~bootstrap 指向 node_modules 內的 bootstrap 資料夾
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
});