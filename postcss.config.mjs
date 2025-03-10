const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    // tailwindcss: {},
    autoprefixer: {},
  },
  safelist: [
    {
      pattern: /has-.+/,
    },
  ],
};
export default config;

