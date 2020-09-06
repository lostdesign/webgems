/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Eczar', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    extend: {
      spacing: {
        'aside': '21rem',
      },
      opacity: {
        '95': '0.95'
      },
      scale: {
        '95': '0.95',
        '97': '0.97',
      },
      borderRadius: {
        xl: "1rem",
        card: '0.8rem'
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        'card': '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
      },
      colors: {
        themelightblue: {
          '400': '#2083e4',
          default: '#1976D2',
        },
        themeblue: {
          '200': '#0F4092',
          '300': '#003690',
          '400': '#022B72',
          default: '#00235F',
          '500': '#00235F',
          '600': '#001E52',
          '700': '#001436'
        },
        themewhite: {
          default: '#E5EFFF',
          '500': '#73A7FE',
        },
      },
    }
  },
  variants: {
    margin: ['responsive', 'last'],
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    // whitelistPatterns: ["bg-themeblue"],
  },
  future: {
    removeDeprecatedGapUtilities: true
  }
}
