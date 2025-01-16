import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      prettier: eslintPluginPrettier,
      import: importPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
        },
      ],
      "no-console": "error",
      "import/order": 2,
      "no-nested-ternary": 2,
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": "error",
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/**/*",
      "commitlint.config.mjs",
      "**/*.config.js",
      "generate-exports.js",
      "vite.config.ts",
      "vitest.config.ts",
      "**/*.test.ts",
    ],
  },
];
