import{j as t}from"./jsx-runtime-CKrituN3.js";import{u as n,d as i,t as d}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{r as l,d as s}from"./polished.esm-CRxMpOkB.js";const h=n.div`
	width: 100%;
	height: 100%;
	background: ${e=>e.theme.colors.background};
	color: ${e=>l(e.theme.colors.background)};
`,o=i`
	@import 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap';
	
	body {
		margin: 0;
		padding: 0;
		font-family: ${e=>e.theme.fontFamily.body};
		font-size: ${e=>e.theme.fontSizes.default};
		font-weight: ${e=>e.theme.fontWeights.light};
		line-height: 1.4;
	}
	
	h1, h2, h3, h4, h5, h6 {
		line-height: 1.2;
		
		&:first-child {
			margin-top: 0;
		}
	}
	
	h1 {
		font-size: ${e=>e.theme.fontSizes.xl};
	}
	
	h2 {
		font-size: ${e=>e.theme.fontSizes.lg};
	}
	
	h3 {
		font-size: ${e=>e.theme.fontSizes.md};
	}
	
	strong {
		font-weight: ${e=>e.theme.fontWeights.semibold};
	}
	
	a {
		color: ${e=>e.theme.colors.dark};
		text-decoration: underline;
		text-decoration-color: ${e=>s(e.theme.colors.subtle,.65)};
	}
`;try{o.displayName="GlobalStyle",o.__docgenInfo={description:"",displayName:"GlobalStyle",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}}}catch{}const a=({theme:e,children:r})=>t.jsxs(d,{theme:e,children:[t.jsx(o,{}),t.jsx(h,{id:"redback-ui","data-testid":"redback-ui.wrapper",children:r})]});try{a.displayName="RedbackUiThemeProvider",a.__docgenInfo={description:"",displayName:"RedbackUiThemeProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"any"}}}}}catch{}export{a as R};
