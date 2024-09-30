import{j as n}from"./jsx-runtime-CKrituN3.js";import{u as h}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{a as x}from"./polished.esm-CRxMpOkB.js";import{useMDXComponents as p}from"./index-DSz_1G2r.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const f=h.div`
	background: ${e=>e.theme.colors.background};
	padding: ${e=>e.theme.spacing.md};
	
	p {
		margin-top: 0;
	}
	
	pre:has(code) {
		padding: ${e=>e.theme.spacing.sm};
		background: ${e=>x(.05,e.theme.colors.background)};
		
		code {
            font-family: 'Fira Code', 'Source Code Pro', 'Courier New', 'Courier', monospace;
            font-size: ${e=>e.theme.fontSizes.sm};
		}
	}
`,s=({markdown:e})=>n.jsx(f,{"data-testid":"MarkdownWrapper",children:e({})});try{s.displayName="MarkdownContent",s.__docgenInfo={description:"",displayName:"MarkdownContent",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"(props: any) => ReactNode"}}}}}catch{}function a(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r.h1,{id:"markdown-content-example",children:"Markdown content example"}),`
`,n.jsx(r.p,{children:"This is some placeholder text for testing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ante risus. Aliquam id purus vel lectus rhoncus tempus. Morbi posuere dignissim placerat."}),`
`,n.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(r.p,{children:"Note that to run this in an app, you may need to install additional dependencies and adjust your Vite config. Below is one suggested way:"}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-bash",children:`npm install @mdx-js/mdx @mdx-js/react @mdx-js/rollup
`})}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-javascript",children:`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';
import mdx from '@mdx-js/rollup';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		relay,
		mdx(),
	],
});
`})}),`
`,n.jsx(r.h2,{id:"subheading",children:"Subheading"}),`
`,n.jsx(r.p,{children:"The below is some more placeholder text to test different formatting, such as lists."}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsx(r.li,{children:"Proin diam felis, dapibus accumsan lacus quis, dapibus ullamcorper ante."}),`
`,n.jsx(r.li,{children:"Nam auctor libero eu quam gravida sagittis eu vitae lorem. Cras sed tristique massa."}),`
`,n.jsx(r.li,{children:"Fusce egestas, erat id facilisis suscipit, nunc tortor pulvinar eros, quis congue erat arcu nec ex. Donec neque arcu, dapibus id tincidunt et, laoreet nec mauris."}),`
`]})]})}function j(e={}){const{wrapper:r}={...p(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(a,{...e})}):a(e)}const v={title:"Components/MarkdownContent",component:s},g={markdown:j},b={parameters:{controls:{disable:!0},actions:{disable:!0}}},t={args:{...g},tags:["excludeFromSidebar"]},o={args:{...g},...b};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  tags: ['excludeFromSidebar']
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,u,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  ...disableControls
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const S=["Demo","Default"];export{o as Default,t as Demo,S as __namedExportsOrder,v as default};
