module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        'sw-pink': '#ec008c',
        'sw-blue': '#14b4f0',
        'sw-navy': '#1c285a',
        'sw-grey-900': '#111827',
        'sw-grey-800': '#1F2937',
        'sw-grey-200' : '#E5E7EB',
        'sw-grey-300': '#D1D5DB',
        'sw-grey-400': '#9CA3AF',
        'sw-grey-500': '#6B7280',
        'sw-grey-600': '#4B5563',
        'sw-grey-700': '#374151',
        'sw-purple-blue-600': '#6B46C1',
        'sw-purple-blue-100': '#E9D8FD',
        'sw-purple-blue-500': '#8B5CF6',
        'sw-choco': '#411900',
      },
      fontFamily: {
        'sw-montserrat': ['Montserrat', 'sans-serif'],
        'sw-roboto': ['Roboto', 'sans-serif'],
        'sw-poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
