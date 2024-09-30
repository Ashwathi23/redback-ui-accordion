import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as n}from"./index-CBqU2yxZ.js";import{u as E}from"./styled-components.browser.esm-Bk0Pcr2r.js";import"./_commonjsHelpers-BosuxZz1.js";const P=E.div`
    .slider-container {
        position: relative;
        width: 100%;
        max-width: ${e=>e.size==="small"?"400px":"800px"};
        height: ${e=>e.size==="small"?"250px":"500px"};
        margin: 0 auto;
        overflow: hidden;
    }

    .slider-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        aspect-ratio: 10/6;
        display: block;
        flex-shrink: 0;
        flex-grow: 0;
    }

    .slider-button {
        all: unset;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        padding: 0.8rem;
        cursor: pointer;
        transition: background-color 100ms ease-in-out, transform 100ms ease; /* Added transform transition */
    }

    .slider-button:hover {
        background-color: rgba(0, 0, 0, 0.09);
    }

    .slider-button > * {
        stroke: white;
        width: 2rem;
        height: 2rem;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button {
        all: unset;
        display: block;
        cursor: pointer;
        width: 1rem;
        height: 1rem;
        transition: scale 100ms ease-in-out;
        transform: scale(${e=>e.size==="small"?"0.8":"1"}); /* Scale based on size prop */
    }

    .slider-index-button:hover {
        scale: 1.2;
    }

    .slider-index-button > * {
        stroke: white;
        height: 100%;
        width: 100%;
    }

    .turn-horizontal {
        height: ${e=>e.size==="small"?"250px":"500px"};
        transition: transform 0.5s ease;
        display: flex;
    }
`;/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A=(...e)=>e.filter((t,r,o)=>!!t&&o.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=n.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:c="",children:i,iconNode:a,...l},L)=>n.createElement("svg",{ref:L,...V,width:t,height:t,stroke:e,strokeWidth:o?Number(r)*24/Number(t):r,className:A("lucide",c),...l},[...a.map(([B,D])=>n.createElement(B,D)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,t)=>{const r=n.forwardRef(({className:o,...c},i)=>n.createElement(q,{ref:i,iconNode:t,className:A(`lucide-${R(e)}`,o),...c}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=u("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=u("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=u("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=u("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),b=({images:e,size:t})=>{const[r,o]=n.useState(0),c=()=>{const a=(r-1+e.length)%e.length;o(a)},i=()=>{const a=(r+1)%e.length;o(a)};return s.jsx(P,{"data-testid":"ImageSlider",size:t,children:s.jsxs("div",{className:"slider-container",children:[s.jsx("div",{className:"turn-horizontal",style:{width:`${100*e.length}%`,transform:`translateX(-${r*(100/e.length)}%)`},children:e.map((a,l)=>s.jsx("img",{src:a,alt:`Slide ${l}`,className:"slider-image",style:{width:`${100/e.length}%`}},l))}),s.jsx("button",{onClick:c,className:"slider-button",style:{left:0},children:s.jsx(F,{})}),s.jsx("button",{onClick:i,className:"slider-button",style:{right:0},children:s.jsx(M,{})}),s.jsx("div",{style:{position:"absolute",bottom:"1.5rem",left:"50%",translate:"-50%",display:"flex",gap:".25rem"},children:e.map((a,l)=>s.jsxs("button",{className:"slider-index-button",onClick:()=>o(l),children:[" ",l===r?s.jsx(O,{}):s.jsx(T,{})," "]},l))})]})})};try{b.displayName="ImageSlider",b.__docgenInfo={description:"",displayName:"ImageSlider",props:{images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const h=["https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/12838/pexels-photo-12838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"],Z={title:"Components/ImageSlider",component:b},x={},f={parameters:{controls:{disable:!0},actions:{disable:!0}}},d={args:{...x,images:h,size:"large"},tags:["excludeFromSidebar"]},m={args:{...x,images:h,size:"large"},...f},p={args:{...x,images:h,size:"large"},...f},g={args:{...x,images:h,size:"small"},...f};var y,w,k;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  tags: ['excludeFromSidebar']
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var v,S,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var z,C,I;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'large'
  },
  ...disableControls
}`,...(I=(C=p.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var $,N,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...defaultProps,
    images: images,
    size: 'small'
  },
  ...disableControls
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const G=["Demo","Default","Large","Small"];export{m as Default,d as Demo,p as Large,g as Small,G as __namedExportsOrder,Z as default};
