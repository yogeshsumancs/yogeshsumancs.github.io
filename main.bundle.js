webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article/article.module": [
		"./src/app/article/article.module.ts",
		"article.module"
	],
	"./editor/editor.module": [
		"./src/app/editor/editor.module.ts",
		"editor.module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile.module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__ = __webpack_require__("./src/app/ifsccode/ifsccode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule'
    },
    {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
    },
    {
        path: 'ifsccode',
        //loadChildren: './article/article.module#ArticleModule'
        component: __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */]
        //    loadChildren: './ifsccode/ifsccode.module#IfscModule'
    },
    { path: 'ifsccode/:bankId', component: __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */] },
    { path: 'ifsccode/:bankId/:stateId', component: __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */] },
    { path: 'ifsccode/:bankId/:stateId/:districtId', component: __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */] },
    { path: 'ifsccode/:bankId/:stateId/:districtId/:branchId', component: __WEBPACK_IMPORTED_MODULE_2__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, {
                    // preload all modules; optionally we could
                    // implement a custom preloading strategy for just some
                    // of the modules (PRs welcome 😉)
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* PreloadAllModules */]
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout-header></app-layout-header>\n<!-- <app-ifsccode></app-ifsccode> -->\n<router-outlet></router-outlet>\n\n<app-layout-footer></app-layout-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.populate();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core__["f" /* UserService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("./src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_module__ = __webpack_require__("./src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_auto_complete__ = __webpack_require__("./node_modules/ng-auto-complete/ng-autocomplete.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ifsccode_ifsccode_component__ = __webpack_require__("./src/app/ifsccode/ifsccode.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__shared__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__shared__["b" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_10__ifsccode_ifsccode_component__["a" /* IfsccodeComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared__["c" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_auto_complete__["b" /* NgAutoCompleteModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__ = __webpack_require__("./src/app/auth/no-auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__["a" /* NoAuthGuard */]]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__no_auth_guard_service__["a" /* NoAuthGuard */]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-6 offset-md-3 col-xs-12\">\n        <h1 class=\"text-xs-center\">{{ title }}</h1>\n        <p class=\"text-xs-center\">\n          <a [routerLink]=\"['/login']\" *ngIf=\"authType == 'register'\">Have an account?</a>\n          <a [routerLink]=\"['/register']\" *ngIf=\"authType == 'login'\">Need an account?</a>\n        </p>\n        <app-list-errors [errors]=\"errors\"></app-list-errors>\n        <form [formGroup]=\"authForm\" (ngSubmit)=\"submitForm()\">\n          <fieldset [disabled]=\"isSubmitting\">\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"username\"\n                placeholder=\"Username\"\n                class=\"form-control form-control-lg\"\n                type=\"text\"\n                *ngIf=\"authType == 'register'\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"email\"\n                placeholder=\"Email\"\n                class=\"form-control form-control-lg\"\n                type=\"text\" />\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <input\n                formControlName=\"password\"\n                placeholder=\"Password\"\n                class=\"form-control form-control-lg\"\n                type=\"password\" />\n            </fieldset>\n            <button class=\"btn btn-lg btn-primary pull-xs-right\" [disabled]=\"!authForm.valid\" type=\"submit\">\n              {{ title }}\n            </button>\n          </fieldset>\n        </form>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, router, userService, fb) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.authType = '';
        this.title = '';
        this.errors = { errors: {} };
        this.isSubmitting = false;
        // use FormBuilder to create a form group
        this.authForm = this.fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a title for the page accordingly
            _this.title = (_this.authType === 'login') ? 'Sign in' : 'Sign up';
            // add form control for username if this is the register page
            if (_this.authType === 'register') {
                _this.authForm.addControl('username', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]());
            }
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = { errors: {} };
        var credentials = this.authForm.value;
        this.userService
            .attemptAuth(this.authType, credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            _this.errors = err;
            _this.isSubmitting = false;
        });
    };
    AuthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-page',
            template: __webpack_require__("./src/app/auth/auth.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__core__["f" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_component__ = __webpack_require__("./src/app/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_auth_guard_service__ = __webpack_require__("./src/app/auth/no-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__ = __webpack_require__("./src/app/auth/auth-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__auth_routing_module__["a" /* AuthRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__auth_component__["a" /* AuthComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__no_auth_guard_service__["a" /* NoAuthGuard */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/no-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_take__["a" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (isAuth) { return !isAuth; }));
    };
    NoAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interceptors_http_token_interceptor__ = __webpack_require__("./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("./src/app/core/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_3__interceptors_http_token_interceptor__["a" /* HttpTokenInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_4__services__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["b" /* ArticlesService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["c" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_4__services__["d" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["e" /* JwtService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["f" /* ProfilesService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["g" /* TagsService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["h" /* UserService */]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/core/services/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__services__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors__ = __webpack_require__("./src/app/core/interceptors/index.ts");
/* unused harmony namespace reexport */





/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpTokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/core/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services__["e" /* JwtService */]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_token_interceptor__ = __webpack_require__("./src/app/core/interceptors/http.token.interceptor.ts");
/* unused harmony namespace reexport */



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__("./src/app/core/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */](error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpParams */](); }
        return this.http.get("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, { params: params })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path, JSON.stringify(body)).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api_url + path).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_catchError__["a" /* catchError */])(this.formatErrors));
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* JwtService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/articles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService) {
        this.apiService = apiService;
    }
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return data.article; }));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_map__["a" /* map */])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    };
    ArticlesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/core/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_take__["a" /* take */])(1));
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__articles_service__ = __webpack_require__("./src/app/core/services/articles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__articles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("./src/app/core/services/auth-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_service__ = __webpack_require__("./src/app/core/services/comments.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__comments_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jwt_service__ = __webpack_require__("./src/app/core/services/jwt.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__jwt_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profiles_service__ = __webpack_require__("./src/app/core/services/profiles.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__profiles_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tags_service__ = __webpack_require__("./src/app/core/services/tags.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__tags_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("./src/app/core/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__user_service__["a"]; });










/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/services/profiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilesService = /** @class */ (function () {
    function ProfilesService(apiService) {
        this.apiService = apiService;
    }
    ProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) { return data.profile; }));
    };
    ProfilesService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfilesService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], ProfilesService);
    return ProfilesService;
}());



