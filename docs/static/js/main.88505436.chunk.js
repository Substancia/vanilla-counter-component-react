(this["webpackJsonpvanilla-counter-component-react"]=this["webpackJsonpvanilla-counter-component-react"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(16),s=n.n(i),r=(n(21),n(22),n(3)),u=n(6),o=n.n(u),l=(n(41),n(0)),j="1000",b=function(e){var t=e.initialValue,n=e.setIsSaving,a=Object(c.useState)(),i=Object(r.a)(a,2),s=i[0],u=i[1],b=Object(c.useState)(null),d=Object(r.a)(b,2),f=d[0],v=d[1],O=Object(c.useRef)();Object(c.useEffect)((function(){O.current.style.width=(15*j.toString().length).toString()+"px",u(t)}),[t]);var h=function(e){isNaN(e)&&(e=0),e!==s&&e<=j&&(clearTimeout(f),n(!0),v(setTimeout((function(){o.a.put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json",{sentienta:e}).then((function(){return n(!1)}))}),300)),u(e))};return Object(l.jsxs)("div",{className:"Counter",children:[Object(l.jsx)("button",{className:"decrement",onClick:function(){return h(s-1)},children:"-"}),Object(l.jsx)("input",{type:"text",ref:O,value:s,onChange:function(e){return h(parseInt(e.target.value))}}),Object(l.jsx)("button",{className:"increment",onClick:function(){return s<j?h(s+1):null},children:"+"})]})},d=(n(43),function(e){var t=e.isSaving;return Object(l.jsx)("div",{className:"Counter-state",children:t&&Object(l.jsxs)("div",{className:"loaders",children:[Object(l.jsx)("div",{className:"loader-circle"}),Object(l.jsx)("p",{children:"Saving counter value"})]})})}),f=(n(44),function(e){var t=e.value;return Object(l.jsx)("div",{className:"Counter-value",children:Object(l.jsxs)("p",{children:["Counter value : ",t]})})}),v=(n(45),function(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(r.a)(i,2),u=s[0],j=s[1],v=Object(c.useState)(1),O=Object(r.a)(v,2),h=O[0],m=O[1];return Object(c.useEffect)((function(){u||o.a.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/sentienta.json").then((function(e){a(null!==e.data?e.data:1),m(null!==e.data?e.data:1)}))}),[u]),Object(l.jsxs)("div",{className:"Counter-container",children:[Object(l.jsx)("div",{className:"Counter-state-component",children:Object(l.jsx)(d,{isSaving:u})}),Object(l.jsx)("div",{className:"Counter-component",children:Object(l.jsx)(b,{initialValue:h,setIsSaving:j})}),Object(l.jsx)("div",{className:"Counter-value-component",children:Object(l.jsx)(f,{value:n})})]})}),O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(v,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),h()}},[[46,1,2]]]);
//# sourceMappingURL=main.88505436.chunk.js.map