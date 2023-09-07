import React from 'react';
import {Text} from 'ink';
import {highlight} from 'cli-highlight';
import type {Theme} from 'cli-highlight';

export type Props = {
	code: string;
	language?: string;
	theme?: Theme;
};

const SyntaxHighlight: React.FC<Props> = ({code, language, theme}) => {

	return <Text>{highlight(code, {language, theme})}</Text>;
};

export default SyntaxHighlight;
