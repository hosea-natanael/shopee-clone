/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme:{
    extend:{
      colors:{
        background:"var(--background)",
        foreground:"var(--foreground)",
        primary: '#ee4d2d',
        'primary-bg': '#fef6f5',
        'primary-gradient-a':'#f53d2d',
        'primary-gradient-b': '#f63',
        'primary-gradient-c':'#eb1717',
        'primary-gradient-d': '#ffb000',
        'secondary-blue': '#0046ab',
        'secondary-yellow': '#eda500',
        'secondary-green': '#26aa99',
        'error': '#ee2c4a',
        'error-bg': '#fff4f4',
        'caution': '#f69113',
        'caution-bg': '#fff8e4',
        'success': '#30b566',
        'success-bg': '#f7fffe',
        'text-primary-o': '#212121',
        'text-secondary-o': '#595959',
        'text-tertiary-o': '#757575',
        'text-link': '#0088ff',
        'util-disabled-o': '#bdbdbd',
        'util-line-o': '#e8e8e8',
        'util-bg': '#f5f5f5',
        'util-placeholder': '#fafafa',
      },
      fontSize: {
        'xsm': '.8125rem'
      },
      fontFamily: {
        roboto: ['var(--font-roboto)']
      }
    },
  },
  plugins:[],
};
