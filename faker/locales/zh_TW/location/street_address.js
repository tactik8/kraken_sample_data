"use strict";var i=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var d=(l,o)=>{for(var e in o)i(l,e,{get:o[e],enumerable:!0})},u=(l,o,e,n)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of r(o))!c.call(l,t)&&t!==e&&i(l,t,{get:()=>o[t],enumerable:!(n=a(o,t))||n.enumerable});return l};var s=l=>u(i({},"__esModule",{value:!0}),l);var m={};d(m,{default:()=>b});module.exports=s(m);var b={normal:"{{location.street}}{{location.buildingNumber}}\u865F",full:"{{location.street}}{{location.buildingNumber}}\u865F {{location.secondaryAddress}}"};
