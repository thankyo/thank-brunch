require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({6:[function(require,module,exports) {

},{}],4:[function(require,module,exports) {
"use strict";require("./integration.sass"),function(){var e=document.getElementById("button"),t=document.getElementById("counter"),n=localStorage.getItem("token"),o=null!==n,r=0;var i={headers:{"X-Auth-Token":n}};function a(){t.innerText=r}function c(){e.setAttribute("class","fab-is-loved is-unselectable")}function u(){e.setAttribute("class","fab-is-error is-unselectable")}fetch("/api/v1/thank/graph?url="+encodeURIComponent(document.referrer),i).then(function(e){e.ok?e.json().then(function(e){var t=e.thank,n=t.given,o=t.supporters;r=n,a();var i,u,s=(i=localStorage.getItem("token"),u=i.split(".")[1].replace("-","+").replace("_","/"),JSON.parse(window.atob(u)).id);o.some(function(e){return s===e})&&c()}):u()}),e.onclick=function(e){e.preventDefault(),o?function(){c(),a(r++);var e={method:"POST",headers:{"X-Auth-Token":n,"Content-Type":"application/json"},body:JSON.stringify({url:document.referrer})};fetch(new Request("/api/v1/thank/graph/my/support",e)).then(function(e){e.ok?c():u()})}():top.location=window.location.origin}}();
},{"./integration.sass":6}]},{},[4])