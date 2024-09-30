/**
 * Sample/default design system theme based on Redback logo
 */

// Demo typescales at https://typescale.com/
const typeScale = 1.25;

const defaultTheme = {
	colors: {
		primary: '#e97462',
		secondary: '#370e4a',
		subtle: '#b3a7b7',
		light: '#f8f9fa',
		dark: '#0e080e',
		success: '#00b285',
		error: '#84213A',
		warning: '#e97462',
		info: '#00aeb2',
		background: '#f8f9fa',
	},
	spacing: {
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem',
		xxl: '3rem'
	},
	typeScale: typeScale,
	fontFamily: {
		body: '\'Inter Tight\', sans-serif',
		heading: '\'Inter Tight\', sans-serif',
	},
	fontWeights: {
		light: 300,
		normal: 400,
		semibold: 600,
		bold: 700
	},
	// Automatically generate font size key-value pairs using the specified type scale and starting xs font size
	fontSizes: ['md', 'lg', 'xl', 'xxl', 'display'].reduce((result: {[key: string]: string}, size: string) => {
		const prev: string = <string>Object.values(result).pop();
		result[size] = `${parseFloat(prev.replace('rem', '')) * typeScale}rem`;
		return result;
	}, { sm: '0.8rem', default: '1rem' })
};

export default defaultTheme;
