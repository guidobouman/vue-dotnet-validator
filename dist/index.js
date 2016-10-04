!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueDotnetValidator=t():e.vueDotnetValidator=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(3),o=r(i),a=n(13),u=r(a),s=n(7),l=r(s);e.exports={validatorGroup:u["default"],validator:o["default"],BaseValidator:l["default"]}},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(4),o=r(i);e.exports=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=n(5);for(var r in e)t[r]=e[r];var i="field-validation-valid";return{props:{value:{"default":""},"extra-error-message":{"default":""}},data:function(){return{validators:[],blurred:!1}},mounted:function(){var e=this;this.$nextTick(function(){return e.$refs.field?(e.findValidators(),e.addAriaDescribedBy(),e.$refs.message.innerText?e.blurred=!0:e.$refs.message.classList.add(i),e.$watch("validationMessage",e.showValidationMessage),e.$refs.field.addEventListener("blur",e.blurField),e.$refs.field.addEventListener("change",e.changeField),e.$refs.field.addEventListener("input",e.changeField),void o["default"].publish(o["default"].eventTypes.validatorCreated,e)):void console.error("Field is missing!",e)})},destroyed:function(){var e=this;this.$nextTick(function(){o["default"].publish(o["default"].eventTypes.validatorRemoved,e)})},methods:{blurField:function(){this.value=event.target.value,this.$emit("input",event.target.value),this.blurred=!0,this.showValidationMessage(),o["default"].publish(o["default"].eventTypes.blur,this)},changeField:function(e){this.value=e.target.value,this.$emit("input",e.target.value),o["default"].publish(o["default"].eventTypes.change,this),this.showValidationMessage()},findValidators:function(){var e=this,n=this.$refs.field.dataset,r=Object.keys(t);r.forEach(function(r){var i=n["val"+r];i&&e.validators.push(new t[r](i,n,e.$refs.field))})},showValidationMessage:function(){return this.blurred?(this.$refs.message.innerHTML=this.validationMessage,this.validationMessage?this.$refs.message.classList.remove(i):this.$refs.message.classList.add(i)):void 0},addAriaDescribedBy:function(){var e="vue-validator-"+parseInt(100*Math.random())+"-"+this._uid;this.$refs.message.id=e,this.$refs.field.setAttribute("aria-describedby",e)}},computed:{isValid:function(){var e=this;return this.validators.filter(function(t){return t.isValid(e.value)}).length===this.validators.length&&!this.extraErrorMessage},validationMessage:function(){var e=this,t="";return this.validators.forEach(function(n){var r=n.isValid(e.value);r||t||(t=n.getMessage())}),t||this.extraErrorMessage}},watch:{isValid:function(){this.$refs.field.setAttribute("aria-invalid",!this.isValid)}}}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e),this.events=[],this.eventTypes={blur:"blur-field",change:"change-field",validatorRemoved:"validator-removed",validatorCreated:"validator-created"}}return r(e,[{key:"subscribe",value:function(e,t){e&&t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"publish",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];this.events[e]&&this.events[e].forEach(function(e){e.apply(void 0,n)})}}]),e}();t["default"]=new i},function(e,t,n){"use strict";e.exports={Required:n(6),Minlength:n(8),Maxlength:n(9),Length:n(10),Range:n(11),Regex:n(12)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(){return i(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"isValid",value:function(e){return!!e}}]),t}(l["default"]);e.exports=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,r){n(this,e),this.message=t,this.attributes=r}return r(e,[{key:"getMessage",value:function(){return this.message}},{key:"isValid",value:function(){}}]),e}();t["default"]=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.minLength=n.valMinlengthMin,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length>=this.minLength}}]),t}(l["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.maxLength=n.valMaxlengthMax,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length<=this.maxLength}}]),t}(l["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.maxLength=n.valLengthMax,r.minLength=n.valLengthMin,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length>=this.minLength&&e.length<=this.maxLength}}]),t}(l["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.min=parseFloat(n.valRangeMin),r.max=parseFloat(n.valRangeMax),r}return a(t,e),u(t,[{key:"isValid",value:function(e){var t=parseFloat(e);return!e&&0!=t||!isNaN(t)&&t>=this.min&&t<=this.max}}]),t}(l["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e,n));return r.regex=new RegExp(n.valRegexPattern),r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||this.regex.test(e)}}]),t}(l["default"]);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=n(4),o=r(i);e.exports={props:{onValid:{type:Function,"default":null}},data:function(){return{validators:[],loading:!1}},mounted:function(){var e=this;o["default"].subscribe(o["default"].eventTypes.validatorCreated,function(t){e.validators.push(t)}),o["default"].subscribe(o["default"].eventTypes.validatorRemoved,function(t){e.validators.splice(e.validators.indexOf(t),1)})},methods:{validate:function(e){var t=!0;return this.validators.forEach(function(n){n.isValid||(t=!1,e.preventDefault()),n.blurField()}),t&&this.onValid instanceof Function?(e.preventDefault(),this.onValid(e)):(this.loading=t,!1)}}}}])});