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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sql/sql.component */ "./src/app/sql/sql.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _bars_bars_component__WEBPACK_IMPORTED_MODULE_7__["BarsComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'insight',
        pathMatch: 'full',
        component: _insight_insight_component__WEBPACK_IMPORTED_MODULE_6__["InsightComponent"]
    },
    {
        path: 'manf/:manf',
        pathMatch: 'full',
        component: _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_8__["ManfDetailsComponent"]
    },
    {
        path: 'drinker/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_9__["DrinkerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_10__["DrinkerComponent"]
    },
    {
        path: 'manufacturers',
        pathMatch: 'full',
        component: _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_11__["ManufacturerComponent"]
    },
    {
        path: 'bartenders',
        pathMatch: 'full',
        component: _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_12__["BartenderComponent"]
    },
    {
        path: 'sql',
        pathMatch: 'full',
        component: _sql_sql_component__WEBPACK_IMPORTED_MODULE_13__["SqlComponent"]
    },
    {
        path: 'verify',
        pathMatch: 'full',
        component: _verify_verify_component__WEBPACK_IMPORTED_MODULE_14__["VerifyComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"\">Bar Beer Drinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Bar</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/beers\">Beer</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinker</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/bartenders\">Bartender</a>\n        </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/manufacturers\">Manufacturer</a>\n        </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/sql\">SQL interface</a>\n        </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/insight\">Insight</a>\n        </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"/verify\">Verification Interface</a>\n        </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'bar-beer-drinker-ui';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _insight_insight_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./insight/insight.component */ "./src/app/insight/insight.component.ts");
/* harmony import */ var _bars_bars_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bars/bars.component */ "./src/app/bars/bars.component.ts");
/* harmony import */ var _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manf-details/manf-details.component */ "./src/app/manf-details/manf-details.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./drinker/drinker.component */ "./src/app/drinker/drinker.component.ts");
/* harmony import */ var _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./manufacturer/manufacturer.component */ "./src/app/manufacturer/manufacturer.component.ts");
/* harmony import */ var _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./bartender/bartender.component */ "./src/app/bartender/bartender.component.ts");
/* harmony import */ var _sql_sql_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sql/sql.component */ "./src/app/sql/sql.component.ts");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./verify/verify.component */ "./src/app/verify/verify.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_24__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_10__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_11__["BeerDetailsComponent"],
                _bars_bars_component__WEBPACK_IMPORTED_MODULE_15__["BarsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_12__["BeersComponent"],
                _insight_insight_component__WEBPACK_IMPORTED_MODULE_14__["InsightComponent"],
                _bars_bars_component__WEBPACK_IMPORTED_MODULE_15__["BarsComponent"],
                _manf_details_manf_details_component__WEBPACK_IMPORTED_MODULE_16__["ManfDetailsComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_17__["DrinkerDetailsComponent"],
                _drinker_drinker_component__WEBPACK_IMPORTED_MODULE_18__["DrinkerComponent"],
                _manufacturer_manufacturer_component__WEBPACK_IMPORTED_MODULE_19__["ManufacturerComponent"],
                _bartender_bartender_component__WEBPACK_IMPORTED_MODULE_20__["BartenderComponent"],
                _sql_sql_component__WEBPACK_IMPORTED_MODULE_21__["SqlComponent"],
                _verify_verify_component__WEBPACK_IMPORTED_MODULE_22__["VerifyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_23__["PanelModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n    <div class=\"container\">\n      <h1 class=\"display-4\"> {{ barName }}</h1>\n      <p class=\"bar-details\" *ngIf=\"barDetails\">\n        {{ barDetails.Address }}\n        <br>\n        Weekdays Open: {{ barDetails?.WeekOpen}}:00 <span *ngIf = \"barDetails.WeekOpen && barDetails.WeekClose\">-</span> {{ barDetails?.WeekClose}}:00\n        <br>\n        Weekends Open: {{ barDetails?.WeekendOpen}}:00 <span *ngIf = \"barDetails.WeekendOpen && barDetails.WeekendClose\">-</span> {{ barDetails?.WeekendClose}}:00\n      </p>\n    </div>\n  </div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\"> Menu</h2>\n  <br>\n  <p-table [value]=\"menu\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Beer</th>\n              <th>Manf</th>\n              <th>Price</th>\n              <th>Likes</th>\n            </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item>\n          <tr>\n            <td>\n              <a routerLink=\"/beers/{{ item.beer }}\">\n                {{ item.beer }}\n              </a>\n            </td>\n            <td> <a routerLink=\"/manf/{{ item.manf }}\">{{item.manf}}</a></td>\n            <td>{{ item.price | currency }}</td>\n            <td>{{ item.likes }}</td>\n            </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br><br><br>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('an error occured on the server please check console');
                }
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () {
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getBarList = function () {
        return this.http.get('/api/bar-only');
    };
    BarsService.prototype.getTop10Bar = function (bar) {
        return this.http.get("/api/bar-spender-10/" + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getTopBarDrinkers = function (bar, week) {
        return this.http.get("/api/bar-top/" + bar + "&" + week);
    };
    BarsService.prototype.getFrequentCounts = function () {
        return this.http.get('/api/frequents-data');
    };
    BarsService.prototype.getBarDay = function (bar) {
        return this.http.get("/api/bar-time-day/" + bar);
    };
    BarsService.prototype.getBarHour = function (bar) {
        return this.http.get("/api/bar-time-hour/" + bar);
    };
    BarsService.prototype.getBarInventory = function (bar) {
        return this.http.get("/api/bar-inventory/" + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/bars/bars.component.css":
/*!*****************************************!*\
  !*** ./src/app/bars/bars.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnMvYmFycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bars/bars.component.html":
/*!******************************************!*\
  !*** ./src/app/bars/bars.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Top 10 Spenders!</h1>\n    <p class=\"lead\"> This page can be used to see the top 10 spenders per bar.</p>\n    <p-dropdown *ngIf=\"barOptions\" [ngClass]=\"{ 'no-option-selected': selectedBar === undefined || selectedBar === null }\"\n      placeholder=\"Filter by Bar\" [options]=\"barOptions\" [(ngModel)]=\"selectedBar\" showClear=\"true\" filter=true\n      (onChange)=\"filterBars($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraph\">\n    \n  </div>\n</div>\n<br><br>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">{{ selectedBar }}</h2>\n  <p-table [value]=\"barList\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Patron</th>\n        <th>Amount Spent</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td><a routerLink=\"/drinker/{{ bar.Patron }}\">{{ bar.Patron }}</a></td>\n        <td>{{bar.sum_total | currency}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n\n\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Check on your favorite bars!</h1>\n    <p class=\"lead\">This can be used to see the top 10 beer brands during the weekend or weekday.</p>\n    <p-dropdown *ngIf=\"barOptions\" [ngClass]=\"{ 'no-option-selected': selectedBar2 === undefined || selectedBar === null }\"\n      placeholder=\"Filter by Bar\" [options]=\"barOptions\" [(ngModel)]=\"selectedBar2\" showClear=\"true\" filter=true\n      (onChange)=\"filterBarsBar($event.value)\"></p-dropdown>\n      <p-dropdown *ngIf=\"dayOptions\" [ngClass]=\"{ 'no-option-selected': selectedDay === undefined || selectedBar === null }\"\n      placeholder=\"Filter by day\" [options]=\"dayOptions\" [(ngModel)]=\"selectedDay\" showClear=\"true\"\n      (onChange)=\"filterBarsWeek($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraph1\">\n    \n  </div>\n</div>\n<br><br>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Sorted by : {{ selectedBar2 }}</h2>\n  <p-table [value]=\"barDrinkerList\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Beer</th>\n        <th>Amount Bought</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td><a routerLink=\"/beers/{{ bar.beer }}\">{{ bar.beer }}</a></td>\n        <td>{{bar.beer_count}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Select A Bar</h1>\n    <p class=\"lead\"> This can be used to see the sales per day versus their inventory: {{ selectedBar3 }}</p>\n    <p-dropdown *ngIf=\"barOptions\" [ngClass]=\"{ 'no-option-selected': selectedBar3 === undefined || selectedBar3 === null }\"\n      placeholder=\"Filter by Manufacturer\" [options]=\"barOptions\" [(ngModel)]=\"selectedBar3\" showClear=\"true\" filter=true\n      (onChange)=\"filterBarDay($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphDay\">\n    \n  </div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/bars/bars.component.ts":
/*!****************************************!*\
  !*** ./src/app/bars/bars.component.ts ***!
  \****************************************/
/*! exports provided: BarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsComponent", function() { return BarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsComponent = /** @class */ (function () {
    function BarsComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getBarList().subscribe(function (data) {
            _this.barList = data;
            _this.barOptions = data.map(function (name) {
                return {
                    label: name,
                    value: name,
                };
            });
        });
        this.dayOptions = [
            {
                label: 'Weekend',
                value: '1'
            },
            {
                label: 'Weekday',
                value: '0'
            }
        ];
    }
    BarsComponent.prototype.ngOnInit = function () {
    };
    BarsComponent.prototype.filterBarDay = function (bar) {
        var _this = this;
        this.barService.getBarDay(bar).subscribe(function (data) {
            var beers = [];
            var counts = [];
            var inventory = [];
            counts.push('Monday');
            counts.push('Tuesday');
            counts.push('Wednesday');
            counts.push('Thursday');
            counts.push('Friday');
            counts.push('Saturday');
            counts.push('Sunday');
            data.forEach(function (beer) {
                beers.push(beer.sold_total);
            });
            _this.barService.getBarInventory(bar).subscribe(function (data) {
                _this.barInv = data;
                data.forEach(function (total) {
                    inventory.push(total.a);
                    inventory.push(total.b);
                    inventory.push(total.c);
                    inventory.push(total.d);
                    inventory.push(total.e);
                    inventory.push(total.f);
                    inventory.push(total.g);
                });
                _this.doChart(counts, beers, inventory);
            });
        });
    };
    BarsComponent.prototype.doChart = function (beers, counts, inventory) {
        Highcharts.chart('bargraphDay', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Sales per day distribution'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Days'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts,
                    label: "Amount Sold"
                }, {
                    data: inventory,
                    label: "Inventory"
                }]
        });
    };
    BarsComponent.prototype.filterBars = function (bar) {
        var _this = this;
        if (bar) {
            this.barService.getTop10Bar(bar).subscribe(function (data) {
                _this.barList = data;
                var bars = [];
                var counts = [];
                data.forEach(function (bar) {
                    bars.push(bar.Patron);
                    counts.push(bar.sum_total);
                });
                _this.makeChart(bars, counts);
            });
        }
    };
    BarsComponent.prototype.filterBarsBar = function (bar) {
        var _this = this;
        if (bar) {
            this.barTemp = bar;
        }
        if (this.weekTemp) {
            this.barService.getTopBarDrinkers(this.barTemp, this.weekTemp).subscribe(function (data) {
                _this.barDrinkerList = data;
                var beers = [];
                var counts = [];
                data.forEach(function (beer) {
                    beers.push(beer.beer);
                    counts.push(beer.beer_count);
                });
                _this.renderChart(beers, counts);
            });
        }
    };
    BarsComponent.prototype.filterBarsWeek = function (week) {
        var _this = this;
        if (week) {
            this.weekTemp = week;
        }
        if (this.barTemp) {
            this.barService.getTopBarDrinkers(this.barTemp, this.weekTemp).subscribe(function (data) {
                _this.barDrinkerList = data;
                var beers = [];
                var counts = [];
                data.forEach(function (beer) {
                    beers.push(beer.beer);
                    counts.push(beer.beer_count);
                });
                _this.renderChart(beers, counts);
            });
        }
    };
    BarsComponent.prototype.renderChart = function (beers, counts) {
        Highcharts.chart('bargraph1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top 10 Beer Brands'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Bought'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarsComponent.prototype.makeChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top 10 Spenders'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Patron'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Money Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    BarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bars',
            template: __webpack_require__(/*! ./bars.component.html */ "./src/app/bars/bars.component.html"),
            styles: [__webpack_require__(/*! ./bars.component.css */ "./src/app/bars/bars.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], BarsComponent);
    return BarsComponent;
}());



/***/ }),

/***/ "./src/app/bartender.service.ts":
/*!**************************************!*\
  !*** ./src/app/bartender.service.ts ***!
  \**************************************/
/*! exports provided: BartenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderService", function() { return BartenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderService = /** @class */ (function () {
    function BartenderService(http) {
        this.http = http;
    }
    BartenderService.prototype.getBartenders = function () {
        return this.http.get('/api/bartenders');
    };
    BartenderService.prototype.getBartenderShifts = function (name) {
        return this.http.get("/api/bartender/" + name);
    };
    BartenderService.prototype.getBartendersSold = function (name) {
        return this.http.get("/api/bartender-sold/" + name);
    };
    BartenderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BartenderService);
    return BartenderService;
}());



/***/ }),

/***/ "./src/app/bartender/bartender.component.css":
/*!***************************************************!*\
  !*** ./src/app/bartender/bartender.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhcnRlbmRlci9iYXJ0ZW5kZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/bartender/bartender.component.html":
/*!****************************************************!*\
  !*** ./src/app/bartender/bartender.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> All Shifts for a bartender</h1>\n    <p class=\"lead\"> This chart can be used to see all the shifts for a single bartender.</p>\n    <p-dropdown *ngIf=\"bartenderOptions\" [ngClass]=\"{ 'no-option-selected': selectedBartender === undefined || selectedBartender === null }\"\n      placeholder=\"Filter by Bartender\" [options]=\"bartenderOptions\" [(ngModel)]=\"selectedBartender\" showClear=\"true\" filter=true\n      (onChange)=\"filterBartender($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Shifts: {{ selectedBartender }}</h2>\n  <p-table [value]=\"bartenderInfo\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Shift Time</th>\n        <th>Day</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bart>\n      <tr>\n        <td><a routerLink=\"/bars/{{ bart.bar }}\">{{ bart.bar }}</a></td>\n        <td>{{bart.shiftstart}}:00 - {{bart.shiftend}}:00</td>\n        <td>{{bart.day}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\"> {{ selectedBartender }} Sold:</h2>\n  <p-table [value]=\"bartenderSold\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Beer</th>\n        <th>Amount Sold</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.beer }}\">{{ beer.beer }}</a></td>\n        <td>{{beer.beer_count}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/bartender/bartender.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bartender/bartender.component.ts ***!
  \**************************************************/
/*! exports provided: BartenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BartenderComponent", function() { return BartenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bartender_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bartender.service */ "./src/app/bartender.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BartenderComponent = /** @class */ (function () {
    function BartenderComponent(bartenderService) {
        var _this = this;
        this.bartenderService = bartenderService;
        this.bartenderService.getBartenders().subscribe(function (data) {
            _this.bartenderOptions = data.map(function (name) {
                return {
                    label: name,
                    value: name,
                };
            });
        });
    }
    BartenderComponent.prototype.ngOnInit = function () {
    };
    BartenderComponent.prototype.filterBartender = function (name) {
        var _this = this;
        this.bartenderService.getBartenderShifts(name).subscribe(function (data) {
            _this.bartenderInfo = data;
        });
        this.bartenderService.getBartendersSold(name).subscribe(function (data) {
            _this.bartenderSold = data;
        });
    };
    BartenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bartender',
            template: __webpack_require__(/*! ./bartender.component.html */ "./src/app/bartender/bartender.component.html"),
            styles: [__webpack_require__(/*! ./bartender.component.css */ "./src/app/bartender/bartender.component.css")]
        }),
        __metadata("design:paramtypes", [_bartender_service__WEBPACK_IMPORTED_MODULE_1__["BartenderService"]])
    ], BartenderComponent);
    return BartenderComponent;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result-count {\r\n    font-size: 1.25rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmVlci1kZXRhaWxzL2JlZXItZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdC1jb3VudCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ beerName }}</h1>\n    <p class=\"beer-details\" *ngIf=\"manufacturer\">\n      Made by <i>{{ manufacturer }}</i>\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <br>\n  <div>\n    <span class=\"font-weight-light result-count\"> Sold at {{ beerLocations?.length }} Locations</span>\n    <p-dropdown class = \"float-right text-left\" *ngIf=\"filterOptions\" [options]=\"filterOptions\" (onChange)=\"sortBy($event.value)\">\n\n    </p-dropdown>\n  </div>\n<br>\n<p-table [value]=\"beerLocations\" sortMode=\"multiple\" sortField=\"Price\">\n  <ng-template pTemplate=\"header\">\n    <tr>\n      <th> Bar</th>\n      <th> Price</th>\n      <th> Customers</th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-bar>\n    <tr>\n      <td><a routerLink=\"/bars/{{ bar.Bar }}\"> {{bar.Bar}}\n      </a></td>\n      <td> {{ bar.Price | currency }}</td>\n      <td> {{ bar.customers }}</td>\n    </tr>\n  </ng-template>\n</p-table>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
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



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            _this.beerService.getBarsSelling(_this.beerName).subscribe(function (data) {
                _this.beerLocations = data;
            });
            _this.beerService.getBeerManufacturers(_this.beerName).subscribe(function (data) {
                _this.manufacturer = data;
            });
            _this.filterOptions = [
                {
                    'label': 'Low price first',
                    'value': 'low price'
                },
                {
                    'label': 'High price first',
                    'value': 'high price'
                },
                {
                    'label': 'Most Frequented First',
                    'value': 'high customer'
                },
                {
                    'label': 'Least Frequented First',
                    'value': 'low customer'
                }
            ];
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.sortBy = function (selectedOptions) {
        if (selectedOptions === 'low price') {
            this.beerLocations.sort(function (a, b) {
                return a.Price - b.Price;
            });
        }
        else if (selectedOptions === 'high price') {
            this.beerLocations.sort(function (a, b) {
                return b.Price - a.Price;
            });
        }
        else if (selectedOptions === 'low customer') {
            this.beerLocations.sort(function (a, b) {
                return a.customers - b.customers;
            });
        }
        else if (selectedOptions === 'high customer') {
            this.beerLocations.sort(function (a, b) {
                return b.customers - a.customers;
            });
        }
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBeersOnly = function () {
        return this.http.get('/api/beer_only');
    };
    BeersService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BeersService.prototype.getBarsSelling = function (beer) {
        return this.http.get("/api/bars-selling/" + beer);
    };
    BeersService.prototype.getTopBarMenu = function (beer) {
        return this.http.get("/api/menu-top/" + beer);
    };
    BeersService.prototype.getTopDrinkers = function (beer) {
        return this.http.get("/api/drinker-top/" + beer);
    };
    BeersService.prototype.getBeerManufacturers = function (beer) {
        if (beer) {
            return this.http.get("/api/beer-manufacturer/" + beer);
        }
        return this.http.get('/api/beer-manufacturer');
    };
    BeersService.prototype.getBarMenu = function () {
        return this.http.get('/api/menu');
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Find your favorite beers!</h1>\n    <p class=\"lead\"> This page can be used to see all the beers in our system or just the ones by your preferred\n      manufacturer.</p>\n    <p-dropdown *ngIf=\"manufacturerOptions\" [ngClass]=\"{ 'no-option-selected': selectedManufacturer === undefined || selectedManufacturer === null }\"\n      placeholder=\"Filter by Manufacturer\" [options]=\"manufacturerOptions\" [(ngModel)]=\"selectedManufacturer\" showClear=\"true\" filter=true\n      (onChange)=\"filterBeers($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Beer</h2>\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/beers/{{ beer.name }}\">{{ beer.name }}</a></td>\n        <td><a routerLink=\"/manf/{{ beer.manf }}\"> {{beer.manf}}</a></td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Find where you favorite beer is sold the most!</h1>\n    <p class=\"lead\"> Simply select the beer you wish to filter by in the drop down.</p>\n    <p-dropdown *ngIf=\"beerOptions\" [ngClass]=\"{ 'no-option-selected': selectedBeer === undefined || selectedBeer === null }\"\n      placeholder = \"Filter by Beer\" [options]=\"beerOptions\" [(ngModel)]=\"selectedBeer\" showClear=\"true\" filter=true\n      (onChange)=\"filterBeerAnalytics($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Locations {{ selectedBeer }} is sold at!</h2>\n  <p-table [value]=\"menuList\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Bar</th>\n        <th>Bought by (#)</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td><a routerLink=\"/bars/{{ beer.bar }}\"> {{ beer.bar }}</a></td>\n        <td> {{beer.like_count}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Drinker Analytics</h1>\n    <p class=\"lead\">Filter by beer to see who buys it the most.</p>\n    <p-dropdown *ngIf=\"beerOptions\" [ngClass]=\"{ 'no-option-selected': selectedBeerDrinker === undefined || selectedBeer === null }\"\n      placeholder = \"Filter by Beer\" [options]=\"beerOptions\" [(ngModel)]=\"selectedBeerDrinker\" showClear=\"true\" filter = true\n      (onChange)=\"filterDrinkerAnalytics($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Top 10 Drinkers of {{ selectedBeerDrinker }} are!</h2>\n  <p-table [value]=\"drinkerList\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Drinker</th>\n        <th>Times Bought (#)</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n      <tr>\n        <td><a routerLink=\"/drinker/{{ drinker.Patron }}\"> {{ drinker.Patron }}</a></td>\n        <td> {{drinker.like_count}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        var _this = this;
        this.beerService = beerService;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
            _this.originalBeersList = data;
        });
        this.beerService.getBarMenu().subscribe(function (data) {
            _this.menuList = data;
        });
        this.beerService.getBars().subscribe(function (data) {
            _this.bars = data;
            _this.originalBarsList = data;
        });
        this.beerService.getBeerManufacturers().subscribe(function (data) {
            _this.manufacturerOptions = data.map(function (manf) {
                return {
                    label: manf,
                    value: manf,
                };
            });
        });
        this.beerService.getBeersOnly().subscribe(function (data) {
            _this.beerOptions = data.map(function (beer) {
                return {
                    label: beer,
                    value: beer,
                };
            });
        });
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.filterBeers = function (manufacturer) {
        this.beers = this.originalBeersList;
        if (manufacturer) {
            this.beers = this.originalBeersList.filter(function (beer) { return beer.manf === manufacturer; });
        }
    };
    BeersComponent.prototype.filterBeerAnalytics = function (beer) {
        var _this = this;
        //this.menus = this.originalMenuList;
        this.beerService.getTopBarMenu(beer).subscribe(function (data) {
            _this.menuList = data;
        });
    };
    BeersComponent.prototype.filterDrinkerAnalytics = function (beer) {
        var _this = this;
        //this.menus = this.originalMenuList;
        this.beerService.getTopDrinkers(beer).subscribe(function (data) {
            _this.drinkerList = data;
        });
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\"> {{drinkerName}}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n      Address: {{drinkerDetails.Address}}\n      <br>\n      City: {{drinkerDetails.City}}\n      <br>\n      State: {{drinkerDetails.State}}\n      <br>\n      Phone: {{drinkerDetails.Phone}}\n    </p>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\"> {{manfName}}</h2>\n  <br>\n  <p-table [value]=\"freqDetails\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>{{ drinkerName }} frequents these bars</th>\n            </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item>\n          <tr>\n            <td>\n              <a routerLink=\"/bars/{{ item.bar }}\">\n                {{ item.bar }}\n              </a>\n            </td>\n            </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br><br><br>\n\n\n"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker.service */ "./src/app/drinker.service.ts");
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



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get("drinker");
            drinkerService.getDrinkerInfo(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            });
            drinkerService.getFrequents(_this.drinkerName).subscribe(function (data) {
                _this.freqDetails = data;
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinker.service.ts":
/*!************************************!*\
  !*** ./src/app/drinker.service.ts ***!
  \************************************/
/*! exports provided: DrinkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerService", function() { return DrinkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerService = /** @class */ (function () {
    function DrinkerService(http) {
        this.http = http;
    }
    DrinkerService.prototype.getDrinkerInfo = function (drinker) {
        return this.http.get("/api/drinker/" + drinker);
    };
    DrinkerService.prototype.getFrequents = function (name) {
        return this.http.get("/api/frequents/" + name);
    };
    DrinkerService.prototype.getDrinkerTrans = function (name) {
        return this.http.get("/api/trans/" + name);
    };
    DrinkerService.prototype.getAllDrinkers = function () {
        return this.http.get('/api/drinker-only');
    };
    DrinkerService.prototype.getDrinkerBeerMost = function (name) {
        return this.http.get("/api/drinker-beer-most/" + name);
    };
    DrinkerService.prototype.getDrinkerBarMost = function (name) {
        return this.http.get("/api/drinker-bar-most/" + name);
    };
    DrinkerService.prototype.getDrinkerBarTotal = function (name, month) {
        return this.http.get("/api/drinker-all-bars/" + name + "&" + month);
    };
    DrinkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkerService);
    return DrinkerService;
}());



/***/ }),

