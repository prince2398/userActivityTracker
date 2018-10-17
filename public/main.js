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

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <title>Admin</title>\n  </head>\n  <body>\n    <div *ngIf=\"user\">\n      <h1>User Id : {{user?._id}}</h1>\n      <h3>Clicks : {{user?.clicks}}</h3>\n      <h3>Hovers : {{user?.hovers}}</h3>\n    </div>\n    <h2>Logs</h2>\n    <br>\n    <ul>\n      <li *ngFor=\"let log of logs \">\n        \n        <div *ngIf=\"log?.user_id == id\">\n          {{log?.time | date: \"dd-MM-yyyy HH:mm:ss\" }} : {{log?.type}}ed on image {{log?.image+1}}.\n        </div>\n      </li>\n    </ul>\n  </body>\n</html>"

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
/* harmony import */ var _services_log_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/log-data.service */ "./src/app/services/log-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
        this.logService = logService;
        this.dataService = dataService;
        this.route = route;
        this.logs = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:3000');
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get id from route
        this.id = this.route.snapshot.paramMap.get('id');
        //socket join event emit
        this.socket.emit('join', { user: 'admin', id: this.id });
        //get data from api using api
        this.dataService.getUserData(this.id).subscribe(function (user) {
            _this.user = user;
        });
        //add connection log
        var now = new Date();
        var newLog = {
            time: now.getTime(),
            type: 'Admin Connect',
            image: null,
            user_id: this.id,
        };
        this.logService.addLog(newLog).subscribe((function (log) {
            console.log(JSON.parse(log));
            _this.socket.emit('update', { id: _this.id });
        }));
        //get all log
        this.logService.getAllLogs(this.id).subscribe(function (logs) {
            for (var i = logs.length - 1; i >= 0; i--) {
                _this.logs.unshift(logs[i]);
            }
        });
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.socket.on('updateData', function (data) {
                console.log('updated');
                _this.updateLogs();
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        observable.subscribe(function (data) {
            console.log('Updated logs');
        });
        // this.dataService.channel.bind('new-user', data => {
        //   this.user = data.user ;
        // });
        // this.logService.updateData().subscribe((data)=>{});
        this.socket.emit('join', { user: 'admin', id: this.id });
        // this.socket.on('udateData',(data)=>{
        //   if(data.result == 'success' && data.id == this.id ){
        //     this.dataService.getData(this.id);
        //     this.logService.getLogs(this.id);
        //   }
        // })
        // this.id = this.route.snapshot.params.id;
        // this.dataService.getData(this.id).subscribe((user)=>{
        //   this.user = user;
        // })
    };
    AdminComponent.prototype.updateLogs = function () {
        var _this = this;
        this.dataService.getUserData(this.id).subscribe(function (user) {
            _this.user = user;
        });
        this.logService.getRecentLogs(this.user._id, this.logs[0].time).subscribe(function (logs) {
            for (var i = logs.length - 1; i >= 0; i--) {
                _this.logs.unshift(logs[i]);
            }
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_log_data_service__WEBPACK_IMPORTED_MODULE_2__["LogDataService"],
            _services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__["CollectDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ActivatedRoute, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { User } from '../../../../user';
var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(dataService) {
        this.dataService = dataService;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        // this.dataService.channel.bind('new-user', data => {
        //   this.user = data.user ;
        // });
        this.dataService.createNewUser();
    };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! ./new-user.component.html */ "./src/app/components/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/components/new-user/new-user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_collect_data_service__WEBPACK_IMPORTED_MODULE_1__["CollectDataService"]])
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

module.exports = "<!DOCTYPE html>\r\n<!DOCTYPE html>\r\n<html>\r\n    <head>\r\n        <title>Activity Tracker</title>\r\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n    </head>\r\n    <body>\r\n        <br><br>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(0)\" (mouseover)=\"onHover(0)\" class=\"card-img-top\" src= \"../../../assets/images/mongodb.png\">\r\n                       \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(1)\" (mouseover)=\"onHover(1)\"class=\"card-img-top\" src= \"../../../assets/images/expressjs.png\">\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(2)\" (mouseover)=\"onHover(2)\" class=\"card-img-top\" src= \"../../../assets/images/angularjs.jpg\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(3)\" (mouseover)=\"onHover(3)\" class=\"card-img-top\" src= \"../../../assets/images/nodejs.png\">\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card mb-4 shadow-sm\">\r\n                        <img (click)=\"onClick(4)\" (mouseover)=\"onHover(4)\" class=\"card-img-top\" src= \"../../../assets/images/js.png\">\r\n                       \r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\r\n    </body>\r\n</html>"

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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
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
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:3000');
    }
    UserComponent.prototype.ngOnInit = function () {
        // this.dataService.channel.bind('new-user', data => {
        //   this.user = data.user ;
        // });
        var _this = this;
        //get id from route
        this.id = this.route.snapshot.paramMap.get('id');
        // socket join event
        this.socket.emit('join', { user: 'client', id: this.id });
        //get user data from api
        this.dataService.getUserData(this.id).subscribe(function (user) {
            _this.user = user;
        });
        //Add Connection log 
        var now = new Date();
        var newLog = {
            time: now.getTime(),
            type: 'Connect',
            image: null,
            user_id: this.id,
        };
        this.logService.addLog(newLog).subscribe((function (log) {
            console.log('Log Added' + log);
            _this.socket.emit('update', { id: _this.id });
        }));
        // console.log(this.route);
        // this.user.clicks = [0,0,0,0,0];  
        // this.user.hovers = [0,0,0,0,0];
        // console.log(this.user.clicks);
        // console.log(this.user.hovers);
    };
    UserComponent.prototype.onClick = function (i) {
        var _this = this;
        //Click Update
        this.user.clicks[i] += 1;
        this.dataService.updateUser(this.user).subscribe(function (user) {
            console.log('User Clicks Updated');
            _this.user = JSON.parse(user);
        });
        //Add Log
        var now = new Date();
        var log = {
            time: now.getTime(),
            type: 'Click',
            image: i,
            user_id: this.id,
        };
        this.logService.addLog(log).subscribe(function (log) {
            console.log('Log Added' + log);
            _this.socket.emit('update', { id: _this.id });
        });
        // this.user.clicks[i] = Number(this.user.clicks[i]) + Number(1);
        // this.dataService.updateUser(this.user).subscribe();
        // console.log(this.user.clicks);
    };
    UserComponent.prototype.onHover = function (i) {
        var _this = this;
        //hover update
        this.user.hovers[i] += 1;
        this.dataService.updateUser(this.user).subscribe(function (user) {
            console.log('User hover Updated');
            _this.user = JSON.parse(user);
        });
        //Add Log
        var now = new Date();
        var log = {
            time: now.getTime(),
            type: 'Hover',
            image: i,
            user_id: this.id,
        };
        this.logService.addLog(log).subscribe(function (log) {
            console.log('Log Added' + log);
            _this.socket.emit('update', { id: _this.id });
        });
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



var CollectDataService = /** @class */ (function () {
    function CollectDataService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.endpoint = 'http://localhost:3000/api/';
        console.log('CollectDataService started...');
        // this.pusher = new Pusher(environment.pusher.key, {
        //   cluster: environment.pusher.cluster,
        //   encrypted: true
        // });
        // console.log(this.pusher);
        // this.channel = this.pusher.subscribe('events-channel');
        // console.log('CollectDataService started...');
        // console.log(this.currentUser);
    }
    CollectDataService.prototype.getUserData = function (id) {
        return this.http.get(this.endpoint + id);
        // .subscribe(user =>{
        //   console.log('User Data: '+user);
        // });
        // return {error:'trouble getting User Data'};
    };
    CollectDataService.prototype.updateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.endpoint + user._id, user, { headers: headers, responseType: 'text' });
        // .subscribe(user=>{
        //   console.log('User Updated');
        //   return user;
        // });
        // return {error:'trouble Updating User Data'};
    };
    CollectDataService.prototype.createNewUser = function () {
        var _this = this;
        this.http.get(this.endpoint).subscribe(function (user) {
            console.log(user);
            _this.router.navigate(['/' + user._id]);
        });
        return { error: 'trouble creating User Data' };
    };
    CollectDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
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
        this.endpoint = 'http://localhost:3000/logs/';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://localhost:3000');
    }
    // updateData(){
    //   let observable = new Observable<{id:any, result:String}>(observer=>{
    //     this.socket.on('updateData', (data)=>{
    //       this.getLogs(data.id);
    //       observer.next(data);
    //     });
    //     return () => {this.socket.disconnect();}
    //   });
    //   return observable;
    // }
    LogDataService.prototype.getAllLogs = function (user_id) {
        return this.http.get(this.endpoint + user_id);
        // .subscribe(logs=>{
        //   console.log(logs);
        //   return logs;
        // });
        // return {error:'trouble getting logs'};
    };
    LogDataService.prototype.getOneLog = function (user_id) {
        return this.http.get(this.endpoint + user_id + '/one');
        // .subscribe(log=>{
        //   console.log(log);
        //   return log;
        // });
        // return {error:'trouble getting log'};
    };
    LogDataService.prototype.getRecentLogs = function (user_id, time) {
        return this.http.get(this.endpoint + user_id + '/' + time);
    };
    LogDataService.prototype.addLog = function (log) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.endpoint + log.user_id, log, { headers: headers, responseType: 'text' });
        // .subscribe(log=>{
        //   console.log('Log Added');
        //   return log;
        // });
        // return {error:'trouble adding logs'};
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


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map