/***/ }),

/***/ "./src/app/core/services/tags.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) { return data.tags; }));
    };
    TagsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__ = __webpack_require__("./node_modules/rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("./src/app/core/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jwt_service__ = __webpack_require__("./src/app/core/services/jwt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = /** @class */ (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators_distinctUntilChanged__["a" /* distinctUntilChanged */])());
        this.isAuthenticatedSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators_map__["a" /* map */])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__jwt_service__["a" /* JwtService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/home/home-auth-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAuthResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_take__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeAuthResolver = /** @class */ (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_take__["a" /* take */])(1));
    };
    HomeAuthResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], HomeAuthResolver);
    return HomeAuthResolver;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_auth_resolver_service__ = __webpack_require__("./src/app/home/home-auth-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        resolve: {
            isAuthenticated: __WEBPACK_IMPORTED_MODULE_3__home_auth_resolver_service__["a" /* HomeAuthResolver */]
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor:pointer;\n}\n\n.tag-pill{\n  cursor:pointer;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n\n  <div class=\"banner\" *appShowAuthed=\"false\">\n    <div class=\"container\">\n      <h1 class=\"logo-font\"><a [routerLink]=\"['ifsccode']\"> Find IFSC code </a></h1>\n      <p>A place to share your <i>Angular 2</i> knowledge.</p>\n    </div>\n  </div>\n\n  <div class=\"container page\">\n    <div class=\"row\">\n\n      <div class=\"col-md-9\">\n        <div class=\"feed-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'feed'}\"\n                 (click)=\"setListTo('feed')\">\n                 Your Feed\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 [ngClass]=\"{'active': listConfig.type === 'all' && !listConfig.filters.tag}\"\n                 (click)=\"setListTo('all')\">\n                 Global Feed\n              </a>\n            </li>\n            <li class=\"nav-item\" [hidden]=\"!listConfig.filters.tag\">\n              <a class=\"nav-link active\">\n                <i class=\"ion-pound\"></i> {{ listConfig.filters.tag }}\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <app-article-list [limit]=\"10\" [config]=\"listConfig\"></app-article-list>\n      </div>\n\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n          <p>Popular Tags</p>\n\n          <div class=\"tag-list\">\n            <a *ngFor=\"let tag of tags\"\n               (click)=\"setListTo('all', {tag: tag})\"\n               class=\"tag-default tag-pill\">\n               {{ tag }}\n            </a>\n          </div>\n\n          <div [hidden]=\"tagsLoaded\">\n            Loading tags...\n          </div>\n\n          <div [hidden]=\"!tagsLoaded || tags.length > 0\">\n            No tags are here... yet.\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.listConfig = {
            type: 'all',
            filters: {}
        };
        this.tags = [];
        this.tagsLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            _this.isAuthenticated = authenticated;
            // set the article list accordingly
            if (authenticated) {
                _this.setListTo('feed');
            }
            else {
                _this.setListTo('all');
            }
        });
        this.tagsService.getAll()
            .subscribe(function (tags) {
            _this.tags = tags;
            _this.tagsLoaded = true;
        });
    };
    HomeComponent.prototype.setListTo = function (type, filters) {
        if (type === void 0) { type = ''; }
        if (filters === void 0) { filters = {}; }
        // If feed is requested but user is not authenticated, redirect to login
        if (type === 'feed' && !this.isAuthenticated) {
            this.router.navigateByUrl('/login');
            return;
        }
        // Otherwise, set the list object
        this.listConfig = { type: type, filters: filters };
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core__["e" /* TagsService */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_auth_resolver_service__ = __webpack_require__("./src/app/home/home-auth-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared__["c" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__home_routing_module__["a" /* HomeRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__home_auth_resolver_service__["a" /* HomeAuthResolver */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/ifsccode/ifsccode.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ifsccode/ifsccode.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><h1>FIND IFSC CODE</h1>\n<!-- <ng-autocomplete (selected)=\"Selected($event)\" [classes]=\"['']\" [group]=\"group\"></ng-autocomplete> -->\n\n<form #f=\"ngForm\" class=\"example-form\" novalidate (ngSubmit)=\"findIFSCCode()\">\n    <div class=\"row\">\n        <div class=\"col-md-2\"><label>Select Your Bank</label> </div>\n        <div class=\"col-md-4\">\n            <ng-autocomplete (selected)=\"filterStates($event)\" [classes]=\"['']\" [class]=\"form-control\"  [group]=\"bankGroup\" name=\"bankId\"  [(ngModel)]=\"general.bankId\" #refBank=\"ngModel\" id=\"bankId\" required=\"required\" ></ng-autocomplete>\n            \n        </div>\n        <div class=\"col-md-4\">\n           \n        </div>\n        <br />\n        <br />\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\"><label>Select Bank State</label> </div>\n        <div class=\"col-md-4\">\n            <ng-autocomplete (selected)=\"filterDistrict($event)\" [classes]=\"['']\"  [group]=\"stateGroup\" name=\"stateId\"  [(ngModel)]=\"general.stateId\" #refState=\"ngModel\" id=\"stateId\" required=\"required\" ></ng-autocomplete>\n            <!-- <select (change)=\"filterDistrict($event)\" class=\"form-control\" name=\"stateId\" [(ngModel)]=\"general.stateId\" #refState=\"ngModel\" id=\"stateId\" required>\n                <option value=\"\">--Select--</option>\n                <option *ngFor=\"let state of states\" value={{state.id}}>\n                    {{state.name}}\n                </option>\n            </select> -->\n        </div>\n        <div class=\"col-md-4\">\n            <!-- <div *ngIf=\"!refState.valid  && (refState.dirty || refState.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!refState.errors.required\">\n                    This field is required\n                </div>\n            </div> -->\n        </div>\n        <br />\n        <br />\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\"><label>Select Bank District</label> </div>\n        <div class=\"col-md-4\">\n            <ng-autocomplete (selected)=\"filterBranch($event)\" [classes]=\"['']\"  [group]=\"districtGroup\" name=\"districtId\"   [(ngModel)]=\"general.districtId\" #refDistrict=\"ngModel\" id=\"districtId\" required=\"required\" ></ng-autocomplete>\n            <!-- <select (change)=\"filterBranch($event)\" class=\"form-control\" name=\"districtId\" [(ngModel)]=\"general.districtId\" #refDistrict=\"ngModel\" id=\"districtId\" required>\n                <option value=\"\">--Select--</option>\n                <option *ngFor=\"let district of districts\" value={{district.id}}>\n                    {{district.name}}\n                </option>\n            </select> -->\n        </div>\n        <div class=\"col-md-4\">\n            <!-- <div *ngIf=\"!refDistrict.valid  && (refDistrict.dirty || refDistrict.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!refDistrict.errors.required\">\n                    This field is required\n                </div>\n            </div> -->\n        </div>\n        <br />\n\n        <br />\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\"><label>Select Bank Branch</label> </div>\n        <div class=\"col-md-4\">\n            <ng-autocomplete (selected)=\"onBranchSelection($event)\" [classes]=\"['']\"  [group]=\"branchGroup\" name=\"branchId\"  [(ngModel)]=\"general.branchId\" #refBranch=\"ngModel\" id=\"branchId\" required=\"required\" ></ng-autocomplete>          \n            <!-- <select (change)=\"onBranchSelection($event)\" class=\"form-control\" name=\"branchId\" [(ngModel)]=\"general.branchId\" #refBranch=\"ngModel\" id=\"branchId\" required>\n                <option value=\"\">--Select--</option>\n                <option *ngFor=\"let branch of branches\" value={{branch.id}}>\n                    {{branch.name}}\n                </option>\n            </select> -->\n        </div>\n        <div class=\"col-md-4\">\n            <!-- <div *ngIf=\"!refBranch.valid  && (refBranch.dirty || refBranch.touched)\" class=\"alert alert-danger\">\n                <div [hidden]=\"!refBranch.errors.required\">\n                    This field is required\n                </div>\n            </div> -->\n        </div>\n        <br />\n        <br />\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\"></div>\n        <div class=\"col-md-4\">\n            <button type=\"submit\" [disabled]=\"!f.form.valid\" class=\"btn btn-primary\">Find Now</button>\n        </div>\n        <br />\n        <br />\n    </div>\n    <br />\n    <br />\n</form>\n \n<div *ngIf=\"isFind\" class=\"row \">\n    <div class=\"col-md-6 bg-info\">\n        <div class=\"row\">\n            <div class=\"col-md-4\"><h3>RESULT</h3> </div>\n            <div class=\"col-md-4\">\n            </div>\n            <br />\n            <br />\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"><label>IFSC code</label> </div>\n            <div class=\"col-md-4\">{{ifsccode.ifscCode}} </div>\n            <br />\n            <br />\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"><label>MICR code</label> </div>\n            <div class=\"col-md-4\">{{ifsccode.micrCode}} </div>\n            <br />\n            <br />\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"><label>Phone</label> </div>\n            <div class=\"col-md-4\">{{ifsccode.phone}} </div>\n            <br />\n            <br />\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"><label>Description</label> </div>\n            <div class=\"col-md-4\">{{ifsccode.description}} </div>\n            <br />\n            <br />\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/ifsccode/ifsccode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfsccodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ifsccode_ifsccode_model__ = __webpack_require__("./src/app/ifsccode/ifsccode.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ifsccode_services_ifsccode_service__ = __webpack_require__("./src/app/ifsccode/services/ifsccode.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__ = __webpack_require__("./node_modules/ng-auto-complete/ng-autocomplete.esm.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IfsccodeComponent = /** @class */ (function () {
    // constructor(){}
    function IfsccodeComponent(_service, _Route, activatedRoute, locationService) {
        this._service = _service;
        this._Route = _Route;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.ifsccode = new __WEBPACK_IMPORTED_MODULE_1__ifsccode_ifsccode_model__["b" /* IfscModel */]();
        this.general = new __WEBPACK_IMPORTED_MODULE_1__ifsccode_ifsccode_model__["a" /* GeneralModel */]();
        this.bankGroup = [
            Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose bank', 'resBank', [
                { title: '--Select--', id: '' },
            ], { titleKey: 'title', childrenKey: null }),
        ];
        this.stateGroup = [
            Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose state', 'resState', [
                { title: '--Select--', id: '' },
            ], { titleKey: 'title', childrenKey: null }),
        ];
        this.districtGroup = [
            Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose district', 'resDistrict', [
                { title: '--Select--', id: '' },
            ], { titleKey: 'title', childrenKey: null }),
        ];
        this.branchGroup = [
            Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose branch', 'resBranch', [
                { title: '--Select--', id: '' },
            ], { titleKey: 'title', childrenKey: null }),
        ];
        //this.currentLocation = window.location.href;
        this.currentLocation = _Route.url;
        //this.currentLocation = 'http://localhost:4200/';
        this.isParam = false;
        this.seleted = false;
    }
    // Selected(item: SelectedAutocompleteItem) {
    //   alert(item);
    // }
    // constructor(private _service: Service, private _Route: Router, private activatedRoute: ActivatedRoute, private titleService: Title, private locationService: Location, private platformStrategy: LocationStrategy) {            
    //   debugger;      
    //   this.currentLocation = _Route.url;
    //   this.isParam = false;
    //   this.seleted = false;
    //   let t = titleService.getTitle();
    // }
    IfsccodeComponent.prototype.setDropdownFromUrl = function () {
        this.queryBank = this.activatedRoute.snapshot.paramMap.get('bankId');
        this.queryState = this.activatedRoute.snapshot.paramMap.get('stateId');
        this.queryDistrict = this.activatedRoute.snapshot.paramMap.get('districtId');
        this.queryBranch = this.activatedRoute.snapshot.paramMap.get('branchId');
        if (this.queryBank != null) {
            this.general.bankName = this.queryBank.split('-')[0];
            this.general.bankId = this.queryBank.split('-')[1];
            this.isParam = true;
            this.filterStates("");
            if (this.queryState != null) {
                this.general.stateName = this.queryState.split('-')[0];
                this.general.stateId = this.queryState.split('-')[1];
                this.filterDistrict("");
                if (this.queryDistrict != null) {
                    this.general.districtName = this.queryDistrict.split('-')[0];
                    this.general.districtId = this.queryDistrict.split('-')[1];
                    this.filterBranch("");
                    if (this.queryBranch != null) {
                        this.general.branchName = this.queryBranch.split('-')[0];
                        this.general.branchId = this.queryBranch.split('-')[1];
                    }
                }
            }
        }
    };
    IfsccodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.pService.start();
        this._service
            .GetAllBanks()
            .subscribe(function (result) {
            _this.isFind = false;
            _this.banks = result.data;
            _this.setDropdownFromUrl();
            if (_this.isParam) {
                _this.bankGroup = [
                    Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])(_this.general.bankName, 'resBank', _this.banks, { titleKey: 'name', childrenKey: null }),
                ];
            }
            else {
                _this.bankGroup = [
                    Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose bank', 'resBank', _this.banks, { titleKey: 'name', childrenKey: null }),
                ];
            }
            //this.pService.done();
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
    };
    //onchange bank dropdown
    IfsccodeComponent.prototype.filterStates = function (filter) {
        var _this = this;
        //this.pService.start();
        if (filter != "") {
            this.filterVal = filter.item.id;
            var optionText = filter.item.title;
            this.general.bankId = this.filterVal;
            this.general.bankName = optionText;
            if (this.queryBank != null) {
                this.currentLocation = "/ifsccode";
            }
            if (!this.seleted) {
                this.seleted = true;
            }
            else {
                if (this.queryBank != null) {
                    this.currentLocation = "/ifsccode";
                }
                else {
                    this.currentLocation = this._Route.url;
                }
            }
            this.currentLocation = this.currentLocation + "/" + optionText + "-" + this.filterVal;
            this.locationService.replaceState(this.currentLocation);
        }
        else {
            this.filterVal = this.general.bankId;
        }
        this._service
            .GetStatesByBankId(this.filterVal)
            .subscribe(function (result) {
            _this.states = result.data;
            if (_this.isParam && _this.general.stateName != undefined && _this.general.stateName != '') {
                _this.stateGroup = [
                    Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])(_this.general.stateName, 'resState', _this.states, { titleKey: 'name', childrenKey: null }),
                ];
            }
            else {
                _this.stateGroup = [
                    Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose state', 'resState', _this.states, { titleKey: 'name', childrenKey: null }),
                ];
            }
            //this.pService.done();
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
        this.isFind = false;
        if (!this.isParam || this.seleted) {
            this.general.stateId = 0;
            this.general.stateName = "";
            this.filterDistrict(0);
        }
        //this.pService.done();
    };
    //onchange state dropdown
    IfsccodeComponent.prototype.filterDistrict = function (filter) {
        //this.pService.start();
        var _this = this;
        if (filter != "" && filter != "0") {
            this.filterVal = filter.item.id;
            var optionText = filter.item.title;
            this.general.stateId = this.filterVal;
            this.general.stateName = optionText;
            if (this.queryState != null) {
                this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId;
            }
            if (!this.seleted) {
                this.seleted = true;
            }
            else {
                if (this.queryState != null) {
                    this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId;
                }
                else {
                    this.currentLocation = this._Route.url + "/" + this.general.bankName + "-" + this.general.bankId;
                }
            }
            this.currentLocation = this.currentLocation + "/" + optionText + "-" + this.filterVal;
            this.locationService.replaceState(this.currentLocation);
        }
        else {
            this.filterVal = this.general.stateId;
        }
        if (this.filterVal != '' || this.filterVal == "0") {
            this._service
                .GetDistrictByStateId(this.filterVal)
                .subscribe(function (result) {
                _this.districts = result.data;
                if (_this.isParam && _this.general.districtName != undefined && _this.general.districtName != '') {
                    _this.districtGroup = [
                        Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])(_this.general.districtName, 'resDistrict', _this.districts, { titleKey: 'name', childrenKey: null }),
                    ];
                }
                else {
                    _this.districtGroup = [
                        Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose District', 'resDistrict', _this.districts, { titleKey: 'name', childrenKey: null }),
                    ];
                }
            }, function (error) {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
        }
        this.isFind = false;
        if (!this.isParam || this.seleted) {
            this.general.districtId = 0;
            this.general.districtName = "";
            this.filterBranch(0);
        }
        //this.pService.done();
    };
    //onchange district dropdown
    IfsccodeComponent.prototype.filterBranch = function (filter) {
        var _this = this;
        //this.pService.start();
        if (filter != "" && filter != "0") {
            this.filterVal = filter.item.id;
            var optionText = filter.item.title;
            this.general.districtId = this.filterVal;
            this.general.districtName = optionText;
            if (this.queryDistrict != null) {
                this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId;
            }
            if (!this.seleted) {
                this.seleted = true;
            }
            else {
                if (this.queryDistrict != null) {
                    this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId;
                }
                else {
                    this.currentLocation = this._Route.url + "/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId;
                }
            }
            this.currentLocation = this.currentLocation + "/" + optionText + "-" + this.filterVal;
            this.locationService.replaceState(this.currentLocation);
        }
        else {
            this.filterVal = this.general.districtId;
        }
        if (this.filterVal != '' || this.filterVal == "0") {
            this._service
                .GetBranchByDistrictId_BankId(this.filterVal, this.general.bankId)
                .subscribe(function (result) {
                _this.branches = result.data;
                if (_this.isParam && _this.general.branchName != undefined && _this.general.districtName != '') {
                    _this.branchGroup = [
                        Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])(_this.general.branchName, 'resBranch', _this.branches, { titleKey: 'name', childrenKey: null }),
                    ];
                }
                else {
                    _this.branchGroup = [
                        Object(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["a" /* CreateNewAutocompleteGroup */])('Search / choose Branch', 'resBranch', _this.branches, { titleKey: 'name', childrenKey: null }),
                    ];
                }
            }, function (error) {
                if (error) {
                    alert("An Error has occured please try again after some time !");
                }
            });
        }
        this.isFind = false;
        //this.pService.done();
    };
    //onchange district dropdown
    IfsccodeComponent.prototype.onBranchSelection = function (filter) {
        this.isFind = false;
        this.filterVal = filter.item.id;
        var optionText = filter.item.title;
        this.general.branchId = this.filterVal;
        this.general.branchName = optionText;
        if (this.queryBranch != null) {
            this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId + "/" + this.general.districtName + "-" + this.general.districtId;
        }
        if (!this.seleted) {
            this.seleted = true;
        }
        else {
            if (this.queryBranch != null) {
                this.currentLocation = "/ifsccode/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId + "/" + this.general.districtName + "-" + this.general.districtId;
            }
            else {
                this.currentLocation = this._Route.url + "/" + this.general.bankName + "-" + this.general.bankId + "/" + this.general.stateName + "-" + this.general.stateId + "/" + this.general.districtName + "-" + this.general.districtId;
            }
        }
        this.currentLocation = this.currentLocation + "/" + optionText + "-" + this.filterVal;
        this.locationService.replaceState(this.currentLocation);
    };
    //Find IFSC Code
    IfsccodeComponent.prototype.findIFSCCode = function () {
        var _this = this;
        //this.pService.start();
        this._service
            .findIFSCCode(this.general.branchId)
            .subscribe(function (result) {
            _this.isFind = true;
            _this.ifsccode = result.data;
            //this.pService.done();
        }, function (error) {
            if (error) {
                alert("An Error has occured please try again after some time !");
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */])
    ], IfsccodeComponent.prototype, "resBank", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */])
    ], IfsccodeComponent.prototype, "resState", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */])
    ], IfsccodeComponent.prototype, "resDistrict", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ng_auto_complete__["c" /* NgAutocompleteComponent */])
    ], IfsccodeComponent.prototype, "resBranch", void 0);
    IfsccodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ifsccode',
            template: __webpack_require__("./src/app/ifsccode/ifsccode.component.html"),
            styles: [__webpack_require__("./src/app/ifsccode/ifsccode.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__ifsccode_services_ifsccode_service__["a" /* Service */], useClass: __WEBPACK_IMPORTED_MODULE_2__ifsccode_services_ifsccode_service__["a" /* Service */] },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* PathLocationStrategy */] }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ifsccode_services_ifsccode_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], IfsccodeComponent);
    return IfsccodeComponent;
}());



