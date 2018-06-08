webpackJsonp(["profile.module"],{

/***/ "./src/app/profile/profile-articles.component.html":
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"articlesConfig\">\n</app-article-list>\n"

/***/ }),

/***/ "./src/app/profile/profile-articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileArticlesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileArticlesComponent = /** @class */ (function () {
    function ProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh article load on swap
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    ProfileArticlesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-articles',
            template: __webpack_require__("./src/app/profile/profile-articles.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ProfileArticlesComponent);
    return ProfileArticlesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"favoritesConfig\">\n</app-article-list>\n"

/***/ }),

/***/ "./src/app/profile/profile-favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileFavoritesComponent = /** @class */ (function () {
    function ProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    ProfileFavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-favorites',
            template: __webpack_require__("./src/app/profile/profile-favorites.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/catchError.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileResolver = /** @class */ (function () {
    function ProfileResolver(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['username'])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_catchError__["a" /* catchError */])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ProfileResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core__["d" /* ProfilesService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ProfileResolver);
    return ProfileResolver;
}());



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_articles_component__ = __webpack_require__("./src/app/profile/profile-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_favorites_component__ = __webpack_require__("./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_resolver_service__ = __webpack_require__("./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: ':username',
        component: __WEBPACK_IMPORTED_MODULE_5__profile_component__["a" /* ProfileComponent */],
        resolve: {
            profile: __WEBPACK_IMPORTED_MODULE_4__profile_resolver_service__["a" /* ProfileResolver */]
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__profile_articles_component__["a" /* ProfileArticlesComponent */]
            },
            {
                path: 'favorites',
                component: __WEBPACK_IMPORTED_MODULE_3__profile_favorites_component__["a" /* ProfileFavoritesComponent */]
            }
        ]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n          <img [src]=\"profile.image\" class=\"user-img\" />\n          <h4>{{ profile.username }}</h4>\n          <p>{{ profile.bio }}</p>\n          <app-follow-button\n            [hidden]=\"isUser\"\n            [profile]=\"profile\"\n            (toggle)=\"onToggleFollowing($event)\">\n          </app-follow-button>\n           <a [routerLink]=\"['/settings']\"\n              [hidden]=\"!isUser\"\n              class=\"btn btn-sm btn-outline-secondary action-btn\">\n              <i class=\"ion-gear-a\"></i> Edit Profile Settings\n            </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username]\">\n                 My Posts\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username, 'favorites']\">\n                 Favorited Posts\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <router-outlet></router-outlet>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__("./src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route.data.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_concatMap__["a" /* concatMap */])(function (data) {
            _this.profile = data.profile;
            // Load the current user's data.
            return _this.userService.currentUser.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_tap__["a" /* tap */])(function (userData) {
                _this.currentUser = userData;
                _this.isUser = (_this.currentUser.username === _this.profile.username);
            }));
        })).subscribe();
    };
    ProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-page',
            template: __webpack_require__("./src/app/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__core__["f" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_articles_component__ = __webpack_require__("./src/app/profile/profile-articles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_favorites_component__ = __webpack_require__("./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_resolver_service__ = __webpack_require__("./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_routing_module__ = __webpack_require__("./src/app/profile/profile-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__shared__["c" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__profile_routing_module__["a" /* ProfileRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__profile_articles_component__["a" /* ProfileArticlesComponent */],
                __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__profile_favorites_component__["a" /* ProfileFavoritesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__profile_resolver_service__["a" /* ProfileResolver */]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map