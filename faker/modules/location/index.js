"use strict";var d=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var y=Object.prototype.hasOwnProperty;var v=(o,e)=>{for(var r in e)d(o,r,{get:e[r],enumerable:!0})},x=(o,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of k(e))!y.call(o,t)&&t!==r&&d(o,t,{get:()=>e[t],enumerable:!(i=p(e,t))||i.enumerable});return o};var D=o=>x(d({},"__esModule",{value:!0}),o);var M={};v(M,{LocationModule:()=>E});module.exports=D(M);var b=require("../../errors/faker-error"),a=require("../../internal/deprecated"),m=require("../../internal/module-base");class E extends m.ModuleBase{zipCode(e={}){typeof e=="string"&&(e={format:e});const{state:r}=e;if(r){const t=this.faker.definitions.location.postcode_by_state[r];if(t)return this.faker.helpers.fake(t);throw new b.FakerError(`No zip code definition found for state "${r}"`)}let{format:i=this.faker.definitions.location.postcode}=e;return typeof i=="string"&&(i=[i]),i=this.faker.helpers.arrayElement(i),this.faker.helpers.replaceSymbols(i)}zipCodeByState(e={}){(0,a.deprecated)({deprecated:"faker.location.zipCodeByState",proposed:"faker.location.zipCode({ state })",since:"8.0",until:"9.0"}),typeof e=="string"&&(e={state:e});const{state:r}=e;return this.zipCode({state:r})}city(){return this.faker.helpers.fake(this.faker.definitions.location.city_pattern)}cityName(){return(0,a.deprecated)({deprecated:"faker.location.cityName",proposed:"faker.location.city",since:"8.0",until:"9.0"}),this.faker.helpers.arrayElement(this.faker.definitions.location.city_name)}buildingNumber(){return this.faker.helpers.arrayElement(this.faker.definitions.location.building_number).replace(/#+/g,e=>this.faker.string.numeric({length:e.length,allowLeadingZeros:!1}))}street(){return this.faker.helpers.fake(this.faker.definitions.location.street_pattern)}streetName(){return(0,a.deprecated)({deprecated:"faker.location.streetName",proposed:"faker.location.street",since:"8.0",until:"9.0"}),this.faker.helpers.arrayElement(this.faker.definitions.location.street_name)}streetAddress(e={}){typeof e=="boolean"&&(e={useFullAddress:e});const{useFullAddress:r}=e,t=this.faker.definitions.location.street_address[r?"full":"normal"];return this.faker.helpers.fake(t)}secondaryAddress(){return this.faker.helpers.arrayElement(this.faker.definitions.location.secondary_address).replace(/#+/g,e=>this.faker.string.numeric({length:e.length,allowLeadingZeros:!1}))}county(){return this.faker.helpers.arrayElement(this.faker.definitions.location.county)}country(){return this.faker.helpers.arrayElement(this.faker.definitions.location.country)}countryCode(e={}){typeof e=="string"&&(e={variant:e});const{variant:r="alpha-2"}=e,i=(()=>{switch(r){case"numeric":return"numeric";case"alpha-3":return"alpha3";case"alpha-2":default:return"alpha2"}})();return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[i]}state(e={}){const{abbreviated:r=!1}=e,i=r?this.faker.definitions.location.state_abbr:this.faker.definitions.location.state;return this.faker.helpers.arrayElement(i)}stateAbbr(){return(0,a.deprecated)({deprecated:"faker.location.stateAbbr()",proposed:"faker.location.state({ abbreviated: true })",since:"8.0",until:"9.0"}),this.state({abbreviated:!0})}latitude(e={},r=-90,i=4){typeof e=="number"&&((0,a.deprecated)({deprecated:"faker.location.latitude(max, min, precision)",proposed:"faker.location.latitude({ max, min, precision })",since:"8.0",until:"9.0"}),e={max:e});const{max:t=90,min:s=r,precision:l=i}=e;return this.faker.number.float({min:s,max:t,fractionDigits:l})}longitude(e={},r=-180,i=4){typeof e=="number"&&((0,a.deprecated)({deprecated:"faker.location.longitude(max, min, precision)",proposed:"faker.location.longitude({ max, min, precision })",since:"8.0",until:"9.0"}),e={max:e});const{max:t=180,min:s=r,precision:l=i}=e;return this.faker.number.float({max:t,min:s,fractionDigits:l})}direction(e={}){typeof e=="boolean"&&((0,a.deprecated)({deprecated:"faker.location.direction(abbreviated)",proposed:"faker.location.direction({ abbreviated })",since:"8.0",until:"9.0"}),e={abbreviated:e});const{abbreviated:r=!1}=e;return r?this.faker.helpers.arrayElement(this.faker.definitions.location.direction_abbr):this.faker.helpers.arrayElement(this.faker.definitions.location.direction)}cardinalDirection(e={}){typeof e=="boolean"&&((0,a.deprecated)({deprecated:"faker.location.cardinalDirection(abbreviated)",proposed:"faker.location.cardinalDirection({ abbreviated })",since:"8.0",until:"9.0"}),e={abbreviated:e});const{abbreviated:r=!1}=e;return r?this.faker.helpers.arrayElement(this.faker.definitions.location.direction_abbr.slice(0,4)):this.faker.helpers.arrayElement(this.faker.definitions.location.direction.slice(0,4))}ordinalDirection(e={}){typeof e=="boolean"&&((0,a.deprecated)({deprecated:"faker.location.ordinalDirection(abbreviated)",proposed:"faker.location.ordinalDirection({ abbreviated })",since:"8.0",until:"9.0"}),e={abbreviated:e});const{abbreviated:r=!1}=e;return r?this.faker.helpers.arrayElement(this.faker.definitions.location.direction_abbr.slice(4,8)):this.faker.helpers.arrayElement(this.faker.definitions.location.direction.slice(4,8))}nearbyGPSCoordinate(e={},r=10,i=!1){Array.isArray(e)&&((0,a.deprecated)({deprecated:"faker.location.nearbyGPSCoordinate(coordinate, radius, isMetric)",proposed:"faker.location.nearbyGPSCoordinate({ origin, radius, isMetric })",since:"8.0",until:"9.0"}),e={origin:e});const{origin:t,radius:s=r,isMetric:l=i}=e;if(t==null)return[this.latitude(),this.longitude()];const c=this.faker.number.float({max:2*Math.PI,fractionDigits:5}),f=l?s:s*1.60934,h=this.faker.number.float({max:f,fractionDigits:3})*.995,g=4e4/360,u=h/g,n=[t[0]+Math.sin(c)*u,t[1]+Math.cos(c)*u];return n[0]=n[0]%180,(n[0]<-90||n[0]>90)&&(n[0]=Math.sign(n[0])*180-n[0],n[1]+=180),n[1]=(n[1]%360+540)%360-180,[n[0],n[1]]}timeZone(){return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone)}}0&&(module.exports={LocationModule});
