"use strict";var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var o=Object.prototype.hasOwnProperty;var r=(e,a)=>{for(var m in a)s(e,m,{get:a[m],enumerable:!0})},t=(e,a,m,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let n of _(a))!o.call(e,n)&&n!==m&&s(e,n,{get:()=>a[n],enumerable:!(l=p(a,n))||l.enumerable});return e};var f=e=>t(s({},"__esModule",{value:!0}),e);var c={};r(c,{default:()=>x});module.exports=f(c);var x=["{{company.prefix}} {{person.male_last_name}}","{{company.prefix}} {{person.male_last_name}} {{company.suffix}}","{{company.prefix}} {{person.female_last_name}} {{company.suffix}}","{{person.male_last_name}} un {{person.male_last_name}}","{{person.male_last_name}}, {{person.male_last_name}} un {{person.male_last_name}}"];
