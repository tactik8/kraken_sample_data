"use strict";var d=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var h=(u,e)=>{for(var a in e)d(u,a,{get:e[a],enumerable:!0})},x=(u,e,a,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of p(e))!w.call(u,s)&&s!==a&&d(u,s,{get:()=>e[s],enumerable:!(t=k(e,s))||t.enumerable});return u};var C=u=>x(d({},"__esModule",{value:!0}),u);var v={};h(v,{DateModule:()=>T,SimpleDateModule:()=>y});module.exports=C(v);var D=require("../../errors/faker-error"),b=require("../../internal/deprecated"),g=require("../../internal/module-base"),l=require("../../locale-proxy");function i(u,e){return u==null?e():(u=new Date(u),Number.isNaN(u.valueOf())&&(u=e()),u)}class y extends g.SimpleModuleBase{anytime(e={}){const{refDate:a}=e,t=i(a,this.faker.defaultRefDate);return this.between({from:new Date(t.getTime()-1e3*60*60*24*365),to:new Date(t.getTime()+1e3*60*60*24*365)})}past(e={},a){typeof e=="number"&&((0,b.deprecated)({deprecated:"faker.date.past(years, refDate)",proposed:"faker.date.past({ years, refDate })",since:"8.0",until:"9.0"}),e={years:e});const{years:t=1,refDate:s=a}=e;if(t<=0)throw new D.FakerError("Years must be greater than 0.");const r=i(s,this.faker.defaultRefDate),o={min:1e3,max:t*365*24*3600*1e3};let n=r.getTime();return n-=this.faker.number.int(o),r.setTime(n),r}future(e={},a){typeof e=="number"&&((0,b.deprecated)({deprecated:"faker.date.future(years, refDate)",proposed:"faker.date.future({ years, refDate })",since:"8.0",until:"9.0"}),e={years:e});const{years:t=1,refDate:s=a}=e;if(t<=0)throw new D.FakerError("Years must be greater than 0.");const r=i(s,this.faker.defaultRefDate),o={min:1e3,max:t*365*24*3600*1e3};let n=r.getTime();return n+=this.faker.number.int(o),r.setTime(n),r}between(e,a){(e instanceof Date||typeof e!="object")&&((0,b.deprecated)({deprecated:"faker.date.between(from, to)",proposed:"faker.date.between({ from, to })",since:"8.0",until:"9.0"}),e={from:e,to:a!=null?a:e});const{from:t,to:s}=e,r=i(t,this.faker.defaultRefDate).getTime(),o=i(s,this.faker.defaultRefDate).getTime(),n=this.faker.number.int(o-r);return new Date(r+n)}betweens(e,a,t=3){(e instanceof Date||typeof e!="object")&&((0,b.deprecated)({deprecated:"faker.date.betweens(from, to, count)",proposed:"faker.date.betweens({ from, to, count })",since:"8.0",until:"9.0"}),e={from:e,to:a!=null?a:e,count:t});const{from:s,to:r,count:o=3}=e;return this.faker.helpers.multiple(()=>this.between({from:s,to:r}),{count:o}).sort((n,m)=>n.getTime()-m.getTime())}recent(e={},a){typeof e=="number"&&((0,b.deprecated)({deprecated:"faker.date.recent(days, refDate)",proposed:"faker.date.recent({ days, refDate })",since:"8.0",until:"9.0"}),e={days:e});const{days:t=1,refDate:s=a}=e;if(t<=0)throw new D.FakerError("Days must be greater than 0.");const r=i(s,this.faker.defaultRefDate),o={min:1e3,max:t*24*3600*1e3};let n=r.getTime();return n-=this.faker.number.int(o),r.setTime(n),r}soon(e={},a){typeof e=="number"&&((0,b.deprecated)({deprecated:"faker.date.soon(days, refDate)",proposed:"faker.date.soon({ days, refDate })",since:"8.0",until:"9.0"}),e={days:e});const{days:t=1,refDate:s=a}=e;if(t<=0)throw new D.FakerError("Days must be greater than 0.");const r=i(s,this.faker.defaultRefDate),o={min:1e3,max:t*24*3600*1e3};let n=r.getTime();return n+=this.faker.number.int(o),r.setTime(n),r}birthdate(e={}){var n,m,f,c;const a=e.mode==="age"?"age":"year",t=i(e.refDate,this.faker.defaultRefDate),s=t.getUTCFullYear();let r,o;if(a==="age"?(r=new Date(t).setUTCFullYear(s-((n=e.max)!=null?n:80)-1),o=new Date(t).setUTCFullYear(s-((m=e.min)!=null?m:18))):(r=new Date(Date.UTC(0,0,2)).setUTCFullYear((f=e.min)!=null?f:s-80),o=new Date(Date.UTC(0,11,30)).setUTCFullYear((c=e.max)!=null?c:s-19)),o<r)throw new D.FakerError(`Max ${e.max} should be larger than or equal to min ${e.min}.`);return new Date(this.faker.number.int({min:r,max:o}))}}class T extends y{constructor(a){super(a);this.faker=a}month(a={}){const{abbr:t,abbreviated:s=t!=null?t:!1,context:r=!1}=a;t!=null&&(0,b.deprecated)({deprecated:"faker.date.month({ abbr })",proposed:"faker.date.month({ abbreviated })",since:"8.0",until:"9.0"});const o=this.faker.definitions.date.month;let n;s?n=r&&o.abbr_context!=null?"abbr_context":"abbr":n=r&&o.wide_context!=null?"wide_context":"wide";const m=o[n];return(0,l.assertLocaleData)(m,"date.month",n),this.faker.helpers.arrayElement(m)}weekday(a={}){const{abbr:t,abbreviated:s=t!=null?t:!1,context:r=!1}=a;t!=null&&(0,b.deprecated)({deprecated:"faker.date.weekday({ abbr })",proposed:"faker.date.weekday({ abbreviated })",since:"8.0",until:"9.0"});const o=this.faker.definitions.date.weekday;let n;s?n=r&&o.abbr_context!=null?"abbr_context":"abbr":n=r&&o.wide_context!=null?"wide_context":"wide";const m=o[n];return(0,l.assertLocaleData)(m,"date.weekday",n),this.faker.helpers.arrayElement(m)}}0&&(module.exports={DateModule,SimpleDateModule});
