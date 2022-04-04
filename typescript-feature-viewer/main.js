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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  <div class=\"card-body\">\n    <app-header></app-header>\n  </div>\n</div>\n\n<!--<app-editor></app-editor>-->\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Typescript Feature viewer';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var _featureviewer_featureviewer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./featureviewer/featureviewer.component */ "./src/app/featureviewer/featureviewer.component.ts");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _demos_demos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demos/demos.component */ "./src/app/demos/demos.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");











// Import your required language in main.ts or at the root of your application
// see https://codemirror.net/mode/index.html



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _featureviewer_featureviewer_component__WEBPACK_IMPORTED_MODULE_9__["FeatureviewerComponent"],
                _demos_demos_component__WEBPACK_IMPORTED_MODULE_12__["DemosComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseModule"].forRoot(),
                ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_10__["CodemirrorModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demos/demos.component.html":
/*!********************************************!*\
  !*** ./src/app/demos/demos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">\n    RepeatsDB-KB\n  </div>\n  <div class=\"card-body\">\n    Simple feature with subfeatures, open by default.\n    <div id=\"repDiv\"></div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    DisProt\n  </div>\n  <div class=\"card-body\">\n    Several levels of subfeatures: please notice what happens to the left-side headers when you open and close subfeatures.\n    <div id=\"disprotDiv\"></div>\n  </div>\n</div>\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    MobiDB\n  </div>\n  <div class=\"card-body\">\n    Several types of features, different label size (also in mobile mode).\n    <div id=\"mobidbDiv\"></div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/demos/demos.component.scss":
/*!********************************************!*\
  !*** ./src/app/demos/demos.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".startendtable {\n  border: 1px solid white;\n  width: 100%;\n  background-color: #84716a;\n  font-size: 6pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmEvV2Vic3Rvcm1Qcm9qZWN0cy9GZWF0dXJlVmlld2VyVHlwZVNjcmlwdC1kb2N1bWVudGF0aW9uIC9zcmMvYXBwL2RlbW9zL2RlbW9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vcy9kZW1vcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGVtb3MvZGVtb3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnRlbmR0YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg0NzE2YTtcbiAgZm9udC1zaXplOiA2cHRcbn1cblxuIiwiLnN0YXJ0ZW5kdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDcxNmE7XG4gIGZvbnQtc2l6ZTogNnB0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/demos/demos.component.ts":
/*!******************************************!*\
  !*** ./src/app/demos/demos.component.ts ***!
  \******************************************/
/*! exports provided: DemosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemosComponent", function() { return DemosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feature-viewer-typescript/lib */ "./node_modules/feature-viewer-typescript/lib/index.js");
/* harmony import */ var feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__);

/* tslint:disable:quotemark */


