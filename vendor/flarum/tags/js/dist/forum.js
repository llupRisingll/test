module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=48)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,n){"use strict";function a(t){return t.slice(0).sort((function(t,e){var n=t.position(),a=e.position();if(null===n&&null===a)return e.discussionCount()-t.discussionCount();if(null===a)return-1;if(null===n)return 1;var s=t.parent(),o=e.parent();return s===o?n-a:s&&o?s.position()-o.position():s?s===e?1:s.position()-a:o?o===t?-1:n-o.position():0}))}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(12),s=n.n(a);function o(t,e,n){void 0===e&&(e={}),void 0===n&&(n={});var a=t&&t.icon(),o=n.useColor,r=void 0===o||o;return e.className=s()([e.className,"icon",a?t.icon():"TagIcon"]),t?(e.style=e.style||{},a?e.style.color=r?t.color():"":e.style.backgroundColor=t.color()):e.className+=" untagged",a?m("i",e):m("span",e)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(11),s=n.n(a),o=n(4);function r(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var n=s()(e,"link"),a=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var r=t.color();r&&(e.style.backgroundColor=e.style.color=r,e.className+=" colored"),n&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}),e.config=m.route)}else e.className+=" untagged";return m(n?"a":"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&Object(o.a)(t,{},{useColor:!1})," ",a))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(11),s=n.n(a),o=n(5),r=n(2);function i(t,e){void 0===e&&(e={});var n=[],a=s()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(r.a)(t).forEach((function(e){(e||1===t.length)&&n.push(Object(o.a)(e,{link:a}))})):n.push(Object(o.a)()),m("span",e,n)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return a}))},function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(3),s=n(0),o=n.n(s),r=n(16),i=n.n(r),c=n(17),u=n.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(a.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),icon:o.a.attribute("icon"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",(function(t,e){return null!==t&&!1===e}))}))},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,n){"use strict";var a=n(2),s=n(10),o=n(7),r=n(4),i=n(5);e.a={"tags/utils/sortTags":a.a,"tags/models/Tag":s.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":r.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e,n){"use strict";var a=n(9),s=n(0),o=n.n(s),r=n(24),i=n.n(r),c=n(6),u=n.n(c),l=n(10),p=n(3),d=n(18),f=n.n(d),g=n(28),h=n.n(g),b=n(29),v=n.n(b),y=n(5),x=n(2),T=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.tags=Object(x.a)(app.store.all("tags").filter((function(t){return!t.parent()}))),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip"))},n.view=function(){var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},u.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav",config:u.a.prototype.affixSidebar},m("ul",null,h()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),n=Object(x.a)(app.store.all("tags").filter((function(e){return e.parent()===t})));return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m("a",{className:"TagTile-info",href:app.route.tag(t),config:m.route},m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),n?m("div",{className:"TagTile-children"},n.map((function(t){return[m("a",{href:app.route.tag(t),config:function(t,e){e||($(t).on("click",(function(t){return t.stopPropagation()})),m.route.apply(this,arguments))}},t.name())," "]}))):""),e?m("a",{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber()),config:m.route},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),v()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[Object(y.a)(t,{link:!0})," "]}))):"")))},n.config=function(){for(var e,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];(e=t.prototype.config).call.apply(e,[this].concat(a)),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(f.a),O=n(30),N=n.n(O),_=n(7),j=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t),e.initProps=function(e){t.initProps.call(this,e);var n=e.post.content()[0],a=e.post.content()[1];function s(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=s(a,n),e.tagsRemoved=s(n,a)};var n=e.prototype;return n.icon=function(){return"fas fa-tag"},n.descriptionKey=function(){return this.props.tagsAdded.length?this.props.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},n.descriptionData=function(){var t={};return this.props.tagsAdded.length&&(t.tagsAdded=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsAdded.length,{tags:Object(_.a)(this.props.tagsAdded,{link:!0}),count:this.props.tagsAdded.length})),this.props.tagsRemoved.length&&(t.tagsRemoved=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.props.tagsRemoved.length,{tags:Object(_.a)(this.props.tagsRemoved,{link:!0}),count:this.props.tagsRemoved.length})),t},e}(N.a),P=n(1),C=n(31),D=n.n(C),I=n(22),k=n.n(I),w=n(4),S=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=this.constructor.isActive(this.props),n=t&&t.description();return m("a",{className:"TagLinkButton hasIcon "+(t.isChild()?"child":""),href:this.props.href,config:m.route,style:e&&t?{color:t.color()}:"",title:n||""},Object(w.a)(t,{className:"Button-icon"}),this.props.children)},e.initProps=function(t){var e=t.tag;t.params.tags=e?e.slug():"untagged",t.href=app.route("tag",t.params),t.children=e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link")},e}(k.a),A=function(){Object(P.extend)(u.a.prototype,"navItems",(function(t){if(t.add("tags",k.a.component({icon:"fas fa-th-large",children:app.translator.trans("flarum-tags.forum.index.tags_link"),href:app.route("tags")}),-10),!(app.current instanceof T)){t.add("separator",D.a.component(),-12);var e=this.stickyParams(),n=app.store.all("tags"),a=this.currentTag(),s=function(n){var s=a===n;!s&&a&&(s=a.parent()===n),t.add("tag"+n.id(),S.component({tag:n,params:e,active:s}),-14)};Object(x.a)(n).filter((function(t){return null!==t.position()&&(!t.isChild()||a&&(t.parent()===a||t.parent()===a.parent()))})).forEach(s);var o=n.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(s),o.length&&t.add("moreTags",k.a.component({children:app.translator.trans("flarum-tags.forum.index.more_link"),href:app.route("tags")}),-16)}}))},L=n(32),M=n.n(L),H=n(33),B=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.props.tag,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&Object(w.a)(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(n.n(H).a),R=function(){u.a.prototype.currentTag=function(){var t=this.params().tags;if(t)return app.store.getBy("tags","slug",t)},Object(P.override)(u.a.prototype,"hero",(function(t){var e=this.currentTag();return e?B.component({tag:e}):t()})),Object(P.extend)(u.a.prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),Object(P.extend)(u.a.prototype,"config",(function(){var t=this.currentTag();t&&app.setTitle(t.name())})),Object(P.extend)(u.a.prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var n=e.color(),a=e.canStartDiscussion();n&&(t.get("newDiscussion").props.style={backgroundColor:n}),t.get("newDiscussion").props.disabled=!a,t.get("newDiscussion").props.children=app.translator.trans(a?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),Object(P.extend)(u.a.prototype,"params",(function(t){t.tags=m.route.param("tags")})),Object(P.extend)(M.a.prototype,"requestParams",(function(t){t.include.push("tags"),this.props.params.tags&&(t.filter.q=(t.filter.q||"")+" tag:"+this.props.params.tags)}))},E=n(34),q=n.n(E),K=n(23),F=n.n(K),U=n(25),z=n.n(U),G=function(){Object(P.extend)(q.a.prototype,"infoItems",(function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(_.a)(e),10)})),Object(P.extend)(F.a.prototype,"params",(function(t){t.include.push("tags")})),Object(P.extend)(z.a.prototype,"view",(function(t){var e=Object(x.a)(this.props.discussion.tags());if(e&&e.length){var n=e[0].color();n&&(t.attrs.style={backgroundColor:n},t.attrs.className+=" DiscussionHero--colored")}})),Object(P.extend)(z.a.prototype,"items",(function(t){var e=this.props.discussion.tags();e&&e.length&&t.add("tags",Object(_.a)(e,{link:!0}),5)}))},J=n(35),Q=n.n(J),V=n(8),W=n.n(V),X=n(19),Y=n.n(X),Z=n(36),tt=n.n(Z),et=n(12),nt=n.n(et),at=n(37),st=n.n(at),ot=n(38),rt=n.n(ot),it=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.init=function(){var e=this;t.prototype.init.call(this),this.tags=app.store.all("tags"),this.props.discussion?this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==e.props.discussion.tags().indexOf(t)})):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.tags=Object(x.a)(this.tags),this.selected=[],this.filter=m.prop(""),this.index=this.tags[0].id(),this.focused=!1,this.props.selectedTags?this.props.selectedTags.map(this.addTag.bind(this)):this.props.discussion&&this.props.discussion.tags().map(this.addTag.bind(this)),this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new rt.a,this.navigator.onUp((function(){return e.setIndex(e.getCurrentNumericIndex()-1,!0)})).onDown((function(){return e.setIndex(e.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return e.selected.splice(e.selected.length-1,1)}))},n.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},n.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},n.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();if(e)-1===this.selected.indexOf(e)&&this.selected.push(e);this.selected.push(t)}},n.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},n.className=function(){return"TagDiscussionModal"},n.title=function(){return this.props.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},n.getInstruction=function(t,e){if(t<this.minPrimary){var n=this.minPrimary-t;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_primary_placeholder",n,{count:n})}if(e<this.minSecondary){var a=this.minSecondary-e;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_secondary_placeholder",a,{count:a})}return""},n.content=function(){var t=this,e=this.tags,n=this.filter().toLowerCase(),a=this.primaryCount(),s=this.secondaryCount();return e=e.filter((function(e){var n=e.parent();return!1===n||-1!==t.selected.indexOf(n)})),a>=this.maxPrimary&&(e=e.filter((function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)}))),s>=this.maxSecondary&&(e=e.filter((function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)}))),n&&(e=e.filter((function(t){return t.name().substr(0,n.length).toLowerCase()===n}))),-1===e.indexOf(this.index)&&(this.index=e[0]),[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":"")},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(y.a)(e))}))),m("input",{className:"FormControl",placeholder:st()(this.getInstruction(a,s)),value:this.filter(),oninput:m.withAttr("value",this.filter),onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},W.a.component({type:"submit",className:"Button Button--primary",disabled:a<this.minPrimary||s<this.minSecondary,icon:"fas fa-check",children:app.translator.trans("flarum-tags.forum.choose_tags.submit_button")})))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return n||!e.parent()||-1!==t.selected.indexOf(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:nt()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(w.a)(e),m("span",{className:"SelectTagListItem-name"},tt()(e.name(),n)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))))]},n.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},n.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$("form").submit():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},n.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},n.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},n.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},n.setIndex=function(t,e){var n=this.selectableItems(),a=n.parent();t<0?t=n.length-1:t>=n.length&&(t=0);var s=n.eq(t);if(this.index=app.store.getById("tags",s.attr("data-index")),m.redraw(),e){var o,r=a.scrollTop(),i=a.offset().top,c=i+a.outerHeight(),u=s.offset().top,l=u+s.outerHeight();u<i?o=r-i+u-parseInt(a.css("padding-top"),10):l>c&&(o=r-c+l+parseInt(a.css("padding-bottom"),10)),void 0!==o&&a.stop(!0).animate({scrollTop:o},100)}},n.onsubmit=function(t){t.preventDefault();var e=this.props.discussion,n=this.selected;e&&e.save({relationships:{tags:n}}).then((function(){app.current instanceof F.a&&app.current.stream.update(),m.redraw()})),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),m.redraw.strategy("none")},e}(Y.a),ct=function(){Object(P.extend)(Q.a,"moderationControls",(function(t,e){e.canTag()&&t.add("tags",W.a.component({children:app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button"),icon:"fas fa-tag",onclick:function(){return app.modal.show(new it({discussion:e}))}}))}))},ut=n(14),lt=n.n(ut),pt=function(){Object(P.extend)(u.a.prototype,"newDiscussionAction",(function(t){var e=app.store.getBy("tags","slug",this.params().tags);if(e){var n=e.parent(),a=n?[n,e]:[e];t.then((function(t){return t.tags=a}))}})),lt.a.prototype.tags=[],lt.a.prototype.chooseTags=function(){var t=this;app.modal.show(new it({selectedTags:this.tags.slice(0),onsubmit:function(e){t.tags=e,t.$("textarea").focus()}}))},Object(P.extend)(lt.a.prototype,"headerItems",(function(t){t.add("tags",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseTags.bind(this)},this.tags.length?Object(_.a)(this.tags):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),Object(P.override)(lt.a.prototype,"onsubmit",(function(t){var e=this,n=this.tags,a=n.filter((function(t){return null!==t.position()&&!t.isChild()})),s=n.filter((function(t){return null===t.position()}));!n.length||a.length<app.forum.attribute("minPrimaryTags")||s.length<app.forum.attribute("minSecondaryTags")?app.modal.show(new it({selectedTags:n,onsubmit:function(n){e.tags=n,t()}})):t()})),Object(P.extend)(lt.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.tags}))},dt=n(20),mt=Object(a.a)(dt.a,{"tags/addTagFilter":R,"tags/addTagControl":ct,"tags/components/TagHero":B,"tags/components/TagDiscussionModal":it,"tags/components/TagsPage":T,"tags/components/DiscussionTaggedPost":j,"tags/components/TagLinkButton":S,"tags/addTagList":A,"tags/addTagLabels":G,"tags/addTagComposer":pt}),ft=n(21);app.initializers.add("flarum-tags",(function(t){t.routes.tags={path:"/tags",component:T.component()},t.routes.tag={path:"/t/:tags",component:u.a.component()},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=j,t.store.models.tags=l.a,i.a.prototype.tags=o.a.hasMany("tags"),i.a.prototype.canTag=o.a.attribute("canTag"),A(),R(),G(),ct(),pt()})),Object(a.a)(ft.compat,mt)},,function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var a=n(15);for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n(26)}]);
//# sourceMappingURL=forum.js.map