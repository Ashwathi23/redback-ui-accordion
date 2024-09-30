import{j as c}from"./jsx-runtime-CKrituN3.js";import{u as l}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{r as a,g as s,c as i,m,a as d}from"./polished.esm-CRxMpOkB.js";const u=l.div`
	width: 100%;
	border: ${e=>`1px solid ${e.theme.colors[e.type]}`};
	border-left-width: ${e=>e.theme.spacing.sm};
	color: ${e=>a(e.theme.colors[e.type])};
	padding: ${e=>e.theme.spacing.md};
	box-sizing: border-box;
	margin-bottom: ${e=>e.theme.spacing.lg};
	background: ${e=>s(e.theme.colors.background)<.5?i(.1,e.theme.colors.background):"white"};
	color: ${e=>{const r=s(e.theme.colors.background)<.5;let t=e.theme.colors[e.type],o=0;for(;o<4;){if(m(t,e.theme.colors.background).AA)return t;t=r?i(.1,t):d(.1,t),o++}return a(e.theme.colors.background)}};
	
	p {
		font-size: ${e=>e.theme.fontSizes.sm};
		margin-top: 0;
		margin-bottom: ${e=>e.theme.spacing.xs};
		
		&:first-child {
			font-size: ${e=>e.theme.fontSizes.default};
		}
		
		&:last-child {
			margin-bottom: 0;
		}
	}
`,n=({type:e,children:r})=>c.jsx(u,{"data-testid":"Alert",type:e??"info",children:r});try{n.displayName="Alert",n.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}}}}}catch{}export{n as A};
