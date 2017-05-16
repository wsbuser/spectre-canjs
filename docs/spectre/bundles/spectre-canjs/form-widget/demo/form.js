/*spectre-canjs@0.29.0#form-widget/field-components/file-field/file-field.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#form-widget/field-components/file-field/file-field.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"attrValue",args:["has-error"]},{tokenType:"special",args:["/if"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n\r\n\r\n    "]},{tokenType:"start",args:["ul",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["ul",!1]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["input-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["label",!1]},{tokenType:"special",args:["#if properties.inline"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"special",args:["/if"]},{tokenType:"attrStart",args:["for"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["for"]},{tokenType:"end",args:["label",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["label"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["input",!0]},{tokenType:"attrStart",args:["($change)"]},{tokenType:"attrValue",args:["onChange(%element)"]},{tokenType:"attrEnd",args:["($change)"]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["file"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-control form-input"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["name"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["name"]},{tokenType:"special",args:["#if properties.multiple"]},{tokenType:"attrStart",args:["multiple"]},{tokenType:"attrEnd",args:["multiple"]},{tokenType:"special",args:["/if"]},{tokenType:"end",args:["input",!0]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n\r\n            "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-input-hint"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"special",args:[" errors[properties.name]"]},{tokenType:"close",args:["span"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["#if state.isPending"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item loading"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"special",args:["#if currentFiles.length"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"comment",args:[" menu header "]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-header-text"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["\r\n            Current Files\r\n        "]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\r\n            "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["#each currentFiles"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"comment",args:[" menu item "]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["menu-item clear"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["href"]},{tokenType:"special",args:["path"]},{tokenType:"attrEnd",args:["href"]},{tokenType:"attrStart",args:["target"]},{tokenType:"attrValue",args:["_blank"]},{tokenType:"attrEnd",args:["target"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\r\n                        "]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["icon icon-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"chars",args:[" "]},{tokenType:"special",args:["path"]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\r\n                    "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["type"]},{tokenType:"attrValue",args:["button"]},{tokenType:"attrEnd",args:["type"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn ml-10 "]},{tokenType:"special",args:["#if removing"]},{tokenType:"attrValue",args:["loading"]},{tokenType:"special",args:["/if"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["removeFile(.)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["button",!1]},{tokenType:"start",args:["i",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["fa fa-trash"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["i",!1]},{tokenType:"close",args:["i"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\r\n                "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["ul"]},{tokenType:"chars",args:["\r\n\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var p={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(p),n)}});
/*spectre-canjs@0.29.0#form-widget/field-components/file-field/file-field*/
define("spectre-canjs@0.29.0#form-widget/field-components/file-field/file-field",["exports","can-define/list/list","can-define/map/map","can-component","can-event","object-assign","can-util/js/dev/dev","./file-field.stache!","./file-field.less"],function(e,t,i,n,s,r,o,a){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var l=u(t),d=u(i),c=u(n),f=u(s),h=u(r),p=u(o),v=u(a),m=d.default.extend({path:"string",removing:"boolean"}),g=e.ViewModel=d.default.extend("FileField",{properties:{Value:d.default},errors:{Value:d.default},value:{type:"string",value:""},currentFiles:{get:function(e){return e||(e=this.currentFiles=new l.default(this.value.split(",").filter(function(e){return""!==e}).map(function(e){return new m({path:e,removing:!1})})),e.on("add",this.updateValue.bind(this)),e.on("remove",this.updateValue.bind(this))),e}},state:{value:{isResolved:!0}},progress:{type:"number",value:100},onChange:function(e){var t=this;e.files&&(!this.properties.multiple&&this.currentFiles.length?this.removeFile(this.currentFiles[0]).then(function(){t.uploadFiles(e.files)}).catch(function(e){t.uploadError(e)}):this.uploadFiles(e.files))},uploadFiles:function(e){var t=this;this.errors[this.properties.name]=null;for(var i=new FormData,n=0;n<e.length;n++)i.append(n,e.item(n));this.state=new Promise(function(e,n){var s=new XMLHttpRequest;s.open("POST",t.properties.url,!0),s.onload=function(){200===s.status?e(JSON.parse(s.responseText)):n(s)},s.onerror=n,s.send(i)}).then(this.uploadSuccess.bind(this)).catch(this.uploadError.bind(this))},uploadSuccess:function(e){var t=this;void 0===e.error?e.uploads.forEach(function(e){var i=new m({path:e,removing:!1});t.currentFiles.push(i)}):p.default.warn("ERRORS: ",e.error)},updateValue:function(){this.currentFiles.length?this.value=this.currentFiles.map(function(e){return e.path}).join(","):this.value="",this.dispatch("fieldchange",[{value:this.value,name:this.properties.name}])},uploadError:function(e,t,i){413===e.status&&(this.errors[this.properties.name]="The uploaded file is too large"),p.default.warn("ERRORS: ",e,t,i)},removeFile:function(e){var t=this;return confirm("The file at "+e+" will be removed. Are you sure you want to do this?")?!e.removing&&(e.removing=!0,this.state=new Promise(function(i,n){var s=new XMLHttpRequest;s.open("DELETE",t.properties.url,!0),s.onload=function(){200===s.status?i(JSON.parse(s.responseText)):n(s)},s.onerror=n,s.setRequestHeader("Content-type","application/json"),s.send(JSON.stringify({file:e.path}))}).then(this.removeSuccess.bind(this,e)).catch(this.removeError.bind(this,e)),this.state):(this.state=new Promise(function(e,t){t({message:"User canceled out of dialog"})}),this.state)},removeSuccess:function(e){this.currentFiles.splice(this.currentFiles.indexOf(e),1),this.updateValue()},removeError:function(e,t){404===t.status&&this.removeSuccess(e,t),p.default.warn("Error: ",t)}});(0,h.default)(g.prototype,f.default),e.default=c.default.extend({tag:"file-field",view:v.default,ViewModel:g})});
/*spectre-canjs@0.29.0#form-widget/field-components/subform-field/subform-field.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#form-widget/field-components/subform-field/subform-field.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n  "]},{tokenType:"start",args:["fieldset",!1]},{tokenType:"end",args:["fieldset",!1]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["legend",!1]},{tokenType:"end",args:["legend",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["legend"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["form-widget",!0]},{tokenType:"attrStart",args:["inline"]},{tokenType:"special",args:["properties.inline"]},{tokenType:"attrEnd",args:["inline"]},{tokenType:"attrStart",args:["{form-object}"]},{tokenType:"attrValue",args:["subFormObject"]},{tokenType:"attrEnd",args:["{form-object}"]},{tokenType:"attrStart",args:["(fieldchange)"]},{tokenType:"attrValue",args:["saveField"]},{tokenType:"attrEnd",args:["(fieldchange)"]},{tokenType:"attrStart",args:["{fields}"]},{tokenType:"attrValue",args:["formFields"]},{tokenType:"attrEnd",args:["{fields}"]},{tokenType:"attrStart",args:["show-buttons"]},{tokenType:"attrValue",args:["false"]},{tokenType:"attrEnd",args:["show-buttons"]},{tokenType:"end",args:["form-widget",!0]},{tokenType:"chars",args:["\r\n  "]},{tokenType:"close",args:["fieldset"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var o={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(o),n)}});
/*spectre-canjs@0.29.0#form-widget/field-components/subform-field/subform-field*/
define("spectre-canjs@0.29.0#form-widget/field-components/subform-field/subform-field",["exports","can-component","can-define/map/map","can-event","./subform-field.stache!","~/util/field/field","can-util/js/assign/assign","can-util/js/dev/dev","./subform-field.less"],function(e,t,i,o,s,r,n,l){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var f=d(t),u=d(i),a=d(o),p=d(s),c=d(n),b=d(l),m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=e.ViewModel=u.default.extend("SubformField",{properties:{Value:u.default,set:function(e){var t=e.ObjectTemplate,i=void 0;return t?i=new t:(b.default.warn("subform-field needs an ObjectTemplate defined in its field properties"),i=new u.default),this.subFormObject=i,e}},value:{set:function(e){return"object"===(void 0===e?"undefined":m(e))?this.subFormObject.set(e.serialize?e.serialize():e):b.default.warn("typeof subform value needs to be object. Type is "+(void 0===e?"undefined":m(e)),e),e}},errors:"*",subFormObject:{Value:u.default},formFields:{get:function(){return this.properties.fields&&this.properties.fields.length?(0,r.parseFieldArray)(this.properties.fields):(0,r.mapToFields)(this.properties.ObjectTemplate)}},saveField:function(e,t,i,o){this.subFormObject.set(o.dirty.serialize()),this.dispatch("fieldchange",[{value:this.subFormObject.serialize(),name:this.properties.name}])}});(0,c.default)(y.prototype,a.default),e.default=f.default.extend({tag:"subform-field",view:p.default,ViewModel:y})});
/*spectre-canjs@0.29.0#form-widget/field-components/date-field/constants*/
define("spectre-canjs@0.29.0#form-widget/field-components/date-field/constants",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var l=(e.MONTH_OPTIONS=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}],e.YEAR_OPTIONS=[]),a=(new Date).getFullYear();a>=1900;a--)l.push({label:a,value:a})});
/*spectre-canjs@0.29.0#form-widget/field-components/date-field/date-field.stache!steal-stache@3.0.7#steal-stache*/
define("spectre-canjs@0.29.0#form-widget/field-components/date-field/date-field.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.0.19#can-stache-bindings"],function(e,t,a){var r=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-group "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"attrValue",args:["has-error"]},{tokenType:"special",args:["/if"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["label",!1]},{tokenType:"special",args:["#if properties.inline"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"special",args:["/if"]},{tokenType:"attrStart",args:["for"]},{tokenType:"special",args:["properties.name"]},{tokenType:"attrEnd",args:["for"]},{tokenType:"end",args:["label",!1]},{tokenType:"special",args:["properties.alias"]},{tokenType:"close",args:["label"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["input-group"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["day"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["dayProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(fieldchange)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(fieldchange)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["month"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["monthProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(fieldchange)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(fieldchange)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n        "]},{tokenType:"start",args:["select-field",!0]},{tokenType:"attrStart",args:["{(value)}"]},{tokenType:"attrValue",args:["year"]},{tokenType:"attrEnd",args:["{(value)}"]},{tokenType:"attrStart",args:["{properties}"]},{tokenType:"attrValue",args:["yearProperties"]},{tokenType:"attrEnd",args:["{properties}"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["float-left"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"attrStart",args:["(fieldchange)"]},{tokenType:"attrValue",args:["onChange"]},{tokenType:"attrEnd",args:["(fieldchange)"]},{tokenType:"end",args:["select-field",!0]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["clear"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n    "]},{tokenType:"special",args:["#if errors[properties.name]"]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["form-input-hint"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["span",!1]},{tokenType:"special",args:["errors[properties.name]"]},{tokenType:"close",args:["span"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\r\n"]},{tokenType:"done",args:[]}]);return function(t,s,n){var o={module:e};return s instanceof a.Options||(s=new a.Options(s||{})),r(t,s.add(o),n)}});
/*spectre-canjs@0.29.0#form-widget/field-components/date-field/date-field*/
define("spectre-canjs@0.29.0#form-widget/field-components/date-field/date-field",["exports","can-define/map/map","can-component","can-event","object-assign","./constants","./date-field.stache!","../select-field/select-field","./date-field.less!"],function(e,t,n,a,i,o,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var d=r(t),l=r(n),u=r(a),f=r(i),h=r(s),p=e.ViewModel=d.default.extend("DateField",{properties:{Value:d.default},errors:"*",value:{type:"date",set:function(e){return this.isValidDate(e)?this.set({day:e.getUTCDate(),month:e.getUTCMonth(),year:e.getUTCFullYear()}):e=new Date,e},get:function(e){if(void 0===this.month||void 0===this.day||!this.year)return e;var t=this.month+1+"/"+this.day+"/"+this.year;return this.isValidDate(t)?new Date(t):new Date}},day:{type:"number"},month:{type:"number"},year:{type:"number"},dayProperties:{get:function(){for(var e=[],t=1;t<=this.getDaysInMonth(this.value);t++)e.push({value:t,label:t});return{inline:!0,options:e,name:"day"}}},monthProperties:{value:{inline:!0,options:o.MONTH_OPTIONS,name:"month"}},yearProperties:{value:{inline:!0,options:o.YEAR_OPTIONS,name:"year"}},getDaysInMonth:function(e){return e||(e=new Date),new Date(e.getYear(),e.getMonth()+1,0).getDate()},onChange:function(){this.dispatch("fieldchange",[{value:this.value,name:this.properties.name}])},isValidDate:function(e){return!!e&&(e=new Date(e),!isNaN(e.getTime()))}});(0,f.default)(p.prototype,u.default),e.default=l.default.extend({tag:"date-field",view:h.default,ViewModel:p})});
/*spectre-canjs@0.29.0#form-widget/demo/form*/
define("spectre-canjs@0.29.0#form-widget/demo/form",["can-fixture","can-stache","can-define/map/map","spectre-canjs/form-widget/form-widget","spectre-canjs/form-widget/field-components/text-field/text-field","spectre-canjs/form-widget/field-components/select-field/select-field","spectre-canjs/form-widget/field-components/file-field/file-field","spectre-canjs/form-widget/field-components/subform-field/subform-field","spectre-canjs/form-widget/field-components/date-field/date-field","spectre-canjs/form-widget/field-components/checkbox-field/checkbox-field"],function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var i=l(e),a=l(n),o=l(t);i.default.delay=2e3,(0,i.default)({method:"POST",url:"/upload"},function(e,n,t,l){return{uploads:["fake_upload_filename"]}}),(0,i.default)({method:"DELETE",url:"/upload"},function(){return{result:"Success"}});var d=o.default.extend({json_field_1:"string",json_field_2:{validate:function(e){return 2!=e.value?"The value must be 2":void 0},value:2,fieldType:"select",options:[{value:1,label:"Option 1"},{value:2,label:"Option 2"}]},json_field_3:{type:"number",validate:function(e){return e.value<10?"Please enter a value greater than 10":void 0}},json_field_4:{type:"boolean",fieldType:"checkbox",style:"switch"}}),f=o.default.extend({field1:{type:"string",value:"test-value"},field2:"string",field3:"number",field4:"date",field5:"string",field6:d}),r=[{name:"field1",validate:function(e){return e.value.length<50&&"This field must contain at least 50 characters"}},{value:"another value",name:"field2",alias:"A basic textarea field",type:"text",textarea:!0,placeholder:'Enter the text: "hello"',validate:function(e){return"hello"!==e.value&&'This field must contain the text, "hello"'}},{value:1,name:"field3",alias:"A select dropdown",fieldType:"select",options:[{value:1,label:"Option 1"},{value:2,label:"Option 2"}]},{name:"field4",alias:"A date field",fieldType:"date",value:new Date("2010-10-11")},{name:"field5",alias:"A file field",multiple:!0,fieldType:"file",url:"/upload"},{name:"field6",alias:"A Subform Field",fieldType:"subform",type:"string",value:"",ObjectTemplate:d}],s=a.default.from("demo-html"),u=new o.default({dirtyObject:null,formObject:new f,fields:r,onChange:function(){console.log(arguments)},onSubmit:function(){alert("Form submitted! See the console for details"),console.log("submitted data: ",this.formObject.serialize())},onCancel:function(){console.log("Form canceled!")},stringify:function(e){if(e)return JSON.stringify(e.serialize())}}),c=s(u);document.body.appendChild(c),window.DEMO_SOURCE="\nimport 'spectre-canjs/form-widget/form-widget';\nimport 'spectre-canjs/form-widget/field-components/text-field/text-field';\nimport 'spectre-canjs/form-widget/field-components/select-field/select-field';\nimport 'spectre-canjs/form-widget/field-components/file-field/file-field';\nimport 'spectre-canjs/form-widget/field-components/json-field/json-field';\nimport 'spectre-canjs/form-widget/field-components/subform-field/subform-field';\nimport 'spectre-canjs/form-widget/field-components/date-field/date-field';\nimport fixture from 'can-fixture';\nimport stache from 'can-stache';\nimport DefineMap from 'can-define/map/map';\n\n//this example uses fixtures to catch requests and simulate\n//file upload experience\nfixture.delay = 2000;\nfixture({\n    method: 'POST',\n    url: '/upload'\n}, function(request, response, headers, ajaxSettings) {\n    return {\n        uploads: ['fake_upload_filename']\n    };\n});\n\nfixture({\n    method: 'DELETE',\n    url: '/upload'\n}, function() {\n    return {\n        result: 'Success'\n    };\n});\n\n\nconst ChildObject = DefineMap.extend({\n    json_field_1: 'string',\n    json_field_2: {\n        validate(props){\n          return props.value != 2 ? 'The value must be 2' : undefined;\n        },\n        value: 2,\n        fieldType: 'select',\n        options: [{\n            value: 1,\n            label: 'Option 1'\n        }, {\n            value: 2,\n            label: 'Option 2'\n        }]\n    },\n    json_field_3: {\n        type: 'number',\n        validate(props) {\n            return props.value < 10 ? 'Please enter a value greater than 10' : undefined;\n        }\n    }\n})\n\n\nconst Template = DefineMap.extend({\n    field1: { type: 'string', value: 'test-value' },\n    field2: 'string',\n    field3: 'number',\n    field4: 'date',\n    field5: 'string',\n    field6: ChildObject\n});\n\nconst fields = [{\n        name: 'field1',\n        validate(props) {\n            return props.value.length < 50 ? 'This field must contain at least 50 characters' : false;\n        }\n    },\n    {\n        value: 'another value',\n        name: 'field2',\n        alias: 'A basic textarea field',\n        type: 'text',\n        textarea: true,\n        placeholder: 'Enter the text: \"hello\"',\n        validate(props) {\n            if (props.value !== 'hello') {\n                return 'This field must contain the text, \"hello\"';\n            }\n            return false;\n        }\n    }, {\n        value: 1,\n        name: 'field3',\n        alias: 'A select dropdown',\n        fieldType: 'select',\n        options: [{\n            value: 1,\n            label: 'Option 1'\n        }, {\n            value: 2,\n            label: 'Option 2'\n        }]\n    }, {\n        name: 'field4',\n        alias: 'A date field',\n        fieldType: 'date',\n        value: new Date('2010-10-11')\n    }, {\n        name: 'field5',\n        alias: 'A file field',\n        multiple: true,\n        fieldType: 'file',\n        url: '/upload'\n    }, {\n        name: 'field6',\n        alias: 'A Subform Field',\n        fieldType: 'subform',\n        type: 'string',\n        value: '',\n        ObjectTemplate: ChildObject\n    }\n]\n\nconst render = stache.from('demo-html');\n\nconst vm = new DefineMap({\n    formObject: new Template(),\n    fields: fields,\n    onChange() {\n        console.log(arguments);\n    },\n    onSubmit() {\n        alert('Form submitted! See the console for details');\n        console.log('submitted data: ', this.formObject.serialize())\n    },\n    onCancel() {\n        console.log('Form canceled!');\n    },\n    stringify() {\n        return JSON.stringify(this.formObject.serialize());\n    }\n});\n\nconst frag = render(vm);\n\ndocument.body.appendChild(frag);\n"});
//# sourceMappingURL=form.js.map