/***/ "./src/app/drinker/drinker.component.css":
/*!***********************************************!*\
  !*** ./src/app/drinker/drinker.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXIvZHJpbmtlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/drinker/drinker.component.html":
/*!************************************************!*\
  !*** ./src/app/drinker/drinker.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> All Transactions for a Drinker</h1>\n    <p class=\"lead\"> This page can be used to see all the transactions for a single drinker.</p>\n    <p-dropdown *ngIf=\"drinkerOptions\" [ngClass]=\"{ 'no-option-selected': selectedDrinker === undefined || selectedDrinker === null }\"\n      placeholder=\"Filter by Drinker\" [options]=\"drinkerOptions\" [(ngModel)]=\"selectedDrinker\" showClear=\"true\" filter=true\n      (onChange)=\"filterDrinker($event.value)\"></p-dropdown>\n  </div>\n</div>\n<br><br>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">{{ selectedDrinker }}</h2>\n  <p-table [value]=\"drinkerTrans\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>TransID</th>\n        <th>Bar</th>\n        <th>Food</th>\n        <th>Beer</th>\n        <th>Tip</th>\n        <th>Total</th>\n        <th>Time</th>\n        <th>Patron</th>\n        <th>Date</th>\n        <th>Weekend</th>\n        <th>Time2</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td>{{ bar.TransID }}</td>\n        <td>{{bar.Bar}}</td>\n        <td>{{ bar.Food}}</td>\n        <td>{{bar.Beer}}</td>\n        <td>{{ bar.Tip | currency }}</td>\n        <td>{{bar.Total | currency}}</td>\n        <td>{{ bar.Time }}</td>\n        <td>{{bar.Patron}}</td>\n        <td>{{bar.Month}}-{{ bar.Day }}</td>\n        <td>{{bar.Weekend}}</td>\n        <td>{{ bar.HTime }}:{{bar.MTime}}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n  <br><br><br><br>\n</div>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Bargraph of Top 10 Beers : {{ selectedDrinkerBeerMost }}</h1>\n    <p class=\"lead\"> This page can be used to see all the top 10 beers for a single drinker.</p>\n    <p-dropdown *ngIf=\"drinkerOptions\" [ngClass]=\"{ 'no-option-selected': selectedDrinkerBeerMost === undefined || selectedDrinkerBeerMost === null }\"\n      placeholder=\"Filter by Drinker\" [options]=\"drinkerOptions\" [(ngModel)]=\"selectedDrinkerBeerMost\" showClear=\"true\" filter=true\n      (onChange)=\"filterDrinkerBeerMost($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphDrinkerBeerMost\">\n    \n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Bargraph of spending per bar : {{ selectedDrinkerBarMost }}</h1>\n    <p class=\"lead\"> This page can be used to see amount spent per bar a single drinker over the entire period.</p>\n    <p-dropdown *ngIf=\"drinkerOptions\" [ngClass]=\"{ 'no-option-selected': selectedDrinkerBarMost === undefined || selectedDrinkerBarMost === null }\"\n      placeholder=\"Filter by Drinker\" [options]=\"drinkerOptions\" [(ngModel)]=\"selectedDrinkerBarMost\" showClear=\"true\" filter=true\n      (onChange)=\"filterDrinkerBarMost($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphDrinkerBarMost\">\n    \n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Bargraph of spending per bars : {{ selectedDrinkerBarMost }}</h1>\n    <p class=\"lead\"> Amount Spent per bar for {{selectedDrinkerAll}}.</p>\n    <p-dropdown *ngIf=\"drinkerOptions\" [ngClass]=\"{ 'no-option-selected': selectedDrinkerAll === undefined || selectedDrinkerAll === null }\"\n      placeholder=\"Filter by Drinker\" [options]=\"drinkerOptions\" [(ngModel)]=\"selectedDrinkerAll\" showClear=\"true\" filter=true\n      (onChange)=\"filterDrinkerPerBarDrinker($event.value)\"></p-dropdown>\n    <p-dropdown *ngIf=\"filterOptions\" [ngClass]=\"{ 'no-option-selected': selectedDrinkerAll1 === undefined || selectedDrinkerAll1 === null }\"\n      placeholder=\"Filter by Drinker\" [options]=\"filterOptions\" [(ngModel)]=\"selectedDrinkerAll1\" showClear=\"true\" filter=true\n      (onChange)=\"filterDrinkerPerBarMonth($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphDrinkerAll\">\n    \n  </div>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/drinker/drinker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/drinker/drinker.component.ts ***!
  \**********************************************/
