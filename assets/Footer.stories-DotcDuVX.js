import{j as e}from"./jsx-runtime-CKrituN3.js";import{u as h}from"./styled-components.browser.esm-Bk0Pcr2r.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const f=h.div`
 .footer-content {
        display: flex;
        align-items: center;
        padding: 20px;
        position: relative;
    }

    .footer-logo-container {
        display: flex; /* Use flexbox for horizontal alignment */
        align-items: center;
        position: relative;
        margin-right: 200px; /* space between logo and links */
        transform: skewX(-10deg); /* Skew logo container to the left */
    }

    .footer-logo-container img {
        width: 50px; 
        height: 50px;
        margin-right: 15px; /* Space between logo and text */
    }

    .footer-logo-container span {
        font-size: ${o=>o.theme.fontSizes.xl}; 
        color: ${o=>o.theme.colors.secondary};
    }

    .footer-links {
        display: flex; /* Use flexbox layout for columns */
        flex: 1; /* Allow the links section to take up remaining space */
    }

    .footer-links-column {
        width: 100px; /* Set a fixed width for each column */
        margin-right: 40px; /* Space between columns */
    }

    .footer-links-column h4 {
        font-size: ${o=>o.theme.fontSizes.sm}; 
        color: ${o=>o.theme.colors.primary};
        margin-bottom: 10px; /* Space below the heading */
    }

    .footer-links-column a {
        display: block; /* Each link takes up the full width of its container */
        margin-bottom: 8px; /* Space between links */
        text-decoration: none; /* Remove underline from links by default */
        font-size: ${o=>o.theme.fontSizes.sm}; /* Theme-based font size for links */
    }

    .footer-links-column a:hover {
        text-decoration: underline; /* Underline links on hover */
        color: ${o=>o.theme.colors.secondary}; /* Change color on hover */
    }

    .footer-bottom-section {
        border-top: 1px solid #ccc; /* Thin line separating sections */
        padding: 10px 20px; /* Vertical padding */
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${o=>o.theme.fontSizes.sm}; 
    }

    .footer-bottom-left {
        display: flex;
        justify-content: flex-start;
        flex: 1; 
    }

    .footer-bottom-center {
        text-align: center;
        flex: 2; 
    }

    .footer-bottom-right {
        display: flex;
        justify-content: flex-end;
        flex: 1; 
    }

    .footer-bottom-left a,
    .footer-bottom-right a {
        text-decoration: none; /* Remove underline from links by default */
        font-size: ${o=>o.theme.fontSizes.sm}; 
    }

    .footer-bottom-left img {
        width: 24px; 
        height: 24px;
        margin: 0 5px; /* Space between icons */
        transition: transform 0.3s ease, filter 0.3s ease; /* Smooth transition for hover effects */
    }

    .footer-bottom-left img:hover {
        transform: scale(1.1); /* Slightly enlarge the icon on hover */
    }

    .footer-bottom-right a {
        margin: 0 5px; /* Space between links */
    }

    .footer-bottom-right a:hover {
        text-decoration: underline; /* Underline links on hover */
        color: ${o=>o.theme.colors.primary}; /* Change color on hover */
    }
`,s=()=>e.jsxs(f,{"data-testid":"Footer",children:[" ",e.jsxs("div",{className:"footer-content",children:[e.jsxs("div",{className:"footer-logo-container",children:[e.jsx("img",{src:"https://redback-operations.github.io/redback-ui/icon.svg",alt:"Redback Operations Logo"}),e.jsx("span",{children:"Redback Operations"})]}),e.jsxs("div",{className:"footer-links",children:[e.jsxs("div",{className:"footer-links-column",children:[e.jsx("h4",{children:"Company"}),e.jsx("a",{href:"#",children:"About Us"}),e.jsx("a",{href:"#",children:"Our Team"})]}),e.jsxs("div",{className:"footer-links-column",children:[e.jsx("h4",{children:"Projects"}),e.jsx("a",{href:"#",children:"VR Smart Bike"}),e.jsx("a",{href:"#",children:"Elderly Wearable Tech"}),e.jsx("a",{href:"#",children:"Athlete Wearable Tech"}),e.jsx("a",{href:"#",children:"Player Tracking"}),e.jsx("a",{href:"#",children:"Bugbox"})]}),e.jsxs("div",{className:"footer-links-column",children:[e.jsx("h4",{children:"Resources"}),e.jsx("a",{href:"#",children:"Documentation"}),e.jsx("a",{href:"#",children:"Case Studies"}),e.jsx("a",{href:"#",children:"Events"}),e.jsx("a",{href:"#",children:"Videos"})]}),e.jsxs("div",{className:"footer-links-column",children:[e.jsx("h4",{children:"Support"}),e.jsx("a",{href:"#",children:"Contact"}),e.jsx("a",{href:"#",children:"FAQ"}),e.jsx("a",{href:"#",children:"Downloads"})]})]})]}),e.jsxs("div",{className:"footer-bottom-section",children:[e.jsxs("div",{className:"footer-bottom-left",children:[e.jsx("a",{href:"#","aria-label":"Instagram",children:e.jsx("img",{src:"https://img.icons8.com/?size=100&id=32292&format=png&color=000000",alt:"Instagram"})}),e.jsx("a",{href:"#","aria-label":"Twitter",children:e.jsx("img",{src:"https://img.icons8.com/?size=100&id=437&format=png&color=000000",alt:"Twitter"})}),e.jsx("a",{href:"#","aria-label":"Facebook",children:e.jsx("img",{src:"https://img.icons8.com/?size=100&id=118468&format=png&color=000000",alt:"Facebook"})}),e.jsx("a",{href:"https://au.linkedin.com/in/redback-operations-722150239","aria-label":"LinkedIn",children:e.jsx("img",{src:"https://img.icons8.com/?size=100&id=447&format=png&color=000000",alt:"LinkedIn"})}),e.jsx("a",{href:"https://github.com/redbackoperations","aria-label":"GitHub",children:e.jsx("img",{src:"https://img.icons8.com/?size=100&id=12598&format=png&color=000000",alt:"GitHub"})})]}),e.jsx("div",{className:"footer-bottom-center",children:e.jsx("p",{children:"©2024 Redback Operations. All rights reserved"})}),e.jsxs("div",{className:"footer-bottom-right",children:[e.jsx("a",{href:"#",children:"Private Policy"}),e.jsx("a",{href:"#",children:"Terms of Use"}),e.jsx("a",{href:"#",children:"Ethics Statement"})]})]})]});try{s.displayName="Footer",s.__docgenInfo={description:"",displayName:"Footer",props:{}}}catch{}const j={title:"Components/Footer",component:s},m={},p={parameters:{controls:{disable:!0},actions:{disable:!0}}},t={args:{...m},tags:["excludeFromSidebar"]},r={args:{...m},...p};var i,n,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  tags: ['excludeFromSidebar']
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultProps
  },
  ...disableControls
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const k=["Demo","Default"];export{r as Default,t as Demo,k as __namedExportsOrder,j as default};
