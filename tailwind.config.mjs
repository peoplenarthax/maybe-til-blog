import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New custom color palette
        primary: {
          // Pink palette for titles in dark mode
          50: '#fef7f3',
          100: '#fecee9', // main pink for titles
          200: '#fdb4d8',
          300: '#fc94c2',
          400: '#f472a7',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        accent: {
          // Viridian palette for light mode primary colors
          50: '#f0f9f6',
          100: '#dcf2e8',
          200: '#bae5d1',
          300: '#8dd0b0',
          400: '#5cb397',
          500: '#408270', // main viridian
          600: '#346b5a',
          700: '#2d5649',
          800: '#26453b',
          900: '#1e3a30',
        },
        text: {
          // Text colors for both modes
          dark: '#f8f3ec', // yellowish for dark mode
          light: '#1f2937', // dark gray for light mode
          muted: '#f5f5f5', // white-ish for dark mode
        },
        highlight: {
          // Highlight colors
          dark: '#d7f2ba', // greenish for dark mode
          light: '#408270', // viridian for light mode
        },
        background: {
          // Background colors
          light: '#ffffff', // clean white for light mode
          'light-alt': '#f8fafc', // subtle gray for sections in light mode
          dark: '#103f33', // light veridian
          'dark-alt': '#022f24', // dark veridian
        },
      },
      backgroundImage: {
        // Gradient backgrounds - cover full viewport
        'dark-gradient': 'linear-gradient(135deg, #103f33 0%, #022f24 100%)',
        'light-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      },
      backgroundSize: {
        'full-screen': '100vw 100vh',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1f2937', // text-light
            a: {
              color: '#408270', // accent-500 viridian for light mode
              '&:hover': {
                color: '#346b5a', // accent-600 viridian
              },
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              color: '#26453b', // accent-800 viridian
              borderLeftColor: '#408270', // accent-500 viridian
            },
            h1: {
              color: '#1f2937',
            },
            h2: {
              color: '#1f2937',
            },
            h3: {
              color: '#1f2937',
            },
            h4: {
              color: '#1f2937',
            },
            h5: {
              color: '#1f2937',
            },
            h6: {
              color: '#1f2937',
            },
            strong: {
              color: '#1f2937',
            },
          },
        },
        dark: {
          css: {
            color: '#f8f3ec', // text-dark (yellowish)
            a: {
              color: '#d7f2ba', // highlight-dark
              '&:hover': {
                color: '#c7e2aa', // slightly darker highlight
              },
            },
            h1: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            h2: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            h3: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            h4: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            h5: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            h6: {
              color: '#fecee9', // primary-100 (pink for titles)
            },
            strong: {
              color: '#f5f5f5', // text-muted (white-ish)
            },
            code: {
              color: '#d7f2ba', // highlight-dark
            },
            blockquote: {
              color: '#f5f5f5', // text-muted
              borderLeftColor: '#d7f2ba',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} 