/***/ }),

/***/ "./src/app/ifsccode/ifsccode.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IfscModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralModel; });
var IfscModel = /** @class */ (function () {
    function IfscModel() {
    }
    return IfscModel;
}());

var GeneralModel = /** @class */ (function () {
    function GeneralModel() {
    }
    return GeneralModel;
}());



/***/ }),

/***/ "./src/app/ifsccode/services/ifsccode.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
var Service = /** @class */ (function () {
    function Service(_http) {
        //this.apiBaseUrl = baseUrl.toString();
        var _this = this;
        this._http = _http;
        this.GetAllBanks = function () {
            _this.actionUrl = _this.apiBaseUrl + 'Bank';
            return _this._http.get(_this.actionUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (response) {
                alert(response.status);
                return response;
            }));
        };
        this.GetStatesByBankId = function (bankId) {
            bankId = bankId == '' || bankId == undefined ? 0 : bankId;
            _this.actionUrlGet = _this.apiBaseUrl + 'State/' + bankId;
            return _this._http.get(_this.actionUrlGet).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (response) {
                alert(response.status);
                return response;
            }));
        };
        this.GetDistrictByStateId = function (stateId) {
            stateId = stateId == '' || stateId == undefined ? 0 : stateId;
            _this.actionUrlGet = _this.apiBaseUrl + 'District/' + stateId;
            return _this._http.get(_this.actionUrlGet).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (response) {
                alert(response.status);
                return response;
            }));
        };
        this.GetBranchByDistrictId_BankId = function (districtId, bankId) {
            bankId = bankId == '' || bankId == undefined ? 0 : bankId;
            districtId = districtId == '' || districtId == undefined ? 0 : districtId;
            _this.actionUrlGet = _this.apiBaseUrl + 'Branch/' + districtId + '/' + bankId;
            return _this._http.get(_this.actionUrlGet).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (response) {
                alert(response.status);
                return response;
            }));
        };
        this.findIFSCCode = function (branchId) {
            _this.actionUrlGet = _this.apiBaseUrl + 'IFSC/' + branchId;
            return _this._http.get(_this.actionUrlGet).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.json(); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function (response) {
                alert(response.status);
                return response;
            }));
        };
        this.apiBaseUrl = 'http://localhost:59126/api/';
        this.actionUrl = '';
        //this.actionUrl = 'http://localhost:59126/api/Bank';        
        this.actionUrlGet = '';
    }
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.css":
/***/ (function(module, exports) {

module.exports = ".page-link {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-article-preview\n  *ngFor=\"let article of results\"\n  [article]=\"article\">\n</app-article-preview>\n\n<div class=\"app-article-preview\"\n  [hidden]=\"!loading\">\n  Loading articles...\n</div>\n\n<div class=\"app-article-preview\"\n  [hidden]=\"loading || results.length\">\n  No articles are here... yet.\n</div>\n\n<nav [hidden]=\"loading || totalPages.length <= 1\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\n      *ngFor=\"let pageNumber of totalPages\"\n      (click)=\"setPageTo(pageNumber)\">\n\n      <a class=\"page-link\" >{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(ArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    ArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ArticleListComponent.prototype, "limit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ArticleListComponent.prototype, "config", null);
    ArticleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-list',
            styles: [__webpack_require__("./src/app/shared/article-helpers/article-list.component.css")],
            template: __webpack_require__("./src/app/shared/article-helpers/article-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core__["a" /* ArticlesService */]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-meta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\n  <a [routerLink]=\"['/profile', article.author.username]\">\n    <img [src]=\"article.author.image\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      [routerLink]=\"['/profile', article.author.username]\">\n      {{ article.author.username }}\n    </a>\n    <span class=\"date\">\n      {{ article.createdAt | date: 'longDate' }}\n    </span>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-meta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleMetaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticleMetaComponent.prototype, "article", void 0);
    ArticleMetaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-meta',
            template: __webpack_require__("./src/app/shared/article-helpers/article-meta.component.html")
        })
    ], ArticleMetaComponent);
    return ArticleMetaComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\n  <app-article-meta [article]=\"article\">\n    <app-favorite-button\n      [article]=\"article\"\n      (toggle)=\"onToggleFavorite($event)\"\n      class=\"pull-xs-right\">\n      {{article.favoritesCount}}\n    </app-favorite-button>\n  </app-article-meta>\n\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\n    <h1>{{ article.title }}</h1>\n    <p>{{ article.description }}</p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        *ngFor=\"let tag of article.tagList\">\n        {{ tag }}\n      </li>\n    </ul>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArticlePreviewComponent.prototype, "article", void 0);
    ArticlePreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-article-preview',
            template: __webpack_require__("./src/app/shared/article-helpers/article-preview.component.html")
        })
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_list_component__ = __webpack_require__("./src/app/shared/article-helpers/article-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__article_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__article_meta_component__ = __webpack_require__("./src/app/shared/article-helpers/article-meta.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__article_meta_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__article_preview_component__ = __webpack_require__("./src/app/shared/article-helpers/article-preview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__article_preview_component__["a"]; });





/***/ }),

