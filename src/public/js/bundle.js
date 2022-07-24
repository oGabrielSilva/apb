/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/www/Constants/Constants.ts":
/*!****************************************!*\
  !*** ./src/www/Constants/Constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BIO_ID = 'bio';
    Constants.NAME_ID = 'name';
    Constants.LAST_NAME_ID = 'lastName';
    Constants.LAST_NAME_MAX_LENGHT = 100;
    Constants.BIO_MAX_LENGHT = 150;
    Constants.NAME_MAX_LENGHT = 50;
    Constants.MAX_LENGHT_DEFAULT = 80;
    return Constants;
}());
exports["default"] = Constants;


/***/ }),

/***/ "./src/www/Modules/Entities/SignIn.ts":
/*!********************************************!*\
  !*** ./src/www/Modules/Entities/SignIn.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var SignIn = /** @class */ (function () {
    function SignIn(_a) {
        var name = _a.name, lastName = _a.lastName, email = _a.email, password = _a.password, instagram = _a.instagram, twitter = _a.twitter, linkedin = _a.linkedin, gender = _a.gender, state = _a.state, bio = _a.bio;
        this.name = name;
        this.bio = bio;
        this.email = email;
        this.lastName = lastName;
        this.password = password;
        this.instagram = instagram;
        this.twitter = twitter;
        this.linkedin = linkedin;
        this.gender = gender;
        this.state = state;
    }
    return SignIn;
}());
exports["default"] = SignIn;


/***/ }),

/***/ "./src/www/Modules/FormValidation.ts":
/*!*******************************************!*\
  !*** ./src/www/Modules/FormValidation.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Constants_1 = __webpack_require__(/*! ../Constants/Constants */ "./src/www/Constants/Constants.ts");
