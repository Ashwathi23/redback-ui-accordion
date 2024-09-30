// When the page first loads, get the theme name from local storage, or if not set, use 'default'
// and add it as a data attribute to the body element
window.addEventListener('DOMContentLoaded', function() {
	// set the data attribute
	document.body.setAttribute('data-ui-theme', localStorage.getItem('ui-theme') ?? 'default');

	// Set storybook base UI theme (light or dark)
	//setBaseTheme(localStorage.getItem('ui-theme') ?? 'default');
});

// When the theme setting in local storage changes, enact the changes that will enable the Storybook UI styling to change
window.addEventListener('storage', (event) => {
	// update the data attribute
	document.body.setAttribute('data-ui-theme', event.newValue);

	// Set storybook base UI theme (light or dark)
	//setBaseTheme(event.newValue);
});


// TODO: Make this persist reliably between page changes
// function setBaseTheme(redbackThemeName) {
// 	const darkThemes = ['smartrack'];
//
// 	setTimeout(() => {
// 		const button = document.querySelector('button[title^="Change theme to"]');
// 		const buttonIsSetToDark = button?.title.includes('light');
//
// 		if(button) {
// 			if (darkThemes.includes(redbackThemeName) && !buttonIsSetToDark) {
// 				button.click();
// 			}
// 			else if (!darkThemes.includes(redbackThemeName) && buttonIsSetToDark) {
// 				button.click();
// 			}
//
// 			// Hide the button because currently, themes are light OR dark (i.e., don't have their own light/dark modes)
// 			button.style.display = 'none';
// 		}
// 	}, 100);
// }
