import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Добавляем поддержку .ts и .tsx
    ignores: ['dist/**/*', 'coverage/**/*', '__tests__/**/*.snap'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser, // Используем TypeScript-парсер
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Подключаем плагин TypeScript
    },
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'warn', // Проверка неиспользуемых переменных
      '@typescript-eslint/explicit-function-return-type': 'off', // Разрешаем не указывать тип возвращаемого значения
      '@typescript-eslint/no-explicit-any': 'warn', // Предупреждение при использовании `any`
    },
  },
  {
    files: ['__tests__/**/*.{js,mjs,cjs,ts,tsx}'], // Указываем тестовые файлы
    plugins: {
      jest: jestPlugin,
    },
    extends: ['jest/recommended'],
    rules: {
      'jest/no-disabled-tests': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
    },
  },
]);