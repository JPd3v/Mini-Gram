module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/typescript',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
  },
  ignorePatterns: ['.eslintrc.cjs'],
};

// {
//   "env": {
//     "browser": true,
//     "es2021": true
//   },
//   "extends": [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/recommended",
//     "airbnb",
//     "airbnb-typescript",
//     "plugin:import/typescript",
//     "prettier",
//     "plugin:import/errors",
//     "plugin:import/warnings",
//     "plugin:import/recommended"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "overrides": [],
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     },

//     "ecmaVersion": "latest",
//     "sourceType": "module",
//     "project": ["./tsconfig.json"]
//   },
//   "plugins": ["react", "@typescript-eslint", "prettier"],
//   "rules": {
//     "react/jsx-uses-react": "off",
//     "react/react-in-jsx-scope": "off",
//     "react/jsx-filename-extension": [0]
//   }
// }