/*! exports provided: DrinkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerComponent", function() { return DrinkerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker.service */ "./src/app/drinker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerComponent = /** @class */ (function () {
    function DrinkerComponent(drinkerService) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.drinkerService.getAllDrinkers().subscribe(function (data) {
            _this.drinkersList = data;
            _this.drinkerOptions = data.map(function (name) {
                return {
                    label: name,
                    value: name,
                };
            });
        });
        this.filterOptions = [
            {
                label: 'January',
                value: '1'
            },
            {
                label: 'Febuary',
                value: '2'
            },
            {
                label: 'March',
                value: '3'
            },
            {
                label: 'April',
                value: '4'
            },
            {
                label: 'May',
                value: '5'
            },
            {
                label: 'June',
                value: '6'
            },
            {
                label: 'July',
                value: '7'
            },
            {
                label: 'August',
                value: '8'
            },
            {
                label: 'September',
                value: '9'
            },
            {
                label: 'October',
                value: '10'
            },
            {
                label: 'November',
                value: '11'
            },
            {
                label: 'December',
                value: '12'
            }
        ];
    }
    DrinkerComponent.prototype.ngOnInit = function () {
    };
    DrinkerComponent.prototype.filterDrinker = function (name) {
        var _this = this;
        this.drinkerService.getDrinkerTrans(name).subscribe(function (data) {
            _this.drinkerTrans = data;
        });
    };
    DrinkerComponent.prototype.filterDrinkerBeerMost = function (name) {
        var _this = this;
        this.drinkerService.getDrinkerBeerMost(name).subscribe(function (data) {
            _this.drinkerBeerMost = data;
            var beers = [];
            var counts = [];
            data.forEach(function (beer) {
                beers.push(beer.Beer);
                counts.push(beer.beer_count);
            });
            _this.makeChart(beers, counts);
        });
    };
    DrinkerComponent.prototype.filterDrinkerBarMost = function (name) {
        var _this = this;
        this.drinkerService.getDrinkerBarMost(name).subscribe(function (data) {
            _this.drinkerBarMost = data;
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.Bar);
                counts.push(bar.bar_total);
            });
            _this.renderChart(bars, counts);
        });
    };
    DrinkerComponent.prototype.filterDrinkerPerBarDrinker = function (name) {
        var _this = this;
        if (this.drinkerMonth) {
            this.drinkerService.getDrinkerBarTotal(name, this.drinkerMonth).subscribe(function (data) {
                var bars = [];
                var counts = [];
                data.forEach(function (bar) {
                    bars.push(bar.bar);
                    counts.push(bar.total);
                });
                _this.buildChart(bars, counts);
            });
        }
        this.drinkerName = name;
    };
    DrinkerComponent.prototype.filterDrinkerPerBarMonth = function (month) {
        var _this = this;
        if (this.drinkerName) {
            this.drinkerService.getDrinkerBarTotal(this.drinkerName, month).subscribe(function (data) {
                var bars = [];
                var counts = [];
                data.forEach(function (bar) {
                    bars.push(bar.bar);
                    counts.push(bar.total);
                });
                _this.buildChart(bars, counts);
            });
        }
        this.drinkerMonth = month;
    };
    DrinkerComponent.prototype.buildChart = function (beers, counts) {
        Highcharts.chart('bargraphDrinkerAll', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Bars Vs Amount spent for a single patron'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Bars'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerComponent.prototype.makeChart = function (beers, counts) {
        Highcharts.chart('bargraphDrinkerBeerMost', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top 10 Beers'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'Beer'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Bought'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraphDrinkerBarMost', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Spending per bar'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Spent'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    DrinkerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker',
            template: __webpack_require__(/*! ./drinker.component.html */ "./src/app/drinker/drinker.component.html"),
            styles: [__webpack_require__(/*! ./drinker.component.css */ "./src/app/drinker/drinker.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerService"]])
    ], DrinkerComponent);
    return DrinkerComponent;
}());



