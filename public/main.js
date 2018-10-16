(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_collect_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/collect-data.service */ "./src/app/services/collect-data.service.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"] },
    { path: ':id', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"] },
    { path: ':id/admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_services_collect_data_service__WEBPACK_IMPORTED_MODULE_4__["CollectDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Admin</title>\n  </head>\n  <body>\n    <div *ngIf=\"user\">\n      <h1>User Id : {{user?._id}}</h1>\n      <h3>Clicks : {{user?.clicks}}</h3>\n      <h3>Hovers : {{user?.hovers}}</h3>\n    </div>\n    <h2>Logs</h2>\n    <ul>\n      <li *ngFor=\"let log of logs \">\n        \n        <div *ngIf=\"log.user_id == id\">\n          {{log?.time | date: \"dd-MM-yyyy HH:mm:ss\" }} : {{log.type}}ed on image {{log.image+1}}.\n        </div>\n      </li>\n    </ul>\n  </body>\n</html>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collect-data.service */ "./src/app/services/collect-data.service.ts");
/* harmony import */ var rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/interval */ "./node_modules/rxjs-compat/_esm5/observable/interval.js");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/log-data.service */ "./src/app/services/log-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(logService, dataService, route) {
        var _this = this;
        this.logService = logService;
        this.dataService = dataService;
        this.route = route;
        this.source = Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_2__["interval"])(500);
        this.subscribe = this.source.subscribe(function (val) {
            _this.dataService.getData(_this.id);
        });
        this.log = Object(rxjs_observable_interval__WEBPACK_IMPORTED_MODULE_2__["interval"])(500);
        this.logSubscribe = this.log.subscribe(function (val) {
            _this.logService.getLogs(_this.id);
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.dataService.getData(this.id);
        this.dataService.currentUser.subscribe(function (user) { return _this.user = user; });
        this.logService.getLogs(this.id);
        this.logService.currentLog.subscribe(function (logs) { return _this.logs = logs; });
        this.dataService.channel.bind('new-user', function (data) {
            _this.user = data.user;
        });
        // this.id = this.route.snapshot.params.id;
        // this.dataService.getData(this.id).subscribe((user)=>{
        //   this.user = user;
        // })
    };
    AdminComponent.prototype.sortFunc = function (a, b) {
        return b.time - a.time;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_log_data_service__WEBPACK_IMPORTED_MODULE_3__["LogDataService"],
            _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__["CollectDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/new-user/new-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Getting Ready....\n</p>\n"

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.ts ***!
  \***********************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collect-data.service */ "./src/app/services/collect-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.channel.bind('new-user', function (data) {
            _this.user = data.user;
        });
        this.dataService.createNewUser();
        this.dataService.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/components/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/components/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__["CollectDataService"]])
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Activity Tracker</title>\r\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\r\n    </head>\r\n    <body>\r\n        <br><br>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(0)\" (mouseover)=\"onHover(0)\" class=\"card-img-top\" src= \"../../../assets/images/mongodb.png\">\r\n                        <p>clicks: {{user?.clicks[0]}} , hovers: {{user?.hovers[0] }}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(1)\" (mouseover)=\"onHover(1)\"class=\"card-img-top\" src= \"../../../assets/images/expressjs.png\">\r\n                        <p>clicks: {{user?.clicks[1] }} , hovers: {{user?.hovers[1] }}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(2)\" (mouseover)=\"onHover(2)\" class=\"card-img-top\" src= \"../../../assets/images/angularjs.jpg\">\r\n                        <p>clicks: {{user?.clicks[2] }} , hovers: {{user?.hovers[2] }}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(3)\" (mouseover)=\"onHover(3)\" class=\"card-img-top\" src= \"../../../assets/images/nodejs.png\">\r\n                        <p>clicks: {{user?.clicks[3] }} , hovers: {{user?.hovers[3] }}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(4)\" (mouseover)=\"onHover(4)\" class=\"card-img-top\" src= \"../../../assets/images/js.png\">\r\n                        <p>clicks: {{user?.clicks[4]}} , hovers: {{user?.hovers[4] }}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\r\n    </body>\r\n</html>"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/collect-data.service */ "./src/app/services/collect-data.service.ts");
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/log-data.service */ "./src/app/services/log-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(logService, dataService, route) {
        this.logService = logService;
        this.dataService = dataService;
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.channel.bind('new-user', function (data) {
            _this.user = data.user;
        });
        this.id = this.route.snapshot.paramMap.get('id');
        this.dataService.getData(this.id);
        this.dataService.currentUser.subscribe(function (user) { return _this.user = user; });
        // console.log(this.route);
        // this.user.clicks = [0,0,0,0,0];  
        // this.user.hovers = [0,0,0,0,0];
        // console.log(this.user.clicks);
        // console.log(this.user.hovers);
    };
    UserComponent.prototype.onClick = function (i) {
        this.dataService.incrementClicks(i);
        var now = new Date();
        var log = {
            time: now.getTime(),
            type: 'Click',
            image: i,
            user_id: this.id,
        };
        this.logService.addLog(log);
        // this.user.clicks[i] = Number(this.user.clicks[i]) + Number(1);
        // this.dataService.updateUser(this.user).subscribe();
        // console.log(this.user.clicks);
    };
    UserComponent.prototype.onHover = function (i) {
        this.dataService.incrementHover(i);
        var now = new Date();
        var log = {
            time: now.getTime(),
            type: 'Hover',
            image: i,
            user_id: this.id,
        };
        this.logService.addLog(log);
        // console.log(this.user.hovers);
        // this.user.hovers[i] = Number(this.user.hovers[i]) + Number(1);
        // this.dataService.updateUser(this.user).subscribe();
        // console.log(this.user.hovers);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_log_data_service__WEBPACK_IMPORTED_MODULE_2__["LogDataService"],
            _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__["CollectDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/enviroments/enviroment.ts":
/*!*******************************************!*\
  !*** ./src/app/enviroments/enviroment.ts ***!
  \*******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    pusher: {
        key: '252cb0073819c9f5ae33',
        cluster: 'ap2',
    }
};


/***/ }),

