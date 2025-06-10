import globals from "globals";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import pluginSecurity from "eslint-plugin-security";
import pluginEslintUnicorn from "eslint-plugin-unicorn";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginImport from "eslint-plugin-import";

export default tseslint.config({
  extends: [
    pluginImport.flatConfigs.recommended,
    pluginImport.flatConfigs.typescript,
    pluginEslintUnicorn.configs.recommended,
    pluginSecurity.configs.recommended,
    eslint.configs.recommended,
    tseslint.configs.recommended,
    pluginPrettier,
  ],
  files: ["**/*.ts"],
  languageOptions: {
    globals: globals.node,
  },
  settings: {
    "import/internal-regex": "^@/",
    "import/parser": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.vite.json"],
      },
    },
  },
  rules: {
    "import/no-unresolved": ["off"],
    "import/no-named-as-default": ["off"],
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: ["builtin", "external", "internal", "parent", "sibling"],
        "newlines-between": "always",
      },
    ],
  },
});
