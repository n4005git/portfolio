(function(t){function e(e){for(var i,c,r=e[0],s=e[1],l=e[2],d=0,b=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},o={app:0},a=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fec":function(t,e,n){"use strict";n("794b")},1613:function(t,e,n){"use strict";n("ecc0")},"2ab7":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o={id:"container"},a=Object(i["f"])("h1",null,"Portfolio",-1),c=Object(i["f"])("h3",null,"by Sasu Salonen",-1);function r(t,e,n,r,s,l){var u=Object(i["v"])("NavBar"),d=Object(i["v"])("router-view");return Object(i["o"])(),Object(i["c"])("div",o,[a,c,Object(i["f"])(u),Object(i["f"])(d)])}var s=Object(i["C"])("data-v-de84dfba"),l=s((function(t,e,n,o,a,c){var r=Object(i["v"])("Button");return Object(i["o"])(),Object(i["c"])("nav",null,[Object(i["f"])(r,{label:"Profiili",class:"p-button-raised",onClick:e[1]||(e[1]=function(e){t.$router.push({path:"/profile"})})}),Object(i["f"])(r,{label:"Koodi",class:"p-button-raised",onClick:e[2]||(e[2]=function(e){t.$router.push({path:"/code"})})}),Object(i["f"])(r,{label:"Musiikki",class:"p-button-raised",onClick:e[3]||(e[3]=function(e){t.$router.push({path:"/music"})})})])})),u={name:"NavBar"};n("0fec");u.render=l,u.__scopeId="data-v-de84dfba";var d=u,b={name:"App",components:{NavBar:d}};n("1613");b.render=r;var p=b,f=n("6c02"),v=Object(i["C"])("data-v-4076d601");Object(i["r"])("data-v-4076d601");var O={id:"container"},j=Object(i["e"])('<div id="profileinfo" data-v-4076d601><h2 data-v-4076d601>Profiili</h2><p data-v-4076d601><b data-v-4076d601>Nimi:</b> Sasu Salonen</p><p data-v-4076d601><b data-v-4076d601>Ikä:</b> 32v</p><p data-v-4076d601><b data-v-4076d601>Opiskelupaikka:</b> Jyväskylän ammattikorkeakoulu</p><p data-v-4076d601><b data-v-4076d601>Tutkinto-ohjelma:</b> Tietojenkäsittelyn Tradenomi</p><p data-v-4076d601><b data-v-4076d601>Opiskelijatunnus:</b> n4005</p></div><div id="infotext" data-v-4076d601><p class="pInfotext" data-v-4076d601>Olen toisen vuoden opiskelija Jyväskylän ammattikorkeakoulussa Tietojenkäsittelyn Tradenomi linjalla. Suuntaudun opinnoissani Web-sovelluskehitys puolelle. Tähän mennessä olen opiskellut mm. HTML, CSS, JavaScript, Java, C#, PHP ja MySQL ohjelmointikieliä. Erilaisista ympäristöistä tutuksi on tullut mm. Angular, React, Vue.js, Visual Studio, Android Studio sekä Unity. </p><p class="pInfotext" data-v-4076d601>2021 vuoden keväällä työskentelemme Ticorporate Demo Lab projektien parissa. Olen mukana tekemässä asiakastyönä Web-sovellusta Trigenda Oy nimiselle yritykselle. Työskentelen projektissa koodarina ja tulevaisuudessa toiveena on tehdä töitä koodaamisen parissa. Käytämme Trigenda Oy:n projektissa Vue.js sovelluskehystä ja myös tämä portfolio sivusto on toteutettu Vue.js:llä. </p><p class="pInfotext" data-v-4076d601>Sivutyönä Ticorporatessa teen musiikkeja Robo Hitman peliin. Robo Hitman on toisen tiimin luoma Unity peli. Minulla on ennestään musiikillista taustaa ja pääsen hyvin hyödyntämään sitä tässä projektissa. </p></div>',2);Object(i["p"])();var k=v((function(t,e,n,o,a,c){return Object(i["o"])(),Object(i["c"])("div",O,[j])})),y={name:"Profile"};n("fe36");y.render=k,y.__scopeId="data-v-4076d601";var m=y,h=Object(i["C"])("data-v-2ce22b9f");Object(i["r"])("data-v-2ce22b9f");var I={id:"container"},S={id:"flex"},g={key:0,id:"content"},M=Object(i["f"])("p",null,"TÄMÄ ON ENSIMMÄISEN KOODIN SISÄLTÖ",-1),N={key:1,id:"content"},T=Object(i["f"])("p",null,"TÄMÄ ON TOISEN KOODIN SISÄLTÖ",-1),C={key:2,id:"content"},K=Object(i["f"])("p",null,"TÄMÄ ON KOLMANNEN KOODIN SISÄLTÖ",-1);Object(i["p"])();var P=h((function(t,e,n,o,a,c){return Object(i["o"])(),Object(i["c"])("div",I,[Object(i["f"])("div",S,[Object(i["f"])("h2",{onClick:e[1]||(e[1]=function(t){return o.toggleVisibility(0)})},"KOODI1"),Object(i["f"])("h2",{onClick:e[2]||(e[2]=function(t){return o.toggleVisibility(1)})},"KOODI2"),Object(i["f"])("h2",{onClick:e[3]||(e[3]=function(t){return o.toggleVisibility(2)})},"KOODI3")]),0===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",g,[M])):Object(i["d"])("",!0),1===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",N,[T])):Object(i["d"])("",!0),2===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",C,[K])):Object(i["d"])("",!0)])})),_={name:"Code",setup:function(){var t=Object(i["s"])({visibleContent:0}),e=function(e){t.visibleContent=e};return{state:t,toggleVisibility:e}}};n("ead7");_.render=P,_.__scopeId="data-v-2ce22b9f";var x=_,V=Object(i["C"])("data-v-0773700c");Object(i["r"])("data-v-0773700c");var w={id:"container"},L={id:"flex"},E={key:0,id:"content"},U=Object(i["f"])("p",null,"TÄMÄ ON ENSIMMÄISEN MUSIIKIN SISÄLTÖ",-1),D={key:1,id:"content"},J=Object(i["f"])("p",null,"TÄMÄ ON TOISEN MUSIIKIN SISÄLTÖ",-1),A={key:2,id:"content"},B=Object(i["f"])("p",null,"TÄMÄ ON KOLMANNEN MUSIIKIN SISÄLTÖ",-1);Object(i["p"])();var H=V((function(t,e,n,o,a,c){return Object(i["o"])(),Object(i["c"])("div",w,[Object(i["f"])("div",L,[Object(i["f"])("h2",{onClick:e[1]||(e[1]=function(t){return o.toggleVisibility(0)})},"MUSIIKKI1"),Object(i["f"])("h2",{onClick:e[2]||(e[2]=function(t){return o.toggleVisibility(1)})},"MUSIIKKI2"),Object(i["f"])("h2",{onClick:e[3]||(e[3]=function(t){return o.toggleVisibility(2)})},"MUSIIKKI3")]),0===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",E,[U])):Object(i["d"])("",!0),1===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",D,[J])):Object(i["d"])("",!0),2===o.state.visibleContent?(Object(i["o"])(),Object(i["c"])("div",A,[B])):Object(i["d"])("",!0)])})),R={name:"Music",setup:function(){var t=Object(i["s"])({visibleContent:0}),e=function(e){t.visibleContent=e};return{state:t,toggleVisibility:e}}};n("a9b3");R.render=H,R.__scopeId="data-v-0773700c";var $=R,W=[{path:"/",redirect:"/profile"},{path:"/portfolio",redirect:"/profile"},{path:"/profile",name:"Profile",component:m},{path:"/code",name:"Code",component:x},{path:"/music",name:"Music",component:$}],Q=Object(f["a"])({history:Object(f["b"])(),routes:W}),q=Q,z=n("9319"),F=(n("098b"),n("e1ae"),n("4121"),n("bb57")),G=Object(i["b"])(p);G.use(q),G.use(z["a"]),G.component("Button",F["a"]),G.mount("#app")},"794b":function(t,e,n){},"8f30":function(t,e,n){},a9b3:function(t,e,n){"use strict";n("cbd7")},cbd7:function(t,e,n){},ead7:function(t,e,n){"use strict";n("2ab7")},ecc0:function(t,e,n){},fe36:function(t,e,n){"use strict";n("8f30")}});
//# sourceMappingURL=app.b452d02d.js.map