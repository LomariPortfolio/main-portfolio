// vite.config.js
import { defineConfig } from 'vite';

import postcss from 'postcss';
import cssnano from 'cssnano';

export default defineConfig({
  plugins: [
  ],
  css: {
    postcss: {
      plugins: [
        postcss(),
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
});
