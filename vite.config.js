// vite.config.js
import {defineConfig} from 'vite';

const fs = require('fs');

function getHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    return htmlFiles.reduce((prev, cur) => {
        // cur去掉.html后缀
        prev[cur.replace(/\.html$/, '')] = `${dir}/${cur}`;
        return prev;
    }, {});
}

const entryDir = './demo';
const htmlFiles = getHtmlFiles(entryDir);
export default defineConfig({
    build: {
        outDir: 'dist', // 打包输出目录
        assetsDir: 'assets', // 静态资源目录
        rollupOptions: {
            input: {
                main: './index.html',
                ...htmlFiles
            }, // 入口HTML文件
            output: {
                entryFileNames: '[name].[hash].js', // 输出的入口JS文件名称
                chunkFileNames: 'chunk.[hash].js', // 输出的代码块文件名称
                assetFileNames: 'assets/[name].[hash].[ext]', // 输出的静态资源文件名称
            },
        },
    },
});
