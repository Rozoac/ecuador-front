webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"principal123\">\n  <app-navbar></app-navbar>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_quienes_somos_quienes_somos_component__ = __webpack_require__("../../../../../src/app/components/quienes-somos/quienes-somos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// componentes




// GOOGLE MAPS API


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_quienes_somos_quienes_somos_component__["a" /* QuienesSomosComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* APP_ROUTING */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyD9h_JPuErKyrfGHD5HGY0lG45AxPj_Ejo'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quienes_somos_quienes_somos_component__ = __webpack_require__("../../../../../src/app/components/quienes-somos/quienes-somos.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });



var APP_ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'quienes-somos', component: __WEBPACK_IMPORTED_MODULE_2__components_quienes_somos_quienes_somos_component__["a" /* QuienesSomosComponent */] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*colores*/\n\n.text-gris {\n  color: #6c747a;\n}\n\nh3 {\n  font-size: 1.2em;\n  font-weight: lighter;\n}\n\n.texto-seccion-1 {\n  font-size: .9em;\n  font-weight: lighter;\n}\n\n.subtitulo {\n  margin-top: 30px;\n  font-family: biko-bold;\n}\n\nbutton {\n  margin: 40px 10px 0 0;\n  padding: 10px 30px;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n  border-radius: 30px 30px;\n}\n\n.button-comprar {\n  padding: 10px 30px;\n  background: #0077dd;\n  border: 2px solid #0077dd;\n}\n\n.slider__navi {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  z-index: 10;\n}\n\n.slider__navi a {\n  display: block;\n  height: 6px;\n  width: 20px;\n  margin: 20px 0;\n  text-indent: -9999px;\n  box-shadow: none;\n  border: none;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.slider__navi a.active {\n  background: rgba(255, 255, 255, 1);\n}\n\n.flex__container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  -ms-flex-flow: row wrap;\n  -o-flex-flow: row wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -moz-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  width: 100vw;\n  z-index: 1;\n}\n\n.flex__container.flex--active {\n  z-index: 2;\n}\n\n.text--sub {\n  font-size: 12px;\n  letter-spacing: 0.5rem;\n  text-transform: uppercase;\n  margin-bottom: 40px;\n}\n\n.text--big {\n  font-size: 3.2em;\n}\n\n.text--normal {\n  font-size: 3.2em;\n  color: black;\n}\n\n.flex__item {\n  height: 100vh;\n  color: #fff;\n  transition: -webkit-transform 0.1s linear;\n  transition: transform 0.1s linear;\n  transition: transform 0.1s linear, -webkit-transform 0.1s linear;\n}\n\n.flex__item--left {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: -moz-flex;\n  display: -ms-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  width: 55%;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  transition: -webkit-transform 0.1s linear 0.4s;\n  transition: transform 0.1s linear 0.4s;\n  transition: transform 0.1s linear 0.4s, -webkit-transform 0.1s linear 0.4s;\n  opacity: 0;\n  position: relative;\n  overflow: hidden;\n}\n\n.flex__item--right {\n  width: 45%;\n  -webkit-transform-origin: right center;\n          transform-origin: right center;\n  transition: -webkit-transform 0.1s linear 0s;\n  transition: transform 0.1s linear 0s;\n  transition: transform 0.1s linear 0s, -webkit-transform 0.1s linear 0s;\n  opacity: 0;\n}\n\n.flex--preStart .flex__item--left, .flex--preStart .flex__item--right, .flex--active .flex__item--left, .flex--active .flex__item--right {\n  opacity: 1;\n}\n\n\n/* Piplup */\n\n.flex--piplup .flex__item--left {\n  background: #3e9fe6;\n}\n\n.flex--piplup .flex__item--right {\n  background: #d3eaef;\n}\n\n\n/* Pikachu */\n\n.flex--pikachu .flex__item--left {\n  background: #00befa\n}\n\n.flex--pikachu .flex__item--right {\n  background: #0077dd;\n}\n\n\n/* Blaziken */\n\n.flex--blaziken .flex__item--left {\n  background: #f64f37;\n}\n\n.flex--blaziken .flex__item--right {\n  background: #ffebcd;\n}\n\n\n/* Dialga */\n\n.flex--dialga .flex__item--left {\n  background: #476089;\n}\n\n.flex--dialga .flex__item--right {\n  background: #ade8f7;\n}\n\n\n/* Zekrom */\n\n.flex--zekrom .flex__item--left {\n  background: #424242;\n}\n\n.flex--zekrom .flex__item--right {\n  background: #a7bcbb;\n}\n\n.flex__content {\n  margin-top: 80px;\n  margin-left: 80px;\n  width: 59%;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: opacity 0.1s linear 0.2s, -webkit-transform 0.2s linear 0.2s;\n  transition: transform 0.2s linear 0.2s, opacity 0.1s linear 0.2s;\n  transition: transform 0.2s linear 0.2s, opacity 0.1s linear 0.2s, -webkit-transform 0.2s linear 0.2s;\n}\n\n.pokemon__img {\n  position: absolute;\n  bottom: 20px;\n  right: 5%;\n  max-height: 47vw;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  transition: opacity 0.43s 0.6s, -webkit-transform 0.4s 0.65s cubic-bezier(0, 0.88, 0.4, 0.93);\n  transition: opacity 0.43s 0.6s, transform 0.4s 0.65s cubic-bezier(0, 0.88, 0.4, 0.93);\n  transition: opacity 0.43s 0.6s, transform 0.4s 0.65s cubic-bezier(0, 0.88, 0.4, 0.93), -webkit-transform 0.4s 0.65s cubic-bezier(0, 0.88, 0.4, 0.93);\n}\n\n\n/* Animate-START point */\n\n.flex__container.animate--start .flex__content {\n  -webkit-transform: translate3d(0, -200%, 0);\n          transform: translate3d(0, -200%, 0);\n  opacity: 0;\n}\n\n.flex__container.animate--start .pokemon__img {\n  -webkit-transform: translate3d(-200px, 0, 0);\n          transform: translate3d(-200px, 0, 0);\n  opacity: 0;\n}\n\n\n/* Animate-END point */\n\n.flex__container.animate--end .flex__item--left {\n  -webkit-transform: scaleY(0);\n          transform: scaleY(0);\n}\n\n.flex__container.animate--end .flex__item--right {\n  -webkit-transform: scaleX(0);\n          transform: scaleX(0);\n}\n\n.flex__container.animate--end .flex__content {\n  -webkit-transform: translate3d(0, 200%, 0);\n          transform: translate3d(0, 200%, 0);\n  opacity: 0;\n}\n\n.flex__container.animate--end .pokemon__img {\n  -webkit-transform: translate3d(200px, 0, 0);\n          transform: translate3d(200px, 0, 0);\n  opacity: 0;\n}\n\n\n/* SCROLL DOWN */\n\nsection {\n  position: relative;\n  top: 58%;\n  left: 20%;\n}\n\nsection::after {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  content: '';\n  width: 100%;\n  height: 80%;\n}\n\n.demo a {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  z-index: 2;\n  display: inline-block;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%);\n  color: #fff;\n  letter-spacing: .1em;\n  text-decoration: none;\n  transition: opacity .3s;\n}\n\n.demo a:hover {\n  opacity: .5;\n}\n\n#section05 a {\n  padding-top: 70px;\n}\n\n#section05 a span {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box;\n}\n\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\n@keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n            transform: rotate(-45deg) translate(0, 0);\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n            transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0;\n  }\n}\n\n.demo a {\n  font-size: .8em;\n}\n\n\n/* seccion 2 ⁄ */\n\n.section-2 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  background: url(\"/assets/imgs/seccion-2.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.section-3 {\n  position: relative;\n  top: 680px;\n  height: 90vh;\n  z-index: 5;\n  background: url(\"/assets/imgs/seccion-3.png\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.section-4 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  height: 90vh;\n}\n\n.section-5 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  background: url(\"/assets/imgs/seccion-5.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 90vh;\n}\n\n.section-6 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n}\n\n.section-7 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  background: #1677dd;\n}\n\n.section-8 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  background: #eff4f5;\n}\n\n.section-9 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  background: #1677dd;\n}\n\n.section-10 {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n}\n.section-11 {\n  position: relative;\n  top: 680px;\n  height: 10%;\n  z-index: 5;\n  background: #21232f;\n}\n\n.azul-1 {\n  background: #0197f8;\n}\n\n.blanco {\n  background: white;\n}\n\n.cuadros-container {\n  padding: 35px 10px;\n  margin: 0 0 35px;\n  border: 1px solid #efefef;\n  height: 300px;\n  position: relative;\n  transition: all 0.3s;\n}\n\n.cuadros-container:hover {\n  background: #0197f8;\n  padding: 35px 10px;\n  margin: 0 0 35px;\n  border: 1px solid #0197f8;\n  height: 300px;\n  color: white;\n}\n\n.cuadros-container:hover::before, .cuadros-container:hover::after {\n  content: \"\";\n  width: 30%;\n  height: 10px;\n  top: 93%;\n  left: 69%;\n  -webkit-transform: rotate(5deg);\n          transform: rotate(5deg);\n  background-color: transparent;\n  z-index: -1;\n  position: absolute;\n  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.6);\n}\n\n.cuadros-container:hover::after {\n  left: 1%;\n  -webkit-transform: rotate(-5deg);\n          transform: rotate(-5deg);\n}\n\n.margin-top-70 {\n  padding-top: 80px;\n}\n\n.margin-top-50 {\n  padding-top: 50px;\n}\n\n.parrafo-seccion-2 {\n  margin-top: 30px;\n  font-size: 1.07em;\n  line-height: 35px\n}\n\n.cuadros {\n  margin-top: 80px;\n}\n\n\n/*seccion 4 */\n\n.container-s4 {\n  margin-top: 125px;\n}\n\n.align-text-end-1 h3 {\n  text-align: end;\n}\n\n.align-text-end-1 p {\n  text-align: end;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.contenedor-sdv {\n  padding-right: 0;\n}\n\n.linea-right {\n  border-right: 4px solid #24a5df;\n  padding: 0 12px 10px 0;\n}\n\n.linea-left {\n  border-left: 4px solid #24a5df;\n  padding: 0 0 10px 12px;\n}\n\n\n/*seccion 6 */\n\n.imagen-1 {\n  height: 50vh;\n  padding: 60px;\n}\n\n.imagen-2 {\n  background: url(\"/assets/imgs/seccion-6a.png\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 50vh;\n}\n\n.imagen-3 {\n  background: url(\"/assets/imgs/seccion-6b.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 50vh;\n}\n\n.imagen-4 {\n  height: 50vh;\n  padding: 80px;\n}\n\n.nosotros {\n  color: #0b56d2;\n  font-weight: bold;\n  font-family: biko-bold;\n}\n\nh4 {\n  font-family: biko-regular;\n  font-size: 1.3em;\n}\n\n.col-sm-6 p {\n  font-size: .9rem;\n  font-weight: 300;\n  line-height: 230%;\n}\n\n\n/*seccion 7 */\n\n.circulo {\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  background-color: white;\n  text-align: center;\n  width: 120px;\n  height: 120px;\n  margin: 0;\n}\n\n.circulo p {}\n\n.logo-s7 {\n  padding: 30px;\n  margin-bottom: 20px;\n}\n\n.h2-s7 {\n  margin-bottom: 50px;\n  font-size: 1.5em;\n}\n\n.h3-s7 {\n  margin-bottom: 10px;\n  font-size: 1.1em;\n}\n\n.p-s7 {\n  font-size: .8em;\n}\n\n.section-7 .container {\n  padding-bottom: 20px;\n}\n\n\n/*seccion 8*/\n\n.logo-s8 img {\n  margin: 0 30px;\n}\n\n.logos-s8 {\n  padding: 0 130px 0;\n}\n\n.asd {\n  width: 100px;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  transition: .2s;\n  margin-bottom: 100px!important;\n}\n\n.asd-1 {\n  width: 100px;\n  margin-bottom: 80px!important;\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n  transition: .2s;\n}\n\n.asd:hover {\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n\n.asd-1:hover {\n  -webkit-filter: grayscale(0%);\n          filter: grayscale(0%);\n}\n\n.linea {}\n\n\n/*seccion 9*/\n\n.h2-s9 {\n  padding: 0 20px;\n}\n\n.p-s9 {\n  color: white;\n  padding: 0 20px 30px;\n}\n\n.submit-1 {\n  background-color: white;\n  color: #1677dd;\n}\n\n.submit-s9{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-bottom: 40px;\n}\n\n/*mapa*/\nagm-map {\n  height: 400px;\n}\n\n.logo-mapa{\n  background: rgba(0,168,255,1);\nbackground: -webkit-gradient(left top, left bottom, color-stop(26%, rgba(0,168,255,1)), color-stop(27%, rgba(0,168,255,1)), color-stop(66%, rgba(0,110,231,1)));\nbackground: linear-gradient(to bottom, rgba(0,168,255,1) 26%, rgba(0,168,255,1) 27%, rgba(0,110,231,1) 66%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00a8ff', endColorstr='#006ee7', GradientType=0 );\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 8px;\n\n}\n\n.marcador-info{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 88px;\n  background: rgba(255,255,255,1);\nbackground: -webkit-gradient(left top, left bottom, color-stop(26%, rgba(255,255,255,1)), color-stop(27%, rgba(255,255,255,1)), color-stop(66%, rgba(230,230,230,1)));\nbackground: linear-gradient(to bottom, rgba(255,255,255,1) 26%, rgba(255,255,255,1) 27%, rgba(230,230,230,1) 66%);\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0 );\n}\n\n.info-mapa{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\npadding-left: 8px;\n-webkit-box-align: start;\n    -ms-flex-align: start;\n        align-items: flex-start;\n-webkit-box-orient: vertical;\n-webkit-box-direction: normal;\n    -ms-flex-direction: column;\n        flex-direction: column;\n}\n\n\n\n/*seccion 11 */\n.datos div{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n-webkit-box-pack: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n-webkit-box-align: center;\n    -ms-flex-align: center;\n        align-items: center;\npadding: 25px 15px;\n}\n\n.datos-11{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.h3-s11{\n  color: #0178de;\n}\n.logo-s11{\n}\n@media (min-width: 1200px) {\n  .container1 {\npadding-left: 220px ;\npadding-right: 220px ;\n\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"slider__warpper\">\n\n  <div class=\"flex__container flex--pikachu flex--active\" data-slide=\"1\">\n    <div class=\"flex__item flex__item--left\">\n      <div class=\"flex__content\">\n        <h1 class=\"text--big wow lightSpeedIn\">LOREM IPSUM</h1>\n        <h2 class=\"text--normal wow slideInRight\">ES SIMPLEMENTE EL TEXTO</h2>\n        <button>SABER MÁS</button>\n        <button class=\"button-comprar\">COMPRAR</button>\n      </div>\n      <p class=\"text__background\">LOREM IPSUM</p>\n      <section id=\"section05\" class=\"demo\">\n        <a href=\"#2\"><span></span>SCROLL</a>\n      </section>\n    </div>\n    <div class=\"flex__item flex__item--right\"></div>\n    <img class=\"pokemon__img\" src=\"assets/imgs/contenedor-azul.png\" />\n  </div>\n\n  <div class=\"flex__container flex--piplup animate--start\" data-slide=\"2\">\n    <div class=\"flex__item flex__item--left\">\n      <div class=\"flex__content\">\n        <p class=\"text--sub\">Pokemon Gen IV</p>\n        <h1 class=\"text--big\">LOREM IPSUM</h1>\n        <h2 class=\"text--normal wow shake\">ES SIMPLEMENTE EL TEXTO</h2>\n        <button>SABER MÁS</button>\n        <button class=\"button-comprar\">COMPRAR</button>\n      </div>\n      <p class=\"text__background\">LOREM IPSUM</p>\n    </div>\n    <div class=\"flex__item flex__item--right\"></div>\n    <img class=\"pokemon__img\" src=\"assets/imgs/contenedor-azul.png\" />\n  </div>\n\n  <div class=\"flex__container flex--blaziken animate--start\" data-slide=\"3\">\n    <div class=\"flex__item flex__item--left\">\n      <div class=\"flex__content\">\n        <p class=\"text--sub\">Pokemon Gen IV</p>\n        <h1 class=\"text--big\">LOREM IPSUM</h1>\n        <h2 class=\"text--normal\">ES SIMPLEMENTE EL TEXTO</h2>\n        <button>SABER MÁS</button>\n        <button class=\"button-comprar\">COMPRAR</button>\n      </div>\n      <p class=\"text__background\">LOREM IPSUM</p>\n    </div>\n    <div class=\"flex__item flex__item--right\"></div>\n    <img class=\"pokemon__img\" src=\"assets/imgs/contenedor-azul.png\" />\n  </div>\n\n  <div class=\"flex__container flex--dialga animate--start\" data-slide=\"4\">\n    <div class=\"flex__item flex__item--left\">\n      <div class=\"flex__content\">\n        <p class=\"text--sub\">Pokemon Gen IV</p>\n        <h1 class=\"text--big\">LOREM IPSUM</h1>\n        <h2 class=\"text--normal\">ES SIMPLEMENTE EL TEXTO</h2>\n        <button>SABER MÁS</button>\n        <button class=\"button-comprar\">COMPRAR</button>\n      </div>\n      <p class=\"text__background\">LOREM IPSUM</p>\n    </div>\n    <div class=\"flex__item flex__item--right\"></div>\n    <img class=\"pokemon__img\" src=\"assets/imgs/contenedor-azul.png\" />\n  </div>\n\n  <div class=\"flex__container flex--zekrom animate--start\" data-slide=\"5\">\n    <div class=\"flex__item flex__item--left\">\n      <div class=\"flex__content\">\n        <p class=\"text--sub\">Pokemon Gen V</p>\n        <h1 class=\"text--big\">Zekrom</h1>\n        <p class=\"text--normal\">Zekrom is a Dragon/Electric-type Legendary Pokémon. It is part of the Tao Trio, along with Reshiram and Kyurem. Zekrom is a large, black draconian Pokémon that seems to share its theme with its counterpart, Reshiram. It has piercing red eyes and\n          dark gray to black skin that seems to be armor-like.</p>\n      </div>\n      <p class=\"text__background\">Zekrom</p>\n    </div>\n    <div class=\"flex__item flex__item--right\"></div>\n    <img class=\"pokemon__img\" src=\"https://s4.postimg.org/malmhgn9p/zekrom.png\" />\n  </div>\n</div>\n\n<div class=\"slider__navi\">\n  <a href=\"#\" class=\"slide-nav active\" data-slide=\"1\">.1</a>\n  <a href=\"#\" class=\"slide-nav\" data-slide=\"2\">.2</a>\n  <a href=\"#\" class=\"slide-nav\" data-slide=\"3\">.3</a>\n  <a href=\"#\" class=\"slide-nav\" data-slide=\"4\">.4</a>\n  <a href=\"#\" class=\"slide-nav\" data-slide=\"5\">.5</a>\n</div>\n\n<!-- seccion 2 -->\n\n<div id=\"2\" class=\"container-fluid section-2\">\n  <div class=\"container margin-top-70 \">\n    <h2 class=\"text-center wow zoomIn\">\n      NUESTRA TRAYECTORIA\n    </h2>\n    <p class=\"parrafo-seccion-2 text-center wow zoomIn\">\n      Llevamos más de 10 años en el mercado, dedicados a la venta, alquiler y adecuación de contenedores marítimos, a nivel<br> nacional, y estamos en la búsqueda constante de construir un mejor futuro para el mundo minimizando los impactos\n      <br> ambientales globales.\n    </p>\n\n    <div class=\"row cuadros\">\n\n      <div class=\"col-md-4 text-center\">\n        <div (mouseover)='logo1()' (mouseout)='logo1R()' class=\"cuadros-container blanco  wow bounceInUp\">\n          <img class=\"logo-1\" src=\"assets/imgs/imagen-1-azul.png\" alt=\"\">\n          <h3 class=\"text-black subtitulo\">Soluciones</h3>\n          <p id=\"texto-1\" class=\"texto-seccion-1 text-muted\"> E-Containers Colombia brinda soluciones móviles que se adaptan a todo <br> tipo de industria.</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 text-center \">\n        <div (mouseover)='logo2()' (mouseout)='logo2R()' class=\"cuadros-container blanco  wow bounceInUp\">\n          <img class=\"logo-2\" src=\"assets/imgs/imagen-2-azul.png\" alt=\"\">\n          <h3 class=\"text-black subtitulo\">Asesoria Personalizada</h3>\n          <p id=\"texto-2\" class=\"texto-seccion-1 text-muted\"> Asesoría personalizada en diseño y arquitectura, con instalación fácil y rápida y la disponibilidad inmediata para productos estándar,<br> en venta y alquiler.</p>\n        </div>\n      </div>\n\n      <div class=\"col-md-4 text-center \">\n        <div (mouseover)='logo3()' (mouseout)='logo3R()' class=\"cuadros-container blanco wow bounceInUp\">\n          <img class=\"logo-3\" src=\"assets/imgs/imagen-3-azul.png\" alt=\"\">\n          <h3 class=\"text-black subtitulo\">Aliado Estratégico</h3>\n          <p id=\"texto-3\" class=\"texto-seccion-1 text-muted\"> Tu aliado estratégico para alquiler, compra <br> y adecuación de contenedores marítimos.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n<!-- seccion 3 -->\n\n<div id=\"2\" class=\"container-fluid section-3\">\n  <div class=\"container margin-top-70 \">\n  </div>\n</div>\n\n<!-- seccion 4 -->\n\n<div id=\"4\" class=\"container section-4\">\n  <div class=\"container margin-top-70 \">\n    <h2 class=\"text-center wow zoomIn\">\n      FETURES WEE OFFER\n    </h2>\n    <h5 class=\"text-center wow zoomIn\">\n      FETURES WEE OFFER\n    </h5>\n  </div>\n  <div class=\"row container-sp4\">\n    <div class=\"container\">\n    </div>\n    <div class=\"col d-flex flex-column justify-content-between align-items-end\">\n      <div class=\"p-2 align-text-end-1 wow fadeInLeft\">\n        <h3 class=\"bold linea-right\">INCREASED ENERGY</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n      </div>\n      <div class=\"p-2 align-text-end-1 wow fadeInLeft\">\n        <h3 class=\"bold linea-right\">INCREASED ENERGY</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n      </div>\n    </div>\n    <div class=\"col img-fluid contenedor-sdv wow bounceInUp\">\n      <img class=\"contenedor-4-img \" src=\"assets/imgs/contenedor-s4.png\" alt=\"\">\n    </div>\n\n\n    <div class=\"col d-flex flex-column justify-content-between align-items-start wow fadeInRight\">\n      <div class=\"p-2\">\n        <h3 class=\"bold linea-left \">INCREASED ENERGY</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n      </div>\n      <div class=\"p-2\">\n        <h3 class=\"bold linea-left \">INCREASED ENERGY</h3>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- seccion 5  -->\n\n<div id=\"2\" class=\"container-fluid section-5\">\n  <div class=\"container margin-top-70 \">\n    <div class=\"row\">\n\n    </div>\n\n  </div>\n</div>\n<!-- seccion 6  -->\n\n<div class=\"container-fluid section-6\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 imagen-1 container wow fadeIn\">\n      <h3 class=\"nosotros\">NOSOTROS</h3>\n      <h4>ADAPTAMOS ESPACIOS QUE TRANSFORMAN</h4>\n      <p>E-Containers Colombia es una empresa especializada en soluciones móviles con pensamiento estratégico y diferenciador. Desarrollamos espacios innovadores en diseño y confort a partir de arquitectura sustentable y renovable que se adapta a todo tipo\n        de industria.</p>\n    </div>\n    <div class=\"col-sm-6 imagen-2 wow fadeInRight\" data-ride=\"carousel\">\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6 imagen-3 wow fadeInLeft\">\n    </div>\n    <div class=\"col-sm-6 imagen-4 wow fadeIn\">\n      <p>En nuestra compañía estamos orgullosos del compromiso de nuestro equipo por proporcionar un servicio personalizado y presentar soluciones a las necesidades de nuestros clientes.</p>\n    </div>\n  </div>\n</div>\n\n\n<!-- seccion 7  -->\n<div id=\"4\" class=\"container-fluid section-7\">\n  <div class=\"container margin-top-50 \">\n    <h2 class=\" h2-s7 text-center wow zoomIn text-white\">\n        COMPROMISO EMPRESARIAL\n    </h2>\n    <div class=\"row container text-center\">\n      <div class=\"col-lg-3 text-white\">\n        <img class=\"logo-s7 circulo\" src=\"/assets/imgs/imagen-1-azul.png\">\n        <h3 class=\"h3-s7\">TITULO 1</h3>\n        <p class=\" p-s7\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>\n      </div>\n      <div class=\"col-lg-3 text-white\">\n        <img class=\"logo-s7 circulo\" src=\"/assets/imgs/imagen-1-azul.png\">\n        <h3 class=\"h3-s7\">TITULO 1</h3>\n        <p class=\" p-s7\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>\n      </div>\n      <div class=\"col-lg-3 text-white\">\n        <img class=\"logo-s7 circulo\" src=\"/assets/imgs/imagen-1-azul.png\">\n        <h3 class=\"h3-s7\">TITULO 1</h3>\n        <p class=\" p-s7\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>\n      </div>\n      <div class=\"col-lg-3 text-white\">\n        <img class=\"logo-s7 circulo\" src=\"/assets/imgs/imagen-1-azul.png\">\n        <h3 class=\"h3-s7\">TITULO 1</h3>\n        <p class=\"p-s7\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- seccion 8 -->\n<div id=\"2\" class=\"container-fluid section-8\">\n  <div class=\"container margin-top-50 \">\n    <h2 class=\" h2-s7 text-center wow zoomIn \">\n        NUESTROS CLIENTES\n    </h2>\n\n    <div class=\"row container text-center d-flex flex-row logos-s8\">\n      <div class=\"col-lg-12 logo-s8\">\n        <img class=\"asd-1\" src=\"/assets/imgs/sodi.png\" alt=\"\">\n        <img class=\"asd-1\" src=\"/assets/imgs/exi.png\" alt=\"\">\n        <img class=\"asd-1\" src=\"/assets/imgs/prode.png\" alt=\"\">\n        <img class=\"asd-1\" src=\"/assets/imgs/mini.png\" alt=\"\">\n        <img class=\"asd-1\" src=\"/assets/imgs/alca.png\" alt=\"\">\n        <img class=\"asd\" src=\"/assets/imgs/capi.png\" alt=\"\">\n        <img class=\"asd\" src=\"/assets/imgs/reuano.png\" alt=\"\">\n        <img class=\"asd\" src=\"/assets/imgs/nagua.png\" alt=\"\">\n        <img class=\"asd\" src=\"/assets/imgs/javeri.png\" alt=\"\">\n        <img class=\"asd\" src=\"/assets/imgs/city.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- seccion 9 formulario -->\n\n<div id=\"2\" class=\"container-fluid-s9 section-9\">\n  <div class=\"container1 margin-top-50 \">\n    <h2 class=\" h2-s9 wow zoomIn text-white\">\n        CONTACTO\n    </h2>\n    <p class=\"p-s9\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>\n    <div class=\"container \">\n      <form>\n        <div class=\"form-group row\">\n          <div class=\" col-6\">\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nombre y Apellido\">\n          </div>\n          <div class=\"form-group col-6\">\n            <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>¿En que ciudad estas?</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\" col-6\">\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Celular\">\n          </div>\n          <div class=\"form-group col-6\">\n            <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>¿En que estas interesado?</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\" col-6\">\n            <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Correo Electronico\">\n          </div>\n          <div class=\"form-group col-6\">\n            <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>¿Lo quieres para?</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Mensaje\"></textarea>\n        </div>\n        <div class=\"submit-s9\">\n          <button type=\"submit text-center\" class=\"btn btn-primary submit-1\">ENVIAR</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- seccion 10 mapa -->\n\n<div id=\"2\" class=\" section-10\">\n  <agm-map [scrollwheel]=\"scrollwheel\" [mapDraggable]=\"mapDraggable\" [zoom]=\"zoom\" [latitude]=\"latBogota\" [longitude]=\"lngBogota\">\n\n    <agm-marker [iconUrl]=\"iconUrl\" [latitude]=\"latBogota\" [longitude]=\"lngBogota\">\n      <agm-info-window [isOpen]=\"isOpen\">\n        <div class=\"marcador-info\">\n          <div class=\"logo-mapa\">\n            <img src=\"assets/imgs/logo-info.png\" alt=\"\">\n            <span>Bogotá</span>\n          </div>\n          <div class=\"info-mapa\">\n            <strong>Telefóno</strong>\n            <p>3452362346</p>\n            <strong>Dirección</strong>\n            <p>Calle 114A #47A-21</p>\n          </div>\n\n        </div>\n\n      </agm-info-window>\n    </agm-marker>\n    <agm-marker [iconUrl]=\"iconUrl\" [latitude]=\"latMedellin\" [longitude]=\"lngMedellin\">\n      <agm-info-window>\n        <div class=\"marcador-info\">\n          <div class=\"logo-mapa\">\n            <img src=\"assets/imgs/logo-info.png\" alt=\"\">\n            <span>Medellin</span>\n          </div>\n          <strong>Telefóno</strong>\n          <p>3452362346</p>\n\n        </div>\n\n      </agm-info-window>\n    </agm-marker>\n    <agm-marker [iconUrl]=\"iconUrl\" [latitude]=\"latManizales\" [longitude]=\"lngManizales\">\n      <agm-info-window>\n        <div class=\"marcador-info\">\n          <div class=\"logo-mapa\">\n            <img src=\"assets/imgs/logo-info.png\" alt=\"\">\n            <span>Manizales</span>\n          </div>\n          <strong>Telefóno</strong>\n          <p>3452362346</p>\n\n        </div>\n\n      </agm-info-window>\n    </agm-marker>\n  </agm-map>\n</div>\n\n\n<!-- seccion 11 -->\n<div id=\"4\" class=\"container-fluid section-11\">\n  <div class=\"container\">\n\n    <div class=\"row container text-center datos\">\n\n      <div class=\"col-lg-4 text-white \">\n        <img class=\"logo-s11\" src=\"/assets/imgs/contact-1.png\">\n        <div class=\"datos-11\">\n          <h3 class=\"h3-s11\">TELEFONOS</h3>\n          <p class=\" p-s7\"> + 386 31 4141</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 text-white\">\n        <img class=\"logo-s11\" src=\"/assets/imgs/contact-2.png\">\n        <div class=\"datos-11\">\n          <h3 class=\"h3-s11\">EMAIL</h3>\n          <p class=\" p-s7\"> info@econtainerscolombia.com </p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 text-white\">\n        <img class=\"logo-s11\" src=\"/assets/imgs/contact-3.png\">\n        <div class=\"datos-11\">\n          <h3 class=\"h3-s11\">DIRECCION</h3>\n          <p class=\"p-s7\">Calle 213 </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    function HomepageComponent() {
        this.title = 'My first AGM project';
        this.latBogota = 4.694814;
        this.lngBogota = -74.063321;
        this.latManizales = 5.068235;
        this.lngManizales = -75.518285;
        this.latMedellin = 6.206960;
        this.lngMedellin = -75.564878;
        this.zoom = 6;
        this.iconUrl = "/assets/imgs/marcador.png";
        this.mapDraggable = false;
        this.scrollwheel = false;
        this.isOpen = true;
    }
    HomepageComponent.prototype.logo1R = function () {
        document.querySelector(".logo-1").src = "assets/imgs/imagen-1-azul.png";
        var texto = document.querySelector(".texto-seccion-1");
        texto.classList.add("text-muted");
    };
    HomepageComponent.prototype.logo1 = function () {
        document.querySelector(".logo-1").src = "assets/imgs/imagen-1-blanco.png";
        var texto = document.querySelector(".texto-seccion-1");
        texto.classList.remove("text-muted");
    };
    HomepageComponent.prototype.logo2R = function () {
        document.querySelector(".logo-2").src = "assets/imgs/imagen-2-azul.png";
        var texto = document.getElementById("texto-2");
        texto.classList.add("text-muted");
    };
    HomepageComponent.prototype.logo2 = function () {
        document.querySelector(".logo-2").src = "assets/imgs/imagen-2-blanco.png";
        var texto = document.getElementById("texto-2");
        texto.classList.remove("text-muted");
    };
    HomepageComponent.prototype.logo3R = function () {
        document.querySelector(".logo-3").src = "assets/imgs/imagen-3-azul.png";
        var texto = document.getElementById("texto-3");
        texto.classList.add("text-muted");
    };
    HomepageComponent.prototype.logo3 = function () {
        document.querySelector(".logo-3").src = "assets/imgs/imagen-3-blanco.png";
        var texto = document.getElementById("texto-3");
        texto.classList.remove("text-muted");
    };
    HomepageComponent.prototype.ngOnInit = function () {
        $('.slide-nav').on('click', function (e) {
            e.preventDefault();
            // get current slide
            var current = $('.flex--active').data('slide'), 
            // get button data-slide
            next = $(this).data('slide');
            $('.slide-nav').removeClass('active');
            $(this).addClass('active');
            if (current === next) {
                return false;
            }
            else {
                $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
                $('.flex--active').addClass('animate--end');
                setTimeout(function () {
                    $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
                    $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
                }, 800);
            }
        });
        // scroll
        $(function () {
            $('a[href*="#"]').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 600, 'linear');
            });
        });
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/components/homepage/homepage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/homepage/homepage.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/quienes-somos/quienes-somos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/quienes-somos/quienes-somos.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-navbar></app-navbar>\n"