var DemosComponent = /** @class */ (function () {
    function DemosComponent() {
    }
    DemosComponent.prototype.ngOnInit = function () {
        // RepDB-KB //
        var repdata = [
            { "type": "rect", "label": "2o6w-A", "id": "c-2o6w-A",
                "data": [
                    { "x": 1, "y": 150, "color": "#D62839", "direction": 'right' },
                    { "x": 1, "y": 23, "color": "#D62839", "direction": 'right' },
                    { "x": 45, "y": 80, "color": "#D62839", "direction": 'right' }
                ],
                "isOpen": true, "sidebar": [{ "id": "pdbLink-2o6w-A", "tooltip": "PDB 2o6w-A",
                        "content": "<a href=\"http://www.rcsb.org/structure/2o6w\"> " +
                            "<i style=\"margin-top:5px;\" class=\"fa fa-external-link-square\" ></i></a>" }],
                "subfeatures": [{ "type": "rect", "label": "u-2o6w-A", "id": "u-2o6w-A",
                        "data": [{ "x": 15, "y": 54, "color": "#03256C" }, { "x": 55, "y": 71, "color": "#00709B" }, { "x": 72, "y": 91, "color": "#03256C" },
                            { "x": 92, "y": 111, "color": "#00709B" }, { "x": 112, "y": 131, "color": "#03256C" }, { "x": 132, "y": 150, "color": "#00709B" }],
                        "isOpen": true }] },
            {
                type: "rect",
                variant: "overlap",
                id: "mytest",
                label: "Overlapping feature",
                data: [
                    { "x": 1,
                        "y": 150,
                        "color": "red" },
                    { "x": 10,
                        "y": 50,
                        "color": "white",
                        "className": "missing",
                        "tooltip": "Missing Residues" }
                ]
            }
        ];
        var repseq = "AMTNNLYRLELERECVGCNLEGVNLPRENFGLKYRIPRSSSPLVTTPFGMDKAKPVDLTR\n" +
            "ANLSNANLYQSDLSSIILENAILVETNLSETDLENAILIGANLQGANLENANLQGANLEN\n" +
            "ANLRGAILTGVNLEETHLKGIETDKNTVWD";
        var repfv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](repseq, '#repDiv', {
            toolbar: false,
            toolbarPosition: 'left',
            brushActive: true,
            zoomMax: 10,
            flagColor: '#a7ccb1',
            backgroundcolor: '#d5e3d9',
            sideBar: 100,
            flagTrackMobile: 120
        });
        repfv.addFeatures(repdata);
        // DisProt //
        // tslint:disable-next-line:max-line-length
        var data = [{ 'type': 'rect', 'label': 'DisProt consensus', 'id': 'disprot_consensus', 'data': [{ 'x': 1, 'y': 19, 'id': 'dp_consensus1_19', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Transition</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-19 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 20, 'y': 73, 'id': 'dp_consensus20_73', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Interaction</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 20-73 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 74, 'y': 93, 'id': 'dp_consensus74_93', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Transition</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 74-93 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 291, 'y': 312, 'id': 'dp_consensus291_312', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 291-312 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 320, 'y': 393, 'id': 'dp_consensus320_393', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Interaction</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }], 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 291, 'y': 312, 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 291-312 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 320, 'y': 393, 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }], 'type': 'rect', 'label': 'Structural state', 'id': 'disprot_state', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'val21_393', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div>Proton-based nuclear magnetic resonance<br>Small-angle X-ray scattering<br>Nuclear magnetic resonance<br></div>' }, { 'x': 291, 'y': 312, 'id': 'val2291_393', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 291-312 </div></div>Missing electron density<br></div>' }, { 'x': 320, 'y': 393, 'id': 'val1320_393', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Disorder</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div>Missing electron density<br></div>' }], 'type': 'rect', 'id': 'b00076', 'label': 'Disorder', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r015</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Proton-based nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> NMR chemical shift and relaxation measurements provide evidence for the coupled folding and binding of the p53 transactivation domain. <i> Vise PD,  Baral B,  Latos AJ,  Daughdrill GW. </i> Nucleic Acids Res 2005 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r015', 'label': 'DP00086r015' }, { 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r024</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Small-angle X-ray scattering </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of tumor suppressor p53 and its intrinsically disordered N-terminal transactivation domain. <i> Wells M,  Tidow H,  Rutherford TJ,  Markwick P,  Jensen MR,  Mylonas E,  Svergun DI,  Blackledge M,  Fersht AR. </i> Proc Natl Acad Sci U S A 2008 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r024', 'label': 'DP00086r024' }, { 'data': [{ 'x': 1, 'y': 73, 'id': 'exp1_73', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r001</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Emanuela Leonardi</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Circular dichroism spectroscopy near-UV </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Transactivation ability of p53 transcriptional activation domain is directly related to the binding affinity to TATA-binding protein. <i> Chang J,  Kim DH,  Lee SW,  Choi KY,  Sung YC. </i> J Biol Chem 1995 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r001', 'label': 'DP00086r001' }, { 'data': [{ 'x': 1, 'y': 12, 'id': 'exp1_12', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r008</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Emanuela Leonardi</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-12 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> HMGB1-facilitated p53 DNA binding occurs via HMG-Box/p53 transactivation domain interaction,  regulated by the acidic tail. <i> Rowell JP,  Simpson KL,  Stott K,  Watson M,  Thomas JO. </i> Structure 2012 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r008', 'label': 'DP00086r008' }, { 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r013</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of tumor suppressor p53 and its intrinsically disordered N-terminal transactivation domain. <i> Wells M,  Tidow H,  Rutherford TJ,  Markwick P,  Jensen MR,  Mylonas E,  Svergun DI,  Blackledge M,  Fersht AR. </i> Proc Natl Acad Sci U S A 2008 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r013', 'label': 'DP00086r013' }, { 'data': [{ 'x': 60, 'y': 92, 'id': 'exp60_92', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r005</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Emanuela Leonardi</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 60-92 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> HMGB1-facilitated p53 DNA binding occurs via HMG-Box/p53 transactivation domain interaction,  regulated by the acidic tail. <i> Rowell JP,  Simpson KL,  Stott K,  Watson M,  Thomas JO. </i> Structure 2012 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r005', 'label': 'DP00086r005' }, { 'data': [{ 'x': 291, 'y': 312, 'id': 'exp291_312', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r018</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 291-312 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Missing electron density </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Crystal structure of a superstable mutant of human p53 core domain. Insights into the mechanism of rescuing oncogenic mutations. <i> Joerger AC,  Allen MD,  Fersht AR. </i> J Biol Chem 2004 </div></div>  <div class=\'alert-warning\'>This entry has ambiguity tag:  <strong>AMBEXP</strong>,  <strong>AMBSEQ</strong>,  <strong>AMBLIT</strong>,  </div> </div>' }], 'type': 'rect', 'id': 'DP00086r018', 'label': 'DP00086r018' }, { 'data': [{ 'x': 320, 'y': 393, 'id': 'exp320_393', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r009</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 320-393 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Missing electron density </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Long range recognition and selection in IDPs:  the interactions of the C-terminus of p53. <i> Kannan S,  Lane DP,  Verma CS. </i> Sci Rep 2016 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r009', 'label': 'DP00086r009' }, { 'data': [{ 'x': 20, 'y': 73, 'id': 'exp20_73', 'color': '#a7662b', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r026</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Borbála Hajdu-Soltész</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 20-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of the Tfb1/p53 complex:  Insights into the interaction between the p62/Tfb1 subunit of TFIIH and the activation domain of p53. <i> Di Lello P,  Jenkins LM,  Jones TN,  Nguyen BD,  Hara T,  Yamaguchi H,  Dikeakos JD,  Appella E,  Legault P,  Omichinski JG. </i> Mol Cell 2006 </div></div>  <div class=\'alert-warning\'>This entry has ambiguity tag:  <strong>AMBSEQ</strong>,  </div> </div>' }], 'type': 'rect', 'id': 'DP00086r026', 'label': 'DP00086r026' }] }] }, { 'data': [{ 'x': 1, 'y': 93, 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Transition</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 320, 'y': 393, 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Transition</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }], 'type': 'rect', 'label': 'Structural transition', 'id': 'disprot_transition', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'val21_393', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Disorder to order</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div>Proton-based nuclear magnetic resonance<br></div>' }, { 'x': 320, 'y': 393, 'id': 'val1320_393', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Disorder to order</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div>Missing electron density<br></div>' }], 'type': 'rect', 'id': 'b00050', 'label': 'Disorder to order', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder to order</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r017</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Proton-based nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> NMR chemical shift and relaxation measurements provide evidence for the coupled folding and binding of the p53 transactivation domain. <i> Vise PD,  Baral B,  Latos AJ,  Daughdrill GW. </i> Nucleic Acids Res 2005 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r017', 'label': 'DP00086r017' }, { 'data': [{ 'x': 320, 'y': 393, 'id': 'exp320_393', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder to order</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r011</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 320-393 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Missing electron density </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Long range recognition and selection in IDPs:  the interactions of the C-terminus of p53. <i> Kannan S,  Lane DP,  Verma CS. </i> Sci Rep 2016 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r011', 'label': 'DP00086r011' }, { 'data': [{ 'x': 20, 'y': 73, 'id': 'exp20_73', 'color': '#83257B', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Disorder to order</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r028</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Borbála Hajdu-Soltész</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 20-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of the Tfb1/p53 complex:  Insights into the interaction between the p62/Tfb1 subunit of TFIIH and the activation domain of p53. <i> Di Lello P,  Jenkins LM,  Jones TN,  Nguyen BD,  Hara T,  Yamaguchi H,  Dikeakos JD,  Appella E,  Legault P,  Omichinski JG. </i> Mol Cell 2006 </div></div>  <div class=\'alert-warning\'>This entry has ambiguity tag:  <strong>AMBSEQ</strong>,  </div> </div>' }], 'type': 'rect', 'id': 'DP00086r028', 'label': 'DP00086r028' }] }] }, { 'data': [{ 'x': 20, 'y': 73, 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Interaction</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 20-73 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 320, 'y': 393, 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Interaction</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }], 'type': 'rect', 'label': 'Interaction', 'id': 'disprot_interactions', 'subfeatures': [{ 'data': [{ 'x': 20, 'y': 73, 'id': 'val220_393', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Protein binding</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 20-73 </div></div>Nuclear magnetic resonance<br></div>' }, { 'x': 320, 'y': 393, 'id': 'val1320_393', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Protein binding</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div>Missing electron density<br></div>' }], 'type': 'rect', 'id': 'b00063', 'label': 'Protein binding', 'subfeatures': [{ 'data': [{ 'x': 320, 'y': 393, 'id': 'exp320_393', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Protein binding</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r012</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 320-393 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Missing electron density </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Long range recognition and selection in IDPs:  the interactions of the C-terminus of p53. <i> Kannan S,  Lane DP,  Verma CS. </i> Sci Rep 2016 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r012', 'label': 'DP00086r012' }, { 'data': [{ 'x': 20, 'y': 73, 'id': 'exp20_73', 'color': '#006D66', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Protein binding</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r027</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Borbála Hajdu-Soltész</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 20-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of the Tfb1/p53 complex:  Insights into the interaction between the p62/Tfb1 subunit of TFIIH and the activation domain of p53. <i> Di Lello P,  Jenkins LM,  Jones TN,  Nguyen BD,  Hara T,  Yamaguchi H,  Dikeakos JD,  Appella E,  Legault P,  Omichinski JG. </i> Mol Cell 2006 </div></div>  <div class=\'alert-warning\'>This entry has ambiguity tag:  <strong>AMBSEQ</strong>,  </div> </div>' }], 'type': 'rect', 'id': 'DP00086r027', 'label': 'DP00086r027' }] }] }, { 'data': [{ 'x': 1, 'y': 93, 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Function</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }, { 'x': 320, 'y': 393, 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-6\'><strong>Function</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div><div class=\'row\'><div class=\'col-auto\'></div></div></div>' }], 'type': 'rect', 'label': 'Function', 'id': 'disprot_functions', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'val11_93', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Activator</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 1-93 </div></div>Proton-based nuclear magnetic resonance<br>Small-angle X-ray scattering<br>Nuclear magnetic resonance<br></div>' }], 'type': 'rect', 'id': 'b00021', 'label': 'Activator', 'subfeatures': [{ 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r016</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Proton-based nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> NMR chemical shift and relaxation measurements provide evidence for the coupled folding and binding of the p53 transactivation domain. <i> Vise PD,  Baral B,  Latos AJ,  Daughdrill GW. </i> Nucleic Acids Res 2005 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r016', 'label': 'DP00086r016' }, { 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r025</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Small-angle X-ray scattering </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of tumor suppressor p53 and its intrinsically disordered N-terminal transactivation domain. <i> Wells M,  Tidow H,  Rutherford TJ,  Markwick P,  Jensen MR,  Mylonas E,  Svergun DI,  Blackledge M,  Fersht AR. </i> Proc Natl Acad Sci U S A 2008 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r025', 'label': 'DP00086r025' }, { 'data': [{ 'x': 1, 'y': 73, 'id': 'exp1_73', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r002</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Emanuela Leonardi</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Circular dichroism spectroscopy near-UV </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Transactivation ability of p53 transcriptional activation domain is directly related to the binding affinity to TATA-binding protein. <i> Chang J,  Kim DH,  Lee SW,  Choi KY,  Sung YC. </i> J Biol Chem 1995 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r002', 'label': 'DP00086r002' }, { 'data': [{ 'x': 1, 'y': 93, 'id': 'exp1_93', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r014</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 1-93 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of tumor suppressor p53 and its intrinsically disordered N-terminal transactivation domain. <i> Wells M,  Tidow H,  Rutherford TJ,  Markwick P,  Jensen MR,  Mylonas E,  Svergun DI,  Blackledge M,  Fersht AR. </i> Proc Natl Acad Sci U S A 2008 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r014', 'label': 'DP00086r014' }, { 'data': [{ 'x': 60, 'y': 92, 'id': 'exp60_92', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r006</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Emanuela Leonardi</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 60-92 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> HMGB1-facilitated p53 DNA binding occurs via HMG-Box/p53 transactivation domain interaction,  regulated by the acidic tail. <i> Rowell JP,  Simpson KL,  Stott K,  Watson M,  Thomas JO. </i> Structure 2012 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r006', 'label': 'DP00086r006' }, { 'data': [{ 'x': 20, 'y': 73, 'id': 'exp20_73', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Activator</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r029</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Borbála Hajdu-Soltész</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 20-73 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Nuclear magnetic resonance </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Structure of the Tfb1/p53 complex:  Insights into the interaction between the p62/Tfb1 subunit of TFIIH and the activation domain of p53. <i> Di Lello P,  Jenkins LM,  Jones TN,  Nguyen BD,  Hara T,  Yamaguchi H,  Dikeakos JD,  Appella E,  Legault P,  Omichinski JG. </i> Mol Cell 2006 </div></div>  <div class=\'alert-warning\'>This entry has ambiguity tag:  <strong>AMBSEQ</strong>,  </div> </div>' }], 'type': 'rect', 'id': 'DP00086r029', 'label': 'DP00086r029' }] }, { 'data': [{ 'x': 320, 'y': 393, 'id': 'val1320_393', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row \'><div class=\'col-6\'><strong>Cis-regulatory element</strong></div><div class=\'col-6 text-right\'> <strong>Position: </strong> 320-393 </div></div>Missing electron density<br></div>' }], 'type': 'rect', 'id': 'b00019', 'label': 'Cis-regulatory element', 'subfeatures': [{ 'data': [{ 'x': 320, 'y': 393, 'id': 'exp320_393', 'color': '#C13828', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'> <div class=\'row\'><div class=\'col-4\'><h5><strong>Cis-regulatory element</strong></h5></div><div class=\'col-4 text-center\'><strong>Region ID: </strong> DP00086r010</div><div class=\'col-4 text-right\'><strong>Curator: </strong> Marco Necci</div></div> <div class=\'row\'><div class=\'col\'> <strong>Position: </strong> 320-393 </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Method: </strong> Missing electron density </div></div>  <div class=\'row\'><div class=\'col\'> <strong>Reference: </strong> Long range recognition and selection in IDPs:  the interactions of the C-terminus of p53. <i> Kannan S,  Lane DP,  Verma CS. </i> Sci Rep 2016 </div></div>  </div>' }], 'type': 'rect', 'id': 'DP00086r010', 'label': 'DP00086r010' }] }] }] }, { 'type': 'rect', 'label': 'Domains', 'id': 'domains', 'tooltip': ' ', 'data': [{ 'x': 6, 'y': 30, 'id': 'C6_30', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 6-30 </div></div><div class=\'row\'><div class=\'col\'>p53 transactivation domain (PF08563)</div></div></div>' }, { 'x': 35, 'y': 59, 'id': 'C35_59', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 35-59 </div></div><div class=\'row\'><div class=\'col\'>Cellular tumor antigen p53,  transactivation domain 2 (PF18521)</div></div></div>' }, { 'x': 94, 'y': 99, 'id': 'C94_99', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 94-99 </div></div><div class=\'row\'><div class=\'col\'>2.60.40.720 (2.60.40.720)</div></div></div>' }, { 'x': 100, 'y': 288, 'id': 'C100_288', 'color': '#004a87', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam and Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 100-288 </div></div><div class=\'row\'><div class=\'col\'>p53,  DNA-binding domain (PF00870)</div></div><div class=\'row\'><div class=\'col\'>2.60.40.720 (2.60.40.720)</div></div></div>' }, { 'x': 289, 'y': 293, 'id': 'C289_293', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 289-293 </div></div><div class=\'row\'><div class=\'col\'>2.60.40.720 (2.60.40.720)</div></div></div>' }, { 'x': 319, 'y': 357, 'id': 'C319_357', 'color': '#004a87', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam and Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 319-357 </div></div><div class=\'row\'><div class=\'col\'>p53,  tetramerisation domain (PF07710)</div></div><div class=\'row\'><div class=\'col\'>p53-like tetramerisation domain (4.10.170.10)</div></div></div>' }, { 'x': 358, 'y': 360, 'id': 'C358_360', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 358-360 </div></div><div class=\'row\'><div class=\'col\'>p53-like tetramerisation domain (4.10.170.10)</div></div></div>' }], 'subfeatures': [{ 'type': 'rect', 'label': 'Pfam', 'id': 'pfam', 'tooltip': ' ', 'data': [{ 'x': 6, 'y': 30, 'id': 'Pa6_30', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 6-30 </div></div><div class=\'row\'><div class=\'col\'>p53 transactivation domain (PF08563)</div></div></div>' }, { 'x': 35, 'y': 59, 'id': 'Pa35_59', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 35-59 </div></div><div class=\'row\'><div class=\'col\'>Cellular tumor antigen p53,  transactivation domain 2 (PF18521)</div></div></div>' }, { 'x': 100, 'y': 288, 'id': 'Pa100_288', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 100-288 </div></div><div class=\'row\'><div class=\'col\'>p53,  DNA-binding domain (PF00870)</div></div></div>' }, { 'x': 319, 'y': 357, 'id': 'Pa319_357', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 319-357 </div></div><div class=\'row\'><div class=\'col\'>p53,  tetramerisation domain (PF07710)</div></div></div>' }], 'subfeatures': [{ 'data': [{ 'x': 100, 'y': 288, 'color': '#008DE5', 'id': 'P100_288', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 100-288 </div></div><div class=\'row\'><div class=\'col\'> <strong>p53,  DNA-binding domain</strong> (PF00870)</div></div></div>' }], 'type': 'rect', 'id': 'pfam0', 'label': 'PF00870' }, { 'data': [{ 'x': 319, 'y': 357, 'color': '#008DE5', 'id': 'P319_357', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 319-357 </div></div><div class=\'row\'><div class=\'col\'> <strong>p53,  tetramerisation domain</strong> (PF07710)</div></div></div>' }], 'type': 'rect', 'id': 'pfam1', 'label': 'PF07710' }, { 'data': [{ 'x': 35, 'y': 59, 'color': '#008DE5', 'id': 'P35_59', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 35-59 </div></div><div class=\'row\'><div class=\'col\'> <strong>Cellular tumor antigen p53,  transactivation domain 2</strong> (PF18521)</div></div></div>' }], 'type': 'rect', 'id': 'pfam2', 'label': 'PF18521' }, { 'data': [{ 'x': 6, 'y': 30, 'color': '#008DE5', 'id': 'P6_30', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Pfam domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 6-30 </div></div><div class=\'row\'><div class=\'col\'> <strong>p53 transactivation domain</strong> (PF08563)</div></div></div>' }], 'type': 'rect', 'id': 'pfam3', 'label': 'PF08563' }] }, { 'type': 'rect', 'label': 'Gene3D', 'id': 'gene3d', 'tooltip': ' ', 'data': [{ 'x': 94, 'y': 293, 'id': 'Ga94_293', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 94-293 </div></div><div class=\'row\'><div class=\'col\'>2.60.40.720 (2.60.40.720)</div></div></div>' }, { 'x': 319, 'y': 360, 'id': 'Ga319_360', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  10rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domains</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 319-360 </div></div><div class=\'row\'><div class=\'col\'>p53-like tetramerisation domain (4.10.170.10)</div></div></div>' }], 'subfeatures': [{ 'data': [{ 'x': 94, 'y': 293, 'id': 'G94_293', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 94-293 </div></div><div class=\'row\'><div class=\'col\'><strong>2.60.40.720</strong> (2.60.40.720)</div></div></div>' }], 'type': 'rect', 'id': 'gene3d0', 'label': '2.60.40.720' }, { 'data': [{ 'x': 319, 'y': 360, 'id': 'G319_360', 'color': '#008DE5', 'tooltip': '<div class=\'card-tooltip small\' style=\'min-width:  20rem;max-width:  30rem\'><div class=\'row\'><div class=\'col-8\'><strong>Gene3D domain</strong></div><div class=\'col-4 text-right\'> <strong>Position: </strong> 319-360 </div></div><div class=\'row\'><div class=\'col\'><strong>p53-like tetramerisation domain</strong> (4.10.170.10)</div></div></div>' }], 'type': 'rect', 'id': 'gene3d1', 'label': '4.10.170.10' }] }] }];
        var proteinseq = 'A'.repeat(400);
        var fv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](proteinseq, '#disprotDiv', {
            toolbar: false,
            toolbarPosition: 'left',
            brushActive: true,
            zoomMax: 10,
            flagColor: '#a7662b',
            backgroundcolor: '#faf5ec'
        });
        fv.addFeatures(data);
        // MobiDB-lite //
        var sequencecolor = '#c3c4db';
        var firstlevelcolor = '#c91538';
        var secondlevelcolor = '#c8a0a8';
        // tslint:disable-next-line:max-line-length
        var customtooltip = "<div style='padding: 0.3em; padding-left: 0.5em; padding-right: 0.5em; box-shadow: 0 0 10px 2px gray; background-color: #ffffff; color: black; font-size: medium'><table class='full'><tr><td style=\"font-weight:bold\" align='left'>Disorder type</td></tr><tr><td>Weak polyampholyte</td></tr></table><table class=\"startendtable\">\n" +
            "        <tr>\n" +
            "          <td class=\"startendtable\" align='left'>Region start</td>\n" +
            "          <td class=\"startendtable\" align='right' width='20%'>56</td>\n" +
            "        </tr>\n" +
            "        <tr>\n" +
            "          <td class=\"startendtable\" align='left' width='80%'>Region end</td>\n" +
            "          <td class=\"startendtable\" align='right' width='20%'>83</td>\n" +
            "        </tr>\n" +
            "      </table></div>";
        // tslint:disable-next-line:max-line-length
        var mobidata1 = { "data": [{ "x": 1, "y": 55, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "<div style=\'padding: 0.3em; box-shadow: 0 6px 4px -4px gray; background-color: rgba(255,255,255,0.3); color: #ffffff; font-size: small\'>Structure</div>", "annotation": "S" }, { "x": 56, "y": 87, "id": "D_WC", "color": "#E8B10B", "description": "", "tooltip": customtooltip, "annotation": "D_WC" }, { "x": 88, "y": 161, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }], "type": "rect", "name": "MobiDB-lite", "flagColor": firstlevelcolor, "color": "#DCDCDC", "tooltip": "", "sidebar": [{ "id": "disorderContent", "type": "percentage", "label": "19.9" }], "label": "<span style='color: #ffffff'>Consensus</span>", "id": "predicted1" };
        // tslint:disable-next-line:max-line-length
        var mobidata2 = { "data": [{ "x": 1, "y": 6, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 7, "y": 126, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 127, "y": 133, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 134, "y": 150, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 151, "y": 155, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 156, "y": 156, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 157, "y": 161, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }], "type": "rect", "name": "DisEMBL-465", "flagColor": secondlevelcolor, "color": "#DCDCDC", "tooltip": "", "sidebar": [{ "id": "disorderContent", "type": "percentage", "label": "14.3" }], "label": "Predictor 1", "id": "DisEMBL-465" };
        // tslint:disable-next-line:max-line-length
        var mobidata5 = { "data": [{ "x": 1, "y": 9, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 10, "y": 18, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 19, "y": 44, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 45, "y": 52, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 53, "y": 87, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 88, "y": 106, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 107, "y": 113, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 114, "y": 125, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 126, "y": 133, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }, { "x": 134, "y": 150, "id": "S", "color": "#B5DCE8", "description": "", "tooltip": "Structure", "annotation": "S" }, { "x": 151, "y": 161, "id": "D", "color": "#FFAE19", "description": "", "tooltip": "Disorder / Coil", "annotation": "D" }], "type": "rect", "name": "Predictor 2", "flagColor": secondlevelcolor, "color": "#DCDCDC", "tooltip": "", "sidebar": [{ "id": "disorderContent", "type": "percentage", "label": "59.6" }], "label": "Predictor 2", "id": "ESpritz-NMR" };
        // tslint:disable-next-line:max-line-length
        var mobidata12 = { "data": [{ "x": 1, "y": 0.88, "description": "", "tooltip": "" }, { "x": 2, "y": 0.75, "description": "", "tooltip": "" }, { "x": 3, "y": 0.88, "description": "", "tooltip": "" }, { "x": 4, "y": 1, "description": "", "tooltip": "" }, { "x": 5, "y": 0.88, "description": "", "tooltip": "" }, { "x": 6, "y": 0.88, "description": "", "tooltip": "" }, { "x": 7, "y": 0.63, "description": "", "tooltip": "" }, { "x": 8, "y": 0.75, "description": "", "tooltip": "" }, { "x": 9, "y": 0.63, "description": "", "tooltip": "" }, { "x": 10, "y": 0.38, "description": "", "tooltip": "" }, { "x": 11, "y": 0.38, "description": "", "tooltip": "" }, { "x": 12, "y": 0.38, "description": "", "tooltip": "" }, { "x": 13, "y": 0.38, "description": "", "tooltip": "" }, { "x": 14, "y": 0.38, "description": "", "tooltip": "" }, { "x": 15, "y": 0.38, "description": "", "tooltip": "" }, { "x": 16, "y": 0.38, "description": "", "tooltip": "" }, { "x": 17, "y": 0.25, "description": "", "tooltip": "" }, { "x": 18, "y": 0.25, "description": "", "tooltip": "" }, { "x": 19, "y": 0.38, "description": "", "tooltip": "" }, { "x": 20, "y": 0.38, "description": "", "tooltip": "" }, { "x": 21, "y": 0.38, "description": "", "tooltip": "" }, { "x": 22, "y": 0.38, "description": "", "tooltip": "" }, { "x": 23, "y": 0.38, "description": "", "tooltip": "" }, { "x": 24, "y": 0.5, "description": "", "tooltip": "" }, { "x": 25, "y": 0.63, "description": "", "tooltip": "" }, { "x": 26, "y": 0.5, "description": "", "tooltip": "" }, { "x": 27, "y": 0.5, "description": "", "tooltip": "" }, { "x": 28, "y": 0.5, "description": "", "tooltip": "" }, { "x": 29, "y": 0.5, "description": "", "tooltip": "" }, { "x": 30, "y": 0.5, "description": "", "tooltip": "" }, { "x": 31, "y": 0.63, "description": "", "tooltip": "" }, { "x": 32, "y": 0.5, "description": "", "tooltip": "" }, { "x": 33, "y": 0.63, "description": "", "tooltip": "" }, { "x": 34, "y": 0.63, "description": "", "tooltip": "" }, { "x": 35, "y": 0.5, "description": "", "tooltip": "" }, { "x": 36, "y": 0.5, "description": "", "tooltip": "" }, { "x": 37, "y": 0.5, "description": "", "tooltip": "" }, { "x": 38, "y": 0.63, "description": "", "tooltip": "" }, { "x": 39, "y": 0.5, "description": "", "tooltip": "" }, { "x": 40, "y": 0.5, "description": "", "tooltip": "" }, { "x": 41, "y": 0.5, "description": "", "tooltip": "" }, { "x": 42, "y": 0.5, "description": "", "tooltip": "" }, { "x": 43, "y": 0.5, "description": "", "tooltip": "" }, { "x": 44, "y": 0.5, "description": "", "tooltip": "" }, { "x": 45, "y": 0.25, "description": "", "tooltip": "" }, { "x": 46, "y": 0.38, "description": "", "tooltip": "" }, { "x": 47, "y": 0.38, "description": "", "tooltip": "" }, { "x": 48, "y": 0.38, "description": "", "tooltip": "" }, { "x": 49, "y": 0.25, "description": "", "tooltip": "" }, { "x": 50, "y": 0.38, "description": "", "tooltip": "" }, { "x": 51, "y": 0.13, "description": "", "tooltip": "" }, { "x": 52, "y": 0.25, "description": "", "tooltip": "" }, { "x": 53, "y": 0.5, "description": "", "tooltip": "" }, { "x": 54, "y": 0.5, "description": "", "tooltip": "" }, { "x": 55, "y": 0.5, "description": "", "tooltip": "" }, { "x": 56, "y": 0.63, "description": "", "tooltip": "" }, { "x": 57, "y": 0.63, "description": "", "tooltip": "" }, { "x": 58, "y": 0.63, "description": "", "tooltip": "" }, { "x": 59, "y": 0.63, "description": "", "tooltip": "" }, { "x": 60, "y": 0.63, "description": "", "tooltip": "" }, { "x": 61, "y": 0.63, "description": "", "tooltip": "" }, { "x": 62, "y": 0.75, "description": "", "tooltip": "" }, { "x": 63, "y": 0.75, "description": "", "tooltip": "" }, { "x": 64, "y": 0.75, "description": "", "tooltip": "" }, { "x": 65, "y": 0.75, "description": "", "tooltip": "" }, { "x": 66, "y": 0.88, "description": "", "tooltip": "" }, { "x": 67, "y": 0.88, "description": "", "tooltip": "" }, { "x": 68, "y": 0.75, "description": "", "tooltip": "" }, { "x": 69, "y": 0.63, "description": "", "tooltip": "" }, { "x": 70, "y": 0.63, "description": "", "tooltip": "" }, { "x": 71, "y": 0.63, "description": "", "tooltip": "" }, { "x": 72, "y": 0.63, "description": "", "tooltip": "" }, { "x": 73, "y": 0.63, "description": "", "tooltip": "" }, { "x": 74, "y": 0.63, "description": "", "tooltip": "" }, { "x": 75, "y": 0.63, "description": "", "tooltip": "" }, { "x": 76, "y": 0.75, "description": "", "tooltip": "" }, { "x": 77, "y": 0.75, "description": "", "tooltip": "" }, { "x": 78, "y": 0.75, "description": "", "tooltip": "" }, { "x": 79, "y": 0.75, "description": "", "tooltip": "" }, { "x": 80, "y": 0.75, "description": "", "tooltip": "" }, { "x": 81, "y": 0.75, "description": "", "tooltip": "" }, { "x": 82, "y": 0.75, "description": "", "tooltip": "" }, { "x": 83, "y": 0.75, "description": "", "tooltip": "" }, { "x": 84, "y": 0.75, "description": "", "tooltip": "" }, { "x": 85, "y": 0.75, "description": "", "tooltip": "" }, { "x": 86, "y": 0.75, "description": "", "tooltip": "" }, { "x": 87, "y": 0.75, "description": "", "tooltip": "" }, { "x": 88, "y": 0.5, "description": "", "tooltip": "" }, { "x": 89, "y": 0.5, "description": "", "tooltip": "" }, { "x": 90, "y": 0.5, "description": "", "tooltip": "" }, { "x": 91, "y": 0.38, "description": "", "tooltip": "" }, { "x": 92, "y": 0.25, "description": "", "tooltip": "" }, { "x": 93, "y": 0.38, "description": "", "tooltip": "" }, { "x": 94, "y": 0.38, "description": "", "tooltip": "" }, { "x": 95, "y": 0.38, "description": "", "tooltip": "" }, { "x": 96, "y": 0.38, "description": "", "tooltip": "" }, { "x": 97, "y": 0.38, "description": "", "tooltip": "" }, { "x": 98, "y": 0.38, "description": "", "tooltip": "" }, { "x": 99, "y": 0.38, "description": "", "tooltip": "" }, { "x": 100, "y": 0.25, "description": "", "tooltip": "" }, { "x": 101, "y": 0.38, "description": "", "tooltip": "" }, { "x": 102, "y": 0.25, "description": "", "tooltip": "" }, { "x": 103, "y": 0.5, "description": "", "tooltip": "" }, { "x": 104, "y": 0.5, "description": "", "tooltip": "" }, { "x": 105, "y": 0.5, "description": "", "tooltip": "" }, { "x": 106, "y": 0.5, "description": "", "tooltip": "" }, { "x": 107, "y": 0.63, "description": "", "tooltip": "" }, { "x": 108, "y": 0.63, "description": "", "tooltip": "" }, { "x": 109, "y": 0.5, "description": "", "tooltip": "" }, { "x": 110, "y": 0.38, "description": "", "tooltip": "" }, { "x": 111, "y": 0.38, "description": "", "tooltip": "" }, { "x": 112, "y": 0.38, "description": "", "tooltip": "" }, { "x": 113, "y": 0.38, "description": "", "tooltip": "" }, { "x": 114, "y": 0.25, "description": "", "tooltip": "" }, { "x": 115, "y": 0.13, "description": "", "tooltip": "" }, { "x": 116, "y": 0.13, "description": "", "tooltip": "" }, { "x": 117, "y": 0.13, "description": "", "tooltip": "" }, { "x": 118, "y": 0.13, "description": "", "tooltip": "" }, { "x": 119, "y": 0.13, "description": "", "tooltip": "" }, { "x": 120, "y": 0.25, "description": "", "tooltip": "" }, { "x": 121, "y": 0.13, "description": "", "tooltip": "" }, { "x": 122, "y": 0.13, "description": "", "tooltip": "" }, { "x": 123, "y": 0.25, "description": "", "tooltip": "" }, { "x": 124, "y": 0.13, "description": "", "tooltip": "" }, { "x": 125, "y": 0.13, "description": "", "tooltip": "" }, { "x": 126, "y": 0.5, "description": "", "tooltip": "" }, { "x": 127, "y": 0.75, "description": "", "tooltip": "" }, { "x": 128, "y": 0.63, "description": "", "tooltip": "" }, { "x": 129, "y": 0.63, "description": "", "tooltip": "" }, { "x": 130, "y": 0.75, "description": "", "tooltip": "" }, { "x": 131, "y": 0.75, "description": "", "tooltip": "" }, { "x": 132, "y": 0.75, "description": "", "tooltip": "" }, { "x": 133, "y": 0.75, "description": "", "tooltip": "" }, { "x": 134, "y": 0.5, "description": "", "tooltip": "" }, { "x": 135, "y": 0.5, "description": "", "tooltip": "" }, { "x": 136, "y": 0.5, "description": "", "tooltip": "" }, { "x": 137, "y": 0.5, "description": "", "tooltip": "" }, { "x": 138, "y": 0.5, "description": "", "tooltip": "" }, { "x": 139, "y": 0.38, "description": "", "tooltip": "" }, { "x": 140, "y": 0.38, "description": "", "tooltip": "" }, { "x": 141, "y": 0.38, "description": "", "tooltip": "" }, { "x": 142, "y": 0.38, "description": "", "tooltip": "" }, { "x": 143, "y": 0.38, "description": "", "tooltip": "" }, { "x": 144, "y": 0.38, "description": "", "tooltip": "" }, { "x": 145, "y": 0.25, "description": "", "tooltip": "" }, { "x": 146, "y": 0.38, "description": "", "tooltip": "" }, { "x": 147, "y": 0.38, "description": "", "tooltip": "" }, { "x": 148, "y": 0.25, "description": "", "tooltip": "" }, { "x": 149, "y": 0.5, "description": "", "tooltip": "" }, { "x": 150, "y": 0.63, "description": "", "tooltip": "" }, { "x": 151, "y": 0.88, "description": "", "tooltip": "" }, { "x": 152, "y": 0.88, "description": "", "tooltip": "" }, { "x": 153, "y": 1, "description": "", "tooltip": "" }, { "x": 154, "y": 0.88, "description": "", "tooltip": "" }, { "x": 155, "y": 0.88, "description": "", "tooltip": "" }, { "x": 156, "y": 0.88, "description": "", "tooltip": "" }, { "x": 157, "y": 1, "description": "", "tooltip": "" }, { "x": 158, "y": 0.88, "description": "", "tooltip": "" }, { "x": 159, "y": 0.88, "description": "", "tooltip": "" }, { "x": 160, "y": 0.88, "description": "", "tooltip": "" }, { "x": 161, "y": 0.88, "description": "", "tooltip": "" }], "type": "curve", "name": "MobiDB-lite", "flagColor": firstlevelcolor, "color": "#FFAE19", "tooltip": "", "height": 2, "sidebar": [{ id: "seq", type: "button", label: "<g class =\"fvlink\"><span><i class=\"icon icon-common icon-analyse-graph\" data-icon=\"4\" style=\"font-size: 15px;\"></i></span></g>" }], "label": "<span style='color: #ffffff'>Agreement</span>", "id": "predicted6" };
        // tslint:disable-next-line:max-line-length
        var mobidata13 = { "data": [{ "x": 1, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 2, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 3, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 4, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 5, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 6, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 7, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 13, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 14, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 15, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 16, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 17, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 18, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 19, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 20, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 21, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 22, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 23, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 24, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 33, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 34, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 35, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 36, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 37, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 38, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 39, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 40, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 41, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 42, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 43, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 44, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 45, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 46, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 47, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 48, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 49, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 50, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 51, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 52, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 53, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 54, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 55, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 56, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 57, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 58, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 59, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 78, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 79, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 80, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 81, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 82, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 90, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 91, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 92, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 93, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 94, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 95, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 96, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 97, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 98, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 99, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 100, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 101, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 102, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 103, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 113, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 114, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 115, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 116, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 117, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 118, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 119, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 120, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 121, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 122, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 123, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 124, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 138, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 139, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 140, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 141, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 142, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 143, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 144, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 145, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 146, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 147, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 148, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 149, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 150, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }, { "x": 151, "y": 1, "id": "1", "color": "#bef028", "description": "", "tooltip": "LIP", "annotation": "1" }], "type": "unique", "name": "LIPs (Anchor)", "flagColor": firstlevelcolor, "color": "#DCDCDC", "tooltip": "", "sidebar": [{ id: "redirect", type: "button", label: "<g class =\"fvlink\"><i class=\"icon icon-common icon-external-link-alt\" data-icon=\"4\" style=\"font-size: 15px\"></i></g>", "tooltip": "Redirect" }], "label": "<span style='color: #ffffff'>LIPs</span>", "id": "predicted2" };
        // tslint:disable-next-line:max-line-length
        var mobidata14 = { "data": [{ "x": 1, "y": 0, "description": "", "tooltip": "" }, { "x": 2, "y": 0.25, "description": "", "tooltip": "" }, { "x": 3, "y": 0.32, "description": "", "tooltip": "" }, { "x": 4, "y": 0.3, "description": "", "tooltip": "" }, { "x": 5, "y": 0.13, "description": "", "tooltip": "" }, { "x": 6, "y": 0.06, "description": "", "tooltip": "" }, { "x": 7, "y": 0.04, "description": "", "tooltip": "" }, { "x": 8, "y": 0.04, "description": "", "tooltip": "" }, { "x": 9, "y": 0.09, "description": "", "tooltip": "" }, { "x": 10, "y": 0.13, "description": "", "tooltip": "" }, { "x": 11, "y": 0.1, "description": "", "tooltip": "" }, { "x": 12, "y": 0.09, "description": "", "tooltip": "" }, { "x": 13, "y": 0.12, "description": "", "tooltip": "" }, { "x": 14, "y": 0.22, "description": "", "tooltip": "" }, { "x": 15, "y": 0.51, "description": "", "tooltip": "" }, { "x": 16, "y": 0.57, "description": "", "tooltip": "" }, { "x": 17, "y": 0.57, "description": "", "tooltip": "" }, { "x": 18, "y": 0.53, "description": "", "tooltip": "" }, { "x": 19, "y": 0.51, "description": "", "tooltip": "" }, { "x": 20, "y": 0.45, "description": "", "tooltip": "" }, { "x": 21, "y": 0.36, "description": "", "tooltip": "" }, { "x": 22, "y": 0.24, "description": "", "tooltip": "" }, { "x": 23, "y": 0.09, "description": "", "tooltip": "" }, { "x": 24, "y": 0.32, "description": "", "tooltip": "" }, { "x": 25, "y": 0.36, "description": "", "tooltip": "" }, { "x": 26, "y": 0.36, "description": "", "tooltip": "" }, { "x": 27, "y": 0.33, "description": "", "tooltip": "" }, { "x": 28, "y": 0.31, "description": "", "tooltip": "" }, { "x": 29, "y": 0.29, "description": "", "tooltip": "" }, { "x": 30, "y": 0.32, "description": "", "tooltip": "" }, { "x": 31, "y": 0.42, "description": "", "tooltip": "" }, { "x": 32, "y": 0.5, "description": "", "tooltip": "" }, { "x": 33, "y": 0.53, "description": "", "tooltip": "" }, { "x": 34, "y": 0.55, "description": "", "tooltip": "" }, { "x": 35, "y": 0.56, "description": "", "tooltip": "" }, { "x": 36, "y": 0.55, "description": "", "tooltip": "" }, { "x": 37, "y": 0.49, "description": "", "tooltip": "" }, { "x": 38, "y": 0.36, "description": "", "tooltip": "" }, { "x": 39, "y": 0.19, "description": "", "tooltip": "" }, { "x": 40, "y": 0.17, "description": "", "tooltip": "" }, { "x": 41, "y": 0.16, "description": "", "tooltip": "" }, { "x": 42, "y": 0.1, "description": "", "tooltip": "" }, { "x": 43, "y": 0.13, "description": "", "tooltip": "" }, { "x": 44, "y": 0.25, "description": "", "tooltip": "" }, { "x": 45, "y": 0.32, "description": "", "tooltip": "" }, { "x": 46, "y": 0.43, "description": "", "tooltip": "" }, { "x": 47, "y": 0.46, "description": "", "tooltip": "" }, { "x": 48, "y": 0.48, "description": "", "tooltip": "" }, { "x": 49, "y": 0.48, "description": "", "tooltip": "" }, { "x": 50, "y": 0.46, "description": "", "tooltip": "" }, { "x": 51, "y": 0.41, "description": "", "tooltip": "" }, { "x": 52, "y": 0.3, "description": "", "tooltip": "" }, { "x": 53, "y": 0.17, "description": "", "tooltip": "" }, { "x": 54, "y": 0.12, "description": "", "tooltip": "" }, { "x": 55, "y": 0.11, "description": "", "tooltip": "" }, { "x": 56, "y": 0.07, "description": "", "tooltip": "" }, { "x": 57, "y": 0.2, "description": "", "tooltip": "" }, { "x": 58, "y": 0.6, "description": "", "tooltip": "" }, { "x": 59, "y": 0.65, "description": "", "tooltip": "" }, { "x": 60, "y": 0.65, "description": "", "tooltip": "" }, { "x": 61, "y": 0.59, "description": "", "tooltip": "" }, { "x": 62, "y": 0.57, "description": "", "tooltip": "" }, { "x": 63, "y": 0.47, "description": "", "tooltip": "" }, { "x": 64, "y": 0.26, "description": "", "tooltip": "" }, { "x": 65, "y": 0.05, "description": "", "tooltip": "" }, { "x": 66, "y": 0.02, "description": "", "tooltip": "" }, { "x": 67, "y": 0.02, "description": "", "tooltip": "" }, { "x": 68, "y": 0.02, "description": "", "tooltip": "" }, { "x": 69, "y": 0.02, "description": "", "tooltip": "" }, { "x": 70, "y": 0.02, "description": "", "tooltip": "" }, { "x": 71, "y": 0.02, "description": "", "tooltip": "" }, { "x": 72, "y": 0.03, "description": "", "tooltip": "" }, { "x": 73, "y": 0.03, "description": "", "tooltip": "" }, { "x": 74, "y": 0.04, "description": "", "tooltip": "" }, { "x": 75, "y": 0.07, "description": "", "tooltip": "" }, { "x": 76, "y": 0.06, "description": "", "tooltip": "" }, { "x": 77, "y": 0.07, "description": "", "tooltip": "" }, { "x": 78, "y": 0.06, "description": "", "tooltip": "" }, { "x": 79, "y": 0.07, "description": "", "tooltip": "" }, { "x": 80, "y": 0.09, "description": "", "tooltip": "" }, { "x": 81, "y": 0.12, "description": "", "tooltip": "" }, { "x": 82, "y": 0.16, "description": "", "tooltip": "" }, { "x": 83, "y": 0.19, "description": "", "tooltip": "" }, { "x": 84, "y": 0.15, "description": "", "tooltip": "" }, { "x": 85, "y": 0.11, "description": "", "tooltip": "" }, { "x": 86, "y": 0.04, "description": "", "tooltip": "" }, { "x": 87, "y": 0.3, "description": "", "tooltip": "" }, { "x": 88, "y": 0.35, "description": "", "tooltip": "" }, { "x": 89, "y": 0.56, "description": "", "tooltip": "" }, { "x": 90, "y": 0.59, "description": "", "tooltip": "" }, { "x": 91, "y": 0.61, "description": "", "tooltip": "" }, { "x": 92, "y": 0.64, "description": "", "tooltip": "" }, { "x": 93, "y": 0.65, "description": "", "tooltip": "" }, { "x": 94, "y": 0.7, "description": "", "tooltip": "" }, { "x": 95, "y": 0.71, "description": "", "tooltip": "" }, { "x": 96, "y": 0.67, "description": "", "tooltip": "" }, { "x": 97, "y": 0.64, "description": "", "tooltip": "" }, { "x": 98, "y": 0.64, "description": "", "tooltip": "" }, { "x": 99, "y": 0.61, "description": "", "tooltip": "" }, { "x": 100, "y": 0.55, "description": "", "tooltip": "" }, { "x": 101, "y": 0.44, "description": "", "tooltip": "" }, { "x": 102, "y": 0.3, "description": "", "tooltip": "" }, { "x": 103, "y": 0.16, "description": "", "tooltip": "" }, { "x": 104, "y": 0.03, "description": "", "tooltip": "" }, { "x": 105, "y": 0.29, "description": "", "tooltip": "" }, { "x": 106, "y": 0.3, "description": "", "tooltip": "" }, { "x": 107, "y": 0.27, "description": "", "tooltip": "" }, { "x": 108, "y": 0.11, "description": "", "tooltip": "" }, { "x": 109, "y": 0.03, "description": "", "tooltip": "" }, { "x": 110, "y": 0.05, "description": "", "tooltip": "" }, { "x": 111, "y": 0.12, "description": "", "tooltip": "" }, { "x": 112, "y": 0.26, "description": "", "tooltip": "" }, { "x": 113, "y": 0.29, "description": "", "tooltip": "" }, { "x": 114, "y": 0.5, "description": "", "tooltip": "" }, { "x": 115, "y": 0.56, "description": "", "tooltip": "" }, { "x": 116, "y": 0.57, "description": "", "tooltip": "" }, { "x": 117, "y": 0.81, "description": "", "tooltip": "" }, { "x": 118, "y": 0.85, "description": "", "tooltip": "" }, { "x": 119, "y": 0.86, "description": "", "tooltip": "" }, { "x": 120, "y": 0.88, "description": "", "tooltip": "" }, { "x": 121, "y": 0.89, "description": "", "tooltip": "" }, { "x": 122, "y": 0.89, "description": "", "tooltip": "" }, { "x": 123, "y": 0.85, "description": "", "tooltip": "" }, { "x": 124, "y": 0.78, "description": "", "tooltip": "" }, { "x": 125, "y": 0.63, "description": "", "tooltip": "" }, { "x": 126, "y": 0.48, "description": "", "tooltip": "" }, { "x": 127, "y": 0.52, "description": "", "tooltip": "" }, { "x": 128, "y": 0.53, "description": "", "tooltip": "" }, { "x": 129, "y": 0.62, "description": "", "tooltip": "" }, { "x": 130, "y": 0.61, "description": "", "tooltip": "" }, { "x": 131, "y": 0.54, "description": "", "tooltip": "" }, { "x": 132, "y": 0.46, "description": "", "tooltip": "" }, { "x": 133, "y": 0.37, "description": "", "tooltip": "" }, { "x": 134, "y": 0.32, "description": "", "tooltip": "" }, { "x": 135, "y": 0.29, "description": "", "tooltip": "" }, { "x": 136, "y": 0.25, "description": "", "tooltip": "" }, { "x": 137, "y": 0.51, "description": "", "tooltip": "" }, { "x": 138, "y": 0.52, "description": "", "tooltip": "" }, { "x": 139, "y": 0.46, "description": "", "tooltip": "" }, { "x": 140, "y": 0.35, "description": "", "tooltip": "" }, { "x": 141, "y": 0.34, "description": "", "tooltip": "" }, { "x": 142, "y": 0.36, "description": "", "tooltip": "" }, { "x": 143, "y": 0.42, "description": "", "tooltip": "" }, { "x": 144, "y": 0.55, "description": "", "tooltip": "" }, { "x": 145, "y": 0.57, "description": "", "tooltip": "" }, { "x": 146, "y": 0.63, "description": "", "tooltip": "" }, { "x": 147, "y": 0.62, "description": "", "tooltip": "" }, { "x": 148, "y": 0.57, "description": "", "tooltip": "" }, { "x": 149, "y": 0.52, "description": "", "tooltip": "" }, { "x": 150, "y": 0.43, "description": "", "tooltip": "" }, { "x": 151, "y": 0.34, "description": "", "tooltip": "" }, { "x": 152, "y": 0.22, "description": "", "tooltip": "" }, { "x": 153, "y": 0.08, "description": "", "tooltip": "" }, { "x": 154, "y": 0.11, "description": "", "tooltip": "" }, { "x": 155, "y": 0.14, "description": "", "tooltip": "" }, { "x": 156, "y": 0.14, "description": "", "tooltip": "" }, { "x": 157, "y": 0.1, "description": "", "tooltip": "" }, { "x": 158, "y": 0.21, "description": "", "tooltip": "" }, { "x": 159, "y": 0.25, "description": "", "tooltip": "" }, { "x": 160, "y": 0.19, "description": "", "tooltip": "" }, { "x": 161, "y": 0, "description": "", "tooltip": "" }], "type": "curve", "name": "Helix (FeSS)", "flagColor": firstlevelcolor, "color": "#345995", "tooltip": "", "height": 2, "sidebar": [], "label": "<span style='color: #ffffff'>Secondary Structure</span>", "id": "predicted3" };
        mobidata12['subfeatures'] = [mobidata2, mobidata5];
        mobidata12['isOpen'] = true;
        var disulphide = {
            tooltip: customtooltip,
            'type': 'path',
            data: [{ 'x': 73, 'y': 82 }],
            id: 'disulph',
            label: "<span style='color: #ffffff'>Disulphide bonds</span>",
            color: '#345995',
            flagColor: firstlevelcolor,
            sidebar: [{
                    id: "sequence",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<span><i class=\"icon icon icon-fileformats icon-FASTA\" data-icon=\"4\" style=\"font-size: 15px;\"></i></span>",
                    "tooltip": "From sequence"
                },
                {
                    id: "structure",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<i class=\"icon icon-conceptual icon-structures-3d\" data-icon=\"4\" style=\"font-size: 20px;\"></i>",
                    "tooltip": "From structure"
                },
                {
                    id: "structure",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<i class=\"icon icon-conceptual icon-structures-3d\" data-icon=\"4\" style=\"font-size: 20px;\"></i>",
                    "tooltip": "From structure"
                },
                {
                    id: "structure",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<i class=\"icon icon-conceptual icon-structures-3d\" data-icon=\"4\" style=\"font-size: 20px;\"></i>",
                    "tooltip": "From structure"
                }]
        };
        var modified = {
            type: 'lollipop',
            data: [{ 'x': 157, 'y': 1,
                    'tooltip': '<b><i><span style="color: #ffc520">Phosphoserine</span></i></b> <small>at residue</small> <b>157</b>' }],
            id: 'modif',
            label: "<span style='color: #ffffff'>PTMs</span>",
            flagColor: firstlevelcolor,
            color: '#FFAE19'
        };
        var mutations = {
            type: 'circle',
            data: [{ 'x': 105, 'y': 0.3, 'tooltip': '<span><b>I am fake too but I am styled</b></span>' },
                { 'x': 20, 'y': 0.7, 'stroke': '#345995', color: 'B5DCE8', 'tooltip': 'Fake mutation' },
                { x: 61, y: 0.6, color: '#eff8fa', stroke: '#B5DCE8' },
                { x: 65, y: 0.7, color: '#FFAE19' },
                { x: 68, y: 0.2, color: '#FFAE19', stroke: '#345995' },
                { x: 72, y: 0.3, color: '#B5DCE8' }],
            flagColor: firstlevelcolor,
            color: '#345995',
            id: '1mutations',
            label: "<span style='color: #ffffff'>Mutations</span>",
            sidebar: [
                {
                    id: "sequence",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<span><i class=\"icon icon icon-fileformats icon-FASTA\" data-icon=\"4\" style=\"font-size: 15px;\"></i></span>",
                    "tooltip": "From sequence"
                },
                {
                    id: "structure",
                    type: "button",
                    // tslint:disable-next-line:max-line-length
                    label: "<span><i class=\"icon icon-conceptual icon-structures-3d\" data-icon=\"4\" style=\"font-size: 20px;\"></i></span>",
                    "tooltip": "From sequence"
                }
            ]
        };
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:max-line-length
        var mobiseq = 'MEELGIARPRVEYPAHQAMNLVGPQSIEGGAHEGLQHLGPYGNIPNIVAELTGDNIPKDFREDQGYPNPPNPCPVGKTGDGCLEDTPDTAQFSREYQLHQNLYDPEHNYPGASTWNKKLLYEKIKGASQRQKRTVNPYLQGQKLDKVVAKKSVPHFSDEEE';
        var mobifv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](mobiseq, '#mobidbDiv', {
            toolbar: true,
            toolbarPosition: 'left',
            brushActive: true,
            zoomMax: 10,
            flagColor: sequencecolor,
            backgroundcolor: 'white',
            sideBar: 200,
            flagTrack: 150,
            flagTrackMobile: 80
        });
        mobifv.addFeatures([mobidata1, mobidata12, mobidata13, mobidata14, disulphide, modified, mutations]);
    };
    DemosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demos',
            template: __webpack_require__(/*! ./demos.component.html */ "./src/app/demos/demos.component.html"),
            styles: [__webpack_require__(/*! ./demos.component.scss */ "./src/app/demos/demos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DemosComponent);
    return DemosComponent;
}());



/***/ }),

/***/ "./src/app/featureviewer/featureviewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/featureviewer/featureviewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<accordion>\n  <!-- Initialization -->\n  <div class=\"well well-large mb-5\">\n    <accordion-group [isOpen]=\"true\" heading=\"Initialization\">\n\n      <accordion-group [isOpen]=\"false\" heading=\"HTML initialization\">\n        <img style=\"max-height: 3rem\" src=\"../../assets/html-logo.png\"> <h3 style=\"display: inline\"> HTML</h3>\n        <pre class=\"prettyprint mt-2\"><code class=\"language-html\">{{this.htmlString}}</code></pre>\n      </accordion-group>\n\n      <accordion-group [isOpen]=\"false\" heading=\"Angular initialization\">\n        <img style=\"max-height: 3rem\" src=\"../../assets/angular-logo.png\"> <h3 style=\"display: inline\"> Angular</h3>\n        <p>If you are using Angular, <u>please note</u> that all stylesheets that need to be used inside the Feature\n          Viewer must be imported in the angular.json file of your project.</p>\n        <tabset>\n          <tab heading=\"feature-viewer-component.ts\">\n            <pre class=\"prettyprint\"><code class=\"language-java\">\n            {{importString}}\n            </code></pre>\n          </tab>\n          <tab heading=\"angular.json\">\n            <pre class=\"prettyprint\"><code class=\"language-json\">\n              ...\n              \"styles\": [\n                ...,\n                \"./node_modules/feature-viewer-typescript/assets/fv.scss\"\n              ]\n              ...\n            </code></pre>\n          </tab>\n        </tabset>\n      </accordion-group>\n\n      <accordion-group [isOpen]=\"false\" heading=\"React initialization\">\n        <img style=\"max-height: 3rem\" src=\"../../assets/react-logo.png\"> <h3 style=\"display: inline\"> React</h3>\n        <p>A working version of the Feature Viewer integrated in React is available at\n          <a href=\"https://gitlab.com/lispal/gitlab-pages-react-example\">\n            gitlab.com/lispal/gitlab-pages-react-example</a>.</p>\n        <tabset>\n          <tab heading=\"FeatureViewerComponent.js\">\n            <pre class=\"prettyprint\"><code class=\"language-java\">\n            {{importReactString}}\n            </code></pre>\n          </tab>\n        </tabset>\n      </accordion-group>\n\n      <br>\n      <p><b>Feature viewer rendering options</b>:</p>\n      <ul>\n        <li><strong>showAxis</strong> <em> (boolean)</em>: Display or not the axis text labels - Default: true </li>\n        <li><strong>showSequence</strong> <em> (boolean)</em>: Display or not the sequence - Default: true </li>\n        <li><strong>toolbar</strong> <em> (boolean)</em>: Add a toolbar allowing users to download SVG and show help - Default: true </li>\n        <li><strong>toolbarPosition</strong> <em> (string)</em>: Position of toolbar in justify-content property, ex. <span style=\"font-family:monospace;background-color:#eee;\">toolbarPosition: space-between</span></li>\n        <li><strong>brushActive</strong> <em> (boolean)</em>: Allows the zoom - Default: true </li>\n        <li><strong>zoomMax</strong> <em> (integer)</em>: Choose the max zoom allowed (number of residues)  - Default: 10, cannot be less than 10 </li>\n        <li><strong>showSubFeatures</strong> <em> (integer)</em>: Allows subfeatures visualization - Default: false </li>\n        <li><strong>flagColor</strong> <em> (string)</em>: Color of flags (titles on the left), hex string ex. <span style=\"font-family:monospace;background-color:#eee;\">flagColor: '#DFD5F5'</span> </li>\n        <li><strong>flagTrack</strong> <em> (integer or string)</em>: Dimensions (in px) of the left-side area (flags) </li>\n        <li><strong>flagTrackMobile</strong> <em> (integer or string)</em>: Dimensions (in px) of the left-side area (flags) when in mobile mode </li>\n        <li><strong>breakpoint</strong> <em> (integer, string or boolean)</em>: Abilitates or sets fixed threshold to trigger mobile mode </li>\n        <li><strong>sideBar</strong> <em> (integer, boolean or string)</em>: Shows or sets fixed size (in px) of sidebar (on the right) </li>\n        <li><strong>offset</strong> <em> (object)</em>: Specify an offset, zoom (offset.start should always be > 0)\n        <li><strong>backgroundcolor</strong> <em> (string)</em>: Specify background color, ex. <span style=\"font-family:monospace;background-color:#eee;\">transparent</span>\n        </li>\n      </ul>\n    </accordion-group>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div id=\"fvDivInit\"></div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div>\n          <tabset>\n            <tab heading=\"feature-viewer-component.ts\">\n            <pre class=\"prettyprint\"><code class=\"language-java\">\n  const initViewer = {{this.FVInit.toString()\n              .replace(\"feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__[\\\"FeatureViewer\\\"]\",\n                \"FeatureViewer\")}}\n  initViewer(\"fvDivInit\")\n            </code></pre>\n            </tab>\n            <tab heading=\"feature-viewer-component.html\">\n              <pre class=\"prettyprint lang-html\">\n\n  {{this.FVInitString}}\n              </pre>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"well well-large mb-5\">\n    <accordion-group [isOpen]=\"true\" heading=\"Add features\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <p>You can add features using the addFeatures function.<br>\n            Features rendering options:</p>\n          <ul>\n            <li><strong>id</strong> <em>(string)</em> A unique identifier to trace events like region clicking or the interaction with the sidebar</li>\n            <li><strong>type</strong> <em>(\"rect\"|\"path\"|\"curve\"|\"unique\"|\"circle\"|\"lollipop\"|\"arrow\")</em>: The type of feature, for a specific rendering\n            </li>\n            <li><strong>variant</strong> <em> (string)</em>: Discretionary variant to type, only available: \"overlap\" as variant of type \"rect\".\n              This option will superimpose overlapping rectangle features instead of creating multiple lines for them.\n            </li>\n            <li><strong>data</strong> <em> (array of objects)</em>: An array of objects, each containing\n              <ul>\n                <li><strong>x </strong> <em style=\"font-weight:500\">(int)</em>: first position</li>\n                <li><strong>y </strong> <em style=\"font-weight:500\">(int)</em>: last position OR value (see \"Feature types\" box)</li>\n                <li><strong>className </strong> <em style=\"font-weight:500\">(string)</em>: html class for extra styling <em style=\"font-weight:600\">(Optional)</em></li>\n                <li><strong>color </strong> <em style=\"font-weight:500\">(string)</em>: a custom color <em style=\"font-weight:600\">(Optional)</em></li>\n                <li><strong>stroke </strong> <em style=\"font-weight:500\">(string)</em>: a custom stroke color <em style=\"font-weight:600\">(Optional)</em></li>\n                <li><strong>opacity </strong> <em style=\"font-weight:500\">(string)</em>: custom opacity, 0 to 1 <em style=\"font-weight:600\">(Optional)</em></li>\n                <li><strong>tooltip </strong> <em style=\"font-weight:500\">(string)</em>: custom message for tooltip <em style=\"font-weight:600\">(Optional)</em></li>\n                <li><strong>direction </strong> <em style=\"font-weight:500\">(\"left\"|\"right\")</em>: direction of region in type 'arrow' <em style=\"font-weight:600\">(Optional)</em></li>\n              </ul>\n            </li>\n            <li><strong>sidebar</strong> <em> (array of objects)</em>: An array of objects, each containing\n              <ul>\n                <li><strong>id </strong> <em style=\"font-weight:500\">(string)</em>: The button id, used to identify click event</li>\n                <li><strong>type </strong> <em style=\"font-weight:500\">(string)</em>: The button type (\"percentage\", \"button\", \"icon\" or None), see the \"Subfeatures\" example</li>\n                <li><strong>tooltip </strong> <em style=\"font-weight:500\">(string)</em>: Message for tooltip</li>\n                <li><strong>label </strong> <em style=\"font-weight:500\">(string)</em>: Label for buttons of type \"button\", \"percentage\" or \"icon\"</li>\n                <li><strong>content </strong> <em style=\"font-weight:500\">(html string)</em>: Style your button! Accepts material icons</li>\n              </ul>\n            </li>\n            <li><strong>label</strong> <em> (string)</em>: The name of this feature, which will be display as a label on the Y-axis (flag)\n            </li>\n            <li><strong>className</strong> <em> (string)</em>: A class name, for further personal computing <em style=\"font-weight:600\">(Optional)</em>\n            </li>\n            <li><strong>height</strong> <em> (int)</em>: Height of the <em style=\"font-weight:600\">curve</em> feature (default: 3, which means three times the height of a rectangle feature) <em style=\"font-weight:600\">(Optional)</em></li>\n            <li><strong>yLim</strong> <em> (int)</em>: Max value of the <em style=\"font-weight:600\">curve</em> values <em style=\"font-weight:600\">(Optional)</em></li>\n            <li><strong>color</strong> <em> (string)</em>: The color of the features <em style=\"font-weight:600\">(Optional)</em></li>\n            <li><strong>stroke</strong> <em> (string)</em>: The stroke color of the features <em style=\"font-weight:600\">(Optional)</em></li>\n            <li><strong>opacity</strong> <em> (string)</em>: custom opacity, 0 to 1 <em style=\"font-weight:600\">(Optional)</em></li>\n            <li><strong>tooltip</strong> <em> (string)</em>: Message for flag tooltip <em style=\"font-weight:600\">(Optional)</em></li>\n          </ul>\n        </div>\n        <div class=\"col-4\">\n          <div class=\"card\">\n            <div class=\"card-header\"> <b>Feature types</b> </div>\n            <div class=\"card-body\">\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/rect.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Rectangles, <i>\"rect\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the start position, <b>y</b> is the end position. Rectangles can be overlapped, in this case a new rectangles line is created.</small>\n                </div>\n              </div>\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/path.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Paths, <i>\"path\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the start position, <b>y</b> is the end position. Paths can be overlapped, in this case the second to be defined is placed over the first.</small>\n                </div>\n              </div>\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/curve.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Curves, <i>\"curve\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the position, <b>y</b> is the value. Maximum value for the feature can be defined through the <b>yLim</b> option.</small>\n                </div>\n              </div>\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/unique.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Single position rectangles, <i>\"unique\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the position, <b>y</b> is useless for graphical purposes but the value is shown in the default tooltip.</small>\n                </div>\n              </div>\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/circle.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Circles, <i>\"circle\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the position, <b>y</b> is the circle width, in the range from 0 to 1.</small>\n                </div>\n              </div>\n              <div class=\"media mb-1\">\n                <img class=\"mr-2\" src=\"assets/feature_types/lollipop.png\" style=\"width: 15%\">\n                <div class=\"media-body\">\n                  <h6 class=\"mt-1\">Lollipops, <i>\"lollipop\"</i></h6>\n                  <small class=\"text-muted\"><b>x</b> is the position, <b>y</b> is the lollipop width, in the range from 0 to 1.</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </accordion-group>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div id=\"fvDvAddfeatures\"></div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <tabset>\n          <tab heading=\"feature-viewer-component.ts\">\n          <pre class=\"prettyprint codeBox\"><code class=\"language-java\">\n  const addFeatures = {{this.FVaddFeatures.toString()}}\n  addFeatures(\"fvDivInit\")\n          </code></pre>\n          </tab>\n          <tab heading=\"feature-viewer-component.html\">\n            <pre class=\"prettyprint lang-html\">\n\n  {{this.FVInitString}}\n            </pre>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"well well-large mb-5\">\n    <accordion-group [isOpen]=\"true\" heading=\"Subfeatures\">\n      <p>Add subfeatures through the <strong>subfeatures</strong> property. Subfeature objects have the same structure of feature objects.</p>\n      <p>Add buttons and other elements in the sidebar through the <strong>links</strong> property. </p>\n    </accordion-group>\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <!-- Additional card to contain FV custom helper-->\n          <div class=\"card text-center\">\n            <div class=\"card-header\">\n              Alternative custom helper:\n              <div class=\"btn btn-primary mr-2\" (click)=\"this.lastFV.showHelp()\">Show help</div>\n              <div class=\"btn btn-primary mr-2\" (click)=\"this.lastFV.downloadPNG()\">Download PNG</div>\n              <div class=\"btn btn-primary mr-2\" (click)=\"this.getPosition()\">Get current position</div> <small class=\"mr-2\">{{currentposition}}</small>\n              <div class=\"btn btn-primary mr-2\" (click)=\"this.getZoom()\">Get current zoom</div> <small>{{currentzoom}}</small>\n            </div>\n          </div>\n        <div id=\"fvDvAddSubfeatures\"></div>\n      </div>\n      <div class=\"btn-group\">\n        <button class=\"btn btn-primary\" [disabled]=\"isEmpty\" (click)=\"emptyme()\">Empty</button>\n        <button class=\"btn btn-primary\" [disabled]=\"!isEmpty\" (click)=\"addme()\">Add</button>\n        <button class=\"btn btn-primary\" (click)=\"this.lastFV.downloadJpeg()\">Download Img</button>\n        <button class=\"btn btn-primary\" (click)=\"this.lastFV.resetAll()\">Reset effects</button>\n        <button class=\"btn btn-primary\" (click)=\"this.lastFV.resetZoom()\">Reset zoom</button>\n        <button class=\"btn btn-primary\" (click)=\"this.lastFV.resetHighlight()\">Reset highlight</button>\n        <button class=\"btn btn-primary\" (click)=\"highlightOne()\">Highlight feature</button>\n        <button class=\"btn btn-primary\" (click)=\"highlightPos()\">Highlight region</button>\n        <button class=\"btn btn-primary\" (click)=\"collapseExpand()\">Collapse / Expand</button>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <tabset>\n          <tab heading=\"feature-viewer-component.ts\">\n          <pre class=\"prettyprint codeBox\"><code class=\"language-java\">\n  const addFeaturesSubfeatures = {{this.FVaddSubfeatures.toString()\n            .replace(\"feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__[\\\"FeatureViewer\\\"]\",\n            \"FeatureViewer\")}}\n  myFeatureViewer = addFeaturesSubfeatures(\"fvDivInit\")\n          </code></pre>\n          </tab>\n          <tab heading=\"feature-viewer-component.html\">\n            <pre class=\"prettyprint lang-html\">\n\n  {{this.FVInitString}}\n            </pre>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n    <accordion-group [isOpen]=\"true\" heading=\"Listeners\">\n      <p>Feature viewer listeners can have several usages and are listed below</p>\n      <ul>\n        <li><strong>onButtonSelected</strong>: A function that is triggered when a button is selected.</li>\n        <li><strong>onClearSelection</strong>: Triggered when the viewer is zoomed out.</li>\n        <li><strong>onRegionSelected</strong>: Triggered when a feature (ex. rectangle) is selected.</li>\n        <li><strong>onFeatureSelected</strong>: Triggered to open subfeature details.</li>\n        <li><strong>onZoom</strong>: Triggered when viewer is zoomed.</li>\n      </ul>\n      <p>In addition, some FV functions are public in order to interact with buttons and functionalities of the web page</p>\n      <ul>\n        <li><strong>resetHighlight</strong>: Resets feature highlighting</li>\n        <li><strong>resetZoom</strong>: Resets zoom</li>\n        <li><strong>resetAll</strong>: Resets graphical elements such as feature highlighting, custom tooltips and zoom, plus subfeatures opening</li>\n        <li><strong>downloadJpeg</strong>: downloads Jpeg image of the viewer</li>\n        <li><strong>downloadPNG</strong>: downloads PNG image of the viewer</li>\n        <li><strong>clickFlag</strong>: simulates flag click, opening or closing the relative subfeatures; input is an object with flag x, y, id, label, flagLevel</li>\n        <li><strong>emptyFeatures</strong>: removes all features from the viewer</li>\n        <li><strong>highlightRegion</strong>: highlights a specific region of a feature, input is an object with region x and y and the feature id</li>\n        <li><strong>highlightPosition</strong>: highlights an area defined by the input object start and end</li>\n      </ul>\n      <p>You can replicate all the functionalities of the helper menu through the following functions</p>\n      <ul>\n        <li><strong>downloadJpeg</strong>: downloads Jpeg image of the viewer</li>\n        <li><strong>downloadPNG</strong>: downloads PNG image of the viewer</li>\n        <li><strong>getCurrentPosition</strong>: gets the current mouse position along the sequence, trigger at mouse move</li>\n        <li><strong>getCurrentZoom</strong>: gets the current zoom, trigger through the onZoom listener</li>\n        <li><strong>showHelp</strong>: shows the helper modal</li>\n      </ul>\n    </accordion-group>\n  </div>\n</accordion>\n\n"

/***/ }),

