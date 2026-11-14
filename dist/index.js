"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=i(function(O,s){
var c=require('@stdlib/stats-strided-nanvariancetk/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,a,t,d){return o(c(e,r,a,t,d))}s.exports=y
});var v=i(function(R,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),k=n();function p(e,r,a,t){return k(e,r,a,t,f(e,t))}u.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),l=n();x(q,"ndarray",l);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
