import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3a86ff',
                secondary: '#212121',
                accent: '#f59e0b',
                background: '#ffffff',
                foreground: '#1f2937',
                muted: '#6b7280',
                border: '#e5e7eb',
            },
            fontFamily: {
                heading: ['Inter', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '16px',
            },
        },
    },
    plugins: [],
};

export default config;
