import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { message } from "antd";

export default tseslint.config(
  { ignores: ["dist", "src/graphql/__generated__", "rng_tools"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-console": "error",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "antd",
              importNames: ["theme"],
              message: 'Use `import { useTheme } from "@emotion/react";`',
            },
            {
              name: "antd",
              importNames: ["Button"],
              message: 'Use `import { Button } from "~/components";`',
            },
            {
              name: "@amplitude/analytics-browser",
              message: "Import from `~/analytics`",
            },
          ],
        },
      ],
    },
  },
);
