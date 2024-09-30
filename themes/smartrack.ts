import defaultTheme from './default';
import { shade, tint } from 'polished';

const smartrack = {
	...defaultTheme,
	colors: {
		...defaultTheme.colors,
		primary: '#84213A',
		secondary: '#FF3465',
		info: '#54bac1',
		background: '#0B0E10',
		dark: tint(0.05, '#0B0E10'),
		subtle: shade(0.65, defaultTheme.colors.subtle)
	},
};

export default smartrack;
