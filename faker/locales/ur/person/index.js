"use strict";var b=Object.create;var i=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var q=(m,o)=>{for(var t in o)i(m,t,{get:o[t],enumerable:!0})},p=(m,o,t,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of h(o))!k.call(m,e)&&e!==t&&i(m,e,{get:()=>o[e],enumerable:!(f=g(o,e))||f.enumerable});return m};var r=(m,o,t)=>(t=m!=null?b(j(m)):{},p(o||!m||!m.__esModule?i(t,"default",{value:m,enumerable:!0}):t,m)),v=m=>p(i({},"__esModule",{value:!0}),m);var A={};q(A,{default:()=>z});module.exports=v(A);var n=r(require("./female_first_name")),a=r(require("./female_prefix")),s=r(require("./first_name")),_=r(require("./last_name")),l=r(require("./last_name_pattern")),x=r(require("./male_first_name")),u=r(require("./male_prefix")),D=r(require("./name")),P=r(require("./prefix")),c=r(require("./sex")),d=r(require("./suffix")),y=r(require("./title"));const w={female_first_name:n.default,female_prefix:a.default,first_name:s.default,last_name:_.default,last_name_pattern:l.default,male_first_name:x.default,male_prefix:u.default,name:D.default,prefix:P.default,sex:c.default,suffix:d.default,title:y.default};var z=w;
