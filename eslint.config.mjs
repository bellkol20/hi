// @ts-check
import eslint from 'eslint';
import tseslint from 'typescript-eslint';
import pluginImport from 'eslint-plugin-import';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.js', '**/*.ts'] },
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module'
    },
    plugins: {
      import: pluginImport,
      'unused-imports': pluginUnusedImports
    },
    rules: {
      'no-console': 'off',
      'unused-imports/no-unused-imports': 'error',
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external', 'internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always'
        }
      ]
    }
  },
  prettier,
  {
    ignores: ['dist', 'node_modules']
  }
];