/***/ "./src/app/shared/buttons/favorite-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\n [ngClass]=\"{ 'disabled' : isSubmitting,\n              'btn-outline-primary': !article.favorited,\n              'btn-primary': article.favorited }\"\n (click)=\"toggleFavorite()\">\n  <i class=\"ion-heart\"></i> <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/buttons/favorite-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoriteButtonComponent = /** @class */ (function () {
    function FavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_concatMap__["a" /* concatMap */])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article.favorited) {
                return _this.articlesService.favorite(_this.article.slug)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_tap__["a" /* tap */])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfavorite the article
            }
            else {
                return _this.articlesService.unfavorite(_this.article.slug)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_tap__["a" /* tap */])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FavoriteButtonComponent.prototype, "article", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FavoriteButtonComponent.prototype, "toggle", void 0);
    FavoriteButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favorite-button',
            template: __webpack_require__("./src/app/shared/buttons/favorite-button.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core__["a" /* ArticlesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/buttons/follow-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"btn btn-sm action-btn\"\n  [ngClass]=\"{ 'disabled': isSubmitting,\n               'btn-outline-secondary': !profile.following,\n               'btn-secondary': profile.following }\"\n  (click)=\"toggleFollowing()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}\n</button>\n"

/***/ }),

/***/ "./src/app/shared/buttons/follow-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FollowButtonComponent = /** @class */ (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_concatMap__["a" /* concatMap */])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_of__["a" /* of */])(null);
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                return _this.profilesService.follow(_this.profile.username)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfollow this profile
            }
            else {
                return _this.profilesService.unfollow(_this.profile.username)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FollowButtonComponent.prototype, "toggle", void 0);
    FollowButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-follow-button',
            template: __webpack_require__("./src/app/shared/buttons/follow-button.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core__["d" /* ProfilesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/buttons/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__favorite_button_component__ = __webpack_require__("./src/app/shared/buttons/favorite-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__favorite_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__follow_button_component__ = __webpack_require__("./src/app/shared/buttons/follow-button.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__follow_button_component__["a"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__article_helpers__ = __webpack_require__("./src/app/shared/article-helpers/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons__ = __webpack_require__("./src/app/shared/buttons/index.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__("./src/app/shared/layout/index.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__layout__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_errors_component__ = __webpack_require__("./src/app/shared/list-errors.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__shared_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__show_authed_directive__ = __webpack_require__("./src/app/shared/show-authed.directive.ts");
/* unused harmony namespace reexport */








/***/ }),

/***/ "./src/app/shared/layout/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <a class=\"logo-font\" routerLink=\"/\">conduit</a>\n    <span class=\"attribution\">\n      &copy; {{ today | date: 'yyyy' }}.\n      An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>.\n      Code licensed under MIT.\n    </span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/layout/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout-footer',
            template: __webpack_require__("./src/app/shared/layout/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink=\"/\">conduit</a>\n\n    <!-- Show this for logged out users -->\n    <ul *appShowAuthed=\"false\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/login\"\n          routerLinkActive=\"active\">\n          Sign in\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/register\"\n          routerLinkActive=\"active\">\n          Sign up\n        </a>\n      </li>\n\n    </ul>\n\n    <!-- Show this for logged in users -->\n    <ul *appShowAuthed=\"true\"\n      class=\"nav navbar-nav pull-xs-right\">\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/\"\n          routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{ exact: true }\">\n          Home\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/editor\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-compose\"></i>&nbsp;New Article\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          routerLink=\"/settings\"\n          routerLinkActive=\"active\">\n          <i class=\"ion-gear-a\"></i>&nbsp;Settings\n        </a>\n      </li>\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\"\n          [routerLink]=\"['/profile', currentUser.username]\"\n          routerLinkActive=\"active\">\n          <img [src]=\"currentUser.image\" *ngIf=\"currentUser.image\" class=\"user-pic\" />\n          {{ currentUser.username }}\n        </a>\n      </li>\n\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/layout/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout-header',
            template: __webpack_require__("./src/app/shared/layout/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core__["f" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__("./src/app/shared/layout/footer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__("./src/app/shared/layout/header.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__header_component__["a"]; });




/***/ }),

/***/ "./src/app/shared/list-errors.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/list-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-errors',
            template: __webpack_require__("./src/app/shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__article_helpers__ = __webpack_require__("./src/app/shared/article-helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__buttons__ = __webpack_require__("./src/app/shared/buttons/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_errors_component__ = __webpack_require__("./src/app/shared/list-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__ = __webpack_require__("./src/app/shared/show-authed.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* ArticleListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* ArticleMetaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* ArticlePreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* FavoriteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* FollowButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_7__list_errors_component__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["a" /* ArticleListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["b" /* ArticleMetaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__article_helpers__["c" /* ArticlePreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__buttons__["a" /* FavoriteButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_6__buttons__["b" /* FollowButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__list_errors_component__["a" /* ListErrorsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__show_authed_directive__["a" /* ShowAuthedDirective */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-authed.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowAuthedDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core__ = __webpack_require__("./src/app/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({ selector: '[appShowAuthed]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__core__["f" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewContainerRef */]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    api_url: 'https://conduit.productionready.io/api'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
var bootstrapPromise = Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
// Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map