/***/ }),

/***/ "./src/app/insight/insight.component.css":
/*!***********************************************!*\
  !*** ./src/app/insight/insight.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2lnaHQvaW5zaWdodC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/insight/insight.component.html":
/*!************************************************!*\
  !*** ./src/app/insight/insight.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"container\">\n  <br>\n  <div id=\"bargraph\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/insight/insight.component.ts":
/*!**********************************************!*\
  !*** ./src/app/insight/insight.component.ts ***!
  \**********************************************/
/*! exports provided: InsightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightComponent", function() { return InsightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsightComponent = /** @class */ (function () {
    function InsightComponent(barService) {
        var _this = this;
        this.barService = barService;
        this.barService.getFrequentCounts().subscribe(function (data) {
            var bars = [];
            var counts = [];
            data.forEach(function (bar) {
                bars.push(bar.bar);
                counts.push(bar.frequentCount);
            });
            _this.renderChart(bars, counts);
        });
    }
    InsightComponent.prototype.ngOnInit = function () {
    };
    InsightComponent.prototype.renderChart = function (bars, counts) {
        Highcharts.chart('bargraph', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Frequenting count at bars'
            },
            xAxis: {
                categories: bars,
                title: {
                    text: 'Bar'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Number of Customers'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    InsightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insight',
            template: __webpack_require__(/*! ./insight.component.html */ "./src/app/insight/insight.component.html"),
            styles: [__webpack_require__(/*! ./insight.component.css */ "./src/app/insight/insight.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], InsightComponent);
    return InsightComponent;
}());



/***/ }),

/***/ "./src/app/manf-details/manf-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmYtZGV0YWlscy9tYW5mLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4 text-center\"> Manufacturer Details Page</h1>\n    <p class=\"manf-details text-center\">\n      From here you can see all the different beers that {{ manfName  }} sells.\n    </p>\n  </div>\n</div>\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\"> {{manfName}}</h2>\n  <br>\n  <p-table [value]=\"manfDetails\">\n      <ng-template pTemplate=\"header\">\n          <tr>\n              <th>Beer</th>\n            </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-item>\n          <tr>\n            <td>\n              <a routerLink=\"/beers/{{ item.name }}\">\n                {{ item.name }}\n              </a>\n            </td>\n            </tr>\n      </ng-template>\n  </p-table>\n</div>\n<br><br><br><br>"

/***/ }),

/***/ "./src/app/manf-details/manf-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manf-details/manf-details.component.ts ***!
  \********************************************************/
/*! exports provided: ManfDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfDetailsComponent", function() { return ManfDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manf.service */ "./src/app/manf.service.ts");
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



