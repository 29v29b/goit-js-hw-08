function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var r,o,a,i,f,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,c=t,i=e.apply(a,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):i}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=a}function O(){var e=g();if(T(e))return x(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,a-(e-c)):n}(e))}function x(e){return f=void 0,p&&r?y(e):(r=o=void 0,i)}function j(){var e=g(),n=T(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,v(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},j.flush=function(){return void 0===f?i:x(g())},j}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};function S(e){let t=localStorage.getItem("feedback-form-state");if(null!=t)var n=JSON.parse(t);else n={email:"",message:""};"email"===e.currentTarget.name&&(n.email=e.currentTarget.value),"message"===e.currentTarget.name&&(n.message=e.currentTarget.value),localStorage.setItem("feedback-form-state",JSON.stringify(n))}console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),y.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("Sending form"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),y.input.addEventListener("input",e(t)(S,500)),y.textarea.addEventListener("input",e(t)(S,500)),document.addEventListener("DOMContentLoaded",(()=>{if(null!=localStorage.getItem("feedback-form-state")){var e=JSON.parse(localStorage.getItem("feedback-form-state"));y.input.value=e.email,y.textarea.value=e.message}}));
//# sourceMappingURL=03-feedback.eab3ce31.js.map