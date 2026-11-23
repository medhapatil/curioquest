import type { Config } from 'tailwindcss';
export default {
  content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme:{extend:{colors:{ink:'#101715',lav:'#34463B',violet:'#A4C6AD',cream:'#101715'},boxShadow:{soft:'none'}}},
  plugins:[]
} satisfies Config;
