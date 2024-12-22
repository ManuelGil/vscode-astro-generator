/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./webview/**/*.html', './webview/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#13151A',
        astro: {
          orange: '#F6B058',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        sans: 'var(--vscode-font-family)',
      },
      fontSize: {
        base: 'var(--vscode-font-size)',
      },
    },
  },
  plugins: [],
};
