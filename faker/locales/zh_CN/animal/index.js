"use strict";var d=Object.create;var f=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var g=(o,i)=>{for(var m in i)f(o,m,{get:i[m],enumerable:!0})},e=(o,i,m,p)=>{if(i&&typeof i=="object"||typeof i=="function")for(let t of A(i))!b.call(o,t)&&t!==m&&f(o,t,{get:()=>i[t],enumerable:!(p=h(i,t))||p.enumerable});return o};var r=(o,i,m)=>(m=o!=null?d(D(o)):{},e(i||!o||!o.__esModule?f(m,"default",{value:o,enumerable:!0}):m,o)),u=o=>e(f({},"__esModule",{value:!0}),o);var j={};g(j,{default:()=>_});module.exports=u(j);var n=r(require("./bear")),a=r(require("./cat")),l=r(require("./dog")),s=r(require("./fish")),y=r(require("./horse")),c=r(require("./type"));const x={bear:n.default,cat:a.default,dog:l.default,fish:s.default,horse:y.default,type:c.default};var _=x;
