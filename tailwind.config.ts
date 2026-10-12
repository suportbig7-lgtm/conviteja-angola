import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { brand: { 50: '#eef8f5', 100: '#d7eee6', 500: '#159a79', 600: '#0f8065', 700: '#0b6652', 900: '#103b34' } }, boxShadow: { soft: '0 12px 40px rgba(16, 59, 52, .08)' } } },
  plugins: [],
};
export default config;