/***/ "./src/app/services/collect-data.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/collect-data.service.ts ***!
  \**************************************************/
/*! exports provided: CollectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectDataService", function() { return CollectDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enviroments_enviroment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enviroments/enviroment */ "./src/app/enviroments/enviroment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollectDataService = /** @class */ (function () {
    function CollectDataService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.endpoint = 'api/';
        this.userSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.user);
        this.currentUser = this.userSource.asObservable();
        console.log('CollectDataService started...');
        this.pusher = new Pusher(_enviroments_enviroment__WEBPACK_IMPORTED_MODULE_4__["environment"].pusher.key, {
            cluster: _enviroments_enviroment__WEBPACK_IMPORTED_MODULE_4__["environment"].pusher.cluster,
            encrypted: true
        });
        console.log(this.pusher);
        this.channel = this.pusher.subscribe('events-channel');
        console.log('CollectDataService started...');
        // console.log(this.currentUser);
    }
    CollectDataService.prototype.getData = function (id) {
        var _this = this;
        this.http.get(this.endpoint + id).subscribe(function (user) {
            _this.user = user;
            _this.userSource.next(user);
        });
    };
    CollectDataService.prototype.updateUser = function (user) {
        this.userSource.next(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.endpoint + user._id, user, { headers: headers, responseType: 'text' });
    };
    CollectDataService.prototype.createNewUser = function () {
        var _this = this;
        this.http.get(this.endpoint).subscribe(function (user) {
            _this.user = user;
            console.log(user);
            _this.userSource.next(user);
            _this.router.navigate(['/' + user._id]);
        });
    };
    CollectDataService.prototype.incrementClicks = function (i) {
        this.user.clicks[i] += 1;
        console.log(this.user.clicks);
        this.updateUser(this.user).subscribe();
    };
    CollectDataService.prototype.incrementHover = function (i) {
        this.user.hovers[i] += 1;
        console.log(this.user.hovers);
        this.updateUser(this.user).subscribe();
        ;
    };
    CollectDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CollectDataService);
    return CollectDataService;
}());



/***/ }),

/***/ "./src/app/services/log-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/log-data.service.ts ***!
  \**********************************************/
/*! exports provided: LogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDataService", function() { return LogDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogDataService = /** @class */ (function () {
    function LogDataService(http) {
        // const now = new Date();
        // this.logs = [{
        //   time: now.getTime(),
        //   type: 'Connect',
        //   image: null,
        //   user_id:this.;
        // }]
        this.http = http;
        this.endpoint = 'logs/';
        this.logs = [];
        this.logsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.logs);
        this.currentLog = this.logsSource.asObservable();
    }
    LogDataService.prototype.getLogs = function (id) {
        var _this = this;
        this.http.get(this.endpoint + id).subscribe(function (logs) {
            _this.logs = logs;
            _this.logsSource.next(logs);
        });
    };
    LogDataService.prototype.addLog = function (log) {
        var _this = this;
        console.log(log);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        this.http.post(this.endpoint + log.user_id, log, { headers: headers, responseType: 'text' }).subscribe(function (log) {
            _this.logs.unshift(log);
            _this.logsSource.next(_this.logs);
        });
    };
    LogDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogDataService);
    return LogDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rakesh\Desktop\PP\node\userActivity\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map