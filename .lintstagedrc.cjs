module.exports = {
  '*.{ts,tsx}': () => 'pnpm exec tsc --noEmit',
  '*.{js,jsx,ts,tsx}': ['pnpm exec eslint --fix', 'pnpm exec prettier --write'],
}
