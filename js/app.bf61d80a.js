(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,b=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return s.p+"js/"+({about:"about",game:"game"}[e]||e)+"."+{about:"2e975147",game:"248ba444"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={game:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",game:"game"}[e]||e)+"."+{about:"31d6cfe0",game:"ec2f6bbb"}[e]+".css",c=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var b=document.getElementsByTagName("style");for(u=0;u<b.length;u++){i=b[u],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var b=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1b29":function(e,t,n){"use strict";n("d56a")},"289d":function(e,t,n){"use strict";n("2e2d")},"2e2d":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["h"])("Home"),a=Object(r["h"])(" | "),u=Object(r["h"])("About"),s=Object(r["h"])(" | "),i=Object(r["h"])("Scores");function l(e,t){var n=Object(r["B"])("router-link"),l=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["f"])(r["a"],null,[Object(r["g"])("div",o,[Object(r["i"])(n,{to:"/"},{default:Object(r["I"])((function(){return[c]})),_:1}),a,Object(r["i"])(n,{to:"/about"},{default:Object(r["I"])((function(){return[u]})),_:1}),s,Object(r["i"])(n,{to:"/Scores"},{default:Object(r["I"])((function(){return[i]})),_:1})]),Object(r["i"])(l)],64)}n("eaa5");const b={};b.render=l;var f=b,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),j=n("cf05"),p=n.n(j),O={class:"home"},m=Object(r["g"])("img",{alt:"Vue logo",src:p.a},null,-1);function g(e,t,n,o,c,a){var u=Object(r["B"])("HelloWorld");return Object(r["t"])(),Object(r["f"])("div",O,[m,Object(r["i"])(u,{msg:"cityguessr"})])}Object(r["w"])("data-v-2ae19f49");var h={class:"hello"};function v(e,t,n,o,c,a){return Object(r["t"])(),Object(r["f"])("div",h,[Object(r["g"])("h1",null,Object(r["D"])(e.msg),1)])}Object(r["u"])();var y=Object(r["j"])({name:"HelloWorld",props:{msg:String}});n("289d");y.render=v,y.__scopeId="data-v-2ae19f49";var w=y,S=Object(r["j"])({name:"Home",components:{HelloWorld:w}});S.render=g;var k=S;function _(e,t,n,o,c,a){var u=Object(r["B"])("Scoreboard");return Object(r["t"])(),Object(r["d"])(u)}n("b0c0");Object(r["w"])("data-v-6fc15327");var E={key:0,class:"scoreboard-container"},P={class:"table center"},x=Object(r["g"])("thead",null,[Object(r["g"])("tr",null,[Object(r["g"])("th",{class:"rank"},"Rank"),Object(r["g"])("th",{class:"name"},"Username"),Object(r["g"])("th",{class:"score"},"Score")])],-1),A={class:"rank"},L={class:"name"},T={class:"score"};function B(e,t,n,o,c,a){return!e.isLoading&&e.users?(Object(r["t"])(),Object(r["f"])("div",E,[Object(r["g"])("table",P,[x,Object(r["g"])("tbody",null,[(Object(r["t"])(!0),Object(r["f"])(r["a"],null,Object(r["z"])(e.users,(function(e,t){return Object(r["t"])(),Object(r["f"])("tr",{key:e.id},[Object(r["g"])("td",A,Object(r["D"])(t+1)+".",1),Object(r["g"])("td",L,Object(r["D"])(e.name),1),Object(r["g"])("td",T,Object(r["D"])(e.score),1)])})),128))])])])):Object(r["e"])("",!0)}Object(r["u"])();var C=Object(r["j"])({name:"Scoreboard",props:{},data:function(){return{users:[{name:"Frank",score:25},{name:"Lucy",score:21},{name:"Jerry",score:20},{name:"Pedro",score:19}]}},setup:function(){var e=Object(r["y"])(null),t=Object(r["y"])(!0),n=Object(r["y"])(null);function o(){return t.value=!0,fetch("<API-REQUEST-URL>",{method:"get",headers:{"content-type":"application/json"}}).then((function(e){if(!e.ok){var t=new Error(e.statusText);throw t}return e.json()})).then((function(t){e.value=t.data})).catch((function(e){n.value=e})).then((function(){t.value=!1}))}return Object(r["r"])((function(){o()})),{userScores:e,isLoading:t,error:n}}});n("1b29");C.render=B,C.__scopeId="data-v-6fc15327";var H=C,I=Object(r["j"])({name:"Scores",components:{Scoreboard:H}});I.render=_;var D=I,N=[{path:"/",name:"Home",component:k},{path:"/scores",name:"Scores",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game",name:"Game",component:function(){return n.e("game").then(n.bind(null,"7d36"))}}],M=Object(d["a"])({history:Object(d["b"])(),routes:N}),U=M;Object(r["c"])(f).use(U).mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d56a:function(e,t,n){},e691:function(e,t,n){},eaa5:function(e,t,n){"use strict";n("e691")}});
//# sourceMappingURL=app.bf61d80a.js.map