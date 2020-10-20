module.exports=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},,function(e,t){e.exports=flarum.core.compat["utils/UserControls"]},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["components/Modal"]},,function(e,t,r){"use strict";r.r(t);var o=r(2),n=r(0),a=r.n(n),i=r(6),s=r.n(i),u=r(3),l=r.n(u),p=r(1),c=r.n(p),f=r(7),d=r.n(f);function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var b=r(8),y=r.n(b),v=r(4),x=r.n(v),g=function(e){function t(){return e.apply(this,arguments)||this}h(t,e);var r=t.prototype;return r.init=function(){e.prototype.init.call(this),this.user=this.props.user,this.reason=m.prop(""),this.loading=!1,this.reasonEnabled=app.forum.attribute("impersonateEnableReason"),this.reasonRequired=app.forum.attribute("impersonateReasonRequired")},r.className=function(){return"ImpersonateModal Modal--medium"},r.title=function(){return app.translator.trans("fof-impersonate.forum.modal.title")},r.content=function(){return m("div",{className:"Modal-body"},m("div",null,m("p",null,app.translator.trans("fof-impersonate.forum.modal.label",{username:x()(this.user)}))),m("div",{className:"Form Form--centered"},this.reasonEnabled?m("div",{className:"Form-group"},m("textarea",{className:"FormControl",value:this.reason(),placeholder:this.reasonRequired?app.translator.trans("fof-impersonate.forum.modal.placeholder_required"):app.translator.trans("fof-impersonate.forum.modal.placeholder_optional"),oninput:m.withAttr("value",this.reason),rows:"4"})):"",m("div",{className:"Form-group"},l.a.component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading,children:app.translator.trans("fof-impersonate.forum.modal.impersonate_username",{username:x()(this.user)})}))))},r.onsubmit=function(e){e.preventDefault(),this.loading=!0,app.store.createRecord("impersonate").save({userId:this.user.id(),reason:this.reason()},{errorHandler:this.onerror.bind(this)}).then(this.props.callback).catch((function(){}))},r.onerror=function(t){422===t.status&&(t.alert.props.children=app.translator.trans("fof-impersonate.forum.modal.placeholder_required")),this.loading=!1,e.prototype.onerror.call(this,t)},t}(y.a);function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return w(_(t=e.call.apply(e,[this].concat(o))||this),"id",c.a.attribute("id")),w(_(t),"reason",c.a.attribute("reason")),t}return h(t,e),t}(c.a);a.a.initializers.add("fof/impersonate",(function(){d.a.prototype.fofCanImpersonate=c.a.attribute("fofCanImpersonate"),a.a.store.models.impersonate=j,Object(o.extend)(s.a,"moderationControls",(function(e,t){t.fofCanImpersonate()&&e.add("fof-impersonate-login",l.a.component({children:a.a.translator.trans("fof-impersonate.forum.user_controls.impersonate_button"),icon:"fas fa-id-card",onclick:function(){a.a.modal.show(new g({callback:function(){return window.location.reload()},user:t}))}}))}))}))}]);
//# sourceMappingURL=forum.js.map