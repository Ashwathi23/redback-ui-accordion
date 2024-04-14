import { addons } from '@storybook/manager-api';
import { API_PreparedIndexEntry, API_StatusObject } from '@storybook/types';
import { create } from '@storybook/theming/create';
import theme from '../src/themes/default';
import { tint } from 'polished';

// This is the default theme for the Storybook UI, i.e., the sidebar, toolbar, etc.
// It's overridden by a top-level body data attribute (set in manager-head.html) + custom CSS overrides when relevant
// See public/storybook-themes.js and public/storybook-ui-themes.css for the implementation
const docTheme = create({
	base: 'light',
	brandTitle: 'Redback UI',
	brandImage: './icon.svg',
	brandTarget: '_blank',
	fontBase: '\'Inter Tight\', sans-serif',
	colorPrimary: theme.colors.primary,
	colorSecondary: theme.colors.secondary,

	// UI
	appBg: tint(0.8, theme.colors.subtle),
	appContentBg: '#ffffff',
	appPreviewBg: '#ffffff',
	appBorderColor: tint(0.5, theme.colors.subtle),
	appBorderRadius: 0,

	// Text colors
	textColor: theme.colors.dark,
	textInverseColor: '#ffffff',

	// Toolbar default and active colors
	barTextColor: theme.colors.dark,
	barSelectedColor: theme.colors.dark,
	barHoverColor: theme.colors.dark,
	barBg: tint(0.9, theme.colors.subtle),

	// Form colors
	inputBg: '#ffffff',
	inputBorder: theme.colors.dark,
	inputTextColor: theme.colors.dark,
	inputBorderRadius: 0,
});

const docThemeDark = create({
	...docTheme,
	base: 'dark',
	textColor: theme.colors.light,
	textInverseColor: theme.colors.dark
});

addons.setConfig({
	theme: docTheme,
	darkMode: {
		light: docTheme,
		dark: docThemeDark
	},
	sidebar: {
		filters: {
			patterns: (item: API_PreparedIndexEntry & {
				status: Record<string, API_StatusObject | null>;
			}): boolean => {
				return !(item.tags ?? []).includes('excludeFromSidebar');
			}
		}
	},
	panelPosition: 'bottom'
});
