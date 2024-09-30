import{c,a as t,r}from"./polished.esm-CRxMpOkB.js";import{u as i}from"./styled-components.browser.esm-Bk0Pcr2r.js";const a=1.25,o={colors:{primary:"#e97462",secondary:"#370e4a",subtle:"#b3a7b7",light:"#f8f9fa",dark:"#0e080e",success:"#00b285",error:"#84213A",warning:"#e97462",info:"#00aeb2",background:"#f8f9fa"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},typeScale:a,fontFamily:{body:"'Inter Tight', sans-serif",heading:"'Inter Tight', sans-serif"},fontWeights:{light:300,normal:400,semibold:600,bold:700},fontSizes:["md","lg","xl","xxl","display"].reduce((e,n)=>{const s=Object.values(e).pop();return e[n]=`${parseFloat(s.replace("rem",""))*a}rem`,e},{sm:"0.8rem",default:"1rem"})},m={...o,colors:{...o.colors,primary:"#fbb653",secondary:"#e97462",success:"#599d62",info:"#5d8de8",background:"#f8f9fa",dark:"#370e4a"}},f={...o,colors:{...o.colors,primary:"#370e4a",secondary:"#5680a6",info:"#5680a6",success:"#00776d",background:"#f8f9fa",dark:"#0B0E10",subtle:"#e8d5b5"}},u={...o,colors:{...o.colors,primary:"#84213A",secondary:"#FF3465",info:"#54bac1",background:"#0B0E10",dark:c(.05,"#0B0E10"),subtle:t(.65,o.colors.subtle)}},$=i.button`
	display: inline-block;
	font-family: ${e=>e.theme.fontFamily.body};
	font-weight: ${e=>e.theme.fontWeights.normal};
	background: ${e=>e.theme.colors[e.$color]};
	color: ${e=>r(e.theme.colors[e.$color])};
	text-decoration: underline;
	text-decoration-color: transparent;
	appearance: none;
	border: 0;
	border-radius: 3rem;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: ${e=>e.theme.fontSizes.sm};
	// Handle appearance
	${e=>{if(e.$appearance==="outline")return`
				background: transparent;
				color: ${e.theme.colors[e.$color]};
				border: 1px solid ${e.theme.colors[e.$color]};
			`}};
	// Handle sizes
	${e=>e.$size==="sm"?`
				padding: ${e.theme.spacing.xs} ${e.theme.spacing.md};
				font-size: ${e.theme.fontSizes.xs};
			`:e.$size==="lg"?`
				padding: ${e.theme.spacing.sm} ${e.theme.spacing.xxl};
				font-size: ${e.theme.fontSizes.default};
			`:`
			padding: ${e.theme.spacing.sm} ${e.theme.spacing.lg};
			font-size: 0.875rem; // in between sm (0.75rem) and default (1rem)
		`};

	&:hover, &:focus, &:active {
		text-decoration-color: currentColor;
		color: ${e=>r(e.theme.colors[e.$color])};
		
		${e=>e.$appearance==="outline"?`
				background: ${e.theme.colors[e.$color]};
			`:`
				background: ${t(.15,e.theme.colors[e.$color])};
			`}};
	}
`;export{$ as S,f as a,u as b,o as d,m as s};