var SignIn_1 = __webpack_require__(/*! ./Entities/SignIn */ "./src/www/Modules/Entities/SignIn.ts");
var FormValidation = /** @class */ (function () {
    function FormValidation(form) {
        this.input = null;
        this.inputs = [];
        this.form = form;
        this.formValid = false;
    }
    FormValidation.prototype.maxLenght = function (max) {
        if (this.input === null)
            return;
        var elm = this.input;
        elm.addEventListener('keydown', function (event) {
            var value = event.target.value;
            if (value.length >= max) {
                var arry = value.split('');
                arry.pop();
                elm.value = arry.join('');
            }
        });
    };
    FormValidation.prototype.searchForMaxLenght = function () {
        var _this = this;
        var texts = this.form.querySelectorAll('textarea');
        var inputs = this.form.querySelectorAll('input');
        this.inputs = __spreadArray(__spreadArray([], texts, true), inputs, true);
        this.inputs.forEach(function (elm) {
            _this.input = elm;
            switch (elm.id) {
                case Constants_1.default.BIO_ID:
                    _this.maxLenght(Constants_1.default.BIO_MAX_LENGHT);
                    break;
                case Constants_1.default.NAME_ID:
                    _this.maxLenght(Constants_1.default.NAME_MAX_LENGHT);
                    break;
                case Constants_1.default.LAST_NAME_ID:
                    _this.maxLenght(Constants_1.default.LAST_NAME_MAX_LENGHT);
                    break;
                default:
                    _this.maxLenght(Constants_1.default.MAX_LENGHT_DEFAULT);
                    break;
            }
        });
    };
    FormValidation.prototype.allValid = function () {
        return this.formValid;
    };
    FormValidation.prototype.throwErrors = function () {
        console.log(this.form);
    };
    FormValidation.prototype.submit = function () {
        var signIn = new SignIn_1.default();
    };
    FormValidation.prototype.validForm = function () {
        var _this = this;
        this.form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (_this.allValid())
                _this.submit();
            else
                _this.throwErrors();
        });
    };
    FormValidation.prototype.init = function () {
        this.searchForMaxLenght();
        this.validForm();
    };
    return FormValidation;
}());
exports["default"] = FormValidation;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./src/www/main.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormValidation_1 = __webpack_require__(/*! ./Modules/FormValidation */ "./src/www/Modules/FormValidation.ts");
var form = document.querySelector('form');
if (form)
    new FormValidation_1.default(form).init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUM7QUFFRCxxQkFBZSxjQUFjLENBQUM7Ozs7Ozs7VUNsRjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxrSEFBc0Q7QUFFdEQsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU1QyxJQUFJLElBQUk7SUFBRSxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcG9sbG9fYmxvZy8uL3NyYy93d3cvQ29uc3RhbnRzL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9hcG9sbG9fYmxvZy8uL3NyYy93d3cvTW9kdWxlcy9FbnRpdGllcy9TaWduSW4udHMiLCJ3ZWJwYWNrOi8vYXBvbGxvX2Jsb2cvLi9zcmMvd3d3L01vZHVsZXMvRm9ybVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vYXBvbGxvX2Jsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBvbGxvX2Jsb2cvLi9zcmMvd3d3L21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29uc3RhbnRzIHtcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBCSU9fSUQgPSAnYmlvJztcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUVfSUQgPSAnbmFtZSc7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBMQVNUX05BTUVfSUQgPSAnbGFzdE5hbWUnO1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTEFTVF9OQU1FX01BWF9MRU5HSFQgPSAxMDA7XG5cbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBCSU9fTUFYX0xFTkdIVCA9IDE1MDtcblxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE5BTUVfTUFYX0xFTkdIVCA9IDUwO1xuXG4gIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFYX0xFTkdIVF9ERUZBVUxUID0gODA7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnN0YW50cztcbiIsImNsYXNzIFNpZ25JbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgbGFzdE5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIHJlYWRvbmx5IGVtYWlsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBwYXNzd29yZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgaW5zdGFncmFtOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSB0d2l0dGVyOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaW5rZWRpbjogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2VuZGVyOiAnTScgfCAnRicgfCAnTyc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYmlvOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIG5hbWUsXG4gICAgbGFzdE5hbWUsXG4gICAgZW1haWwsXG4gICAgcGFzc3dvcmQsXG4gICAgaW5zdGFncmFtLFxuICAgIHR3aXR0ZXIsXG4gICAgbGlua2VkaW4sXG4gICAgZ2VuZGVyLFxuICAgIHN0YXRlLFxuICAgIGJpbyxcbiAgfTogU2lnbkluKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJpbyA9IGJpbztcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lO1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICB0aGlzLmluc3RhZ3JhbSA9IGluc3RhZ3JhbTtcbiAgICB0aGlzLnR3aXR0ZXIgPSB0d2l0dGVyO1xuICAgIHRoaXMubGlua2VkaW4gPSBsaW5rZWRpbjtcbiAgICB0aGlzLmdlbmRlciA9IGdlbmRlcjtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbkluO1xuIiwiaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMvQ29uc3RhbnRzJztcbmltcG9ydCBTaWduSW4gZnJvbSAnLi9FbnRpdGllcy9TaWduSW4nO1xuXG5jbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZm9ybTogSFRNTEZvcm1FbGVtZW50O1xuXG4gIHByaXZhdGUgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpbnB1dHM6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50PiA9IFtdO1xuXG4gIHByaXZhdGUgZm9ybVZhbGlkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGZvcm06IEhUTUxGb3JtRWxlbWVudCkge1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5mb3JtVmFsaWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgbWF4TGVuZ2h0KG1heDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXQgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBlbG0gPSB0aGlzLmlucHV0O1xuICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID49IG1heCkge1xuICAgICAgICBjb25zdCBhcnJ5ID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICBhcnJ5LnBvcCgpO1xuICAgICAgICBlbG0udmFsdWUgPSBhcnJ5LmpvaW4oJycpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2hGb3JNYXhMZW5naHQoKTogdm9pZCB7XG4gICAgY29uc3QgdGV4dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBpbnB1dHMgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIHRoaXMuaW5wdXRzID0gWy4uLnRleHRzLCAuLi5pbnB1dHNdO1xuXG4gICAgdGhpcy5pbnB1dHMuZm9yRWFjaCgoZWxtKSA9PiB7XG4gICAgICB0aGlzLmlucHV0ID0gZWxtO1xuXG4gICAgICBzd2l0Y2ggKGVsbS5pZCkge1xuICAgICAgICBjYXNlIENvbnN0YW50cy5CSU9fSUQ6XG4gICAgICAgICAgdGhpcy5tYXhMZW5naHQoQ29uc3RhbnRzLkJJT19NQVhfTEVOR0hUKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdGFudHMuTkFNRV9JRDpcbiAgICAgICAgICB0aGlzLm1heExlbmdodChDb25zdGFudHMuTkFNRV9NQVhfTEVOR0hUKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBDb25zdGFudHMuTEFTVF9OQU1FX0lEOlxuICAgICAgICAgIHRoaXMubWF4TGVuZ2h0KENvbnN0YW50cy5MQVNUX05BTUVfTUFYX0xFTkdIVCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5tYXhMZW5naHQoQ29uc3RhbnRzLk1BWF9MRU5HSFRfREVGQVVMVCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFsbFZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm1WYWxpZDtcbiAgfVxuXG4gIHByaXZhdGUgdGhyb3dFcnJvcnMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VibWl0KCkge1xuICAgIGNvbnN0IHNpZ25JbiA9IG5ldyBTaWduSW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRGb3JtKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5hbGxWYWxpZCgpKSB0aGlzLnN1Ym1pdCgpO1xuICAgICAgZWxzZSB0aGlzLnRocm93RXJyb3JzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaEZvck1heExlbmdodCgpO1xuICAgIHRoaXMudmFsaWRGb3JtKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybVZhbGlkYXRpb247XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gJy4vTW9kdWxlcy9Gb3JtVmFsaWRhdGlvbic7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbmlmIChmb3JtKSBuZXcgRm9ybVZhbGlkYXRpb24oZm9ybSkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9