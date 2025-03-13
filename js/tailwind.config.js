module.exports = {
    theme: {
      extend: {
        colors: {
          'dark-blue': '#1e1e2f',
          'light-blue': '#3b82f6',
          'neon-green': '#6ee7b7',
        },
        animation: {
          float: 'float 3s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        },
      },
    },
    plugins: [],
  };