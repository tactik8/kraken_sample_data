"use strict";var z=Object.create;var b=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var V=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var Q=(l,o,e)=>o in l?b(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e;var Z=(l,o)=>{for(var e in o)b(l,e,{get:o[e],enumerable:!0})},v=(l,o,e,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of V(o))!B.call(l,r)&&r!==e&&b(l,r,{get:()=>o[r],enumerable:!(t=D(o,r))||t.enumerable});return l};var J=(l,o,e)=>(e=l!=null?z(W(l)):{},v(o||!l||!l.__esModule?b(e,"default",{value:l,enumerable:!0}):e,l)),X=l=>v(b({},"__esModule",{value:!0}),l);var _=(l,o,e)=>(Q(l,typeof o!="symbol"?o+"":o,e),e);var re={};Z(re,{HelpersModule:()=>ee,SimpleHelpersModule:()=>$,legacyReplaceSymbolWithNumber:()=>k});module.exports=X(re);var h=require("../../errors/faker-error"),y=require("../../internal/deprecated"),j=require("../../internal/module-base"),q=require("./eval"),L=require("./luhn-check"),Y=J(require("./unique"));function M(l,o,e,t){let r=1;if(o)switch(o){case"?":{r=l.datatype.boolean()?0:1;break}case"*":{let n=1;for(;l.datatype.boolean();)n*=2;r=l.number.int({min:0,max:n});break}case"+":{let n=1;for(;l.datatype.boolean();)n*=2;r=l.number.int({min:1,max:n});break}default:throw new h.FakerError("Unknown quantifier symbol provided.")}else e!=null&&t!=null?r=l.number.int({min:Number.parseInt(e),max:Number.parseInt(t)}):e!=null&&t==null&&(r=Number.parseInt(e));return r}function F(l,o=""){const e=/(.)\{(\d+),(\d+)\}/,t=/(.)\{(\d+)\}/,r=/\[(\d+)-(\d+)\]/;let n,s,c,i,u=e.exec(o);for(;u!=null;)n=Number.parseInt(u[2]),s=Number.parseInt(u[3]),n>s&&(c=s,s=n,n=c),i=l.number.int({min:n,max:s}),o=o.slice(0,u.index)+u[1].repeat(i)+o.slice(u.index+u[0].length),u=e.exec(o);for(u=t.exec(o);u!=null;)i=Number.parseInt(u[2]),o=o.slice(0,u.index)+u[1].repeat(i)+o.slice(u.index+u[0].length),u=t.exec(o);for(u=r.exec(o);u!=null;)n=Number.parseInt(u[1]),s=Number.parseInt(u[2]),n>s&&(c=s,s=n,n=c),o=o.slice(0,u.index)+l.number.int({min:n,max:s}).toString()+o.slice(u.index+u[0].length),u=r.exec(o);return o}function k(l,o="",e="#"){let t="";for(let r=0;r<o.length;r++)o.charAt(r)===e?t+=l.number.int(9):o.charAt(r)==="!"?t+=l.number.int({min:2,max:9}):t+=o.charAt(r);return t}class $ extends j.SimpleModuleBase{constructor(){super(...arguments);_(this,"uniqueStore",{})}slugify(e=""){return e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"").replace(/ /g,"-").replace(/[^\w.-]+/g,"")}replaceSymbolWithNumber(e="",t="#"){return(0,y.deprecated)({deprecated:"faker.helpers.replaceSymbolWithNumber",proposed:"string.replace(/#+/g, (m) => faker.string.numeric(m.length))",since:"8.4",until:"9.0"}),k(this.faker,e,t)}replaceSymbols(e=""){const t=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];let r="";for(let n=0;n<e.length;n++)e.charAt(n)==="#"?r+=this.faker.number.int(9):e.charAt(n)==="?"?r+=this.arrayElement(t):e.charAt(n)==="*"?r+=this.faker.datatype.boolean()?this.arrayElement(t):this.faker.number.int(9):r+=e.charAt(n);return r}replaceCreditCardSymbols(e="6453-####-####-####-###L",t="#"){e=F(this.faker,e),e=k(this.faker,e,t);const r=(0,L.luhnCheckValue)(e);return e.replace("L",String(r))}regexpStyleStringParse(e=""){return(0,y.deprecated)({deprecated:"faker.helpers.regexpStyleStringParse",proposed:"faker.helpers.fromRegExp",since:"8.1",until:"9.0"}),F(this.faker,e)}fromRegExp(e){var A,S,P,C,I,K,G;let t=!1;e instanceof RegExp&&(t=e.flags.includes("i"),e=e.toString(),e=(S=(A=/\/(.+?)\//.exec(e))==null?void 0:A[1])!=null?S:"");let r,n,s;const c=/([.A-Za-z0-9])(?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/;let i=c.exec(e);for(;i!=null;){const x=i[2],T=i[3],R=i[4];s=M(this.faker,R,x,T),e=e.slice(0,i.index)+i[1].repeat(s)+e.slice(i.index+i[0].length),i=c.exec(e)}const u=/(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/,N=/\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+)|)/;for(i=N.exec(e);i!=null;){const x=i[1]==="^",T=i[2]==="-",R=i[4],H=i[5],O=i[6],m=[];let g=i[3],f=u.exec(g);for(T&&m.push(45);f!=null;){if(f[0].includes("-")){const d=f[0].split("-").map(a=>{var p;return(p=a.codePointAt(0))!=null?p:Number.NaN});if(r=d[0],n=d[1],r>n)throw new h.FakerError("Character range provided is out of order.");for(let a=r;a<=n;a++)if(t&&Number.isNaN(Number(String.fromCodePoint(a)))){const p=String.fromCodePoint(a);m.push((P=p.toUpperCase().codePointAt(0))!=null?P:Number.NaN,(C=p.toLowerCase().codePointAt(0))!=null?C:Number.NaN)}else m.push(a)}else t&&Number.isNaN(Number(f[0]))?m.push((I=f[0].toUpperCase().codePointAt(0))!=null?I:Number.NaN,(K=f[0].toLowerCase().codePointAt(0))!=null?K:Number.NaN):m.push((G=f[0].codePointAt(0))!=null?G:Number.NaN);g=g.substring(f[0].length),f=u.exec(g)}if(s=M(this.faker,O,R,H),x){let d=-1;for(let a=48;a<=57;a++){if(d=m.indexOf(a),d>-1){m.splice(d,1);continue}m.push(a)}for(let a=65;a<=90;a++){if(d=m.indexOf(a),d>-1){m.splice(d,1);continue}m.push(a)}for(let a=97;a<=122;a++){if(d=m.indexOf(a),d>-1){m.splice(d,1);continue}m.push(a)}}const U=this.multiple(()=>String.fromCodePoint(this.arrayElement(m)),{count:s}).join("");e=e.slice(0,i.index)+U+e.slice(i.index+i[0].length),i=N.exec(e)}const w=/(.)\{(\d+),(\d+)\}/;for(i=w.exec(e);i!=null;){if(r=Number.parseInt(i[2]),n=Number.parseInt(i[3]),r>n)throw new h.FakerError("Numbers out of order in {} quantifier.");s=this.faker.number.int({min:r,max:n}),e=e.slice(0,i.index)+i[1].repeat(s)+e.slice(i.index+i[0].length),i=w.exec(e)}const E=/(.)\{(\d+)\}/;for(i=E.exec(e);i!=null;)s=Number.parseInt(i[2]),e=e.slice(0,i.index)+i[1].repeat(s)+e.slice(i.index+i[0].length),i=E.exec(e);return e}shuffle(e,t={}){const{inplace:r=!1}=t;r||(e=[...e]);for(let n=e.length-1;n>0;--n){const s=this.faker.number.int(n);[e[n],e[s]]=[e[s],e[n]]}return e}uniqueArray(e,t){if(Array.isArray(e)){const s=[...new Set(e)];return this.shuffle(s).splice(0,t)}const r=new Set;try{if(typeof e=="function"){const n=1e3*t;let s=0;for(;r.size<t&&s<n;)r.add(e()),s++}}catch{}return[...r]}mustache(e,t){if(e==null)return"";for(const r in t){const n=new RegExp(`{{${r}}}`,"g");let s=t[r];typeof s=="string"&&(s=s.replace(/\$/g,"$$$$")),e=e.replace(n,s)}return e}maybe(e,t={}){if(this.faker.datatype.boolean(t))return e()}objectKey(e){const t=Object.keys(e);return this.arrayElement(t)}objectValue(e){const t=this.faker.helpers.objectKey(e);return e[t]}objectEntry(e){const t=this.faker.helpers.objectKey(e);return[t,e[t]]}arrayElement(e){if(e==null)throw new h.FakerError("Calling `faker.helpers.arrayElement()` without arguments is no longer supported.");if(e.length===0)throw new h.FakerError("Cannot get value from empty dataset.");const t=e.length>1?this.faker.number.int({max:e.length-1}):0;return e[t]}weightedArrayElement(e){if(e.length===0)throw new h.FakerError("weightedArrayElement expects an array with at least one element");if(!e.every(s=>s.weight>0))throw new h.FakerError("weightedArrayElement expects an array of { weight, value } objects where weight is a positive number");const t=e.reduce((s,{weight:c})=>s+c,0),r=this.faker.number.float({min:0,max:t});let n=0;for(const{weight:s,value:c}of e)if(n+=s,r<n)return c;return e[e.length-1].value}arrayElements(e,t){if(e==null)throw new h.FakerError("Calling `faker.helpers.arrayElements()` without arguments is no longer supported.");if(e.length===0)return[];const r=this.rangeToNumber(t!=null?t:{min:1,max:e.length});if(r>=e.length)return this.shuffle(e);if(r<=0)return[];const n=[...e];let s=e.length;const c=s-r;let i,u;for(;s-- >c;)u=this.faker.number.int(s),i=n[u],n[u]=n[s],n[s]=i;return n.slice(c)}enumValue(e){const t=Object.keys(e).filter(n=>Number.isNaN(Number(n))),r=this.arrayElement(t);return e[r]}rangeToNumber(e){return typeof e=="number"?e:this.faker.number.int(e)}unique(e,t=[],r={}){(0,y.deprecated)({deprecated:"faker.helpers.unique",proposed:"https://github.com/faker-js/faker/issues/1785#issuecomment-1407773744",since:"8.0",until:"9.0"});const{maxTime:n=50,maxRetries:s=50,exclude:c=[],store:i=this.uniqueStore}=r;return Y.exec(e,t,{...r,startTime:Date.now(),maxTime:n,maxRetries:s,currentIterations:0,exclude:c,store:i})}multiple(e,t={}){var n;const r=this.rangeToNumber((n=t.count)!=null?n:3);return r<=0?[]:Array.from({length:r},e)}}class ee extends ${constructor(e){super(e);this.faker=e}fake(e){e=typeof e=="string"?e:this.arrayElement(e);const t=e.search(/{{[a-z]/),r=e.indexOf("}}",t);if(t===-1||r===-1)return e;const s=e.substring(t+2,r+2).replace("}}","").replace("{{",""),c=(0,q.fakeEval)(s,this.faker),i=String(c),u=e.substring(0,t)+i+e.substring(r+2);return this.fake(u)}}0&&(module.exports={HelpersModule,SimpleHelpersModule,legacyReplaceSymbolWithNumber});