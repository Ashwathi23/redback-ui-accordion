import defaultTheme from './default';
import smartbikeTheme from './smartbike';
import seniorTheme from './senior';
import smartrackTheme from './smartrack';
import { RedbackUiTheme } from '../types';

export const themes: {[key: string]: RedbackUiTheme} = {
	default: defaultTheme,
	smartbike: smartbikeTheme, // Project 1
	senior: seniorTheme, // Project 2
	smartrack: smartrackTheme, // Project 3
	orion: defaultTheme, // Project 4
};
