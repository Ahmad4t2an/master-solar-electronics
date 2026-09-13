/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E3A63',
          50: '#EAF1F8',
          100: '#CBDCEC',
          200: '#9BBBDA',
          300: '#6C99C7',
          400: '#3D77B5',
          500: '#1E5A93',
          600: '#164873',
          700: '#0E3A63',
          800: '#0A2C4C',
          900: '#071E33',
          950: '#04121F'
        },
        leaf: {
          DEFAULT: '#1F8F3E',
          50: '#E9F7ED',
          100: '#C9EBD4',
          200: '#98D9AC',
          300: '#67C784',
          400: '#3AAE60',
          500: '#1F8F3E',
          600: '#187332',
          700: '#125826',
          800: '#0C3D1A',
          900: '#07240F'
        },
        solar: {
          DEFAULT: '#F5A623',
          50: '#FFF8EB',
          100: '#FEECC4',
          200: '#FDDD93',
          300: '#FBCB5E',
          400: '#F9B93A',
          500: '#F5A623',
          600: '#E08A11',
          700: '#B96C0C',
          800: '#8F520C',
          900: '#5F3608'
        },
        sand: '#F7F6F2',
        ink: '#101820'
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 2px 10px rgba(14, 58, 99, 0.08)',
        cardHover: '0 12px 28px rgba(14, 58, 99, 0.16)'
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        pulseRing: 'pulseRing 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        fadeUp: 'fadeUp 0.6s ease-out both'
      }
    }
  },
  plugins: []
}
