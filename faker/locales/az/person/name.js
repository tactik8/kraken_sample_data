"use strict";var r=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var m=(a,e)=>{for(var t in e)r(a,t,{get:e[t],enumerable:!0})},n=(a,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of o(e))!p.call(a,s)&&s!==t&&r(a,s,{get:()=>e[s],enumerable:!(i=l(e,s))||i.enumerable});return a};var N=a=>n(r({},"__esModule",{value:!0}),a);var u={};m(u,{default:()=>f});module.exports=N(u);var f=[{value:"{{person.firstName}}",weight:1},{value:"{{person.lastName}} {{person.firstName}}",weight:1},{value:"{{person.firstName}} {{person.lastName}}",weight:1}];
