import type { Linter } from 'eslint';
import { defineConfig } from 'eslint/config';

import base, { stylisticRules } from '@robuust-digital/eslint-config';
import typescript from '@robuust-digital/eslint-config/typescript';
import vue from '@robuust-digital/eslint-config/vue';

const config: Linter.Config[] = [
  ...base,
  ...typescript,
  ...vue,
  { rules: stylisticRules },
];

defineConfig(base, typescript, vue, { rules: stylisticRules });

// @ts-expect-error Config exports must reject invalid entries.
base.push('invalid');
// @ts-expect-error Config exports must reject invalid entries.
typescript.push('invalid');
// @ts-expect-error Config exports must reject invalid entries.
vue.push('invalid');
// @ts-expect-error Shared rules must reject invalid severities.
stylisticRules['example'] = 'invalid';

export default config;
