/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./webview/**/*.html', './webview/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#13151A',
        card: {
          DEFAULT: '#1F2937',
          hover: '#252D3B',
        },
        astro: {
          orange: '#F6B058',
          blue: '#3B82F6',
        },
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
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
