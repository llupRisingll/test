module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=25)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e,o){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,o){"use strict";e.a=function(t,e){return void 0===e&&(e="sort"),t.sort((function(t,o){return t[e]()-o[e]()}))}},function(t,e){t.exports=flarum.core.compat.Component},function(t,e,o){"use strict";o.d(e,"a",(function(){return f}));var r=o(2),n=o(1),a=o.n(n),s=o(8),i=o.n(s),c=o(9),u=o.n(c),f=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.apiEndpoint=function(){return"/fof/terms/policies"+(this.exists?"/"+this.data.id:"")},e}(i()(a.a,{sort:a.a.attribute("sort"),name:a.a.attribute("name"),url:a.a.attribute("url"),update_message:a.a.attribute("update_message"),terms_updated_at:a.a.attribute("terms_updated_at"),form_key:u()("id",(function(t){return"fof_terms_policy_"+t}))}))},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/SignUpModal"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},,,,,,function(t,e,o){"use strict";o.r(e);var r=o(3),n=o(0),a=o.n(n),s=o(1),i=o.n(s),c=o(10),u=o.n(c),f=o(7),p=o(14),l=o.n(p),d=o(11),h=o.n(d),b=o(2),y=o(12),v=o.n(y),_=o(4),x=o.n(_),g=o(5),P=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var o=e.prototype;return o.init=function(){var e=this;t.prototype.init.call(this),a.a.store.all("fof-terms-policies").forEach((function(t){e[t.form_key()]=m.prop(!1)}))},o.title=function(){return a.a.translator.trans("fof-terms.forum.accept-modal.title")},o.content=function(){return m(".Modal-body",this.body())},o.body=function(){var t=this,e=Object(g.a)(a.a.store.all("fof-terms-policies").filter((function(t){var e=a.a.session.user.fofTermsPoliciesState()[t.id()];return!e||e.has_update})));return 0===e.length?x.a.component({className:"Button",children:a.a.translator.trans("fof-terms.forum.accept-modal.close"),onclick:function(){a.a.modal.close()}}):e.map((function(o){return m("div",[m("h2",o.name()),a.a.forum.attribute("fof-terms.hide-updated-at")?null:m("p",o.terms_updated_at()?a.a.translator.trans("fof-terms.forum.accept-modal.updated-at",{date:moment(o.terms_updated_at()).format(a.a.forum.attribute("fof-terms.date-format"))}):a.a.translator.trans("fof-terms.forum.accept-modal.updated-recently")),o.update_message()?m("p",o.update_message()):null,m(".Form-group",m(".FoF-Terms-Check.FoF-Terms-Check--login",m("label.checkbox",[m("input",{type:"checkbox",bidi:t[o.form_key()]}),a.a.translator.trans("fof-terms.forum.accept-modal.i-accept",{policy:o.name(),a:o.url()?m("a",{href:o.url(),target:"_blank"}):m("span")})]))),x.a.component({className:"Button Button--primary",children:a.a.translator.trans("fof-terms.forum.accept-modal.accept"),disabled:!t[o.form_key()](),onclick:function(){var r=a.a.session.user.fofTermsPoliciesMustAccept();a.a.request({url:a.a.forum.attribute("apiUrl")+o.apiEndpoint()+"/accept",method:"POST",errorHandler:t.onerror.bind(t)}).then((function(t){a.a.store.pushPayload(t),1===e.length&&(r?window.location.reload():a.a.modal.close()),m.redraw()}))}})])}))},e}(v.a),T=o(13),O=o.n(T),j=o(15),k=o.n(j),w=o(16),S=o.n(w),F=o(6),M=o.n(F),A=o(17),U=function(t){function e(){return t.apply(this,arguments)||this}return Object(b.a)(e,t),e.prototype.view=function(){var e=t.prototype.view.call(this);return e.children=[m(".container",e.children)],e},e}(o.n(A).a),C=!1,B=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var o=e.prototype;return o.shouldShowAlert=function(){if(C)return!1;var t=a.a.session.user;return t&&t.fofTermsPoliciesHasUpdate()},o.view=function(){return this.shouldShowAlert()?U.component({type:"info",children:a.a.session.user.fofTermsPoliciesMustAccept()?a.a.translator.trans("fof-terms.forum.update-alert.must-accept-message"):a.a.translator.trans("fof-terms.forum.update-alert.can-accept-message"),controls:[x.a.component({className:"Button Button--link",children:a.a.translator.trans("fof-terms.forum.update-alert.review"),onclick:function(){a.a.modal.show(new P)}})],dismissible:!a.a.session.user.fofTermsPoliciesMustAccept(),ondismiss:function(){C=!0}}):m("div")},e}(M.a);function E(t){var e=t(),o=B.component();return Array.isArray(e)?(e.unshift(o),e):m("div",[o,e])}var H=o(18),N=o.n(H),D=o(19),q=o.n(D),z=function(t){function e(){return t.apply(this,arguments)||this}Object(b.a)(e,t);var o=e.prototype;return o.init=function(){t.prototype.init.call(this)},o.title=function(){return a.a.translator.trans("fof-terms.forum.state-modal.title",{username:this.props.user.username()})},o.content=function(){var t=this;return m(".Modal-body",m("ul",Object(g.a)(a.a.store.all("fof-terms-policies")).map((function(e){var o=t.props.user.fofTermsPoliciesState()[e.id()];return m("li",[e.name()+": ",o&&o.accepted_at?a.a.translator.trans("fof-terms.forum.state-modal.accepted-at",{date:q()(moment(o.accepted_at))}):a.a.translator.trans("fof-terms.forum.state-modal.not-accepted")])}))))},e}(v.a);a.a.initializers.add("fof-terms",(function(){var t;a.a.store.models["fof-terms-policies"]=f.a,u.a.prototype.fofTermsPoliciesState=i.a.attribute("fofTermsPoliciesState"),u.a.prototype.fofTermsPoliciesHasUpdate=i.a.attribute("fofTermsPoliciesHasUpdate"),u.a.prototype.fofTermsPoliciesMustAccept=i.a.attribute("fofTermsPoliciesMustAccept"),u.a.prototype.seeFoFTermsPoliciesState=i.a.attribute("seeFoFTermsPoliciesState"),t=!1,Object(r.extend)(l.a.prototype,"init",(function(){if(!t){if(a.a.current instanceof h.a){var e=a.a.session.user;e&&e.fofTermsPoliciesMustAccept()&&a.a.modal.show(new P)}t=!0}})),Object(r.extend)(O.a.prototype,"init",(function(){var t=this;this.fofTermsPolicies=Object(g.a)(a.a.store.all("fof-terms-policies")),this.fofTermsPolicies.forEach((function(e){t[e.form_key()]=m.prop(!1)}))})),Object(r.extend)(O.a.prototype,"fields",(function(t){var e=this,o=a.a.forum.attribute("fof-terms.signup-legal-text");o&&t.add("fof-terms-legal-text",m(".Form-group",m(".FoF-Terms-SignUp-Legal.Alert",o))),this.fofTermsPolicies.forEach((function(o){t.add("fof-terms-policy-"+o.id(),m(".Form-group",m(".FoF-Terms-Check.FoF-Terms-Check--signup",m("label.checkbox",[m("input",{type:"checkbox",bidi:e[o.form_key()],disabled:e.loading}),a.a.translator.trans("fof-terms.forum.signup.i-accept",{policy:o.name(),a:o.url()?m("a",{href:o.url(),target:"_blank"}):m("span")})]))))}))})),Object(r.extend)(O.a.prototype,"submitData",(function(t){var e=this;this.fofTermsPolicies.forEach((function(o){t[o.form_key()]=e[o.form_key()]()}))})),Object(r.override)(h.a.prototype,"hero",E),Object(r.override)(k.a.prototype,"view",E),Object(r.override)(S.a.prototype,"view",E),Object(r.extend)(N.a,"moderationControls",(function(t,e){a.a.forum.attribute("fof-terms.canSeeUserPoliciesState")&&t.add("fof-terms.state",x.a.component({icon:"fas fa-paperclip",children:a.a.translator.trans("fof-terms.forum.user_controls.state_button"),onclick:function(){a.a.modal.show(new z({user:e}))}}))}))}))}]);
//# sourceMappingURL=forum.js.map