var ManfDetailsComponent = /** @class */ (function () {
    function ManfDetailsComponent(manfService, route) {
        var _this = this;
        this.manfService = manfService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.manfName = paramMap.get('manf');
            manfService.getManfBeers(_this.manfName).subscribe(function (data) {
                _this.manfDetails = data;
            });
        });
    }
    ManfDetailsComponent.prototype.ngOnInit = function () {
    };
    ManfDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manf-details',
            template: __webpack_require__(/*! ./manf-details.component.html */ "./src/app/manf-details/manf-details.component.html"),
            styles: [__webpack_require__(/*! ./manf-details.component.css */ "./src/app/manf-details/manf-details.component.css")]
        }),
        __metadata("design:paramtypes", [_manf_service__WEBPACK_IMPORTED_MODULE_1__["ManfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ManfDetailsComponent);
    return ManfDetailsComponent;
}());



/***/ }),

/***/ "./src/app/manf.service.ts":
/*!*********************************!*\
  !*** ./src/app/manf.service.ts ***!
  \*********************************/
/*! exports provided: ManfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManfService", function() { return ManfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManfService = /** @class */ (function () {
    function ManfService(http) {
        this.http = http;
    }
    ManfService.prototype.getManfBeers = function (manf) {
        return this.http.get("/api/manf/" + manf);
    };
    ManfService.prototype.getAllManf = function () {
        return this.http.get('/api/manfs');
    };
    ManfService.prototype.getManfCity = function (name) {
        return this.http.get("/api/manf-cities/" + name);
    };
    ManfService.prototype.getManfTopCity = function (name) {
        return this.http.get("/api/manf-top-cities/" + name);
    };
    ManfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ManfService);
    return ManfService;
}());



