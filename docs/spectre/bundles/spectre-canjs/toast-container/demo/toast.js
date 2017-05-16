/*spectre-canjs@0.29.0#toast-container/toast-container.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#toast-container/toast-container.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(t,e,a){var s=e([{tokenType:"chars",args:["\n"]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["toasts"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["#each toasts"]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["toast-item",!0]},{tokenType:"attrStart",args:["(hide)"]},{tokenType:"attrValue",args:["removeToast(.)"]},{tokenType:"attrEnd",args:["(hide)"]},{tokenType:"attrStart",args:["severity"]},{tokenType:"special",args:["severity"]},{tokenType:"attrEnd",args:["severity"]},{tokenType:"attrStart",args:["visible"]},{tokenType:"special",args:["visible"]},{tokenType:"attrEnd",args:["visible"]},{tokenType:"attrStart",args:["heading"]},{tokenType:"special",args:["heading"]},{tokenType:"attrEnd",args:["heading"]},{tokenType:"attrStart",args:["use-content-tag"]},{tokenType:"attrValue",args:["false"]},{tokenType:"attrEnd",args:["use-content-tag"]},{tokenType:"attrStart",args:["auto-hide"]},{tokenType:"special",args:["autoHide"]},{tokenType:"attrEnd",args:["auto-hide"]},{tokenType:"attrStart",args:["body"]},{tokenType:"special",args:["body"]},{tokenType:"attrEnd",args:["body"]},{tokenType:"attrStart",args:["dismissable"]},{tokenType:"special",args:["dismissable"]},{tokenType:"attrEnd",args:["dismissable"]},{tokenType:"end",args:["toast-item",!0]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"done",args:[]}]);return function(e,r,n){var o={module:t};return r instanceof a.Options||(r=new a.Options(r||{})),s(e,r.add(o),n)}});
/*spectre-canjs@0.29.0#toast-container/toast-item.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#toast-container/toast-item.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,a,t){var s=a([{tokenType:"chars",args:["\r\n"]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["toast toast-"]},{tokenType:"special",args:["severity"]},{tokenType:"special",args:["^visible"]},{tokenType:"attrValue",args:[" animated fadeOut"]},{tokenType:"special",args:["/visible"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["#if useContentTag"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["  "]},{tokenType:"special",args:["else"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"special",args:["#if dismissable"]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-clear float-right"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["button",!1]},{tokenType:"close",args:["button"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"special",args:["#if iconClass"]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["iconClass"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"special",args:["#if heading"]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["text-bold"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"special",args:["heading"]},{tokenType:"close",args:["span"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["    "]},{tokenType:"special",args:["body"]},{tokenType:"chars",args:["\r\n  "]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(a,n,r){var o={module:e};return n instanceof t.Options||(n=new t.Options(n||{})),s(a,n.add(o),r)}});
/*spectre-canjs@0.29.0#toast-container/toast-item*/
define("spectre-canjs@0.29.0#toast-container/toast-item",["exports","./toast-item.stache!","can-component","can-define/map/map","can-event","object-assign","./toast-item.less!"],function(e,t,i,a,n,o){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var u=s(t),d=s(i),l=s(a),r=s(n),c=s(o),f=e.ViewModel=l.default.extend("ToastItem",{fade:{type:"boolean",value:!0},autoHide:{type:"number",value:5e3},useContentTag:{type:"boolean",value:!1},severity:{value:"info",type:function(e){var t=["primary","info","success","warning","danger"];return t.indexOf(e)?e:t[0]}},dismissable:{value:!0,type:"boolean"},iconClass:{type:"string",value:"icon icon-error_outline"},visible:{value:!0,type:"boolean"},body:{value:"",type:"string"},heading:{value:"",type:"string"},fadeTime:{type:"number",value:1e3},hide:function(){var e=this;this.visible&&(this.visible=!1,this.fade?setTimeout(function(){e.dispatch("hide",[e])},this.fadeTime):this.dispatch("hide",[this]))}});(0,c.default)(f,r.default),d.default.extend({tag:"toast-item",view:u.default,ViewModel:f,events:{inserted:function(){var e=this.viewModel;e.autoHide&&setTimeout(function(){e.hide()},e.autoHide)}}}),e.default=f});
/*spectre-canjs@0.29.0#toast-container/toast-container*/
define("spectre-canjs@0.29.0#toast-container/toast-container",["exports","can-define/map/map","can-define/list/list","can-component","./toast-container.stache!","./toast-item"],function(e,t,a,o,n,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var d=i(t),c=i(a),l=i(o),u=i(n),f=e.ViewModel=d.default.extend("ToastContainer",{toasts:{Value:c.default.extend("ToastList",{"#":s.ViewModel})},addToast:function(e){e instanceof s.ViewModel||(e=new s.ViewModel(e)),this.toasts.push(e)},removeToast:function(e){var t=this.toasts.indexOf(e);this.toasts.splice(t,1)}});l.default.extend({tag:"toast-container",ViewModel:f,view:u.default})});
/*spectre-canjs@0.29.0#toast-container/demo/toast*/
define("spectre-canjs@0.29.0#toast-container/demo/toast",["can-define/map/map","can-stache","can-view-model","spectre-canjs/toast-container/toast-container"],function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=i(e),d=i(t),s=i(n),o=new a.default({heading:"Title Here",details:"Details",autoHide:5e3,severity:"info",dismissable:!0,add:function(){(0,s.default)(document.getElementById("toast-container")).addToast({heading:this.heading,body:this.body,severity:this.severity,autoHide:this.autoHide,dismissable:this.dismissable})}}),r=d.default.from("demo-html");document.body.appendChild(r(o)),window.DEMO_SOURCE="\nimport 'spectre-canjs/toast-container/toast-container';\nimport DefineMap from 'can-define/map/map';\nimport stache from 'can-stache';\nimport canViewModel from 'can-view-model';\n\nconst AppViewModel = new DefineMap({\n    heading: 'Title Here',\n    details: 'Details',\n    autoHide: 5000,\n    severity: 'info',\n    dismissable: true,\n    add () {\n        canViewModel(document.getElementById('toast-container')).addToast({\n            heading: this.heading,\n            body: this.body,\n            severity: this.severity,\n            autoHide: this.autoHide,\n            dismissable: this.dismissable\n        });\n    }\n});\n\nconst render = stache.from('demo-html');\ndocument.body.appendChild(render(AppViewModel));\n"});
//# sourceMappingURL=toast.js.map