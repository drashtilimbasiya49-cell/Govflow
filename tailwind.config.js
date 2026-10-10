/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          bg: '#F7F9FF',
          card: '#FFFFFF',
          cardSoft: '#EAF2FF',
          accentLavender: '#DCD8FF',
          accentMint: '#E2F5EC',
          textDark: '#1E293B',
          textMuted: '#64748B',
          primary: '#3768C7',
          primaryHover: '#2A54A6',
          primaryLight: '#EFF5FF',
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
          border: '#E2E8F0',
        },
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(55, 104, 199, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(55, 104, 199, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(55, 104, 199, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