/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbnVmYWN0dXJlci9tYW51ZmFjdHVyZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Select A Manufacturer</h1>\n    <p class=\"lead\"> This can be used to see the cities with the most sales of:. {{selectedManf}}</p>\n    <p-dropdown *ngIf=\"manfOptions\" [ngClass]=\"{ 'no-option-selected': selectedManf === undefined || selectedManf === null }\"\n      placeholder=\"Filter by Manufacturer\" [options]=\"manfOptions\" [(ngModel)]=\"selectedManf\" showClear=\"true\" filter=true\n      (onChange)=\"filterManf($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphCities\">\n    \n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Select A Manufacturer</h1>\n    <p class=\"lead\"> This can be used to see the cities with the most sales of:. {{selectedManf1}} during the month of October</p>\n    <p-dropdown *ngIf=\"manfOptions\" [ngClass]=\"{ 'no-option-selected': selectedManf1 === undefined || selectedManf1 === null }\"\n      placeholder=\"Filter by Manufacturer\" [options]=\"manfOptions\" [(ngModel)]=\"selectedManf1\" showClear=\"true\" filter=true\n      (onChange)=\"filterManfCity($event.value)\"></p-dropdown>\n  </div>\n</div>\n<div class =\"container\">\n  <br>\n  <div id=\"bargraphTopCities\">\n    \n  </div>\n</div>\n<br><br>"

/***/ }),

/***/ "./src/app/manufacturer/manufacturer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/manufacturer/manufacturer.component.ts ***!
  \********************************************************/
