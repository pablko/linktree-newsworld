/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      content: {
        'flaticon': 'url("data:image/png;base64,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")'
      }
    },
  },
  plugins: [],
}
