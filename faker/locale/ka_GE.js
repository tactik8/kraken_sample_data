"use strict";var l=Object.create;var t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var w=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var E=(o,r)=>{for(var m in r)t(o,m,{get:r[m],enumerable:!0})},p=(o,r,m,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of b(r))!x.call(o,e)&&e!==m&&t(o,e,{get:()=>r[e],enumerable:!(f=s(r,e))||f.enumerable});return o};var a=(o,r,m)=>(m=o!=null?l(w(o)):{},p(r||!o||!o.__esModule?t(m,"default",{value:o,enumerable:!0}):m,o)),F=o=>p(t({},"__esModule",{value:!0}),o);var _={};E(_,{faker:()=>G});module.exports=F(_);var i=require("../faker"),k=a(require("../locales/base")),n=a(require("../locales/en")),c=a(require("../locales/ka_GE"));const G=new i.Faker({locale:[c.default,n.default,k.default]});0&&(module.exports={faker});