const config = {
  "**/*.{ts?(x),mts}": () => "tsc -p tsconfig.prod.json --noEmit",
  "*.{js,jsx,mjs,cjs,ts,tsx,mts}": ["npm run lint"],
  "*.{md,json}": "prettier --write",
  "*": "npm run typos",
  "*.{yml,yaml}": "npm run lint:yaml",
};

export default config;
