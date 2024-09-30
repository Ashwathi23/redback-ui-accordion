import{j as o}from"./jsx-runtime-CKrituN3.js";import{u as a}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{g as s,c,b as t}from"./polished.esm-CRxMpOkB.js";const i=a.table`
	width: 100%;
	background: ${e=>s(e.theme.colors.background)<.5?c(.1,e.theme.colors.background):"white"};
	box-shadow: 0 0 0.5rem 0 ${e=>t(.25,e.theme.colors.subtle)};
	border-collapse: collapse;
	margin-bottom: ${e=>e.theme.spacing.lg};
	
	th, td {
		border-bottom: 1px solid ${e=>t(.75,e.theme.colors.subtle)};
		padding: ${e=>e.theme.spacing.sm};
	}
	
	th {
		&[scope="row"] {
			text-align: left;
		}
	}
`,r=({children:e})=>o.jsx(i,{"data-testid":"Table",children:e});try{r.displayName="Table",r.__docgenInfo={description:"",displayName:"Table",props:{}}}catch{}export{r as T};
