define("spectre-canjs@3.6.1#sp-form/demo/basic/basic.stache!steal-stache@4.1.2#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.2.0#can-view-import","can-stache-bindings@4.4.1#can-stache-bindings"],function(e,a,t){var s=a("sp-form/demo/basic/basic.stache",[{tokenType:"start",args:["div",!1,1]},{tokenType:"attrStart",args:["class",1]},{tokenType:"attrValue",args:["container",1]},{tokenType:"attrEnd",args:["class",1]},{tokenType:"end",args:["div",!1,1]},{tokenType:"chars",args:["\n    ",1]},{tokenType:"start",args:["sp-form",!1,2]},{tokenType:"attrStart",args:["object:from",2]},{tokenType:"attrValue",args:["current",2]},{tokenType:"attrEnd",args:["object:from",2]},{tokenType:"attrStart",args:["on:submit",2]},{tokenType:"attrValue",args:["onSubmit(scope.arguments)",2]},{tokenType:"attrEnd",args:["on:submit",2]},{tokenType:"attrStart",args:["show:u:saving:from",2]},{tokenType:"attrValue",args:["isSaving",2]},{tokenType:"attrEnd",args:["show:u:saving:from",2]},{tokenType:"end",args:["sp-form",!1,2]},{tokenType:"close",args:["sp-form",2]},{tokenType:"chars",args:["\n    ",2]},{tokenType:"start",args:["div",!0,3]},{tokenType:"attrStart",args:["class",3]},{tokenType:"attrValue",args:["divider",3]},{tokenType:"attrEnd",args:["class",3]},{tokenType:"end",args:["div",!0,3]},{tokenType:"chars",args:[" ",3]},{tokenType:"special",args:["#if(tasks.length)",3]},{tokenType:"chars",args:["\n        ",3]},{tokenType:"start",args:["h5",!1,4]},{tokenType:"end",args:["h5",!1,4]},{tokenType:"chars",args:["Current Tasks (",4]},{tokenType:"special",args:["tasks.hours",4]},{tokenType:"chars",args:[" Hours):",4]},{tokenType:"close",args:["h5",4]},{tokenType:"chars",args:["\n        ",4]},{tokenType:"special",args:["#for(task of tasks)",5]},{tokenType:"chars",args:["\n            ",5]},{tokenType:"start",args:["p",!1,6]},{tokenType:"end",args:["p",!1,6]},{tokenType:"start",args:["strong",!1,6]},{tokenType:"end",args:["strong",!1,6]},{tokenType:"special",args:["task.name",6]},{tokenType:"close",args:["strong",6]},{tokenType:"chars",args:[" - Hours: ",6]},{tokenType:"special",args:["task.hours",6]},{tokenType:"close",args:["p",6]},{tokenType:"chars",args:["\n        ",6]},{tokenType:"special",args:["/for",7]},{tokenType:"chars",args:["\n        ",7]},{tokenType:"start",args:["div",!1,8]},{tokenType:"attrStart",args:["class",8]},{tokenType:"attrValue",args:["btn-group btn-group-block",8]},{tokenType:"attrEnd",args:["class",8]},{tokenType:"end",args:["div",!1,8]},{tokenType:"chars",args:["\n            ",8]},{tokenType:"start",args:["button",!1,9]},{tokenType:"attrStart",args:["class",9]},{tokenType:"attrValue",args:["btn btn-primary",9]},{tokenType:"attrEnd",args:["class",9]},{tokenType:"attrStart",args:["on:click",9]},{tokenType:"attrValue",args:["persist()",9]},{tokenType:"attrEnd",args:["on:click",9]},{tokenType:"end",args:["button",!1,9]},{tokenType:"start",args:["i",!1,9]},{tokenType:"attrStart",args:["class",9]},{tokenType:"attrValue",args:["fa fa-hdd-o",9]},{tokenType:"attrEnd",args:["class",9]},{tokenType:"end",args:["i",!1,9]},{tokenType:"close",args:["i",9]},{tokenType:"chars",args:[" Store Tasks",9]},{tokenType:"close",args:["button",9]},{tokenType:"chars",args:["\n            ",9]},{tokenType:"start",args:["button",!1,10]},{tokenType:"attrStart",args:["class",10]},{tokenType:"attrValue",args:["btn btn-primary",10]},{tokenType:"attrEnd",args:["class",10]},{tokenType:"attrStart",args:["on:click",10]},{tokenType:"attrValue",args:["clear()",10]},{tokenType:"attrEnd",args:["on:click",10]},{tokenType:"end",args:["button",!1,10]},{tokenType:"start",args:["i",!1,10]},{tokenType:"attrStart",args:["class",10]},{tokenType:"attrValue",args:["fa fa-trash",10]},{tokenType:"attrEnd",args:["class",10]},{tokenType:"end",args:["i",!1,10]},{tokenType:"close",args:["i",10]},{tokenType:"chars",args:[" Delete Tasks",10]},{tokenType:"close",args:["button",10]},{tokenType:"chars",args:["\n        ",10]},{tokenType:"close",args:["div",11]},{tokenType:"chars",args:["\n    ",11]},{tokenType:"special",args:["/if",12]},{tokenType:"chars",args:["\n\n",12]},{tokenType:"close",args:["div",14]},{tokenType:"done",args:[14]}]);return function(a,t,n){var r=Object.assign({},t);return r.helpers?r.helpers=Object.assign({module:e},r.helpers):r.module=e,s(a,r,n)}}),define("spectre-canjs@3.6.1#sp-form/demo/basic/basic",["exports","can-define@2.6.3#map/map","can-define@2.6.3#list/list","spectre-canjs@3.6.1#sp-form/demo/basic/basic.stache!steal-stache@4.1.2#steal-stache","flatpickr@4.5.2#dist/flatpickr","spectre-canjs@3.6.1#sp-form/sp-form","spectre-canjs@3.6.1#sp-form/fields/sp-text-field/sp-text-field","flatpickr@4.5.2#dist/flatpickr.min.css!steal-css@1.3.2#css","can-component@4.4.2#can-component","can-component@4.4.2#control/control","can-control@4.2.0#can-control","can-construct@3.5.3#can-construct","can-reflect@1.17.5#can-reflect","can-reflect@1.17.5#reflections/call/call","can-symbol@1.6.1#can-symbol","can-namespace@1.0.0#can-namespace","can-reflect@1.17.5#reflections/type/type","can-reflect@1.17.5#reflections/helpers","can-reflect@1.17.5#reflections/get-set/get-set","can-reflect@1.17.5#reflections/observe/observe","can-reflect@1.17.5#reflections/shape/shape","can-reflect@1.17.5#reflections/shape/schema/schema","can-reflect@1.17.5#reflections/get-name/get-name","can-reflect@1.17.5#types/map","can-reflect@1.17.5#types/set","can-log@1.0.0#dev/dev","can-log@1.0.0#can-log","can-string@1.0.0#can-string","can-assign@1.3.1#can-assign","can-stache-key@1.4.0#can-stache-key","can-observation-recorder@1.2.0#can-observation-recorder","can-reflect-promise@2.1.0#can-reflect-promise","can-queues@1.1.3#can-queues","can-queues@1.1.3#queue","can-queues@1.1.3#queue-state","can-queues@1.1.3#priority-queue","can-queues@1.1.3#completion-queue","can-key-tree@1.2.0#can-key-tree","can-observation@4.1.0#can-observation","can-event-queue@1.1.0#value/value","can-define-lazy-value@1.1.0#define-lazy-value","can-event-queue@1.1.0#dependency-record/merge","can-observation@4.1.0#recorder-dependency-helpers","can-observation@4.1.0#temporarily-bind","can-event-queue@1.1.0#map/map","can-dom-events@1.3.0#can-dom-events","can-dom-events@1.3.0#helpers/util","can-globals@1.2.0#document/document","can-globals@1.2.0#global/global","can-globals@1.2.0#can-globals-instance","can-globals@1.2.0#can-globals-proto","can-globals@1.2.0#is-browser-window/is-browser-window","can-globals@1.2.0#is-node/is-node","can-dom-events@1.3.0#helpers/make-event-registry","can-dom-events@1.3.0#helpers/-make-delegate-event-tree","can-key@1.2.0#get/get","can-key@1.2.0#utils","can-dom-mutate@1.2.1#can-dom-mutate","can-globals@1.2.0#can-globals","can-globals@1.2.0#location/location","can-globals@1.2.0#mutation-observer/mutation-observer","can-globals@1.2.0#custom-elements/custom-elements","can-dom-mutate@1.2.1#-util","can-bind@1.0.0#can-bind","can-reflect-dependencies@1.1.0#can-reflect-dependencies","can-reflect-dependencies@1.1.0#src/add-mutated-by","can-reflect-dependencies@1.1.0#src/delete-mutated-by","can-reflect-dependencies@1.1.0#src/get-dependency-data-of","can-reflect-dependencies@1.1.0#src/is-function","can-stache@4.12.0#can-stache","can-view-parser@4.1.0#can-view-parser","can-attribute-encoder@1.1.0#can-attribute-encoder","can-view-callbacks@4.3.1#can-view-callbacks","can-dom-mutate@1.2.1#node","can-view-nodelist@4.3.2#can-view-nodelist","can-fragment@1.2.0#can-fragment","can-child-nodes@1.2.0#can-child-nodes","can-stache@4.12.0#src/html_section","can-view-target@4.1.0#can-view-target","can-view-scope@4.9.1#can-view-scope","can-view-scope@4.9.1#template-context","can-simple-map@4.3.0#can-simple-map","can-view-scope@4.9.1#compute_data","can-view-scope@4.9.1#scope-key-data","can-view-scope@4.9.1#make-compute-like","can-single-reference@1.2.0#can-single-reference","can-cid@1.3.0#can-cid","can-stache-helpers@1.2.0#can-stache-helpers","can-stache@4.12.0#src/utils","can-stache@4.12.0#src/key-observable","can-simple-observable@2.3.0#settable/settable","can-simple-observable@2.3.0#can-simple-observable","can-simple-observable@2.3.0#log","can-stache@4.12.0#src/text_section","can-view-live@4.2.2#can-view-live","can-view-live@4.2.2#lib/core","can-view-live@4.2.2#lib/attr","can-attribute-observable@1.1.3#behaviors","can-dom-data-state@1.0.2#can-dom-data-state","can-diff@1.4.2#list/list","can-view-live@4.2.2#lib/attrs","can-view-live@4.2.2#lib/html","can-view-live@4.2.2#lib/list","can-view-live@4.2.2#lib/set-observable","can-diff@1.4.2#patcher/patcher","can-view-live@4.2.2#lib/text","can-stache@4.12.0#src/mustache_core","can-stache@4.12.0#src/expression","can-stache@4.12.0#expressions/arg","can-stache@4.12.0#expressions/literal","can-stache@4.12.0#expressions/hashes","can-stache@4.12.0#src/expression-helpers","can-simple-observable@2.3.0#setter/setter","can-stache@4.12.0#expressions/bracket","can-stache@4.12.0#expressions/call","can-stache@4.12.0#src/set-identifier","can-stache@4.12.0#expressions/helper","can-stache@4.12.0#expressions/lookup","can-stache@4.12.0#helpers/core","can-globals@1.2.0#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.0#can-parse-uri","can-stache@4.12.0#helpers/-debugger","can-stache@4.12.0#src/truthy-observable","can-dom-data@1.0.1#can-dom-data","can-stache@4.12.0#helpers/-for-of","can-stache@4.12.0#helpers/-let","can-stache@4.12.0#helpers/converter","can-stache-ast@1.0.0#can-stache-ast","can-stache-ast@1.0.0#controls","can-import-module@1.2.0#can-import-module","can-stache-bindings@4.4.1#can-stache-bindings","can-view-model@4.0.1#can-view-model","can-attribute-observable@1.1.3#can-attribute-observable","can-attribute-observable@1.1.3#event","can-attribute-observable@1.1.3#get-event-name","can-event-dom-radiochange@2.2.0#can-event-dom-radiochange","spectre-canjs@3.6.1#sp-form/template.stache!steal-stache@4.1.2#steal-stache","can-view-import@4.2.0#can-view-import","spectre-canjs@3.6.1#sp-form/ViewModel","spectre-canjs@3.6.1#util/field/base/FieldIteratorMap","spectre-canjs@3.6.1#util/field/parseFieldArray/parseFieldArray","spectre-canjs@3.6.1#util/field/Field","spectre-canjs@3.6.1#util/string/string","spectre-canjs@3.6.1#util/field/fieldComponents","spectre-canjs@3.6.1#util/field/mapToFields/mapToFields","spectre-canjs@3.6.1#sp-form/widget.less!steal-less@1.3.1#less","spectre-canjs@3.6.1#sp-form/fields/sp-text-field/sp-text-field.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.1#sp-form/fields/sp-text-field/ViewModel","can-define@2.6.3#can-define","can-simple-observable@2.3.0#async/async","can-simple-observable@2.3.0#resolver/resolver","can-event-queue@1.1.0#type/type","can-string-to-any@1.2.0#can-string-to-any","can-data-types@1.2.0#maybe-boolean/maybe-boolean","can-data-types@1.2.0#maybe-date/maybe-date","can-data-types@1.2.0#maybe-number/maybe-number","can-data-types@1.2.0#maybe-string/maybe-string","can-define@2.6.3#define-helpers/define-helpers","can-define@2.6.3#ensure-meta"],function(e,a,t,s,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function c(e){if(!e.value)return"This value is required"}Object.defineProperty(e,"__esModule",{value:!0});var o=r(a),i=r(t),l=r(s),p=r(n),d=function(){function e(e,a){var t=[],s=!0,n=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(s=(c=o.next()).done)&&(t.push(c.value),!a||t.length!==a);s=!0);}catch(e){n=!0,r=e}finally{try{!s&&o.return&&o.return()}finally{if(n)throw r}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=o.default.extend("Task",{name:{type:"string",validate:c},hours:{type:"number",textType:"number",validate:c},dateCompleted:{onInsert:function(e){(0,p.default)(e)},alias:"Date Completed",validate:c,ui:"datepicker",type:"date"}}),g=new(i.default.extend({"#":u,hours:{get:function(){return this.reduce(function(e,a){return a.hours+e},0)}}}))(localStorage.tasks?JSON.parse(localStorage.tasks):[]),y=new o.default({current:new u,tasks:g,isSaving:!1,onSubmit:function(e){var a=d(e,1)[0];this.tasks.push(a),this.current=new u,this.isSaving=!1},persist:function(){localStorage.tasks=JSON.stringify(this.tasks.serialize()),alert("Tasks Saved!")},clear:function(){this.tasks.replace([]),this.persist()}});e.default=function(){document.body.appendChild((0,l.default)(y))}});
//# sourceMappingURL=basic.js.map