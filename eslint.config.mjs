import pandacss from "@pandacss/eslint-plugin";
import { fileURLToPath } from "node:url";
import typescriptParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url);

export default [
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        ignores: ['**/*.d.ts', 'styled-system'],
        plugins: {
            "@pandacss": pandacss,
        },
        languageOptions: {
            parser: typescriptParser,
        },
        rules: {
            ...pandacss.configs.recommended.rules,
        }
    },
];
