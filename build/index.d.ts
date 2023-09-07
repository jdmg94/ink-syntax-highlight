import React from 'react';
import type { Theme } from 'cli-highlight';
export type Props = {
    code: string;
    language?: string;
    theme?: Theme;
};
declare const SyntaxHighlight: React.FC<Props>;
export default SyntaxHighlight;
