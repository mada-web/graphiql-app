module.exports = {
  '*.{ts,tsx}': ['npm run lint', () => 'tsc-files --noEmit'],
  '*.{ts,tsx,json,css}': ['prettier --write'],
};
