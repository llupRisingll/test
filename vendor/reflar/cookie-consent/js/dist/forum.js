module.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=flarum.core.compat.app},,,,function(e,t){!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var n=" ";return 1===e.nodeType&&(n+e.className+n).replace(/[\n\t]/g,n).indexOf(n+t+n)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var n=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(n,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,function(e){return t(arguments[1])||""})},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,n,i,o,s){var r=new Date;r.setDate(r.getDate()+(n||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(o||"/")];i&&a.push("domain="+i),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(n in e&&this.isPlainObject(e[n])&&this.isPlainObject(t[n])?this.deepExtend(e[n],t[n]):e[n]=t[n]);return e},throttle:function(e,t){var n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout(function(){n=!1},t))}},hash:function(e){var t,n,i=0;if(0===e.length)return i;for(t=0,n=e.length;t<n;++t)i=(i<<5)-i+e.charCodeAt(t),i|=0;return i},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),n=38+(t>>16),i=38+(t>>8&255),o=38+(255&t);return"#"+(16777216+65536*(n<255?n<1?0:n:255)+256*(i<255?i<1?0:i:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,n){return e&&e.parentNode?t.hasClass(e,n)?e:this.traverseDOMPath(e.parentNode,n):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n+"ransition"])return t[n];return""}(),e.hasTransition=!!e.transitionEnd;var n=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){function i(){this.initialise.apply(this,arguments)}function o(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function s(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function r(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var n=Object.keys(e.status),i=this.getStatus(),o=n.indexOf(i)>=0;return o&&t(i),o}function a(){var e=this.options.position.split("-"),t=[];return e.forEach(function(e){t.push("cc-"+e)}),t}function c(){var e=this.options,n="top"==e.position||"bottom"==e.position?"banner":"floating";t.isMobile()&&(n="floating");var i=["cc-"+n,"cc-type-"+e.type,"cc-theme-"+e.theme];return e.static&&i.push("cc-static"),i.push.apply(i,a.call(this)),function(e){var n=t.hash(JSON.stringify(e)),i="cc-color-override-"+n,o=t.isPlainObject(e);return this.customStyleSelector=o?i:null,o&&p(n,e,"."+i),o}.call(this,this.options.palette),this.customStyleSelector&&i.push(this.customStyleSelector),i}function l(n){var i=this.options,o=document.createElement("div"),s=i.container&&1===i.container.nodeType?i.container:document.body;o.innerHTML=n;var r=o.children[0];return r.style.display="none",t.hasClass(r,"cc-window")&&e.hasTransition&&t.addClass(r,"cc-invisible"),this.onButtonClick=u.bind(this),r.addEventListener("click",this.onButtonClick),i.autoAttach&&(s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r)),r}function u(i){var o=t.traverseDOMPath(i.target,"cc-btn")||i.target;if(t.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+n.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(o,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(o,"cc-revoke")&&this.revokeChoice()}function p(n,i,o){if(e.customStyles[n])++e.customStyles[n].references;else{var s={},r=i.popup,a=i.button,c=i.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||h(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var l=document.createElement("style");document.head.appendChild(l),e.customStyles[n]={references:1,element:l.sheet};var u=-1;for(var p in s)s.hasOwnProperty(p)&&l.sheet.insertRule(p+"{"+s[p].join(";")+"}",++u)}}function h(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function d(e,t){for(var n=0,i=e.length;n<i;++n){var o=e[n];if(o instanceof RegExp&&o.test(t)||"string"==typeof o&&o.length&&o===t)return!0}return!1}function f(){var n=this.setStatus.bind(this),i=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout(function(){n(e.status.dismiss),i(!0)},Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(t){window.pageYOffset>Math.floor(s)&&(n(e.status.dismiss),i(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(o){for(var s=!1,r=o.path.length,a=c.length,u=0;u<r;u++)if(!s)for(var p=0;p<a;p++)s||(s=t.hasClass(o.path[u],c[p]));s||(n(e.status.dismiss),i(!0),window.removeEventListener("click",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l))}}var v={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};return i.prototype.initialise=function(e){this.options&&this.destroy(),t.deepExtend(this.options={},v),t.isPlainObject(e)&&t.deepExtend(this.options,e),r.call(this)&&(this.options.enabled=!1),d(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),d(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var n=this.options.window.replace("{{classes}}",c.call(this).join(" ")).replace("{{children}}",function(){var e={},n=this.options;n.showLink||(n.elements.link="",n.elements.messagelink=n.elements.message),Object.keys(n.elements).forEach(function(i){e[i]=t.interpolateString(n.elements[i],function(e){var t=n.content[e];return e&&"string"==typeof t&&t.length?t:""})});var i=n.compliance[n.type];i||(i=n.compliance.info),e.compliance=t.interpolateString(i,function(t){return e[t]});var o=n.layouts[n.layout];return o||(o=n.layouts.basic),t.interpolateString(o,function(t){return e[t]})}.call(this)),i=this.options.overrideHTML;if("string"==typeof i&&i.length&&(n=i),this.options.static){var o=l.call(this,'<div class="cc-grower">'+n+"</div>");o.style.display="",this.element=o.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=l.call(this,n);f.call(this),function(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var n=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=l.call(this,n);var i=this.revokeBtn;if(this.options.animateRevokable){var o=t.throttle(function(e){var n=!1,o=window.innerHeight-20;t.hasClass(i,"cc-top")&&e.clientY<20&&(n=!0),t.hasClass(i,"cc-bottom")&&e.clientY>o&&(n=!0),n?t.hasClass(i,"cc-active")||t.addClass(i,"cc-active"):t.hasClass(i,"cc-active")&&t.removeClass(i,"cc-active")},200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}.call(this),this.options.autoOpen&&this.autoOpen()},i.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(n){if(t.isPlainObject(n)){var i=t.hash(JSON.stringify(n)),o=e.customStyles[i];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[i]=null}}}(this.options.palette),this.options=null},i.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},i.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},i.prototype.fadeIn=function(){var n=this.element;if(e.hasTransition&&n&&(this.afterTransition&&s.call(this,n),t.hasClass(n,"cc-invisible"))){if(n.style.display="",this.options.static){var i=this.element.clientHeight;this.element.parentNode.style.maxHeight=i+"px"}this.openingTimeout=setTimeout(o.bind(this,n),20)}},i.prototype.fadeOut=function(){var n=this.element;e.hasTransition&&n&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),o.bind(this,n)),t.hasClass(n,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=s.bind(this,n),n.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(n,"cc-invisible")))},i.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},i.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},i.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},i.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},i.prototype.hasConsented=function(t){var n=this.getStatus();return n==e.status.allow||n==e.status.dismiss},i.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},i.prototype.setStatus=function(n){var i=this.options.cookie,o=t.getCookie(i.name),s=Object.keys(e.status).indexOf(o)>=0;Object.keys(e.status).indexOf(n)>=0?(t.setCookie(i.name,n,i.expiryDays,i.domain,i.path,i.secure),this.options.onStatusChange.call(this,n,s)):this.clearStatus()},i.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},i.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},i}(),e.Location=function(){function e(e){t.deepExtend(this.options={},s),t.isPlainObject(e)&&t.deepExtend(this.options,e),this.currentServiceIndex=-1}function n(e,t,n){var i,o=document.createElement("script");o.type="text/"+(e.type||"javascript"),o.src=e.src||e,o.async=!1,o.onreadystatechange=o.onload=function(){var e=o.readyState;clearTimeout(i),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),i=setTimeout(function(){t.done=!0,t(),o.onreadystatechange=o.onload=null},n)}function i(e,t,n,i,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(i?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(i)}function o(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}var s={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var n=JSON.parse(t);return n.error?o(n):{code:n.country}}catch(e){return o({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var n=JSON.parse(t);return"ERROR"==n.statusCode?o({error:n.statusMessage}):{code:n.countryCode}}catch(e){return o({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){return window.geoip2?void geoip2.country(function(t){try{e({code:t.country.iso_code})}catch(t){e(o(t))}},function(t){e(o(t))}):void e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};return e.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},e.prototype.getServiceByIdx=function(e){var n=this.options.services[e];if("function"==typeof n){var i=n();return i.name&&t.deepExtend(i,this.options.serviceDefinitions[i.name](i)),i}return"string"==typeof n?this.options.serviceDefinitions[n]():t.isPlainObject(n)?this.options.serviceDefinitions[n.name](n):null},e.prototype.locate=function(e,t){var n=this.getNextService();return n?(this.callbackComplete=e,this.callbackError=t,void this.runService(n,this.runNextServiceOnError.bind(this))):void t(new Error("No services to run"))},e.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,function(n,i){if("callback"===i){var o="callback"+Date.now();return window[o]=function(t){e.__JSONP_DATA=JSON.stringify(t)},o}if(i in t.interpolateUrl)return t.interpolateUrl[i]})},e.prototype.runService=function(e,t){var o=this;e&&e.url&&e.callback&&(e.isScript?n:i)(this.setupUrl(e),function(n){var i=n?n.responseText:"";e.__JSONP_DATA&&(i=e.__JSONP_DATA,delete e.__JSONP_DATA),o.runServiceCallback.call(o,t,e,i)},this.options.timeout,e.data,e.headers)},e.prototype.runServiceCallback=function(e,t,n){var i=this,o=t.callback(function(t){o||i.onServiceResult.call(i,e,t)},n);o&&this.onServiceResult.call(this,e,o)},e.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},e.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var n=this.getNextService();n?this.runService(n,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},e.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},e.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},e.prototype.logError=function(e){var t=this.currentServiceIndex,n=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+n.url+") responded with the following error",e)},e}(),e.Law=function(){function e(e){this.initialise.apply(this,arguments)}var n={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};return e.prototype.initialise=function(e){t.deepExtend(this.options={},n),t.isPlainObject(e)&&t.deepExtend(this.options,e)},e.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},e.prototype.applyLaw=function(e,t){var n=this.get(t);return n.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,n)),this.options.regionalLaw&&(n.revokable&&(e.revokable=!0),n.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},e}(),e.initialise=function(n,i,o){var s=new e.Law(n.law);i||(i=function(){}),o||(o=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status");return r.indexOf(a)>=0?void i(new e.Popup(n)):void e.getCountryCode(n,function(t){delete n.law,delete n.location,t.code&&(n=s.applyLaw(n,t.code)),i(new e.Popup(n))},function(t){delete n.law,delete n.location,o(t,new e.Popup(n))})},e.getCountryCode=function(t,n,i){t.law&&t.law.countryCode?n({code:t.law.countryCode}):t.location?new e.Location(t.location).locate(function(e){n(e||{})},i):n({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{})},,function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i);n(4);o.a.initializers.add("reflar-cookie-consent",function(){$(document).ready(function(){var e=o.a.forum.attribute("reflar-cookie-consent.ccTheme"),t=o.a.forum.attribute("reflar-cookie-consent.backgroundColor"),n=o.a.forum.attribute("reflar-cookie-consent.textColor"),i=o.a.forum.attribute("reflar-cookie-consent.consentText"),s=o.a.forum.attribute("reflar-cookie-consent.buttonText"),r=o.a.forum.attribute("reflar-cookie-consent.buttonBackgroundColor"),a=o.a.forum.attribute("reflar-cookie-consent.buttonTextColor"),c=o.a.forum.attribute("reflar-cookie-consent.learnMoreLinkText"),l=o.a.forum.attribute("reflar-cookie-consent.learnMoreLinkUrl"),u={},p={};t&&(u.background=t),n&&(u.text=n),r&&(p.background=r),a&&(p.text=a);try{var h={palette:{popup:u,button:p},theme:e,content:{message:i,dismiss:s,link:c,href:l}};cookieconsent.initialise(h)}catch(e){o.a.forum.attribute("adminUrl")?(console.error("An error occurred initializing the Cookie Consent library. Please make sure you have set all the settings properly."),console.error("Please report the following error if you don't think the issue is on your end\n\n",e)):console.error("An error occurred with the cookie consent prompt. Please contact an administrator so they can fix the issue.")}delete window.cookieconsent})})}]);
//# sourceMappingURL=forum.js.map