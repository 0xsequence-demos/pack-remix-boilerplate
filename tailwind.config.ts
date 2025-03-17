import type { Config } from "tailwindcss";

import boilerplateConfig from "boilerplate-design-system/tailwind-config";
//
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./node_modules/boilerplate-design-system/dist/*.js",
//   ],
//   presets: [boilerplateConfig],
// };

export default {
  content: [
    "./index.html",
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [boilerplateConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