/*! exports provided: ManufacturerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerComponent", function() { return ManufacturerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _manf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manf.service */ "./src/app/manf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManufacturerComponent = /** @class */ (function () {
    function ManufacturerComponent(manfService) {
        var _this = this;
        this.manfService = manfService;
        this.manfService.getAllManf().subscribe(function (data) {
            _this.manfOptions = data.map(function (name) {
                return {
                    label: name,
                    value: name,
                };
            });
        });
    }
    ManufacturerComponent.prototype.ngOnInit = function () {
    };
    ManufacturerComponent.prototype.filterManf = function (manf) {
        var _this = this;
        this.manfService.getManfCity(manf).subscribe(function (data) {
            _this.manfCities = data;
            var cities = [];
            var counts = [];
            data.forEach(function (city) {
                cities.push(city.city);
                counts.push(city.sold_count);
            });
            _this.renderChart(cities, counts);
        });
    };
    ManufacturerComponent.prototype.filterManfCity = function (manf) {
        var _this = this;
        this.manfService.getManfTopCity(manf).subscribe(function (data) {
            _this.manfCities = data;
            var cities = [];
            var counts = [];
            data.forEach(function (city) {
                cities.push(city.City);
                counts.push(city.Total);
            });
            _this.buildChart(cities, counts);
        });
    };
    ManufacturerComponent.prototype.buildChart = function (beers, counts) {
        Highcharts.chart('bargraphTopCities', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Cities for October'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'City'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    ManufacturerComponent.prototype.renderChart = function (beers, counts) {
        Highcharts.chart('bargraphCities', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top Cities'
            },
            xAxis: {
                categories: beers,
                title: {
                    text: 'City'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Amount Sold'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            series: [{
                    data: counts
                }]
        });
    };
    ManufacturerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manufacturer',
            template: __webpack_require__(/*! ./manufacturer.component.html */ "./src/app/manufacturer/manufacturer.component.html"),
            styles: [__webpack_require__(/*! ./manufacturer.component.css */ "./src/app/manufacturer/manufacturer.component.css")]
        }),
        __metadata("design:paramtypes", [_manf_service__WEBPACK_IMPORTED_MODULE_1__["ManfService"]])
    ], ManufacturerComponent);
    return ManufacturerComponent;
}());



/***/ }),

/***/ "./src/app/sql/sql.component.css":
/*!***************************************!*\
  !*** ./src/app/sql/sql.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NxbC9zcWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sql/sql.component.html":
/*!****************************************!*\
  !*** ./src/app/sql/sql.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Bar Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Bar Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Beer Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Beer Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Drinker Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Drinker Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Bartender Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Bartender Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Manufacturer Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Manufacturer Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\"> Transactions Modification Area</h1>\n    <p class=\"lead\"> This can be used to Update/Delete/Insert into the Transactions Table.</p>\n\n    <textarea rows=\"5\" cols=\"100\" pInputTextarea></textarea>\n    <br><br>\n      <p-button label=\"Execute\"></p-button>\n\n  </div>\n</div>\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/sql/sql.component.ts":
/*!**************************************!*\
  !*** ./src/app/sql/sql.component.ts ***!
  \**************************************/
/*! exports provided: SqlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqlComponent", function() { return SqlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SqlComponent = /** @class */ (function () {
    function SqlComponent() {
    }
    SqlComponent.prototype.ngOnInit = function () {
    };
    SqlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sql',
            template: __webpack_require__(/*! ./sql.component.html */ "./src/app/sql/sql.component.html"),
            styles: [__webpack_require__(/*! ./sql.component.css */ "./src/app/sql/sql.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SqlComponent);
    return SqlComponent;
}());



/***/ }),

/***/ "./src/app/verify.service.ts":
/*!***********************************!*\
  !*** ./src/app/verify.service.ts ***!
  \***********************************/
/*! exports provided: VerifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyService", function() { return VerifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerifyService = /** @class */ (function () {
    function VerifyService(http) {
        this.http = http;
    }
    VerifyService.prototype.getTestBartender = function () {
        return this.http.get('/api/test-bartender');
    };
    VerifyService.prototype.getTestBeer = function () {
        return this.http.get('/api/test-beers');
    };
    VerifyService.prototype.getTestDrinkers = function () {
        return this.http.get('/api/test-drinkers');
    };
    VerifyService.prototype.getTestTrans = function () {
        return this.http.get('/api/test-trans');
    };
    VerifyService.prototype.getTestTwoBeers = function () {
        return this.http.get('/api/test-twobeers');
    };
    VerifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VerifyService);
    return VerifyService;
}());



/***/ }),

/***/ "./src/app/verify/verify.component.css":
/*!*********************************************!*\
  !*** ./src/app/verify/verify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS92ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify/verify.component.html":
/*!**********************************************!*\
  !*** ./src/app/verify/verify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<div class=\"container\">\n\n<p-panel header=\"Bartender cannot work more than once a day assertation confirmation\">\n  QUERY: \n  <br>\n  SELECT b.bartender, a.bartender, a.daynumber, b.daynumber \n  <br>\n  FROM Bartenderskevin as b, Bartenderskevin as a\n  <br>\n  WHERE a.bartender = b.bartender\n  <br>\n  AND a.shiftstart != b.shiftstart\n  <br>\n  AND a.daynumber = b.daynumber\n</p-panel>\n<br>\n<p-messages [(value)]=\"msgs\"></p-messages>\n<br>\n<p-button label=\"Verify\" (onClick)=\"testQueryBartender($event)\"></p-button>\n\n</div>\n<br><br>\n<div class=\"container\">\n\n<p-panel header=\"Transactions cannot be issued when the bar is closed\">\n  QUERY: \n  select b.name\n  <br>\n  from Transactions as t, barsN as b\n  <br>\n  where b.WeekendOpen > t.HTime\n  <br>\n  or t.HTime > b.WeekendClose\n  <br>\n  union\n  <br>\n  select b.name from Transactions as t, barsN as b\n  <br>\n  where  b.WeekOpen  > t.HTime\n  <br>\n  or t.HTime > b.WeekClose\n</p-panel>\n<br>\n<p-messages [(value)]=\"msgs1\"></p-messages>\n<br>\n<p-button label=\"Verify\" (onClick)=\"testQueryTrans($event)\"></p-button>\n\n</div>\n<br><br>\n<div class=\"container\">\n\n<p-panel header=\"Drinkers cannot frequent bars in different states than they live\">\n  QUERY: \n  <br>\n  SELECT distinct d.Name \n  <br>\n  from Frequents as f, barsN as b, Drinkers as d\n  <br>\n  where f.Drinker = d.Name\n  <br>\n  and f.bar = b.Name\n  <br>\n  and d.State != b.state\n  <br>\n</p-panel>\n<br>\n<p-messages [(value)]=\"msgs2\"></p-messages>\n<br>\n<p-button label=\"Verify\" (onClick)=\"testQueryDrinkers($event)\"></p-button>\n\n</div>\n<br><br>\n<div class=\"container\">\n\n<p-panel header=\"For every 2 beers....have the same price as bud in another\">\n  QUERY: \n  <br>\n  select s.*\n    from sells3 s, \n    <br>\n    (select sells3.bar, max(price) maxPrice, sells3.beer\n    from sells3\n    group by beer) as b\n    <br>\n    where b.maxPrice > price\n    <br>\n    and s.beer = b.beer\n    <br>\n    and s.beer is not null\n    \n</p-panel>\n<br>\n<p-messages [(value)]=\"msgs3\"></p-messages>\n<br>\n<p-button label=\"Verify\" (onClick)=\"testQueryTwoBeers($event)\"></p-button>\n\n</div>\n<br><br>\n<div class=\"container\">\n\n<p-panel header=\"Bar cannot sell more beers of specific brand that it has in it's inventory\">\n  QUERY: \n  <br>\n  SELECT b.bartender, a.bartender, a.daynumber, b.daynumber \n  <br>\n  FROM Bartenderskevin as b, Bartenderskevin as a\n  <br>\n  WHERE a.bartender = b.bartender\n  <br>\n  AND a.shiftstart != b.shiftstart\n  <br>\n  AND a.daynumber = b.daynumber\n  select sum(s.InventoryMonday) as a, sum(s.InventoryTuesday) as b,sum(s.InventoryWednesday) as c \n  <br>\n  ,sum(s.InventoryThursday) as d,sum(s.InventoryFriday) as e,sum(s.InventorySaturday) as f,\n  <br>\n  sum(s.InventorySunday) as g, sum(t.beer) as total\n  <br>\n  from Sells4 as s, Transactions as t\n  <br>\n  group by daynumber\n  <br>\n                having total > a or total > b or total > c or total > d or total > e or total > f or total > a\n</p-panel>\n<br>\n<p-messages [(value)]=\"msgs4\"></p-messages>\n<br>\n<p-button label=\"Verify\" (onClick)=\"testQueryBeer($event)\"></p-button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/verify/verify.component.ts":
/*!********************************************!*\
  !*** ./src/app/verify/verify.component.ts ***!
  \********************************************/
