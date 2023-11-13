/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
  ],
  // 解决 antd 样式冲突
  corePlugins: {
    preflight: false,
  }
}

