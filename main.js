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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/Product/Add/productAdd.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/Components/Product/Add/productAdd.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    width: 50%;\r\n}\r\n\r\ninput.ng-invalid.ng-touched{\r\n    border: red 2px solid;\r\n}"

/***/ }),

/***/ "./src/app/Components/Product/Add/productAdd.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Components/Product/Add/productAdd.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"AddNewProduct()\">\r\n    <div [formGroup] = \"formProductAdd\"  style=\"justify-content: center; display: flex\">\r\n        <table>\r\n            <tr>\r\n                <td><label>Tên sản phẩm:</label></td>\r\n                <td><input placeholder=\"Nhập tên sản phẩm\" style=\"width: 90%\" formControlName = \"ProductName\"/></td>\r\n                <td><label *ngIf = \"formProductAdd.get('ProductName').invalid && formProductAdd.get('ProductName').touched\"  style=\"color: red\">Required</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label>Loại sản phẩm:</label></td>\r\n                <td><input placeholder=\"Nhập loại sản phẩm\"  style=\"width: 90%\" formControlName = \"Category\"/></td>\r\n                <td><label *ngIf = \"formProductAdd.get('Category').invalid && formProductAdd.get('Category').touched\" style=\"color: red\">Required</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td><label>Đơn giá:</label></td>\r\n                <td><input type=\"number\" placeholder=\"Nhập đơn giá\" style=\"width: 90%\" formControlName = \"Price\"/></td>\r\n                <td><label *ngIf = \"formProductAdd.get('Price').invalid && formProductAdd.get('Price').touched\" style=\"color: red\">Required</label></td>\r\n            </tr>\r\n            <tr>\r\n                <td></td>\r\n                <td><button>Add</button></td>\r\n                <td></td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/Components/Product/Add/productAdd.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Components/Product/Add/productAdd.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(fb, productService) {
        this.fb = fb;
        this.productService = productService;
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.formProductAdd = this.fb.group({
            Id: 0,
            ProductName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ImageUrl: ""
        });
    };
    ProductAddComponent.prototype.AddNewProduct = function () {
        console.log(this.formProductAdd.value);
        this.productService.addNewProduct(this.formProductAdd.value)
            .then(function (resJson) { return console.log(resJson); })
            .catch(function (err) { return console.log(err); });
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./productAdd.component.html */ "./src/app/Components/Product/Add/productAdd.component.html"),
            styles: [__webpack_require__(/*! ./productAdd.component.css */ "./src/app/Components/Product/Add/productAdd.component.css")],
            selector: 'app-product-add',
            providers: [_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/Product/List/productList.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Components/Product/List/productList.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    border: 1px black solid;\r\n    width: 80%;\r\n    border-collapse: collapse;\r\n}\r\n\r\nth{\r\n    border: 1px black solid;\r\n    border-collapse: collapse;\r\n    background-color: coral\r\n}\r\n\r\ntd{\r\n    border: 1px black solid;\r\n    border-collapse: collapse;\r\n    padding-left: 10px\r\n}"

/***/ }),

/***/ "./src/app/Components/Product/List/productList.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Components/Product/List/productList.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"justify-content: center; display: flex\">\r\n<table>\r\n    <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Category</th>\r\n        <th >Price</th>\r\n    </tr>\r\n    <tr *ngFor = \"let product of arrProduct\">\r\n        <td>{{product.Id}}</td>\r\n        <td>{{product.ProductName}}</td>\r\n        <td>{{product.Category}}</td>\r\n        <td>{{product.Price}}</td>\r\n    </tr>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/Product/List/productList.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/Product/List/productList.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService) {
        this.productService = productService;
        this.arrProduct = '';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductList()
            .then(function (resJson) { return _this.arrProduct = resJson; })
            .catch(function (err) { return console.log(err); });
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./productList.component.html */ "./src/app/Components/Product/List/productList.component.html"),
            styles: [__webpack_require__(/*! ./productList.component.css */ "./src/app/Components/Product/List/productList.component.css")],
            selector: 'app-product-list',
            providers: [_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
        }),
        __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/Services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductList = function () {
        return this.http.get('http://192.168.1.119:1234/api/Products')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ProductService.prototype.addNewProduct = function (value) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json;charset=utf-8' });
        var body = JSON.stringify(value);
        return this.http.post('http://192.168.1.119:1234/api/Products', body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductService);
    return ProductService;
}());



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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n\n<app-product-list></app-product-list>\n<br><br>\n<app-product-add></app-product-add>\n"

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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_Product_List_productList_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Product/List/productList.component */ "./src/app/Components/Product/List/productList.component.ts");
/* harmony import */ var _Components_Product_Add_productAdd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Product/Add/productAdd.component */ "./src/app/Components/Product/Add/productAdd.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_Product_List_productList_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                _Components_Product_Add_productAdd_component__WEBPACK_IMPORTED_MODULE_6__["ProductAddComponent"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular4\ProductManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map