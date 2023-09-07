import React from 'react';
import { Text } from 'ink';
import { highlight } from 'cli-highlight';
const SyntaxHighlight = ({ code, language, theme }) => {
    return React.createElement(Text, null, highlight(code, { language, theme }));
};
export default SyntaxHighlight;
