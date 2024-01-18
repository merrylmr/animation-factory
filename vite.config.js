// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist', // 打包输出目录
        assetsDir: 'assets', // 静态资源目录
        rollupOptions: {
            input: './index.html', // 入口HTML文件
            output: {
                entryFileNames: 'index.[hash].js', // 输出的入口JS文件名称
                chunkFileNames: 'chunk.[hash].js', // 输出的代码块文件名称
                assetFileNames: 'assets/[name].[hash].[ext]', // 输出的静态资源文件名称
            },
        },
    },
});