/***/ "./src/app/featureviewer/featureviewer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/featureviewer/featureviewer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table styles */\n/* Scrollbar styles */\n::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n}\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 10px darkgrey;\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: darkgrey;\n  box-shadow: inset 0 0 6px darkgrey;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #7bac10;\n}\nb {\n  color: #33c7ca;\n}\nstrong {\n  color: #84716a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmEvV2Vic3Rvcm1Qcm9qZWN0cy9GZWF0dXJlVmlld2VyVHlwZVNjcmlwdC1kb2N1bWVudGF0aW9uIC9zcmMvYXBwL2ZlYXR1cmV2aWV3ZXIvZmVhdHVyZXZpZXdlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXZpZXdlci9mZWF0dXJldmlld2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBSUEscUJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRkY7QURLQTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FDRkY7QURLQTtFQUNFLG1CQUFBO0FDRkY7QURLQTtFQUNFLGNBQUE7QUNGRjtBREtBO0VBQ0UsY0FBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXZpZXdlci9mZWF0dXJldmlld2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgc3R5bGVzICovXG4uY29kZVRhYmxlIHtcbn1cblxuLyogU2Nyb2xsYmFyIHN0eWxlcyAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCBkYXJrZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGRhcmtncmV5O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IGRhcmtncmV5O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzdiYWMxMDtcbn1cblxuYiB7XG4gIGNvbG9yOiAjMzNjN2NhO1xufVxuXG5zdHJvbmcge1xuICBjb2xvcjogIzg0NzE2YTtcbn1cblxuIiwiLyogdGFibGUgc3R5bGVzICovXG4vKiBTY3JvbGxiYXIgc3R5bGVzICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxMHB4IGRhcmtncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogZGFya2dyZXk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggZGFya2dyZXk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2JhYzEwO1xufVxuXG5iIHtcbiAgY29sb3I6ICMzM2M3Y2E7XG59XG5cbnN0cm9uZyB7XG4gIGNvbG9yOiAjODQ3MTZhO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/featureviewer/featureviewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/featureviewer/featureviewer.component.ts ***!
  \**********************************************************/
