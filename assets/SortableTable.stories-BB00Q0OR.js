import{j as r}from"./jsx-runtime-CKrituN3.js";import{r as m}from"./index-CBqU2yxZ.js";import{u as y}from"./styled-components.browser.esm-Bk0Pcr2r.js";import{c as x,r as V}from"./polished.esm-CRxMpOkB.js";import"./_commonjsHelpers-BosuxZz1.js";const A=y.table`
	width: 100%;
	margin-bottom: 1rem;
	border-collapse: collapse;
	border: 1px solid ${e=>e.theme.colors.subtle};
	background: ${e=>e.theme.colors.background};

	th, td {
		font-family: ${e=>e.theme.fontFamily.body};
		text-align: left;
		padding: ${e=>e.theme.spacing.sm};
		border-right: 1px solid ${e=>x(.4,e.theme.colors.subtle)};
	}

	thead th {
		background-color: ${e=>e.theme.colors.secondary};
        color: ${e=>V(e.theme.colors.secondary)};
		border-right-color: ${e=>x(.3,e.theme.colors.secondary)};
		text-align: left;
        
        &[data-format="number"] {
            width: 3rem;
        }
	}
    
    tbody td {
        
        &[data-format="number"] {
            text-align: right;
        }
    }

	tr:nth-child(even) {
		background-color: ${e=>x(.8,e.theme.colors.subtle)};
	}
`,I=y.button`
	font-family: ${e=>e.theme.fontFamily.body};
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	background: transparent;
	border: 0;
    border-bottom: 2px solid ${e=>e.$active?"currentColor":"transparent"};
	appearance: none;
	font-size: inherit;
	color: inherit;
	font-weight: inherit;
	outline: none;
	cursor: pointer;
	padding: 0;
`,O=y.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    transform: rotate(${e=>e.$direction==="asc"?"0":"180deg"});
    margin-inline-start: ${e=>e.theme.spacing.sm};
`;function v(e,l,o){return e.sort((i,u)=>{let n=i[l],s=u[l];if(!isNaN(parseFloat(n))&&!isNaN(parseFloat(s))&&(n=parseFloat(n),s=parseFloat(s)),typeof n=="string"&&typeof s=="string"){const d=n.localeCompare(s);return o==="asc"?d:-d}return n>s?o==="asc"?1:-1:n<s?o==="asc"?-1:1:0})}const R=({label:e,direction:l,onClick:o,active:i=!1})=>r.jsxs(I,{"data-testid":"SortingButton",onClick:o,$direction:l,$active:i,children:[e,r.jsx(O,{$direction:l,children:r.jsx("span",{className:"arrow",children:"↓"})})]}),S=({columns:e,initialData:l,initialSortField:o})=>{const[i,u]=m.useState([]),[n,s]=m.useState(o.toString());m.useEffect(()=>{u(v(l,o,"asc"))},[l,o]);const d=e.filter(t=>t.sortable),[h,w]=m.useState(()=>{const t={};return d.forEach(a=>{Object.assign(t,{[a.value]:"asc"})}),t}),D=m.useCallback(t=>{var $;const a=(p,g)=>{u(()=>v(i,p,g))},c=($=t.currentTarget.closest("th"))==null?void 0:$.dataset.fieldkey;if(c){const p=h[c]==="asc"?"desc":"asc";a(c,p),s(c.toString()),w(g=>({...g,[c]:p}))}},[i,h]),N=(t,a)=>t[a];return i&&r.jsxs(A,{"data-testId":"SortableTable",children:[r.jsx("thead",{children:r.jsx("tr",{children:e.map(t=>r.jsx("th",{"data-fieldkey":t.value,"data-format":(t==null?void 0:t.format)??"text",children:d.find(a=>t.value===a.value)?r.jsx(R,{label:t.label,direction:h[t.value],onClick:D,active:n===t.value}):r.jsx(r.Fragment,{children:t.label})},t.value))})}),r.jsx("tbody",{children:i.map(t=>r.jsx("tr",{children:e.map((a,c)=>r.jsx("td",{"data-fieldkey":a.value,"data-format":(a==null?void 0:a.format)??"text",children:N(t,a.value.toString())},c))},`row-${t.id}`))})]})};try{S.displayName="SortableTable",S.__docgenInfo={description:"The actual SortableTable component",displayName:"SortableTable",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"Column[]"}},initialData:{defaultValue:null,description:"",name:"initialData",required:!0,type:{name:"Row[]"}},initialSortField:{defaultValue:null,description:"",name:"initialSortField",required:!0,type:{name:"string | number"}}}}}catch{}const H={title:"Components/SortableTable",component:S},_={columns:[{value:"id",label:"ID",sortable:!1,format:"number"},{value:"name",label:"Name",sortable:!0},{value:"location",label:"Location",sortable:!0},{value:"score",label:"Score",sortable:!0,format:"number"}],initialData:[{id:"1",name:"Example name 1",location:"Some location",score:"4.5"},{id:"2",name:"Example name 2",location:"Some location",score:"7.5"},{id:"3",name:"Example name 3",location:"Some other location",score:"2.5"},{id:"4",name:"Example name 4",location:"Another location",score:"5.0"},{id:"5",name:"Example name 5",location:"Random location",score:"0.5"},{id:"6",name:"Example name 6",location:"Another location",score:"8.0"},{id:"7",name:"Example name 7",location:"Some location",score:"3.5"},{id:"8",name:"Example name 8",location:"Another location",score:"6.25"},{id:"9",name:"Example name 9",location:"Some other location",score:"1.5"}],initialSortField:"score"},q={parameters:{controls:{disable:!0},actions:{disable:!0}}},b={args:{..._},tags:["excludeFromSidebar"]},f={args:{..._},...q};var j,E,F;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  tags: ['excludeFromSidebar']
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var C,k,T;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  ...disableControls
}`,...(T=(k=f.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const J=["Demo","Default"];export{f as Default,b as Demo,J as __namedExportsOrder,H as default};
