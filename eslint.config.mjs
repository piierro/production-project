import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReact from 'eslint-plugin-react'

export default tseslint.config (
  {
  plugins: {
    'react-hooks': eslintReactHooks,
    '@typescript-eslint':  tseslint.plugin,
    react: eslintReact,
  }
  },
  {
    ignores: ['node_modules', 'build', 'eslint.config.mjs']
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...fixupConfigRules(pluginReactConfig),
  {
  languageOptions: { 
    globals: {
      ...globals.node,
      ...globals.browser,
      ...globals.es2021,
      __IS_DEV__: true,
    },
    parserOptions: {
      project: ['tsconfig.json']
    }
   }
  },
  {
   files: ['**/*.{ts,tsx}'],
   rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
     indent: [2, 2],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
   }
  }
);