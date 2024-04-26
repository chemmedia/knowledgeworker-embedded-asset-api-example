import { defineConfig } from 'vite';
import autoZip from 'vite-plugin-zip-pack';
import { readFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8').toString());

export default defineConfig({
    base: '',
    plugins: [
        autoZip({
            outFileName:`${packageJson.name}-${packageJson.version}.zip`,
            outDir: 'dist',
        })
    ],
});
