import{j as t}from"./jsx-runtime-CKrituN3.js";import{r as d}from"./index-CBqU2yxZ.js";import{u as l}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{g as n,c as i,a as c}from"./polished.esm-CRxMpOkB.js";const m=l.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	background-color: ${e=>{const o=e.theme.colors.background||"#ffffff";return n(o)<.5?i(.1,o):"white"}};
	border: 2px solid #000;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	padding: ${e=>e.theme.spacing.md||"16px"};
	z-index: 10000; /* Increase z-index to ensure it is above other elements */

	h2 {
		margin: 0;
		font-size: ${e=>e.theme.fontSizes.lg||"1.5rem"};
	}

	p {
		margin-top: ${e=>e.theme.spacing.sm||"8px"};
		margin-bottom: 0;
		font-size: ${e=>e.theme.fontSizes.md||"1rem"};
		color: ${e=>{const o=e.theme.colors.text||"#000000";return n(e.theme.colors.background||"#ffffff")<.5?i(.1,o):c(.2,o)}};
	}
`,a=()=>{const[e,o]=d.useState(!1),r=()=>o(!0),s=()=>o(!1);return t.jsxs("div",{"data-testid":"Modal",children:[t.jsx("button",{onClick:r,children:"Open modal"}),e&&t.jsx(t.Fragment,{children:t.jsxs(m,{onClick:s,children:[t.jsx("h2",{id:"modal-title",children:"Text in a modal"}),t.jsx("p",{id:"modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),t.jsx("button",{onClick:s,children:"Close"})]})})]})};try{a.displayName="Modal",a.__docgenInfo={description:"",displayName:"Modal",props:{}}}catch{}export{a as M};
