import storybook from "eslint-plugin-storybook";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintComments from "eslint-plugin-eslint-comments";

export default {
  files: ["./src/**/*.{js,jsx,ts,tsx,json}"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: {
    "@typescript-eslint": typescriptEslint,
    prettier: prettier,
    react: react,
    "react-hooks": reactHooks,
    import: importPlugin,
    "jsx-a11y": jsxA11y,
    "eslint-comments": eslintComments,
    storybook: storybook,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:eslint-comments/recommended",
  ],
  rules: {
    quotes: [2, "single", { avoidEscape: true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-var-requires": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
  ignores: [
    "node_modules/**/*",
    "public/**/*",
    "eslint.config.js",
    "storybook-static/**/*",
    "build/**/*",
    "dist/**/*",
    "webpack/*.js",
    "package*.json",
    "**/*.d.ts",
  ],
};