/*! exports provided: VerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyComponent", function() { return VerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _verify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verify.service */ "./src/app/verify.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(verifyService, messageService) {
        this.verifyService = verifyService;
        this.messageService = messageService;
        this.msgs = [];
        this.msgs1 = [];
        this.msgs2 = [];
        this.msgs3 = [];
        this.msgs4 = [];
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.testQueryBartender = function () {
        var _this = this;
        this.verifyService.getTestBartender().subscribe(function (data) {
            _this.testString = data;
        });
        if (this.testString === undefined || this.testString.length == 0) {
            //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
            console.log("TRUE");
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Success', detail: 'Query returned true' });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Fail', detail: 'Query returned false' });
        }
    };
    VerifyComponent.prototype.testQueryBeer = function () {
        var _this = this;
        this.verifyService.getTestBeer().subscribe(function (data) {
            _this.testString = data;
        });
        if (this.testString === undefined || this.testString.length == 0) {
            //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
            console.log("TRUE");
            this.msgs4 = [];
            this.msgs4.push({ severity: 'success', summary: 'Success', detail: 'Query returned true' });
        }
        else {
            this.msgs4 = [];
            this.msgs4.push({ severity: 'error', summary: 'Fail', detail: 'Query returned false' });
        }
    };
    VerifyComponent.prototype.testQueryDrinkers = function () {
        var _this = this;
        this.verifyService.getTestDrinkers().subscribe(function (data) {
            _this.testString = data;
        });
        if (this.testString === undefined || this.testString.length == 0) {
            //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
            console.log("TRUE");
            this.msgs2 = [];
            this.msgs2.push({ severity: 'success', summary: 'Success', detail: 'Query returned true' });
        }
        else {
            this.msgs2 = [];
            this.msgs2.push({ severity: 'error', summary: 'Fail', detail: 'Query returned false' });
        }
    };
    VerifyComponent.prototype.testQueryTrans = function () {
        var _this = this;
        this.verifyService.getTestTrans().subscribe(function (data) {
            _this.testString = data;
        });
        if (this.testString === undefined || this.testString.length == 0) {
            //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
            console.log("TRUE");
            this.msgs1 = [];
            this.msgs1.push({ severity: 'success', summary: 'Success', detail: 'Query returned true' });
        }
        else {
            this.msgs1 = [];
            this.msgs1.push({ severity: 'error', summary: 'Fail', detail: 'Query returned false' });
        }
    };
    VerifyComponent.prototype.testQueryTwoBeers = function () {
        var _this = this;
        this.verifyService.getTestTwoBeers().subscribe(function (data) {
            _this.testString = data;
        });
        if (this.testString === undefined || this.testString.length == 0) {
            //this.messageService.add({severity: 'success', summary:'Test', detail: 'test'})
            console.log("TRUE");
            this.msgs3 = [];
            this.msgs3.push({ severity: 'success', summary: 'Success', detail: 'Query returned true' });
        }
        else {
            this.msgs3 = [];
            this.msgs3.push({ severity: 'error', summary: 'Fail', detail: 'Query returned false' });
        }
    };
    VerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.component.html */ "./src/app/verify/verify.component.html"),
            styles: [__webpack_require__(/*! ./verify.component.css */ "./src/app/verify/verify.component.css")],
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]]
        }),
        __metadata("design:paramtypes", [_verify_service__WEBPACK_IMPORTED_MODULE_1__["VerifyService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to Bar Beer Drinker</h1>\n    <p class=\"lead\">This is a demo application to showcase our bar beer drinker data for CS366. It is intended to be a responsive web interface capable of interfacting with our amazon hosted database</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"bars\" [paginator]= true [rows]=\"10\">\n    <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Name</th>\n            <th>Address</th>\n            <th>WeekOpen</th>\n            <th>WeekClose</th>\n            <th>WeekendOpen</th>\n            <th>WeekendClose</th>\n            <th>State</th>\n          </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n        <tr>\n          <td>\n            <a routerLink=\"/bars/{{ bar.Name }}\">\n              {{ bar.Name }}\n            </a>\n          </td>\n          <td>{{ bar.Address }} </td>\n          <td>{{ bar.WeekOpen }}</td>\n          <td>{{ bar.WeekClose }}</td>\n          <td>{{ bar.WeekendOpen }}</td>\n          <td>{{ bar.WeekendClose }}</td>\n          <td>{{ bar.State }}</td>\n          </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.getBars();
    };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retreive a list of bars');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\kevin\CS336site\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map