/*! exports provided: FeatureviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureviewerComponent", function() { return FeatureviewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! feature-viewer-typescript/lib */ "./node_modules/feature-viewer-typescript/lib/index.js");
/* harmony import */ var feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");



// import {FeatureViewer} from 'featureviewer/lib';

// @ts-ignore
var FeatureviewerComponent = /** @class */ (function () {
    function FeatureviewerComponent(modalService) {
        this.modalService = modalService;
        this.isEmpty = false;
        this.currentposition = 'Current position';
        this.currentzoom = 'Current zoom';
        this.importString = '\n\timport {FeatureViewer} from \'feature-viewer-typescript/lib\';';
        this.importReactString = "\n\timport {FeatureViewer} from \"feature-viewer-typescript/lib\";\n" +
            "\timport 'feature-viewer-typescript/assets/fv.scss'\n";
        this.emptyme = function () {
            console.log('Empty!');
            this.isEmpty = true;
            this.lastFV.emptyFeatures();
        };
        this.addme = function () {
            this.isEmpty = false;
            var featurelist = [
                {
                    type: 'rect',
                    id: 'mysimplefeature',
                    data: [{ x: 50, y: 100 }],
                    sidebar: [
                        {
                            id: 'MyPercentage',
                            type: 'percentage',
                            label: 50
                        },
                        {
                            id: 'MyHtml',
                            content: '<button class="btn btn-primary">Button</button>',
                            tooltip: 'Something in tooltip'
                        },
                        {
                            id: 'UniProt',
                            type: 'button',
                            label: 'UniProt',
                            tooltip: '<b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>\n' +
                                '<b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>'
                        },
                        {
                            id: 'Link',
                            type: 'icon',
                            label: 'M8 1.88v-1.88h2v16h10l-4 4h-14l-2-4h8v-2h-8v-0.26c3.736-3.009 6.529-7.050 ' +
                                '7.955-11.69l0.045-0.17zM19.97 14h-9.97v-0.36c1.263-1.865 2.017-4.164 2.017-6.64s-' +
                                '0.753-4.775-2.043-6.682l0.027 0.042v-0.2c5.609 2.315 9.566 7.57 9.968 13.793l0.002 0.047z'
                        }
                    ],
                    isOpen: true,
                    subfeatures: [
                        {
                            type: 'rect',
                            data: [
                                { x: 20, y: 30 },
                                { x: 15, y: 45 },
                                { x: 70, y: 100, label: 'myRect', tooltip: 'myTooltip' }
                            ],
                            id: 'aDifferentId',
                            label: 'subfeature',
                            subfeatures: [
                                {
                                    type: 'lollipop',
                                    data: [
                                        { x: 20, y: 1 },
                                        { x: 70, y: 0.15, label: 'myLollipop', tooltip: 'myTooltip' }
                                    ],
                                    id: 'subfeatureOfsubfeature',
                                    // tslint:disable-next-line:max-line-length
                                    label: '<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">My very long label should have ellipses</div>'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'circle',
                    id: 'mysimplecircle',
                    label: 'Circles',
                    color: '#aae2b2',
                    data: [
                        { x: 10, y: 0.5 },
                        { x: 20, y: 0.8, color: '#00ac8f', opacity: 0.5 },
                        { x: 30, y: 1, color: '#c0efd5' },
                        { x: 40, y: 1, stroke: '#675b5b' }
                    ]
                },
            ];
            this.lastFV.addFeatures(featurelist);
        };
        this.highlightOne = function () {
            this.lastFV.highlightRegion({ x: 20, y: 30 }, 'aDifferentId');
        };
        this.highlightPos = function () {
            this.lastFV.highlightPosition({ start: 30, end: 50 });
        };
        this.collapseExpand = function () {
            if (this.collapsed === true) {
                this.lastFV.expandAll();
                this.collapsed = false;
            }
            else {
                this.lastFV.collapseAll();
                this.collapsed = true;
            }
        };
    }
    FeatureviewerComponent.prototype.getPosition = function () {
        this.currentposition = this.lastFV.getCurrentPosition();
    };
    FeatureviewerComponent.prototype.getZoom = function () {
        this.currentzoom = this.lastFV.getCurrentZoom();
    };
    FeatureviewerComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    FeatureviewerComponent.prototype.ngOnInit = function () {
        this.FVInit('fvDivInit');
        this.FVInitString = '<div id="fvDivInit"></div>';
        this.FVaddFeatures('fvDvAddfeatures');
        this.lastFV = this.FVaddSubfeatures('fvDvAddSubfeatures');
        this.FVaddSequence('fvDvAddSequence');
        this.triggeredListener = 'No listener has ben triggered yet';
        this.triggerlisteners(this.lastFV);
        this.htmlString = '<head>\n' +
            '<link rel="stylesheet" type="text/css" href="./dist/fv.css"></div>\n' +
            '</head>\n' +
            '<div id="fvDivInit"></div>\n' +
            '\n' +
            '<script src="./dist/feature-viewer-webpack.bundle.js"></script>\n' +
            '<script>\n' +
            '    const initViewer = function (divId) {\n' +
            '        var P04050 = \'MTKFYIRRNEGKNYIRRNEGKDEDRKQLQKCCTEMSELRSPL\';\n' +
            '        var fv = new FeatureViewer(P04050, \'#\' + divId, {\n' +
            '            toolbar: true,\n' +
            '            toolbarPosition: \'left\',\n' +
            '            brushActive: true,\n' +
            '            zoomMax: 5,\n' +
            '            flagColor: \'#DFD5F5\'\n' +
            '        });\n' +
            '        return fv;\n' +
            '    }\n' +
            '    initViewer("fvDivInit")\n' +
            '</script>';
    };
    FeatureviewerComponent.prototype.FVInit = function (divId) {
        // tslint:disable-next-line:max-line-length
        var P04050 = 'MTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPLMTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPLMTKFTILLISLLFCIAHTCSASKWQHQQDSCRKQLQGVNLTPCEKHIMEKIQGRGDDDDDDDDDNHILRTMRGRINYIRRNEGKDEDEEEEGHMQKCCTEMSELRSPL';
        var fv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](P04050, '#' + divId, {
            toolbar: true,
            toolbarPosition: 'left',
            brushActive: true,
            zoomMax: 10,
            flagColor: '#DFD5F5'
        });
        return fv;
    };
    FeatureviewerComponent.prototype.FVaddFeatures = function (divId) {
        var modaltemplate = '<div class="modal-header"> <h4 class="modal-title pull-left">Modal</h4>' +
            '</button> </div> <div class="modal-body"> This is a modal. </div>';
        var fv = this.FVInit(divId);
        var featurelist = [
            {
                type: 'rect',
                id: 'useUniqueIds',
                data: [{
                        x: 50, y: 108,
                        tooltip: '<p style="display: inline-block;"> Tooltip with icon </p> <svg style="width: 20px"><path d="M13 8v-6h-6v6h-5l8 8 8-8h-5zM0 18h20v2h-20v-2z"></path></svg>'
                    }],
            },
            {
                type: 'rect',
                id: 'useUniqueId2',
                label: 'My Label',
                data: [{
                        x: 10, y: 20,
                        tooltip: '<button class="btn btn-primary">Button</button>'
                    }],
            },
            {
                type: 'curve',
                id: 'mycurve',
                label: 'The curve',
                data: [{ x: 1, y: 0 }, { x: 40, y: 102 }, { x: 80, y: 5 }, { x: 50, y: 184 }, { x: 110, y: 4 }],
                height: 1,
                yLim: 200,
                color: '#00babd'
            },
            {
                type: 'unique',
                id: 'uniquefeature',
                label: '<span style="color: #00ac8f; font-family: Sawasdee">Styled label for unique</span>',
                color: '#84716a',
                data: [{ x: 5, tooltip: modaltemplate }, { x: 92, y: 1 }]
            },
            {
                type: 'path',
                id: 'mypath',
                label: 'The paths',
                data: [{ x: 10, y: 15 }, { x: 50, y: 70 }, { x: 40, y: 60, color: '#00ac8f', tooltip: 'I have different color' }],
                color: '#61795e',
                height: 10,
                tooltip: '<b>Very</b> <span style="color: #C21F39">Stylable</span> <b><i><span style="color: #ffc520">Tooltip </span></i></b>'
            }
        ];
        fv.addFeatures(featurelist);
        return fv;
    };
    FeatureviewerComponent.prototype.FVaddSubfeatures = function (divId) {
        var P04050 = 'A'.repeat(393);
        var fv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](P04050, '#' + divId, {
            toolbar: false,
            showAxis: true,
            showSequence: true,
            zoomMax: 10,
            sideBar: 240,
            flagTrack: 200,
            flagTrackMobile: 100
        });
        var featurelist = [
            {
                type: 'rect',
                id: 'mysimplefeature',
                data: [{ x: 50, y: 100 }],
                sidebar: [
                    {
                        id: 'MyPercentage',
                        type: 'percentage',
                        label: 50
                    },
                    {
                        id: 'MyHtml',
                        content: '<button class="btn btn-primary">Button</button>',
                        tooltip: 'Something in tooltip'
                    },
                    {
                        id: 'UniProt',
                        type: 'button',
                        label: 'UniProt',
                        tooltip: '<b>Very</b> <span style="color: #C21F39">Dynamic</span> <span style="color: #00b3ee">Reusable</span>\n' +
                            '<b><i><span style="color: #ffc520">Tooltip With</span></i></b> <small>Html support</small>'
                    },
                    {
                        id: 'Link',
                        type: 'icon',
                        label: 'M8 1.88v-1.88h2v16h10l-4 4h-14l-2-4h8v-2h-8v-0.26c3.736-3.009 6.529-7.050 ' +
                            '7.955-11.69l0.045-0.17zM19.97 14h-9.97v-0.36c1.263-1.865 2.017-4.164 2.017-6.64s-' +
                            '0.753-4.775-2.043-6.682l0.027 0.042v-0.2c5.609 2.315 9.566 7.57 9.968 13.793l0.002 0.047z'
                    }
                ],
                isOpen: true,
                subfeatures: [
                    {
                        type: 'rect',
                        data: [
                            { x: 20, y: 30 },
                            { x: 15, y: 45 },
                            { x: 70, y: 100, label: 'myRect', tooltip: 'myTooltip' }
                        ],
                        id: 'aDifferentId',
                        label: 'subfeature',
                        subfeatures: [
                            {
                                type: 'lollipop',
                                data: [
                                    { x: 20, y: 1 },
                                    { x: 70, y: 0.15, label: 'myLollipop', tooltip: 'myTooltip' }
                                ],
                                id: 'subfeatureOfsubfeature',
                                label: '<div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">My very long label should have ellipses</div>>'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'circle',
                id: 'mysimplecircle',
                label: 'Circles',
                color: '#aae2b2',
                data: [
                    { x: 10, y: 0.5 },
                    { x: 20, y: 0.8, color: '#00ac8f', opacity: 0.5 },
                    { x: 30, y: 1, color: '#c0efd5' },
                    { x: 40, y: 1, stroke: '#675b5b' }
                ]
            },
        ];
        fv.addFeatures(featurelist);
        return fv;
    };
    FeatureviewerComponent.prototype.FVaddSequence = function (divId) {
        var P04050 = 'A'.repeat(1007);
        var fv = new feature_viewer_typescript_lib__WEBPACK_IMPORTED_MODULE_2__["FeatureViewer"](P04050, '#' + divId, {
            showAxis: true,
            showSequence: true,
            toolbar: false,
            toolbarPosition: 'right',
            zoomMax: 10,
            sideBar: 220
        });
        var data = [];
        for (var i = 0; i < P04050.length; i++) {
            data.push({
                x: i,
                y: i + 1,
                tooltip: P04050[i]
            });
        }
        var featurelist = [
            {
                type: 'unique',
                id: 'myseqfeature',
                data: data
            }
        ];
        fv.addFeatures(featurelist);
        return fv;
    };
    FeatureviewerComponent.prototype.triggerlisteners = function (featureviewer) {
        var _this = this;
        featureviewer.onButtonSelected(function (res) {
            _this.triggeredListener = 'Button was clicked, the listener returns an object referring to button id: ' + res.detail.id;
        });
        featureviewer.onFeatureSelected(function (res) {
            _this.triggeredListener = 'A feature was clicked, the listener returns an object referring to feature id: ' + res.detail.id;
        });
        featureviewer.onRegionSelected(function (res) {
            _this.triggeredListener = 'Region was clicked, the listener returns an object referring to feature id: ' +
                res.detail.id + ', region start: ' + res.detail.selectedRegion.x + ' and end: ' + res.detail.selectedRegion.y;
        });
        featureviewer.onZoom(function (res) {
            _this.triggeredListener = 'Zoomx' + res.detail.zoom + ' was triggered, from ' + res.detail.start + ' to ' + res.detail.end;
        });
        featureviewer.onClearSelection(function (res) {
            _this.triggeredListener = 'Zoom was cleared';
        });
    };
    FeatureviewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featureviewer',
            template: __webpack_require__(/*! ./featureviewer.component.html */ "./src/app/featureviewer/featureviewer.component.html"),
            styles: [__webpack_require__(/*! ./featureviewer.component.scss */ "./src/app/featureviewer/featureviewer.component.scss"), __webpack_require__(/*! ../../../node_modules/codemirror/lib/codemirror.css */ "./node_modules/codemirror/lib/codemirror.css"), __webpack_require__(/*! ../../../node_modules/codemirror/theme/material.css */ "./node_modules/codemirror/theme/material.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], FeatureviewerComponent);
    return FeatureviewerComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n  <div class=\"col\">\n    <div class=\"alert alert-dark\" role=\"alert\">\n      <h4><a href=\"https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btaa055/5716324\">The Feature-Viewer: a visualization tool for positional annotations on a sequence</a></h4>\n      <h6 class=\"text-secondary\">\n        Lisanna Paladin, Mathieu Schaeffer, Pascale Gaudet, Monique Zahn-Zabal, Pierre-André Michel, Damiano Piovesan,\n        Silvio C E Tosatto, Amos Bairoch\n      </h6>\n      <p class=\"text-secondary\"><i>Bioinformatics</i>, Volume 36, Issue 10, 15 May 2020, Pages 3244–3245\n        <a href=\"https://doi.org/10.1093/bioinformatics/btaa055\">doi: 10.1093/bioinformatics/btaa055</a>\n      </p>\n    </div>\n  </div>\n</div>\n<div class=\"row mb-3\">\n  <div class=\"col-8\">\n    <span>\n      Self-contained and mobile-friendly Typescript library for the visualization of (not only) biological sequence features. <br>\n    <strong>GitHub</strong>: <a href=\"https://github.com/BioComputingUP/feature-viewer-typescript\">github.com/Lisanna/feature-viewer-typescript</a> <br>\n    <strong>NPM</strong>: <a href=\"https://www.npmjs.com/package/feature-viewer-typescript\">www.npmjs.com/package/feature-viewer-typescript</a>\n    </span>\n  </div>\n<!--  <div class=\"col-4\">-->\n<!--    <a href=\"https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btaa055/5716324\" class=\"pub-button\">Citing the Feature-Viewer</a>-->\n<!--  </div>-->\n</div>\n\n<div>\n  <tabset class=\"mt-2\">\n    <tab heading=\"Demos\">\n      <app-demos></app-demos>\n    </tab>\n    <tab heading=\"Reference API\">\n      <app-featureviewer></app-featureviewer>\n    </tab>\n  </tabset>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pub-button {\n  background-color: #1c87c9;\n  border: none;\n  color: white;\n  padding: 20px 34px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  margin: 4px 2px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcnRpbmEvV2Vic3Rvcm1Qcm9qZWN0cy9GZWF0dXJlVmlld2VyVHlwZVNjcmlwdC1kb2N1bWVudGF0aW9uIC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHViLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzg3Yzk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIucHViLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzg3Yzk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAyMHB4IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luOiA0cHggMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = __webpack_require__(/*! /home/martina/WebstormProjects/FeatureViewerTypeScript-documentation /src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map