/***/ }),

/***/ "../../../../../src/app/components/quienes-somos/quienes-somos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesSomosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienesSomosComponent = (function () {
    function QuienesSomosComponent() {
    }
    QuienesSomosComponent.prototype.ngOnInit = function () {
    };
    return QuienesSomosComponent;
}());
QuienesSomosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-quienes-somos',
        template: __webpack_require__("../../../../../src/app/components/quienes-somos/quienes-somos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/quienes-somos/quienes-somos.component.css")]
    }),
    __metadata("design:paramtypes", [])
], QuienesSomosComponent);

//# sourceMappingURL=quienes-somos.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  position: relative;\n  top: 680px;\n  z-index: 5;\n  height: 30vh;\n}\n\n@media (min-width: 1200px) {\n  .containerf {\n    padding-left: 220px;\n    padding-right: 220px;\n  }\n}\n\nspan {\n  font-size: .7em;\n}\n\n.padding-40 {\n  padding-top: 40px!important;\n}\n\ni {}\n\n.redes-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  max-width: 100%!important;\n\n}\n\n.sgs{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\" footer containerf \">\n  <div class=\"row text-center padding-40\">\n    <div class=\"col-2\">\n      <span>Accesories</span>\n      <span>Alcohol</span>\n      <span>Alcohol</span>\n      <span>Alcohol</span>\n      <span>Alcohol</span>\n      <span>Alcohol</span>\n    </div>\n    <div class=\"col-2\">\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n\n    </div>\n    <div class=\"col-3\">\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n\n    </div>\n    <div class=\"col-2\">\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n      <span>Mapa del sitio</span>\n\n    </div>\n    <div class=\"col-3 redes-sgs\">\n      <div class=\" redes-footer\">\n        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"sgs\">\n        <img src=\"/assets/imgs/sgs-1.png\" alt=\"\">\n        <img src=\"/assets/imgs/sgs-2.png\" alt=\"\">\n\n\n      </div>\n    </div>\n\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  width: 55%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  top: 0;\n  position: fixed!important;\n  transition-duration: .3s;\n  height: 10vh;\n  z-index: 99;\n  background: white;\n}\n\n.nav2 {\n  z-index: 99;\n  width: 45%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  top: 0;\n  position: fixed!important;\n  right: 0;\n  transition-duration: .3s;\n  height: 10vh;\n  background: transparent;\n}\n\n.nav-principal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.nav-principal2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.pined {\n  width: 100%;\n  transition-duration: .3s;\n}\n\n.logo {\n  top: 4px;\n  left: 430px;\n  position: absolute;\n  max-width: 250px;\n}\n\n.burguer-menu {\n  max-width: 45px;\n}\n\n.menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 70px;\n  color: black;\n  z-index: 1;\n}\n\n.menu-scroll {\n  margin-right: 70px;\n}\n\n.idioma {\n  left: 1000px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.idioma-scroll {\n  color: black!important;\n  transition-delay: .1s;\n}\n\n.idioma a {\n  margin: 0 20px;\n}\n\n.idioma-b {\n  margin: 0 8px 0 0;\n}\n\na {\n  color: white;\n}\n\n.lupa {\n  transition-delay: .1s;\n}\n\n.dropdown-item {\n  color: black;\n}\n\n.btn-secondary {\n  border: none;\n  background: transparent;\n  color: white;\n}\n\n.btn-secondary.active, .btn-secondary:active, .show>.btn-secondary.dropdown-toggle {\n  color: black;\n  background-color: transparent;\n  background-image: none;\n}\n\n.dropdown-item:hover {\n  color: #00befa;\n  background: transparent;\n}\n\n.negro {\n  color: black;\n}\n\na {\n  color: white;\n  text-decoration: none;\n}\n\na:hover {\n  color: #F60;\n}\n\ninput {\n  outline: none;\n}\n\ninput[type=search] {\n  -webkit-appearance: textfield;\n  -webkit-box-sizing: content-box;\n  font-family: inherit;\n  font-size: 100%;\n}\n\ninput::-webkit-search-decoration, input::-webkit-search-cancel-button {\n  display: none;\n}\n\ninput[type=search] {\n  background: white url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;\n  border: solid 1.5px transparent;\n  padding: 0 10px 0 32px;\n  width: 55px;\n  border-radius: 10em;\n  transition: all .5s;\n}\n\ninput[type=search]:focus {\n  width: 130px;\n  background-color: #fff;\n  border-color: #00befa;\n  box-shadow: 0 0 5px rgba(109, 207, 246, .5);\n}\n\ninput:-moz-placeholder {\n  color: #999;\n}\n\ninput::-webkit-input-placeholder {\n  color: #999;\n}\n\n\n/* Demo 2 */\n\n#demo-2 input[type=search] {\n  width: 15px;\n  padding-left: 10px;\n  color: transparent;\n  cursor: pointer;\n}\n\n#demo-2 input[type=search]:hover {\n  background-color: #fff;\n}\n\n#demo-2 input[type=search]:focus {\n  width: 130px;\n  padding-left: 32px;\n  color: #000;\n  background-color: #fff;\n  cursor: auto;\n}\n\n#demo-2 input:-moz-placeholder {\n  color: transparent;\n}\n\n#demo-2 input::-webkit-input-placeholder {\n  color: transparent;\n}\n\n.sombra {\n  box-shadow: 0px 10px 15px -16px rgba(0, 0, 0, 0.75);\n}\n\n.menu-principal-1 {\n  background: #0079d5;\n  z-index: 98;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50vh;\n  width: 100vw;\n  left: -100%;\n  transition: .3s;\n}\n\n.menu-principal-1.active {\n  left: 0%;\n}\n\n.menu-principal-2.active {\n  right: 0%;\n}\n\n.menu-principal-2 {\n  top: 50%;\n  right: 0;\n  background: #1b1d32;\n  z-index: 99;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50vh;\n  width: 100vw;\n  right: -100%;\n  transition: .3s;\n}\n\ni:hover {\n  color: black;\n}\n\na:hover {\n  color: #00befa;\n}\n\n.burguer-button {\n  transition: 300ms ease;\n}\n\nspan {\n  padding-right: 10px;\n}\n\n.menu-1-s9 {\n  padding-top: 7%;\n  width: 100%;\n}\n.menu-2-s9{\n  width: 100%;\n\n}\n\n.menu-1-s9 .col-6 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\nli {\n  color: white;\n  font-size: 1.4em;\n  line-height: 3;\n  font-family: biko;\n}\n\n.col-7{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: url(/assets/imgs/seccion-3.png);\n  background-position: center;\nbackground-size: cover;}\n\n\n.col-7 h3{\ncolor: white;\nfont-size: 4.2em;\n\n}\n\n.col-5{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: white;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5%;\n\n}\n\n.newsletter{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.5rem;\n  font-family: biko-regular;\n  border-radius: 25rem;\n}\n.newsletter input{\n    border-radius: .5em;\n    width: 350px;\n    padding-left: 10px;\n    margin-bottom: 40px;\n}\n\n.redes-sociales i {\n  padding-right: 20px;\n}\n.redes-sociales i:hover{\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav navbar-light bg-faded sombra\">\n  <div class=\"container nav-principal\">\n    <a class=\"menu\" href=\"\">\n    </a>\n    <a class=\"navbar-brand\" href=\"\">\n  </a>\n  </div>\n</nav>\n\n<nav class=\"nav2 navbar-light bg-faded\">\n  <div class=\"container nav-principal2\">\n    <a class=\"navbar-brand\">\n      <div class=\"idioma\">\n        <button class=\"idioma-a btn btn-secondary \" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Contacto\n      </button>\n        <div class=\"dropdown \">\n          <button class=\"idioma-b btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Idioma\n        </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n            <a class=\"dropdown-item\" href=\"#\">Español</a>\n            <a class=\"dropdown-item\" href=\"#\">Ingles</a>\n          </div>\n        </div>\n        <form class=\"lupa\" id=\"demo-2\">\n          <input type=\"search\" placeholder=\"Search\">\n        </form>\n      </div>\n    </a>\n  </div>\n</nav>\n\n<nav class=\"nav navbar-light bg-faded\">\n  <div class=\"container nav-principal\">\n    <a class=\"menu \" href=\"#\" id=\"burguerButton\">\n      <span>MENÚ</span>\n      <i class=\"fa fa-bars fa-3x burguer-button\" aria-hidden=\"true\" id=\"burguer-btn\"  ></i>\n    </a>\n\n    <a class=\"navbar-brand\" href=\"#\">\n      <img class=\"logo\" src=\"assets/imgs/logo.png\" alt=\"\">\n  </a>\n\n  </div>\n</nav>\n\n\n\n<div class=\"menu-principal-1 container\" id=\"menu-1\">\n  <div class=\"row menu-1-s9\">\n    <div class=\"col-6\">\n      <ul>\n        <li><a [routerLink]=\"['quienes-somos']\">Quienes Somos</a></li>\n        <li><a [routerLink]=\"['blog']\">Blog</a></li>\n        <li><a href=\"#\">Intranet</a></li>\n\n      </ul>\n\n    </div>\n    <div class=\"col-6\">\n      <ul>\n        <li><a href=\"#\">Trabaja con nosotros</a></li>\n        <li><a href=\"#\">PQRS</a></li>\n        <li><a href=\"#\">Intranet</a></li>\n      </ul>\n\n    </div>\n\n  </div>\n\n</div>\n<div class=\"menu-principal-2 container-fluid\" id=\"menu-2\">\n  <div class=\"row menu-2-s9\">\n    <div class=\"col-7\">\n      <h3>Productos <br>y servicios</h3>\n    </div>\n\n    <div class=\"col-5\">\n      <form class=\"newsletter\" action=\"index.html\" method=\"post\">\n        <label>Suscribirse a Newsletter</label>\n        <input type=\"email\" name=\"\" value=\"\">\n      </form>\n      <span>Siguenos en:</span>\n      <div class=\"redes-sociales fa-2x\">\n        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n        <i class=\"fa fa-youtube\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var burguerButton = document.getElementById('burguerButton');
        var burguerbtn = document.getElementById('burguer-btn');
        var $menu1 = document.getElementById('menu-1');
        var $menu2 = document.getElementById('menu-2');
        var $nav = document.querySelector(".nav");
        var idiomaA = document.querySelector(".idioma-a");
        var idiomaB = document.querySelector(".idioma-b");
        var lupa = document.querySelector(".lupa");
        burguerButton.addEventListener('click', function () {
            $menu1.classList.toggle("active");
            $menu2.classList.toggle("active");
            $nav.classList.add("pined");
            idiomaA.classList.add("idioma-scroll");
            idiomaB.classList.add("idioma-scroll");
            burguerbtn.classList.toggle("fa-times");
            burguerbtn.classList.toggle("fa-bars");
        });
        (function () {
            var pinged = false;
            var nav = document.querySelector(".nav");
            var idiomaA = document.querySelector(".idioma-a");
            var idiomaB = document.querySelector(".idioma-b");
            var menu = document.querySelector(".menu");
            var lupa = document.querySelector(".lupa");
            // let lupa = (<HTMLImageElement>document.querySelector(".lupa"));
            var stickyScrollPoint = document.querySelector(".slider__warpper").clientHeight;
            function pingToTop() {
                if (pinged)
                    return;
                nav.classList.add("pined");
                idiomaA.classList.add("idioma-scroll");
                idiomaB.classList.add("idioma-scroll");
                lupa.classList.add("negro");
                // lupa.src = "assets/imgs/lupa-negra.png";
                pinged = true;
            }
            function unPingFromTop() {
                if (!pinged)
                    return;
                nav.classList.remove("pined");
                idiomaA.classList.remove("idioma-scroll");
                idiomaB.classList.remove("idioma-scroll");
                // lupa.src = "assets/imgs/lupa.png";
                lupa.classList.remove("negro");
                pinged = false;
            }
            window.addEventListener('scroll', function (ev) {
                if (window.scrollY == stickyScrollPoint)
                    return unPingFromTop();
                var coords = nav.getBoundingClientRect();
                if (coords.top <= 0)
                    return pingToTop();
                unPingFromTop();
            });
        })();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[3]);
//# sourceMappingURL=main.bundle.js.map