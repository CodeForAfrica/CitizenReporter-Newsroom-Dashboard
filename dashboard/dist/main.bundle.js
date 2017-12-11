webpackJsonp(["main"],{

/***/ "../../../../../dashboard/src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../dashboard/src lazy recursive";

/***/ }),

/***/ "../../../../../dashboard/src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_analytics_analytics_component__ = __webpack_require__("../../../../../dashboard/src/app/components/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_events_analytics_events_analytics_component__ = __webpack_require__("../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_page_content_page_content_component__ = __webpack_require__("../../../../../dashboard/src/app/components/page-content/page-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_stories_stories_component__ = __webpack_require__("../../../../../dashboard/src/app/components/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_push_notifications_push_notifications_component__ = __webpack_require__("../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_assignments_assignments_component__ = __webpack_require__("../../../../../dashboard/src/app/components/assignments/assignments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../dashboard/src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__ = __webpack_require__("../../../../../dashboard/src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__ = __webpack_require__("../../../../../dashboard/src/app/guards/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_account_user_account_component__ = __webpack_require__("../../../../../dashboard/src/app/components/user-account/user-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_users_users_component__ = __webpack_require__("../../../../../dashboard/src/app/components/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: '/analytics', pathMatch: 'full' },
    { path: 'analytics', component: __WEBPACK_IMPORTED_MODULE_3__components_analytics_analytics_component__["a" /* AnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_10__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__components_page_content_page_content_component__["a" /* PageContentComponent */], data: {
            title: 'Overview'
        }, canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]]
    },
    { path: 'stories', component: __WEBPACK_IMPORTED_MODULE_6__components_stories_stories_component__["a" /* StoriesComponent */], data: {
            title: 'Stories'
        }, canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'push-notifications', component: __WEBPACK_IMPORTED_MODULE_7__components_push_notifications_push_notifications_component__["a" /* PushNotificationsComponent */], data: {
            title: 'Notifications'
        }, canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'assignments', component: __WEBPACK_IMPORTED_MODULE_8__components_assignments_assignments_component__["a" /* AssignmentsComponent */], data: {
            title: 'Assignments'
        }, canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'events-summary', component: __WEBPACK_IMPORTED_MODULE_4__components_events_analytics_events_analytics_component__["a" /* EventsAnalyticsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'create-account', component: __WEBPACK_IMPORTED_MODULE_12__components_user_account_user_account_component__["a" /* UserAccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_13__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_authentication_authentication_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */], data: {
            title: 'Login'
        } }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__ = __webpack_require__("../../../../../dashboard/src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_app_component__ = __webpack_require__("../../../../../dashboard/src/app/components/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_menu_menu_component__ = __webpack_require__("../../../../../dashboard/src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_content_page_content_component__ = __webpack_require__("../../../../../dashboard/src/app/components/page-content/page-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_header_page_header_component__ = __webpack_require__("../../../../../dashboard/src/app/components/page-header/page-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_stories_stories_component__ = __webpack_require__("../../../../../dashboard/src/app/components/stories/stories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_story_media_story_media_component__ = __webpack_require__("../../../../../dashboard/src/app/components/story-media/story-media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_push_notifications_push_notifications_component__ = __webpack_require__("../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_assignments_assignments_component__ = __webpack_require__("../../../../../dashboard/src/app/components/assignments/assignments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_create_assignment_create_assignment_component__ = __webpack_require__("../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_parse_config__ = __webpack_require__("../../../../../dashboard/src/app/services/parse-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__ = __webpack_require__("../../../../../dashboard/src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_analytics_analytics_component__ = __webpack_require__("../../../../../dashboard/src/app/components/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_vertical_bar_chart_vertical_bar_chart_component__ = __webpack_require__("../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_pie_chart_pie_chart_component__ = __webpack_require__("../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_line_chart_line_chart_component__ = __webpack_require__("../../../../../dashboard/src/app/components/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_events_analytics_events_analytics_component__ = __webpack_require__("../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_circular_spinner_circular_spinner_component__ = __webpack_require__("../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__ = __webpack_require__("../../../../../dashboard/src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_authentication_authentication_guard__ = __webpack_require__("../../../../../dashboard/src/app/guards/authentication/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_authentication_authentication_service__ = __webpack_require__("../../../../../dashboard/src/app/services/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_profile_profile_component__ = __webpack_require__("../../../../../dashboard/src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_user_account_user_account_component__ = __webpack_require__("../../../../../dashboard/src/app/components/user-account/user-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_users_users_component__ = __webpack_require__("../../../../../dashboard/src/app/components/users/users.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_page_content_page_content_component__["a" /* PageContentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_page_header_page_header_component__["a" /* PageHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_stories_stories_component__["a" /* StoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_story_media_story_media_component__["a" /* StoryMediaComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_push_notifications_push_notifications_component__["a" /* PushNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_15__components_assignments_assignments_component__["a" /* AssignmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_create_assignment_create_assignment_component__["a" /* CreateAssignmentComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_analytics_analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_vertical_bar_chart_vertical_bar_chart_component__["a" /* VerticalBarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_line_chart_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_events_analytics_events_analytics_component__["a" /* EventsAnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_circular_spinner_circular_spinner_component__["a" /* CircularSpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_user_account_user_account_component__["a" /* UserAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_users_users_component__["a" /* UsersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__app_routing_app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_parse_config__["a" /* ParseConfig */], __WEBPACK_IMPORTED_MODULE_26__guards_authentication_authentication_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_27__services_authentication_authentication_service__["a" /* AuthenticationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/analytics/analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-header {\n  background-color: #36A495;\n  height: 50px;\n}\n.content-body {\n  background-color: white;\n}\n.title {\n  color: white;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border: 2px;\n  float: right;\n}\n.grid {\n  margin-top: 15px;\n  margin-left: 30px;\n  width: 20px;\n  height: 20px;\n  line-height: 50px;\n  text-align: center;\n  border: 2px;\n  float: left;\n}\n.header-container {\n  width:50%;\n}\n#fill-height {\n  height: 100%;\n  min-width: 550px;\n}\n#user-and-downloads {\n  height: 50%;\n  margin-bottom: 10px;\n}\n#statistics {\n  height: 50%;\n}\n.general-statistics {\n  background-color: #ffffff;\n}\n.white-text {\n  color: #ffffff;\n}\n.blue-text {\n  color: #97BBD3;\n}\n.orange-text {\n  color: #CF917A;\n}\n#general-statistics-highlights {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n#daily-overview {\n  margin-left: 40px;\n  color: #ffffff;\n}\n.statistics-heading {\n  padding-top: 30px;\n  margin-left: 40px;\n}\n.green-text {\n  color: #3EC556;\n  font-size: 34px;\n}\n.gray-text {\n  color: #3B4255;\n  font-size: 12px;\n}\n.users-orange-text {\n  color: #ED684A;\n  font-size: 34px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"fill-height\">\n\n  <!-- Users and Downloads -->\n  <div class=\"row\" id=\"user-and-downloads\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-block content-header\">\n          <div class=\"row\">\n            <div class=\"header-container\">\n              <img src=\"../../../assets/images/icons/grid_icon.png\" class=\"grid\">\n              <span class=\"title\">Users and Downloads</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <!-- Downloads -->\n            <div class=\"col-md-3\">\n              <div class=\"row statistics-heading\">\n                <h3 class=\"green-text\">{{totalDownloads}} </h3>\n                <h3 class=\"gray-text\">Total <br>Downloads</h3>\n              </div>\n              <app-vertical-bar-chart [width]=\"width\" [height]=\"height\" [data]=\"weeklyAnalytics\" [chart]=\"weeklyDownloadsChart\" [loaded]=\"weeklyStatisticsLoaded\"></app-vertical-bar-chart>\n            </div>\n\n            <!-- Downloads today -->\n            <div class=\"col-md-3\">\n              <div class=\"row statistics-heading\">\n                <h3 class=\"green-text\">{{downloadsToday}} </h3>\n                <h3 class=\"gray-text\">Today </h3>\n              </div>\n              <app-pie-chart [firstColor]=\"green\" [secondColor]=\"darkColor\" [totalUsers]=\"totalUsers\" [usersToday]=\"usersToday\"></app-pie-chart>\n            </div>\n\n            <!-- Users -->\n            <div class=\"col-md-3\">\n              <div class=\"row statistics-heading\">\n                <h3 class=\"users-orange-text\">{{totalUsers}} </h3>\n                <h3 class=\"gray-text\">Total <br>Users</h3>\n              </div>\n              <app-vertical-bar-chart [width]=\"width\" [height]=\"height\" [data]=\"weeklyAnalytics\" [chart]=\"weeklyUsersChart\" [loaded]=\"weeklyStatisticsLoaded\"></app-vertical-bar-chart>\n            </div>\n\n            <!-- Users today -->\n            <div class=\"col-md-3\">\n              <div class=\"row statistics-heading\">\n                <h3 class=\"users-orange-text\">{{usersToday}} </h3>\n                <h3 class=\"gray-text\">Today </h3>\n              </div>\n              <app-pie-chart [firstColor]=\"orange\" [secondColor]=\"darkColor\" [totalUsers]=\"totalUsers\" [usersToday]=\"usersToday\"></app-pie-chart>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- Statistics -->\n  <div class=\"row\" id=\"statistics\">\n    <div class=\"col-md-6\">\n      <!-- Country statistics -->\n      <div class=\"card\">\n        <div class=\"card-block content-header\">\n          <div class=\"row\">\n            <div class=\"header-container\">\n              <img src=\"../../../assets/images/icons/grid_icon.png\" class=\"grid\">\n              <span class=\"title\">Users by country</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"general-statistics\">\n          <app-vertical-bar-chart [width]=\"500\" [height]=\"300\" [data]=\"countryAnalytics\" [chart]=\"countryChart\" [osOrCountryChart]=\"countryChart\" [loaded]=\"countryStatisticsLoaded\"></app-vertical-bar-chart>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <!-- Os version statistics -->\n      <div class=\"card\">\n        <div class=\"card-block content-header\">\n          <div class=\"row\">\n            <div class=\"header-container\">\n              <img src=\"../../../assets/images/icons/grid_icon.png\" class=\"grid\">\n              <span class=\"title\">Users by Android Versions</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"general-statistics\">\n          <app-vertical-bar-chart [width]=\"500\" [height]=\"300\" [data]=\"osAnalytics\" [chart]=\"osChart\" [osOrCountryChart]=\"osChart\" [loaded]=\"osStatisticssLoaded\"></app-vertical-bar-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_audience_analytics_audience_analytics_service__ = __webpack_require__("../../../../../dashboard/src/app/services/audience-analytics/audience-analytics.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = (function () {
    function AnalyticsComponent(_audienceAnalyticsService) {
        this._audienceAnalyticsService = _audienceAnalyticsService;
        this.height = 200;
        this.width = 300;
        this.green = '#3EC556';
        this.darkColor = '#F7F7F7';
        this.orange = '#ED684A';
        this.weeklyUsersChart = 'WeeklyUsers';
        this.weeklyDownloadsChart = 'WeeklyDownloads';
        this.countryChart = 'CountryChart';
        this.osChart = 'OsChart';
        this.weeklyStatisticsLoaded = false;
        this.osStatisticssLoaded = false;
        this.countryStatisticsLoaded = false;
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
        this.getSummary();
        this.getDailyStatistics();
        this.getWeeklyStatistics();
        this.getCountryStatistics();
        this.getOsVersionStatistics();
    };
    AnalyticsComponent.prototype.getSummary = function () {
        var _this = this;
        this._audienceAnalyticsService.getAppAnalyticsSummary()
            .subscribe(function (data) {
            if (data.rows.length === 0) {
                console.log('Application summary statistics not available at the moment');
                _this.totalUsers = 0;
                _this.totalDownloads = 0;
            }
            else {
                _this.appAnalyticsSummary = data.rows[0];
                _this.totalUsers = _this.appAnalyticsSummary.activeDevices;
                _this.totalDownloads = _this.appAnalyticsSummary.newDevices;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AnalyticsComponent.prototype.getDailyStatistics = function () {
        var _this = this;
        this._audienceAnalyticsService.getDailyStatistics()
            .subscribe(function (data) {
            if (data.rows.length === 0) {
                console.log('Daily statistics are not available at the moment');
                _this.usersToday = 0;
                _this.downloadsToday = 0;
            }
            else {
                _this.usersToday = data.rows[0].activeDevices;
                _this.downloadsToday = data.rows[0].newDevices;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AnalyticsComponent.prototype.getWeeklyStatistics = function () {
        var _this = this;
        this._audienceAnalyticsService.getWeeklyStatistics()
            .subscribe(function (data) {
            _this.weeklyStatisticsLoaded = true;
            if (data.rows.length === 0) {
                console.log('Weekly statistics are not available at the moment');
            }
            else {
                _this.weeklyAnalytics = data.rows;
            }
        }, function (error) {
            console.log(error);
        });
    };
    AnalyticsComponent.prototype.getCountryStatistics = function () {
        var _this = this;
        this._audienceAnalyticsService.getCountryStatistics()
            .subscribe(function (data) {
            _this.countryStatisticsLoaded = true;
            if (data.rows.length === 0) {
                console.log('Country statistics are not available at the moment');
            }
            else {
                _this.countryAnalytics = [];
                _this.populateCountryAndOsData(data, _this.countryAnalytics, 'country');
            }
        }, function (error) {
            console.log(error);
        });
    };
    AnalyticsComponent.prototype.getOsVersionStatistics = function () {
        var _this = this;
        this._audienceAnalyticsService.getOsVersionStatistics()
            .subscribe(function (data) {
            _this.osStatisticssLoaded = true;
            if (data.rows.length === 0) {
                console.log('Os version statistics are not available at the moment');
            }
            else {
                _this.osAnalytics = [];
                _this.populateCountryAndOsData(data, _this.osAnalytics, 'os');
            }
        }, function (error) {
            console.log(error);
        });
    };
    AnalyticsComponent.prototype.populateCountryAndOsData = function (rawData, outputArray, name) {
        for (var iterator = 0; iterator < rawData.rows.length; iterator++) {
            var activeDevices = rawData.rows[iterator]['activeDevices'];
            var newDevices = rawData.rows[iterator]['newDevices'];
            var dateTime = rawData.rows[iterator]['dateTime'];
            if (name === 'country') {
                var country = rawData.rows[iterator]['country|name'];
                outputArray.push({
                    'country': country,
                    'activeDevices': activeDevices,
                    'newDevices': newDevices,
                    'dateTime': dateTime
                });
            }
            else {
                var os = rawData.rows[iterator]['osVersion|name'];
                outputArray.push({
                    'os': os,
                    'activeDevices': activeDevices,
                    'newDevices': newDevices,
                    'dateTime': dateTime
                });
            }
        }
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-analytics',
        template: __webpack_require__("../../../../../dashboard/src/app/components/analytics/analytics.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/analytics/analytics.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_audience_analytics_audience_analytics_service__["a" /* AudienceAnalyticsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_audience_analytics_audience_analytics_service__["a" /* AudienceAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_audience_analytics_audience_analytics_service__["a" /* AudienceAnalyticsService */]) === "function" && _a || Object])
], AnalyticsComponent);

var _a;
//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#content {\n    width: 100%;\n}\n\n#page-header {\n    top: 0;\n    min-height: 55px;\n    max-height: 55px;\n    position: fixed;\n    padding: 10px;\n    background-color: #f3f3f3;\n    box-shadow: 4px 1px 4px 0px #b7c7d4;\n    z-index: 1;\n}\n\n.page-header-narrow {\n  width: 85%;\n  transition: all 0.4s ease-in-out 0s;\n}\n\n.page-header-wide {\n  width: 100%;\n  transition: all 0.4s ease-in-out 0s;\n}\n\n.side-toggle {\n    top: 0;\n    left: 0;\n    width: 250px;\n    height: 55px;\n    position: fixed;\n    box-shadow: -5px 2px 6px 2px rgb(71, 74, 103);\n    z-index: 1;\n}\n\n.app-icon {\n    width: 50px;\n    height: 100%;\n    margin-left: 20px;\n    border-radius: 5px;\n    float: left;\n    background-image: url(" + __webpack_require__("../../../../../dashboard/src/assets/images/icons/app_icon.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 100%;\n}\n\n.toggle-btn {\n    padding: 10px;\n    width: 50px;\n    height: 100%;\n    float: right;\n    background-color: #319184;\n    background-image: url(" + __webpack_require__("../../../../../dashboard/src/assets/images/icons/toggle_back.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 10px;\n    cursor: pointer;\n}\n\n.page-content {\n    margin-left: 250px;\n    transition: all 0.4s ease-in-out 0s;\n}\n\n.page-content-wide {\n    margin-left: 50px;\n    transition: all 0.4s ease-in-out 0s;\n}\n\n.main-content {\n    margin-top: 50px;\n    padding: 20px;\n    transition: all 0.4s ease-in-out 0s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"UserIsAuthorised\"  id=\"dashboard\">\n  <!-- Side bar -->\n  <div class=\"side-toggle bg-blue\" [@sideMenuToggle]=\"menuState\">\n      <div class=\"app-icon\"></div>\n      <div class=\"toggle-btn bg-light-blue\" [@toggleIcon]=\"menuState\" (click)=\"toggleMenu()\"></div>\n  </div>\n\n  <app-menu [toggleState]=\"menuState\" [@sideMenuToggle]=\"menuState\" class=\"bg-purple text-white\"></app-menu>\n\n  <!-- Page content -->\n  <div id=\"content\">\n    <div class=\"page-content\" [class.page-content-wide] = \"menuState === 'in'\">\n\n      <div id=\"page-header\" class=\"page-header-narrow\" [class.page-header-wide] = \"menuState === 'in'\">\n        <app-page-header></app-page-header>\n      </div>\n\n      <div class=\"main-content\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!UserIsAuthorised\" id=\"login-display\">\n  <div class=\"main-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__ = __webpack_require__("../../../../../dashboard/src/app/services/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, _authenticationService) {
        this.router = router;
        this._authenticationService = _authenticationService;
        this.menuState = 'out';
        this.UserIsAuthorised = false;
    }
    AppComponent.prototype.toggleMenu = function () {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authenticationService.showDashboardEmitter.subscribe(function (mode) {
            if (mode !== null) {
                _this.UserIsAuthorised = mode;
            }
        });
        if (localStorage.getItem('currentUser')) {
            // logged in so show dashboard
            this.UserIsAuthorised = true;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../dashboard/src/app/components/app/app.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/app/app.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('sideMenuToggle', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    transform: 'translateX(-80%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('in <=> out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('toggleIcon', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    transform: 'rotate(180deg)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                    transform: 'rotate(0deg)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* <=> *', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/assignments/assignments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/assignments/assignments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-8 col-12\">\n      <div class=\"card min-card-width\">\n        <div class=\"card-header bg-blue text-white text-center\">\n          <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n          {{ title }}\n        </div>\n        <div class=\"card-block\">\n          <div class=\"card-body content-scroll\">\n            <div class=\"col-5 pull-right form-group\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control even-z-index\" name=\"searchString\"\n                  placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\n                <div class=\"input-group-addon\">\n                  <i>\n                    <img class=\"filter-icon\" src=\"./../../../assets/images/icons/filter-icon.png\"  />\n                  </i>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"msg\"\n              [class.alert-success]=\"alertType === 'success'\"\n              [class.alert-danger]=\"alertType === 'danger'\"\n              [class.alert-warning]=\"alertType === 'warning'\"\n              class=\"alert alert-dismissible fade show\"\n              role=\"alert\">\n                <button (click)=\"closeAlert()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n                {{ msg }}\n            </div>\n            <table class=\"table table-hover\">\n              <tr class=\"table-header text-white\">\n                <th> Title </th>\n                <th> Author </th>\n                <th> Location </th>\n                <th> Creation Date </th>\n                <th> Description </th>\n              </tr>\n              <tr class=\"story-row\"\n              *ngFor=\"let assignment of assignments | filter : 'title' : searchString;\"\n              (click)=\"clickAssignment(assignment)\"\n              [class.selected-row]=\"selectedAssignment === assignment\">\n                <td> {{ assignment.title }} </td>\n                <td> {{ assignment.author }} </td>\n                <td> {{ assignment.location }} </td>\n                <td> {{ assignment.createdAt | date: 'dd/MM/yyyy' }} </td>\n                <td> {{ assignment.description }} </td>\n              </tr>\n            </table>\n          </div>\n          <nav>\n            <ul class=\"pagination left-15\">\n              <li class=\"page-item\">\n                <a class=\"page-link\" (click)=\"loadMoreAssignments(-1)\">\n                  Previous\n                </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let page of pages\">\n                <a class=\"page-link\" [class.selected-page]=\"currentPage === page\" (click)=\"loadMoreAssignments(page)\"> {{ page }}</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" (click)=\"loadMoreAssignments(0)\">\n                  Next\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 col-12\">\n      <div class=\"card min-card-width\">\n        <div class=\"card-header bg-blue text-white text-center\">Create New Assignment</div>\n        <div class=\"card-block\">\n          <div class=\"card-body\">\n              <app-create-assignment (outputMsg)=\"receiveOutputMsg($event)\"></app-create-assignment>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/assignments/assignments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignmentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__ = __webpack_require__("../../../../../dashboard/src/app/services/pagination/paginate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_assignments_get_assignments_service__ = __webpack_require__("../../../../../dashboard/src/app/services/assignments/get-assignments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_states_enum__ = __webpack_require__("../../../../../dashboard/src/app/models/states.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignmentsComponent = (function () {
    function AssignmentsComponent(paginateService, assignmentsService) {
        this.paginateService = paginateService;
        this.assignmentsService = assignmentsService;
        this.title = 'Assignments';
        this.assignments = [];
    }
    AssignmentsComponent.prototype.ngOnInit = function () {
        this.limit = 10;
        this.offset = 0;
        this.loadAssignments();
    };
    AssignmentsComponent.prototype.clickAssignment = function (assignment) {
        this.selectedAssignment = assignment;
    };
    AssignmentsComponent.prototype.loadMoreAssignments = function (page) {
        var prevOffset = this.offset;
        this.offset = this.paginateService.getOffset(page, this.limit, this.currentPage);
        if (this.offset >= this.totalCount) {
            this.offset = prevOffset;
        }
        this.loadAssignments();
    };
    AssignmentsComponent.prototype.closeAlert = function () {
        this.msg = null;
    };
    AssignmentsComponent.prototype.receiveOutputMsg = function (event) {
        this.msg = event.msg;
        this.alertType = event.type;
        if (event.type === __WEBPACK_IMPORTED_MODULE_3__models_states_enum__["a" /* States */][__WEBPACK_IMPORTED_MODULE_3__models_states_enum__["a" /* States */].success] && event.data) {
            this.assignments.splice(0, 0, event.data);
        }
    };
    AssignmentsComponent.prototype.loadAssignments = function () {
        var _this = this;
        this.assignments = [];
        this.assignmentsService.countAssignments().then(function (count) {
            _this.paginator = _this.paginateService.paginateData(count, _this.limit, _this.offset);
            _this.totalCount = count;
            _this.currentPage = _this.paginator.currentPage;
            _this.pages = _this.paginator.pages;
            _this.assignmentsService.getAssignments(_this.limit, _this.offset)
                .subscribe(function (assignment) { return _this.assignments.push(assignment); }, function (err) {
                _this.msg = err;
                _this.alertType = 'danger';
            });
        }, function (err) {
            _this.msg = ("Error: " + err);
            _this.alertType = 'danger';
        });
    };
    return AssignmentsComponent;
}());
AssignmentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-assignments',
        template: __webpack_require__("../../../../../dashboard/src/app/components/assignments/assignments.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/assignments/assignments.component.css"), __webpack_require__("../../../../../dashboard/src/app/components/stories/stories.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */], __WEBPACK_IMPORTED_MODULE_2__services_assignments_get_assignments_service__["a" /* GetAssignmentsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_assignments_get_assignments_service__["a" /* GetAssignmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_assignments_get_assignments_service__["a" /* GetAssignmentsService */]) === "function" && _b || Object])
], AssignmentsComponent);

var _a, _b;
//# sourceMappingURL=assignments.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader,\n.loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #36A495;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">Loading...</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CircularSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CircularSpinnerComponent = (function () {
    function CircularSpinnerComponent() {
    }
    CircularSpinnerComponent.prototype.ngOnInit = function () {
    };
    return CircularSpinnerComponent;
}());
CircularSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-circular-spinner',
        template: __webpack_require__("../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/circular-spinner/circular-spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CircularSpinnerComponent);

//# sourceMappingURL=circular-spinner.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showProgressBar\" class=\"alert alert-info\" role=\"alert\">\n  <strong>Please wait ...</strong>\n</div>\n\n<form enctype=\"multipart/form-data\" name=\"createAssignment\">\n  <div class=\"form-group\">\n    <label for=\"title\">TITLE</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" id=\"title\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\">AUTHOR</label>\n    <input type=\"text\" [(ngModel)]=\"author\" name=\"author\" id=\"author\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"location\">LOCATION</label>\n    <input type=\"text\" [(ngModel)]=\"location\" name=\"location\" id=\"location\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"description\">DESCRIPTION</label>\n    <textarea [(ngModel)]=\"description\" name=\"description\" id=\"description\" cols=\"30\" rows=\"3\" class=\"form-control\"></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"deadline\">DEADLINE</label>\n    <input type=\"date\" [(ngModel)]=\"deadline\" name=\"deadline\" id=\"deadline\" class=\"form-control\"/>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"featureImage\">FEATURE IMAGE</label>\n    <input (change)=\"fileChange($event)\" type=\"file\" class=\"form-control\" placeholder=\"Upload picture\" accept=\".jpg, .png, .jpeg, .JPG, .PNG, .JPEG\">\n  </div>\n  <div class=\"form-group\">\n    <div *ngIf=\"showProgressBar\" class=\"transparent-loader\"></div>\n    <button (click)=\"createAssignment()\" type=\"button\" class=\"btn btn-lg-custom btn-outline-info pull-right\">\n      Add New Assignment\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAssignmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_assignments_create_assignment_service__ = __webpack_require__("../../../../../dashboard/src/app/services/assignments/create-assignment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_states_enum__ = __webpack_require__("../../../../../dashboard/src/app/models/states.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateAssignmentComponent = (function () {
    function CreateAssignmentComponent(createAssignmentService) {
        this.createAssignmentService = createAssignmentService;
        this.outputMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CreateAssignmentComponent.prototype.ngOnInit = function () {
        this.showProgressBar = false;
    };
    CreateAssignmentComponent.prototype.resetFields = function () {
        this.title = this.author = this.description = this.deadline = this.location = null;
    };
    CreateAssignmentComponent.prototype.createAssignment = function () {
        var _this = this;
        this.showProgressBar = true;
        this.createAssignmentService.createAssignment({
            title: this.title,
            author: this.author,
            location: this.location,
            description: this.description,
            deadline: new Date(this.deadline),
            featureImage: this.featureImage
        }).subscribe(function (assignment) {
            _this.outputMsg.emit(({
                type: __WEBPACK_IMPORTED_MODULE_2__models_states_enum__["a" /* States */][__WEBPACK_IMPORTED_MODULE_2__models_states_enum__["a" /* States */].success],
                msg: 'Assignment Created successfully!',
                data: assignment
            }));
        }, function (err) {
            _this.outputMsg.emit(({
                type: __WEBPACK_IMPORTED_MODULE_2__models_states_enum__["a" /* States */][__WEBPACK_IMPORTED_MODULE_2__models_states_enum__["a" /* States */].danger],
                msg: "Error: " + err
            }));
            _this.showProgressBar = false;
        }, function () {
            _this.resetFields();
            _this.showProgressBar = false;
        });
    };
    CreateAssignmentComponent.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        if (fileList.length > 0) {
            this.featureImage = fileList[0];
        }
    };
    return CreateAssignmentComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CreateAssignmentComponent.prototype, "outputMsg", void 0);
CreateAssignmentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-assignment',
        template: __webpack_require__("../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/create-assignment/create-assignment.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_assignments_create_assignment_service__["a" /* CreateAssignmentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_assignments_create_assignment_service__["a" /* CreateAssignmentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_assignments_create_assignment_service__["a" /* CreateAssignmentService */]) === "function" && _b || Object])
], CreateAssignmentComponent);

var _a, _b;
//# sourceMappingURL=create-assignment.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-header {\n    background-color: #3B4255 !important;\n    color: #A6A8B9 !important;\n    text-align: center;\n}\n\n.selected-row {\n    background-color:#E9ECEF !important;\n    cursor: pointer;\n}\n#events-summary {\n  height: 50%;\n  margin-bottom: 10px;\n}\n.grid {\n  margin-top: 15px;\n  margin-left: 30px;\n  width: 20px;\n  height: 20px;\n  line-height: 50px;\n  text-align: center;\n  border: 2px;\n  float: left;\n}\n.header-container {\n  width:50%;\n}\n.content-header {\n  background-color: #36A495;\n  height: 50px;\n}\n.title {\n  color: white;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border: 2px;\n  float: right;\n}\n.white-text {\n  color: #ffffff;\n}\n.title-description {\n  font-weight: bolder;\n  padding: 20px;\n  color: #36A495;\n}\n.white-background {\n  background-color: white;\n}\n#radioBtn .notActive{\n    color: #36A495;\n    background-color: #fff;\n}\n.center-div {\n  width: 50%;\n  margin: 0 auto;\n  padding: 30px;\n}\n.active {\n  background-color: #36A495 !important;\n  border-color: #36A495 !important;\n}\n.btn-primary:not([disabled]):not(.disabled).active, .btn-primary:not([disabled]):not(.disabled):active, .show>.btn-primary.dropdown-toggle {\n  box-shadow: none;\n}\n.cursor {\n  cursor: pointer;\n}\n.position-left {\n  padding: 20px;\n  text-align: right;\n}\n#summary-table-heading {\n  color: white;\n  font-weight: bolder;\n  font-size: 14px;\n  text-align: left !important;\n}\n.even-z-index {\n    z-index: 0;\n}\n.filter-icon {\n    width: 20px;\n    opacity: 0.46;\n}\n#empty-message-description {\n  padding-top: 30px;\n  color: #d48551;\n  margin: 30px;\n}\n#fill-height {\n  height: 100%;\n  min-width: 720px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container white-background\" id=\"fill-height\">\n\n  <div class=\"card\">\n    <div class=\"card-block content-header\">\n      <div class=\"row\">\n        <div class=\"header-container\">\n          <img src=\"../../../assets/images/icons/grid_icon.png\" class=\"grid\">\n          <span class=\"title\">Events summary</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h1 class=\"title-description\"> Event summary data as of 1st October, 2017 to date.</h1>\n\n\n  <!-- Event summary -->\n  <div class=\"row\">\n    <div class=\"col-md-4\" id=\"events-summary\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"pull-right form-group\">\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control even-z-index\" name=\"searchString\"\n                    placeholder=\"Type to search...\" (keyup)=\"filter()\" [(ngModel)]=\"searchString\"/>\n                  <div class=\"input-group-addon\">\n                    <i>\n                      <img class=\"filter-icon\" src=\"./../../../assets/images/icons/filter-icon.png\"  />\n                    </i>\n                  </div>\n              </div>\n          </div>\n          <br><br><br>\n          <h1 class=\"text-warning\" *ngIf=\"paginatedData.length === 0\">No event data to display at the moment</h1>\n          <app-circular-spinner *ngIf=\"showProgressBar\"></app-circular-spinner>\n         <div *ngIf=\"paginatedData.length === 0 && searchString !== ''\">\n            <h1 id=\"empty-message-description\">No events match the search query entered.</h1>\n          </div>\n          <div *ngIf=\"paginatedData.length !== 0\">\n            <table *ngIf=\"!showProgressBar\" class=\"table table-hover\">\n              <tr class=\"table-header text-white\" id=\"summary-table-heading\">\n                <th> EVENT NAME </th>\n                <th> OCCURRENCES </th>\n              </tr>\n              <tr class=\"story-row\" *ngFor=\"let event of paginatedData\">\n                <td> {{ event.name }} </td>\n                <td class=\"position-left\"> {{ event.occurrences }} </td>\n              </tr>\n            </table>\n          </div>\n          <nav>\n            <ul class=\"pagination left-15\">\n              <li class=\"page-item\">\n                <a class=\"page-link\" (click)=\"loadMore(-1)\">\n                  Previous\n                </a>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let page of pages\">\n                <a class=\"page-link\" [class.selected-page]=\"currentPage === page\" (click)=\"loadMore(page)\"> {{ page }}</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" (click)=\"loadMore(0)\">\n                  Next\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"form-group center-div\">\n        <div class=\"col-sm-7 col-md-7\">\n          <div class=\"input-group\">\n            <div id=\"radioBtn\" class=\"btn-group\">\n              <a class=\"btn btn-primary btn-sm active cursor\" data-toggle=\"fun\" data-title=\"W\" (click)=\"togglePeriod('W')\">Week</a>\n              <a class=\"btn btn-primary btn-sm notActive cursor\" data-toggle=\"fun\" data-title=\"N\" (click)=\"togglePeriod('M')\">Month</a>\n            </div>\n            <input type=\"hidden\" name=\"fun\" id=\"fun\">\n          </div>\n        </div>\n      </div>\n      <app-line-chart [width]=\"700\" [height]=\"320\" [weeklyEventsData]=\"weeklyEvents\" [monthlyEventsData]=\"monthlyEvents\" [showPeriod]=\"showPeriod\"></app-line-chart>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_events_analytics_events_analytics_service__ = __webpack_require__("../../../../../dashboard/src/app/services/events-analytics/events-analytics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pagination_paginate_service__ = __webpack_require__("../../../../../dashboard/src/app/services/pagination/paginate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsAnalyticsComponent = (function () {
    function EventsAnalyticsComponent(_eventsAnalyticsService, _paginateService) {
        this._eventsAnalyticsService = _eventsAnalyticsService;
        this._paginateService = _paginateService;
        this.analyticsSummary = [];
        this.paginatedData = [];
        this.temporaryPaginatedData = [];
        this.weeklyEvents = [];
        this.monthlyEvents = [];
        this.showPeriod = 'Week';
        this.showProgressBar = true;
        this.limit = 6;
        this.offset = 0;
        this.searchString = '';
    }
    EventsAnalyticsComponent.prototype.ngOnInit = function () {
        this.getEventsAnalyticsData();
        this.getWeeklyAnalyticsData();
        this.getMonthlyAnalyticsData();
    };
    EventsAnalyticsComponent.prototype.ngAfterViewInit = function () {
        $('#radioBtn a').on('click', function () {
            var sel = $(this).data('title');
            var tog = $(this).data('toggle');
            $('#' + tog).prop('value', sel);
            $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
            $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
        });
    };
    EventsAnalyticsComponent.prototype.getEventsAnalyticsData = function () {
        var _this = this;
        this._eventsAnalyticsService.getEventsSummary()
            .subscribe(function (data) {
            _this.showProgressBar = false;
            if (data.rows.length === 0) {
                console.log('There is no event data');
            }
            else {
                _this.analyticsSummary = [];
                _this.populateEventsData(data, _this.analyticsSummary);
                _this.paginator = _this._paginateService.paginateData(_this.analyticsSummary.length, _this.limit, _this.offset);
                _this.currentPage = _this.paginator.currentPage;
                _this.pages = _this.paginator.pages;
                _this.paginatedData = _this.analyticsSummary.slice(_this.offset, _this.limit);
                _this.temporaryPaginatedData = _this.paginatedData;
                console.log('');
            }
        }, function (error) {
            console.log(error);
        });
    };
    EventsAnalyticsComponent.prototype.getWeeklyAnalyticsData = function () {
        var _this = this;
        this._eventsAnalyticsService.getWeeklyEvents()
            .subscribe(function (data) {
            if (data.rows.length === 0) {
                console.log('There is no weekly analytics event data');
            }
            else {
                _this.weeklyEvents = [];
                _this.populateEventsData(data, _this.weeklyEvents);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EventsAnalyticsComponent.prototype.getMonthlyAnalyticsData = function () {
        var _this = this;
        this._eventsAnalyticsService.getMonthlyEvents()
            .subscribe(function (data) {
            if (data.rows.length === 0) {
                console.log('There is no monthly analytics event data');
            }
            else {
                _this.monthlyEvents = [];
                _this.populateEventsData(data, _this.monthlyEvents);
            }
        }, function (error) {
            console.log(error);
        });
    };
    EventsAnalyticsComponent.prototype.populateEventsData = function (rawData, outputArray) {
        for (var iterator = 0; iterator < rawData.rows.length; iterator++) {
            var name = rawData.rows[iterator]['event|name'];
            var occurrences = rawData.rows[iterator]['occurrences'];
            var averageTimePerDevice = rawData.rows[iterator]['averageTimePerDevice'];
            var dateTime = rawData.rows[iterator]['dateTime'];
            var averageTimePerSession = rawData.rows[iterator]['averageTimePerSession'];
            outputArray.push({
                'name': this.formatName(name),
                'occurrences': occurrences,
                'averageTimePerDevice': averageTimePerDevice,
                'dateTime': dateTime,
                'averageTimePerSession': averageTimePerSession
            });
        }
    };
    EventsAnalyticsComponent.prototype.formatName = function (name) {
        switch (name) {
            case 'PASSWORD_SIGN_UP':
                name = 'Number of sign ups';
                break;
            case 'LOGIN':
                name = 'Number of log ins';
                break;
            case 'ASSIGNMENT_OPEN':
                name = 'Number of open assignments';
                break;
            case 'CREATE_STORY':
                name = 'Number of stories created';
                break;
            case 'SAVE_STORY':
                name = 'Number of stories saved';
                break;
            case 'AUDIO_UPLOAD':
                name = 'Number of audios uploaded';
                break;
            case 'UPLOAD_STORY':
                name = 'Number of stories uploaded';
                break;
            case 'IMAGE_UPLOAD':
                name = 'Number of images uploaded';
                break;
            default:
                return name;
        }
        return name;
    };
    EventsAnalyticsComponent.prototype.togglePeriod = function (period) {
        if (period === 'M') {
            this.showPeriod = 'Month';
        }
        else if (period === 'W') {
            this.showPeriod = 'Week';
        }
        else if (period === 'Y') {
            this.showPeriod = 'Year';
        }
    };
    EventsAnalyticsComponent.prototype.loadMore = function (page) {
        var prevOffset = this.offset;
        this.offset = this._paginateService.getOffset(page, this.limit, this.currentPage);
        if (this.offset >= this.analyticsSummary.length) {
            this.offset = prevOffset;
        }
        this.paginatedData = this.analyticsSummary.slice(this.offset, this.offset + this.limit);
        this.temporaryPaginatedData = this.paginatedData;
    };
    EventsAnalyticsComponent.prototype.filter = function () {
        var _this = this;
        if (this.searchString !== '') {
            this.paginatedData = [];
            this.analyticsSummary.forEach(function (element) {
                if (element.name.toUpperCase().indexOf(_this.searchString.toUpperCase()) >= 0) {
                    _this.paginatedData.push(element);
                }
            });
        }
        else {
            this.paginatedData = this.temporaryPaginatedData;
        }
    };
    return EventsAnalyticsComponent;
}());
EventsAnalyticsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-analytics',
        template: __webpack_require__("../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/events-analytics/events-analytics.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_events_analytics_events_analytics_service__["a" /* EventsAnalyticsService */], __WEBPACK_IMPORTED_MODULE_2__services_pagination_paginate_service__["a" /* PaginateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_events_analytics_events_analytics_service__["a" /* EventsAnalyticsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_events_analytics_events_analytics_service__["a" /* EventsAnalyticsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_pagination_paginate_service__["a" /* PaginateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_pagination_paginate_service__["a" /* PaginateService */]) === "function" && _b || Object])
], EventsAnalyticsComponent);

var _a, _b;
//# sourceMappingURL=events-analytics.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/line-chart/line-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-circular-spinner *ngIf=\"showProgressBar\"></app-circular-spinner>\n  <div *ngIf=\"!showProgressBar\">\n    <ngx-charts-line-chart\n      [view]=\"[width, height]\"\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-line-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical_bar_chart_entry_model__ = __webpack_require__("../../../../../dashboard/src/app/components/vertical-bar-chart/entry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("../../../../../dashboard/src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineChartComponent = (function () {
    function LineChartComponent() {
        this.multi = [];
        this.showProgressBar = true;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'Population';
        this.colors = [
            '#5AA454', '#A10A28', '#D8B42C', '#AAAAAA', '#784D78', '#56F2F1',
            '#87DDFF', '#D8BFD8', '#9ACD32', '#B0E0E6', '#663399', '#1E90FF',
            '#9932CC', '#ED684A', '#556B2F', '#000000', '#0000FF', '#8A2BE2',
            '#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963',
            '#8796c0', '#7ed3ed', '#50abcc', '#ad6886'
        ];
        this.colorScheme = {
            domain: Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["g" /* shuffleColors */])(this.colors)
        };
        // line, area
        this.autoScale = true;
        Object.assign(this, { multi: this.multi });
    }
    LineChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    LineChartComponent.prototype.ngOnInit = function () {
    };
    LineChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes['weeklyEventsData']
            && changes['weeklyEventsData'].previousValue !== changes['weeklyEventsData'].currentValue) {
            this.period = 'Week';
            this.populateBarGraphData(changes['weeklyEventsData'].currentValue);
            if (this.weeklyEntries) {
                this.multi = this.weeklyEntries;
                if (!(this.multi.length === 0)) {
                    this.showProgressBar = false;
                }
            }
        }
        if (changes['monthlyEventsData']
            && changes['monthlyEventsData'].previousValue !== changes['monthlyEventsData'].currentValue) {
            this.period = 'Month';
            this.populateBarGraphData(changes['monthlyEventsData'].currentValue);
        }
        if (changes['showPeriod'] && changes['showPeriod'].previousValue !== changes['showPeriod'].currentValue) {
            this.showPeriod = changes['showPeriod'].currentValue;
            if (this.showPeriod === 'Month') {
                if (this.monthlyEntries) {
                    this.multi = this.monthlyEntries;
                }
            }
            else if (this.showPeriod === 'Week') {
                if (this.weeklyEntries) {
                    this.multi = this.weeklyEntries;
                    if (!(this.multi.length === 0)) {
                        this.showProgressBar = false;
                    }
                }
            }
        }
        if ((this.multi.length === 0)) {
            this.multi = [];
        }
        this.showProgressBar = false;
    };
    LineChartComponent.prototype.populateBarGraphData = function (appSummary) {
        var eventsDictionary = {};
        var keys = [];
        if (appSummary) {
            for (var i = 0; i < appSummary.length; i++) {
                var seriesDictionary = {};
                var formattedDate = (appSummary[i].dateTime).substring(0, 10);
                var day = new Date(formattedDate);
                var value = appSummary[i].occurrences;
                var key = appSummary[i].name;
                if (!(key in eventsDictionary)) {
                    eventsDictionary[key] = seriesDictionary;
                    keys.push(key);
                }
                eventsDictionary[key][day.getDate()] = value;
            }
            this.extrapolateValuesBasedOnDate(eventsDictionary, keys);
        }
    };
    LineChartComponent.prototype.extrapolateValuesBasedOnDate = function (dictionary, keys) {
        var entries = this.selectEntries();
        for (var keyIterator = 0; keyIterator < keys.length; keyIterator++) {
            var key = keys[keyIterator];
            var serie = dictionary[key];
            entries.push({
                'name': key,
                'series': this.getEventSeriesData(serie)
            });
        }
    };
    LineChartComponent.prototype.selectEntries = function () {
        if (this.period === 'Week') {
            this.weeklyEntries = [];
            return this.weeklyEntries;
        }
        else if (this.period === 'Month') {
            this.monthlyEntries = [];
            return this.monthlyEntries;
        }
    };
    LineChartComponent.prototype.getEventSeriesData = function (dictionary) {
        var series = [];
        var date = new Date();
        var iteratorLimit = 7;
        if (this.period === 'Month') {
            iteratorLimit = 30;
        }
        for (var iterator = 0; iterator < iteratorLimit; iterator++) {
            date.setDate(date.getDate() - 1);
            var key = date.getDate();
            if (!(key in dictionary)) {
                dictionary[key] = 0;
            }
        }
        for (var dayIterator = iteratorLimit; dayIterator > 0; dayIterator--) {
            var day = new Date();
            day.setDate(new Date().getDate() - dayIterator);
            var dayDate = day.getDate();
            var dayKey = this.getDayKey(day);
            series.push(new __WEBPACK_IMPORTED_MODULE_1__vertical_bar_chart_entry_model__["a" /* Entry */](dayKey, dictionary[dayDate]));
        }
        return series;
    };
    LineChartComponent.prototype.getDayKey = function (day) {
        if (this.period === 'Week') {
            return Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["b" /* getDayOfTheWeek */])(day.getDay());
        }
        else if (this.period === 'Month') {
            return day.getDate();
        }
    };
    return LineChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LineChartComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LineChartComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "weeklyEventsData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "monthlyEventsData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], LineChartComponent.prototype, "showPeriod", void 0);
LineChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-line-chart',
        template: __webpack_require__("../../../../../dashboard/src/app/components/line-chart/line-chart.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/line-chart/line-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LineChartComponent);

//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://weloveiconfonts.com/api/?family=fontawesome);", ""]);
exports.push([module.i, "@import url(http://meyerweb.com/eric/tools/css/reset/reset.css);", ""]);

// module
exports.push([module.i, "@charset \"utf-8\";\n/* CSS Document */\n\n/* ---------- FONTAWESOME ---------- */\n/* ---------- http://fortawesome.github.com/Font-Awesome/ ---------- */\n/* ---------- http://weloveiconfonts.com/ ---------- */\n\n/* ---------- ERIC MEYER'S RESET CSS ---------- */\n/* ---------- http://meyerweb.com/eric/tools/css/reset/ ---------- */\n\n/* ---------- FONTAWESOME ---------- */\n\n[class*=\"fontawesome-\"]:before {\n  font-family: 'FontAwesome', sans-serif;\n}\n\n/* ---------- GENERAL ---------- */\n\nbody {\n\tbackground-color: #C0C0C0;\n\tcolor: #000;\n\tfont-family: \"Varela Round\", Arial, Helvetica, sans-serif;\n\tfont-size: 16px;\n\tline-height: 1.5em;\n}\n\ninput {\n\tborder: none;\n\tfont-family: inherit;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tline-height: inherit;\n\t-webkit-appearance: none;\n}\n\n/* ---------- LOGIN ---------- */\n\n#login {\n\tmargin: 50px auto;\n\twidth: 400px;\n}\n\n#login h2 {\n\tbackground-color: #36A495;\n\tborder-radius: 20px 20px 0 0;\n\tcolor: #fff;\n\tfont-size: 28px;\n\tpadding: 20px 26px;\n}\n\n#login h2 span[class*=\"fontawesome-\"] {\n\tmargin-right: 14px;\n}\n\n#login fieldset {\n\tbackground-color: #fff;\n\tborder-radius: 0 0 20px 20px;\n\tpadding: 20px 26px;\n}\n\n#login fieldset p {\n\tcolor: #777;\n\tmargin-bottom: 14px;\n}\n\n#login fieldset p:last-child {\n\tmargin-bottom: 0;\n}\n\n#login fieldset input {\n\tborder-radius: 3px;\n}\n\n#login fieldset input[type=\"text\"], #login fieldset input[type=\"password\"] {\n\tbackground-color: #eee;\n\tcolor: #000;\n\tpadding: 4px 10px;\n\twidth: 328px;\n  font-size: 20px;\n}\n\n#login fieldset input[type=\"submit\"] {\n\tbackground-color: #3B4255;\n\tcolor: #fff;\n  font-size: 20px;\n\tdisplay: block;\n\tmargin: 0 auto;\n\tpadding: 4px 0;\n\twidth: 200px;\n  padding: 10px;\n}\n\n#login fieldset input[type=\"submit\"]:hover {\n\tbackground-color: #36A495;\n  cursor: pointer;\n}\n\n\n.loader,\n.loader:before,\n.loader:after {\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation: load7 1.8s infinite ease-in-out;\n  animation: load7 1.8s infinite ease-in-out;\n}\n.loader {\n  color: #36A495;\n  font-size: 10px;\n  margin: 20px auto;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n.loader:before,\n.loader:after {\n  content: '';\n  position: absolute;\n  top: 0;\n}\n.loader:before {\n  left: -3.5em;\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.loader:after {\n  left: 3.5em;\n}\n@-webkit-keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n@keyframes load7 {\n  0%,\n  80%,\n  100% {\n    box-shadow: 0 2.5em 0 -1.3em;\n  }\n  40% {\n    box-shadow: 0 2.5em 0 0;\n  }\n}\n.error-message {\n  color: orange;\n  font-weight: bold;\n}\n.label {\n  font-size: 22px;\n  font-weight: bold;\n}\n#app-login-name {\n  font-weight: bold;\n  font-size: 20px;\n}\n#username{\n  color: #000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\n\n  <h2>\n    <span class=\"fontawesome-lock\"></span>\n    <span id=\"app-login-name\">Citizen Reporter</span>\n  </h2>\n\n  <form class=\"form-signin\" role=\"form\" (submit)=\"login($event, username.value, password.value)\">\n\n    <fieldset>\n\n      <p><label for=\"username\" class=\"label\">Username</label></p>\n      <p><input type=\"text\" id=\"username\" placeholder=\"Username\" #username required autofocus></p> <!-- JS because of IE support; better: placeholder=\"mail@address.com\" -->\n\n      <p><label for=\"password\" class=\"label\">Password</label></p>\n      <p><input type=\"password\" id=\"password\" placeholder=\"******\" #password required></p> <!-- JS because of IE support; better: placeholder=\"password\" -->\n\n      <p><input type=\"submit\" value=\"Sign in to continue\"></p>\n\n      <h3 class=\"error-message\" *ngIf=\"errorMsg\"> {{ errorMsg }} </h3>\n      <div *ngIf=\"loading\" class=\"loader\">Loading...</div>\n\n    </fieldset>\n\n  </form>\n\n</div> <!-- end login -->\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__ = __webpack_require__("../../../../../dashboard/src/app/services/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, route, _authenticationService) {
        this.router = router;
        this.route = route;
        this._authenticationService = _authenticationService;
        this.loading = false;
        this.state = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser')) {
            // log out and redirect to login page
            this._authenticationService.logout();
        }
    };
    LoginComponent.prototype.login = function (event, username, password) {
        this.loading = true;
        event.preventDefault();
        var self = this;
        this.errorMsg = null;
        this._authenticationService.logIn(username, password, function () {
            self._authenticationService.toggleAuthentication();
            self.loading = false;
            self.redirect();
        }, function () {
            self.errorMsg = 'Wrong username / password combination';
            self.loading = false;
        });
    };
    LoginComponent.prototype.redirect = function () {
        this.router.navigate(['/analytics']);
        window.location.reload();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../dashboard/src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  position: fixed;\n  top: 55px;\n  left: 0px;\n  right: auto;\n  bottom: 0;\n  width: 20%;\n  min-width: 250px;\n  max-width: 250px;\n}\n\n.menu-header {\n    padding-top: 40px;\n}\n\nul {\n    font-size: 16px;\n    line-height: 3;\n    font-weight: 400;\n    list-style: none;\n}\n\nul li {\n    width: 250px;\n    margin-left: -40px;\n    padding-left: 40px;\n}\n\nul li a {\n    color: #ffffff;\n    display: block;\n    text-decoration: none;\n    width: 250px;\n    margin-left: -40px;\n    padding-left: 40px;\n}\n\nul li :hover {\n    background-color: #26273B;\n}\n\n.active {\n    opacity: unset;\n    background-color: #26273B;\n}\n\n.menu-icon {\n    margin-top: -5px;\n    min-width: 20px;\n    max-width: 20px;\n    margin-right: 15px;\n}\n\n.right-icon {\n    float: right;\n}\n\n.menu-title {\n  font-weight: 600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-header\">\n  <h2 class=\"menu-title\"> Analytics </h2>\n</div>\n\n<ul>\n  <li *ngFor=\"let menu of analyticsMenu\" [class.active]=\"selectedMenu === menu.name\" (click)=\"onMenuClick(menu)\">\n    <a routerLink=\"{{ menu.url }}\">\n      <span><img src=\"{{ menu.icon }}\" class=\"menu-icon\"/></span>\n      {{ menu.name }}\n      <span class=\"right-icon\" [@showSideIcons]=\"toggleState\">\n        <img src=\"{{ menu.icon }}\" class=\"menu-icon\"/>\n      </span>\n    </a>\n  </li>\n</ul>\n\n<div class=\"menu-header\">\n  <h2 class=\"menu-title\"> Data </h2>\n</div>\n\n<ul>\n  <li *ngFor=\"let menu of dataMenu\" [class.active]=\"selectedMenu === menu.name\" (click)=\"onMenuClick(menu)\">\n    <a routerLink=\"{{ menu.url }}\">\n      <span><img src=\"{{ menu.icon }}\" class=\"menu-icon\"/></span>\n      {{ menu.name }}\n      <span class=\"right-icon\" [@showSideIcons]=\"toggleState\">\n        <img src=\"{{ menu.icon }}\" class=\"menu-icon\"/>\n      </span>\n    </a>\n  </li>\n</ul>\n\n<div class=\"menu-header\">\n  <h2 class=\"menu-title\"> Push Notifications </h2>\n</div>\n\n<ul>\n  <li *ngFor=\"let menu of notificationMenu\" [class.active]=\"selectedMenu === menu.name\" (click)=\"onMenuClick(menu)\">\n    <a routerLink=\"{{ menu.url }}\">\n      <span><img src=\"{{ menu.icon }}\" class=\"menu-icon\"/></span>\n      {{ menu.name }}\n      <span class=\"right-icon\" [@showSideIcons]=\"toggleState\">\n          <img src=\"{{ menu.icon }}\" class=\"menu-icon\"/>\n      </span>\n    </a>\n  </li>\n</ul>\n\n<div *ngIf=\"admin\" class=\"menu-header\">\n  <h2 class=\"menu-title\"> User Accounts </h2>\n</div>\n\n<ul *ngIf=\"admin\">\n  <li *ngFor=\"let menu of userAccountMenu\" [class.active]=\"selectedMenu === menu.name\" (click)=\"onMenuClick(menu)\">\n    <a routerLink=\"{{ menu.url }}\">\n      <span><img src=\"{{ menu.icon }}\" class=\"menu-icon\"/></span>\n      {{ menu.name }}\n      <span class=\"right-icon\" [@showSideIcons]=\"toggleState\">\n          <img src=\"{{ menu.icon }}\" class=\"menu-icon\"/>\n      </span>\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_menus__ = __webpack_require__("../../../../../dashboard/src/app/components/menu/mock-menus.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.dataMenu = __WEBPACK_IMPORTED_MODULE_2__mock_menus__["b" /* dataMenu */];
        this.analyticsMenu = __WEBPACK_IMPORTED_MODULE_2__mock_menus__["a" /* analyticsMenu */];
        this.notificationMenu = __WEBPACK_IMPORTED_MODULE_2__mock_menus__["c" /* notificationMenu */];
        this.userAccountMenu = __WEBPACK_IMPORTED_MODULE_2__mock_menus__["d" /* userAccountMenu */];
        if (localStorage.getItem('role') === 'Administrator') {
            this.admin = true;
        }
    };
    MenuComponent.prototype.onMenuClick = function (menu) {
        this.selectedMenu = menu.name;
        this.router.navigate([menu.url]);
    };
    return MenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MenuComponent.prototype, "toggleState", void 0);
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../dashboard/src/app/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/menu/menu.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["trigger"])('showSideIcons', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                    display: 'initial'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["state"])('out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["style"])({
                    display: 'none'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["transition"])('in <=> out', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["animate"])('0ms 200ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/menu/mock-menus.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dataMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return analyticsMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return notificationMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return userAccountMenu; });
var menuIconsPath = './../../assets/images/icons/';
var dataMenu = [
    { id: 4, name: 'Assignments', icon: menuIconsPath + "tag_icon.png", url: '/assignments' },
    { id: 3, name: 'Stories', icon: menuIconsPath + "clock_icon.png", url: '/stories' }
];
var analyticsMenu = [
    { id: 1, name: 'Overview', icon: menuIconsPath + "chart_icon.png", url: 'analytics' },
    { id: 2, name: 'Event Summary', icon: menuIconsPath + "summary.png", url: 'events-summary' }
];
var notificationMenu = [
    { id: 1, name: 'Notifications', icon: menuIconsPath + "envelope_icon.png", url: '/push-notifications' }
];
var userAccountMenu = [
    { id: 1, name: 'Create account', icon: menuIconsPath + "account.png", url: '/create-account' },
    { id: 2, name: 'Users list', icon: menuIconsPath + "users.png", url: '/users' },
];
//# sourceMappingURL=mock-menus.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-content/page-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-content/page-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron bg-dark-purple text-white\">\n  <p>\n    page-content works!\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-content/page-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageContentComponent = (function () {
    function PageContentComponent() {
    }
    PageContentComponent.prototype.ngOnInit = function () {
    };
    return PageContentComponent;
}());
PageContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-content',
        template: __webpack_require__("../../../../../dashboard/src/app/components/page-content/page-content.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/page-content/page-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageContentComponent);

//# sourceMappingURL=page-content.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-header/page-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-name {\n  /* Citizen Reporter: */\n  font-family: HelveticaNeue-BoldItalic;\n  font-size: 24px;\n  color: #C3C3C3;\n  padding-top: 20px;\n  /*padding: 20px;*/\n}\n#app-header {\n  padding: 0px;\n}\n#app-header-left {\n  float: left;\n}\n#app-header-right {\n  float: right;\n  margin-right: 70px;\n}\n.inset {\n  margin-top: -5px;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  box-shadow:\n    inset 0 0 0 2px rgba(255,255,255,0.6),\n    0 1px 1px rgba(0,0,0,0.1);\n  background-color: transparent !important;\n  z-index: 999;\n}\n\n.inset img {\n  border-radius: inherit;\n  width: inherit;\n  height: inherit;\n  display: block;\n  position: relative;\n  z-index: 998;\n}\n\n.dropbtn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n  margin-left: -40px;\n}\n\n/* Links inside the dropdown */\n.dropdown-content span {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  cursor: pointer;\n}\n\n/* Change color of dropdown links on hover */\n.dropdown-content span:hover {\n  background-color: #3B4255;\n  color: white;\n  font-weight: bold;\n}\n\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {\n  background-color: #3e8e41;\n}\n.dropdown-menu-icon {\n  width: 40px;\n  height: 40px;\n}\n@media (max-width: 340px) {\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    margin-left: -80px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"app-header\">\n    <div id=\"app-header-left\">\n      <div class=\"app-name\">Media Factory Africa </div>\n    </div>\n    <div id=\"app-header-right\">\n        <div class=\"dropdown\">\n          <div class=\"inset\"><img src=\"../../../assets/images/icons/person-icon.png\"></div>\n            <div class=\"dropdown-content\" id=\"dropdown-color\">\n              <span (click)=\"goToProfile()\"><img src=\"../../../assets/images/icons/Settings.ico\" class=\"dropdown-menu-icon\"/> Profile</span>\n              <span (click)=\"onLogout()\"><img src=\"../../../assets/images/icons/logout.ico\" class=\"dropdown-menu-icon\"/> Log out</span>\n            </div>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__ = __webpack_require__("../../../../../dashboard/src/app/services/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHeaderComponent = (function () {
    function PageHeaderComponent(router, route, _authenticationService) {
        this.router = router;
        this.route = route;
        this._authenticationService = _authenticationService;
        this.pageTitle = route.snapshot.data['title'];
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent.prototype.onLogout = function () {
        this._authenticationService.logout();
    };
    PageHeaderComponent.prototype.goToProfile = function () {
        this.router.navigate(['/profile']);
    };
    return PageHeaderComponent;
}());
PageHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-header',
        template: __webpack_require__("../../../../../dashboard/src/app/components/page-header/page-header.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/page-header/page-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], PageHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=page-header.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-circular-spinner *ngIf=\"showProgressBar\"></app-circular-spinner>\n  <div *ngIf=\"!showProgressBar\">\n    <ngx-charts-pie-chart\n      [view]=\"view\"\n      [scheme]=\"{domain: [firstColor, secondColor]}\"\n      [results]=\"single\"\n      [legend]=\"showLegend\"\n      [explodeSlices]=\"explodeSlices\"\n      [labels]=\"showLabels\"\n      [doughnut]=\"doughnut\"\n      [gradient]=\"gradient\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-pie-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartComponent = (function () {
    function PieChartComponent() {
        this.single = [];
        this.view = [200, 200];
        this.gradient = false;
        this.showLegend = false;
        this.showProgressBar = true;
        // pie-chart options
        this.showLabels = false;
        this.explodeSlices = false;
        this.doughnut = true;
        Object.assign(this, { single: this.single });
    }
    PieChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    PieChartComponent.prototype.ngOnInit = function () {
    };
    PieChartComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var simpleChange = changes[propName];
            if (propName === 'usersToday') {
                this.currentUsers = simpleChange.currentValue;
            }
            if (propName === 'totalUsers') {
                this.currentTotal = simpleChange.currentValue;
            }
        }
        this.updatePieChartData();
        if (!(this.single.length === 0)) {
            this.showProgressBar = false;
        }
    };
    PieChartComponent.prototype.updatePieChartData = function () {
        this.single = [
            {
                'name': 'Today',
                'value': this.currentUsers || 0
            },
            {
                'name': 'Total',
                'value': this.currentTotal || 0
            }
        ];
    };
    return PieChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PieChartComponent.prototype, "firstColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PieChartComponent.prototype, "secondColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "usersToday", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PieChartComponent.prototype, "totalUsers", void 0);
PieChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pie-chart',
        template: __webpack_require__("../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/pie-chart/pie-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-scroll {\n    max-height: 650px;\n    overflow: scroll;\n}\n.confirm-button {\n  background-color: #3B4255;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 col-12\">\n      <div class=\"card min-card-width\">\n        <div class=\"card-header bg-blue text-white text-center\">\n          <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n          <h1>Edit Profile</h1>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"card-body content-scroll\">\n\n            <div class=\"container\">\n              <div class=\"row\">\n                  <!-- left column -->\n                  <div class=\"col-md-4\">\n                    <div class=\"text-center\">\n                      <div class=\"inset\"><img src=\"../../../assets/images/icons/person-icon.png\"></div>\n                    </div>\n                    <br>\n                    <h1 class=\"text-center\">Change password</h1>\n\n                    <form class=\"form-horizontal text-center\" role=\"form\" name=\"confirmPasswordChange\">\n                      <div class=\"form-group\">\n                        <label class=\"col-md-12 control-label\">Enter new password:</label>\n                        <div class=\"col-md-12\">\n                          <input class=\"form-control text-center\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"******\">\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"col-md-3 control-label\"></label>\n                        <div class=\"col-md-12\">\n                          <input (click)=\"changePassword()\" type=\"submit\" class=\"btn btn-primary confirm-button\" value=\"Confirm change\">\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n\n                  <!-- edit form column -->\n                  <div class=\"col-md-8 personal-info\">\n                    <div *ngIf=\"errorMessage\" class=\"alert alert-info alert-dismissable\">\n                      <a class=\"panel-close close\" data-dismiss=\"alert\">×</a>\n                      <i class=\"fa fa-coffee\"></i>\n                      {{ errorMessage }}\n                    </div>\n                    <form class=\"form-horizontal\" role=\"form\" name=\"savePersonalDetails\">\n                      <div class=\"form-group\">\n                        <label class=\"col-lg-3 control-label\">Name:</label>\n                        <div class=\"col-lg-8\">\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"col-lg-3 control-label\">Email:</label>\n                        <div class=\"col-lg-8\">\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"col-md-3 control-label\">Username:</label>\n                        <div class=\"col-md-8\">\n                          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" required>\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label class=\"col-md-3 control-label\"></label>\n                        <div class=\"col-md-8\">\n                          <input type=\"submit\" (click)=\"saveChanges()\" class=\"btn btn-primary confirm-button\" value=\"Save Changes\">\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n              </div>\n            </div>\n            <hr>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].User.current();
        this.name = this.currentUser.attributes['name'];
        this.email = this.currentUser.getEmail();
        this.username = this.currentUser.getUsername();
    };
    ProfileComponent.prototype.saveChanges = function () {
        if (this.name && this.username && this.email) {
            var self_1 = this;
            this.currentUser.set('name', this.name);
            this.currentUser.setEmail(this.email);
            this.currentUser.setUsername(this.username);
            this.currentUser.save(null, {
                success: function (user) {
                    self_1.errorMessage = 'Your changes have been successfully saved';
                },
                error: function (user, error) {
                    self_1.errorMessage = 'Failed to save your changes, with error code: ' + error.message;
                }
            });
        }
        else {
            this.errorMessage = 'Please fill in all fields and try again!';
        }
    };
    ProfileComponent.prototype.changePassword = function () {
        if (this.password) {
            var self_2 = this;
            this.currentUser.setPassword(this.password);
            this.currentUser.save(null, {
                success: function (user) {
                    self_2.errorMessage = 'Password has been successfully changed';
                },
                error: function (user, error) {
                    self_2.errorMessage = 'Failed to change password, with error code: ' + error.message;
                }
            });
        }
        else {
            this.errorMessage = 'Password field cannot be empty';
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../dashboard/src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-lg-custom {\n    width: 150px;\n}\n\n.phone-image {\n    min-height: 250px;\n    background-image: url(" + __webpack_require__("../../../../../dashboard/src/assets/images/static/android-phone.jpg") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 270px;\n}\n\n.custom-bg {\n    background-color: #F3F6FA;\n}\n\n.margin-10 {\n    padding-top: 20px;\n}\n\n.current-time {\n    font-size: 40px;\n    margin-bottom: -8px;\n    text-align: center;\n    color: #FFFFFF;\n}\n\n.current-date {\n    top: 250px;\n    width: 100%;\n    font-size: 7px;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    text-align: center;\n}\n\n.phone-preview-min-width {\n    min-width: 289px;\n    max-width: 289px;\n}\n\n.notification {\n    min-width: 180px;\n    max-width: 180px;\n    margin: 20px auto;\n}\n\n.notification-box {\n    background: #FFFFFF;\n    box-shadow: 0 1px 1px rgba(0,0,0,.24);\n    padding: 20px 10px 0 40px;\n    min-height: 38px;\n    max-height: 50px;\n    overflow: hidden;\n}\n\n.notification-preview {\n    margin: 0 15%;\n    margin-top: 50px;\n    min-width: 180px;\n    position: absolute;\n}\n\n.app-icon {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    background: #169cee;\n    margin-top: -15px;\n    margin-left: -30px;\n}\n\n.app-time {\n    top: 9px;\n    right: 6px;\n    color: rgba(0,0,0,.5);\n    font-size: 8px;\n}\n\n.message {\n    color: rgba(0,0,0,.5);\n    font-size: 10px;\n    text-align: left;\n}\n\n.notification {\n    margin-left: -10px;\n    margin-right: -10px;\n    margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-12\">\n    <div class=\"card min-card-width\">\n      <div class=\"card-header bg-blue text-white text-center\">\n        <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n        Send push notification\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-body\">\n          <div *ngIf=\"msg\"\n            [class.alert-success]=\"success\"\n            [class.alert-danger]=\"!success\"\n            class=\"alert alert-dismissible fade show\"\n            role=\"alert\">\n              <button (click)=\"closeAlert()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              {{ msg }}\n          </div>\n          <form>\n            <div class=\"form-group\">\n              <label for=\"message\">MESSAGE</label>\n              <textarea [(ngModel)]=\"message\" name=\"message\" id=\"message\" cols=\"30\" rows=\"3\" class=\"form-control\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"audience\">AUDIENCE </label>\n              <select [(ngModel)]=\"audience\" name=\"audience\" id=\"audience\" class=\"form-control\">\n                <option value=\"all\">All</option>\n                <option value=\"location\">By location</option>\n              </select>\n            </div>\n            <div *ngIf=\"audience === 'location'\" class=\"form-group\"><label for=\"location\">LOCATION</label>\n              <select [(ngModel)]=\"location\" name=\"location\" id=\"location\" class=\"form-control\">\n                <option *ngFor=\"let location of locations\" value=\"{{ location }}\">{{ location }}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <div *ngIf=\"showProgressBar\" class=\"transparent-loader\"></div>\n              <button (click)=\"sendPushNotification()\" type=\"button\" class=\"btn btn-lg-custom btn-outline-info pull-right\">\n                SEND\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 col-12\">\n      <div class=\"card phone-preview-min-width\">\n        <div class=\"card-header bg-blue text-white text-center\">Preview</div>\n        <div class=\"card-block\">\n          <div class=\"margin-10 custom-bg\">\n            <div class=\"card-body custom-bg phone-image\">\n              <div class=\"notification-preview text-center\">\n                <div class=\"current-time\"> {{ today | date: 'HH:mm' }} </div>\n                <div class=\"current-date\"> {{ today | date: 'EEEE, MMMM dd' }} </div>\n                <div class=\"notification\">\n                  <div class=\"notification-box\">\n                    <div class=\"app-icon\"></div>\n                    <div class=\"app-name\">Citizen Reporter</div>\n                    <div class=\"app-time\"></div>\n                    <div class=\"message\"> {{ message }} </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_notifications_send_push_notification_service__ = __webpack_require__("../../../../../dashboard/src/app/services/notifications/send-push-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notifications_get_locations_service__ = __webpack_require__("../../../../../dashboard/src/app/services/notifications/get-locations.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PushNotificationsComponent = (function () {
    function PushNotificationsComponent(sendPushNotificationsService, getLocationsService) {
        this.sendPushNotificationsService = sendPushNotificationsService;
        this.getLocationsService = getLocationsService;
        this.today = new Date();
        this.locations = [];
    }
    PushNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showProgressBar = false;
        this.success = false;
        this.getLocationsService.getLocations().subscribe(function (location) { return _this.locations.push(location); });
    };
    PushNotificationsComponent.prototype.closeAlert = function () {
        this.msg = null;
        this.showProgressBar = false;
    };
    PushNotificationsComponent.prototype.sendPushNotification = function () {
        var _this = this;
        var audience;
        if (!this.message) {
            this.msg = 'Please provide a push notification message!';
            this.success = false;
            return;
        }
        switch (this.audience) {
            case 'all':
                audience = ({
                    field: 'deviceType',
                    value: 'android'
                });
                break;
            case 'location':
                if (!this.location) {
                    this.msg = 'Please provide a location!';
                    this.success = false;
                    return;
                }
                audience = ({
                    field: 'timeZone',
                    value: this.location
                });
                break;
        }
        this.showProgressBar = true;
        this.sendPushNotificationsService.sendPushNotification(this.message, audience)
            .then(function (result) {
            _this.msg = 'Push notification sent successfully';
            _this.success = true;
            _this.showProgressBar = false;
        }).catch(function (err) {
            _this.msg = err;
            _this.success = false;
            _this.showProgressBar = false;
        });
    };
    return PushNotificationsComponent;
}());
PushNotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-push-notifications',
        template: __webpack_require__("../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/push-notifications/push-notifications.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_notifications_send_push_notification_service__["a" /* SendPushNotificationService */], __WEBPACK_IMPORTED_MODULE_2__services_notifications_get_locations_service__["a" /* GetLocationsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_notifications_send_push_notification_service__["a" /* SendPushNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_notifications_send_push_notification_service__["a" /* SendPushNotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notifications_get_locations_service__["a" /* GetLocationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_notifications_get_locations_service__["a" /* GetLocationsService */]) === "function" && _b || Object])
], PushNotificationsComponent);

var _a, _b;
//# sourceMappingURL=push-notifications.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/stories/stories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-header {\n    background-color: #3B4255 !important;\n    color: #A6A8B9 !important;\n    text-align: center;\n}\n\n.selected-row {\n    background-color:#E9ECEF !important;\n    cursor: pointer;\n}\n\n.selected-page {\n    background-color: #E9ECEF !important;\n}\n\n.filter-icon {\n    width: 20px;\n    opacity: 0.46;\n}\n\n.content-scroll {\n    max-height: 650px;\n    overflow: scroll;\n}\n\n.left-15 {\n    margin-left: 20px;\n    margin-top: -20px;\n    margin-bottom: 25px;\n    cursor: pointer;\n}\n\n.even-z-index {\n    z-index: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/stories/stories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-8 col-12\">\n    <div class=\"card min-card-width\">\n      <div class=\"card-header bg-blue text-white text-center\">\n        <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n        {{ title }}\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-body content-scroll\">\n          <div class=\"col-5 pull-right form-group\">\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control even-z-index\" name=\"searchString\"\n                    placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\n                  <div class=\"input-group-addon\">\n                    <i>\n                      <img class=\"filter-icon\" src=\"./../../../assets/images/icons/filter-icon.png\"  />\n                    </i>\n                  </div>\n              </div>\n          </div>\n          <table class=\"table table-hover\">\n            <tr class=\"table-header text-white\">\n              <th> Title </th>\n              <th> Author </th>\n              <th> Location </th>\n              <th> Creation Date </th>\n              <th> Description </th>\n            </tr>\n            <tr class=\"story-row\"\n              *ngFor=\"let story of stories | filter : 'title' : searchString;\"\n              (click)=\"clickStory(story)\"\n              [class.selected-row]=\"selectedStory === story\">\n              <td> {{ story.title }} </td>\n              <td> {{ story.who }} </td>\n              <td> {{ story.cachedLocation }} </td>\n              <td> {{ story.createdAt | date: 'dd/MM/yyyy' }} </td>\n              <td> {{ story.summary }} </td>\n            </tr>\n          </table>\n        </div>\n        <nav>\n          <ul class=\"pagination left-15\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" (click)=\"loadMoreStories(-1)\">\n                Previous\n              </a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of pages\">\n              <a class=\"page-link\" [class.selected-page]=\"currentPage === page\" (click)=\"loadMoreStories(page)\"> {{ page }}</a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" (click)=\"loadMoreStories(0)\">\n                Next\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 col-12\">\n    <div class=\"card min-card-width\">\n      <div class=\"card-header bg-blue text-white text-center\">Attached Media Files</div>\n      <div class=\"card-block\">\n        <div class=\"card-body\">\n            <app-story-media [mediaFiles]=\"mediaFiles\" *ngIf=\"selectedStory\"></app-story-media>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/stories/stories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stories_get_stories_service__ = __webpack_require__("../../../../../dashboard/src/app/services/stories/get-stories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_story_model__ = __webpack_require__("../../../../../dashboard/src/app/models/story.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pagination_paginate_service__ = __webpack_require__("../../../../../dashboard/src/app/services/pagination/paginate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_stories_story_media_service__ = __webpack_require__("../../../../../dashboard/src/app/services/stories/story-media.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoriesComponent = (function () {
    function StoriesComponent(storiesService, paginateService, storyMediaService) {
        this.storiesService = storiesService;
        this.paginateService = paginateService;
        this.storyMediaService = storyMediaService;
        this.title = 'Stories';
        this.stories = [];
        this.mediaFiles = new __WEBPACK_IMPORTED_MODULE_2__models_story_model__["a" /* StoryMedia */]();
    }
    StoriesComponent.prototype.ngOnInit = function () {
        // show 10 stories per page
        this.limit = 10;
        this.offset = 0;
        this.loadStories();
    };
    StoriesComponent.prototype.loadStories = function () {
        var _this = this;
        // first gets the total count of the stories,
        // then queries the data basing on the limit and offest
        // paginates the result
        this.stories = [];
        this.storiesService.countStories().then(function (count) {
            _this.paginator = _this.paginateService.paginateData(count, _this.limit, _this.offset);
            _this.totalCount = count;
            _this.currentPage = _this.paginator.currentPage;
            _this.pages = _this.paginator.pages;
            _this.storiesService.getStories(_this.limit, _this.offset)
                .subscribe(function (story) { return _this.stories.push(story); }, function (err) { return console.log(err); });
        }, function (err) { return console.log("Error: " + err); });
    };
    StoriesComponent.prototype.clickStory = function (story) {
        var _this = this;
        // fetches the story media files from the parse server
        var result = ({ image: [], audio: [], video: [] });
        this.selectedStory = story;
        this.storyMediaService.getMediaFiles(story.id).subscribe(function (url) {
            var ext = url.substr(url.lastIndexOf('.') + 1);
            switch (ext) {
                case 'jpg':
                    result.image.push(url);
                    break;
                case 'wav':
                    result.audio.push(url);
                    break;
                case 'mp4':
                    result.video.push(url);
                    break;
            }
        }, function (err) { return console.log(err); }, function () { return _this.mediaFiles = result; });
    };
    StoriesComponent.prototype.loadMoreStories = function (page) {
        var prevOffset = this.offset;
        this.offset = this.paginateService.getOffset(page, this.limit, this.currentPage);
        if (this.offset >= this.totalCount) {
            this.offset = prevOffset; // offset shouldn't be greater than the itemCount
        }
        this.loadStories();
    };
    return StoriesComponent;
}());
StoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-stories',
        template: __webpack_require__("../../../../../dashboard/src/app/components/stories/stories.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/stories/stories.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_stories_get_stories_service__["a" /* GetStoriesService */], __WEBPACK_IMPORTED_MODULE_3__services_pagination_paginate_service__["a" /* PaginateService */], __WEBPACK_IMPORTED_MODULE_4__services_stories_story_media_service__["a" /* StoryMediaService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stories_get_stories_service__["a" /* GetStoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stories_get_stories_service__["a" /* GetStoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_pagination_paginate_service__["a" /* PaginateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_pagination_paginate_service__["a" /* PaginateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_stories_story_media_service__["a" /* StoryMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_stories_story_media_service__["a" /* StoryMediaService */]) === "function" && _c || Object])
], StoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=stories.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/story-media/story-media.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".story-image {\n    width: 100%;\n    min-height: 60px;\n}\n\n.top-10 {\n    margin-top: 10px;\n}\n\n.attachment-header {\n    background-color: #36A495;\n    padding: 10px;\n    color: #FFFFFF;\n}\n\n.content-scroll {\n    max-height: 650px;\n    overflow: scroll;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/story-media/story-media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-scroll\">\n  <div *ngIf=\"mediaFiles.image?.length > 0\">\n    <h2 class=\"attachment-header\"> Image Data </h2>\n    <div class=\"rounded story-image story-loader top-10\" *ngFor=\"let image of mediaFiles.image\">\n      <img class=\"rounded story-image\" src=\"{{ image }}\"/>\n    </div>\n  </div>\n\n  <div *ngIf=\"mediaFiles.video?.length > 0\">\n    <h2 class=\"attachment-header top-10\"> Video Data </h2>\n    <div class=\"top-10\" *ngFor=\"let video of mediaFiles.video\">\n      <video width=\"100%\" height=\"240\" controls>\n          <source src=\"{{ video }}\" type=\"video/mp4\">\n      </video>\n    </div>\n  </div>\n\n  <div *ngIf=\"mediaFiles.audio?.length > 0\">\n    <h2 class=\"attachment-header top-10\"> Audio Data </h2>\n    <div class=\"top-10\" *ngFor=\"let audio of mediaFiles.audio\">\n      <audio controls>\n        <source src=\"{{ audio }}\" type=\"audio/mpeg\">\n      </audio>\n    </div>\n  </div>\n\n  <div class=\"text-center\" \n    *ngIf=\"!mediaFiles.image?.length && !mediaFiles.video?.length && !mediaFiles.audio?.length\">\n    No media files attached\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/story-media/story-media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryMediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_story_model__ = __webpack_require__("../../../../../dashboard/src/app/models/story.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stories_story_media_service__ = __webpack_require__("../../../../../dashboard/src/app/services/stories/story-media.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryMediaComponent = (function () {
    function StoryMediaComponent(storyMediaService) {
        this.storyMediaService = storyMediaService;
    }
    StoryMediaComponent.prototype.ngOnInit = function () { };
    return StoryMediaComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_story_model__["a" /* StoryMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_story_model__["a" /* StoryMedia */]) === "function" && _a || Object)
], StoryMediaComponent.prototype, "mediaFiles", void 0);
StoryMediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-story-media',
        template: __webpack_require__("../../../../../dashboard/src/app/components/story-media/story-media.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/story-media/story-media.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_stories_story_media_service__["a" /* StoryMediaService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_stories_story_media_service__["a" /* StoryMediaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stories_story_media_service__["a" /* StoryMediaService */]) === "function" && _b || Object])
], StoryMediaComponent);

var _a, _b;
//# sourceMappingURL=story-media.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/user-account/user-account.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-form {\n    width: 50%;\n    margin: 0 auto;\n}\n\n.center-button {\n    width: 50%;\n    margin: 0 auto;\n    display: inherit;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/user-account/user-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"admin\" class=\"row\">\n    <div class=\"col-md-12 col-12\">\n      <div class=\"card min-card-width\">\n        <div class=\"card-header bg-blue text-white text-center\">\n          <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n          <h1>Create Account</h1>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"card-body content-scroll\">\n      \n            <div *ngIf=\"msg\"\n              [class.alert-success]=\"success\"\n              [class.alert-danger]=\"!success\"\n              class=\"col-lg-8 center-form alert alert-dismissible fade show\"\n              role=\"alert\">\n              <button (click)=\"closeAlert()\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n              {{ msg }}\n            </div>\n\n            <form class=\"form-horizontal center-form\" role=\"form\" name=\"savePersonalDetails\">\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">Name:</label>\n                <div class=\"col-lg-12\">\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"name\" name=\"name\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">Email:</label>\n                <div class=\"col-lg-12\">\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"email\" name=\"email\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\">Username:</label>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"username\" name=\"username\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\" for=\"role\">Role: </label>\n                <div class=\"col-md-12\">\n                  <select [(ngModel)]=\"role\" name=\"role\" id=\"role\" class=\"form-control\">\n                    <option value=\"Administrator\">Administrator</option>\n                    <option value=\"Editor\">Editor</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\">Password:</label>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\">Confirm password:</label>\n                <div class=\"col-md-12\">\n                  <input class=\"form-control\" type=\"password\" [(ngModel)]=\"confirmPassword\" name=\"confirmPassword\" required>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-4 control-label\"></label>\n                <div class=\"col-md-12\">\n                  <input type=\"submit\" (click)=\"createAccount()\" class=\"btn btn-lg-custom btn-outline-info center-button\" value=\"Create Account\">\n                </div>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<div *ngIf=\"!admin\" class=\"jumbotron\">\n  You are not allowed to access this page!\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/user-account/user-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_create_user_create_user_service__ = __webpack_require__("../../../../../dashboard/src/app/services/create-user/create-user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAccountComponent = (function () {
    function UserAccountComponent(createUserService) {
        this.createUserService = createUserService;
    }
    UserAccountComponent.prototype.ngOnInit = function () {
        this.success = false;
        if (localStorage.getItem('role') === 'Administrator') {
            this.admin = true;
        }
    };
    UserAccountComponent.prototype.createAccount = function () {
        var _this = this;
        if (this.password !== this.confirmPassword) {
            this.msg = 'Passwords don\'t match!';
            this.success = false;
            return;
        }
        if (this.email === '' || this.username === '' || this.password === '' || this.role === '') {
            this.msg = 'Enter required fields!';
            this.success = false;
            return;
        }
        if (!this.validateEmail(this.email)) {
            this.msg = 'Invalid Email!';
            this.success = false;
            return;
        }
        var nameArr = this.name.split(' ');
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            role: this.role,
            password: this.password,
            firstname: nameArr[0],
            lastname: nameArr[1]
        };
        this.createUserService.CreateUser(user).then(function (result) {
            _this.msg = 'Account created successfully.';
            _this.success = true;
            _this.name = _this.email = _this.username = _this.role = _this.password = _this.confirmPassword = null;
        }).catch(function (err) {
            console.log(err);
            _this.msg = err;
            _this.success = false;
        });
    };
    UserAccountComponent.prototype.validateEmail = function (email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    };
    UserAccountComponent.prototype.closeAlert = function () {
        this.msg = null;
    };
    return UserAccountComponent;
}());
UserAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-account',
        template: __webpack_require__("../../../../../dashboard/src/app/components/user-account/user-account.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/user-account/user-account.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_create_user_create_user_service__["a" /* CreateUserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_create_user_create_user_service__["a" /* CreateUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_create_user_create_user_service__["a" /* CreateUserService */]) === "function" && _a || Object])
], UserAccountComponent);

var _a;
//# sourceMappingURL=user-account.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-header {\n    background-color: #484A69 !important;\n    color: #A6A8B9 !important;\n    text-align: left;\n}\n\n.selected-row {\n    background-color:#E9ECEF !important;\n    cursor: pointer;\n}\n\n.selected-page {\n    background-color: #E9ECEF !important;\n}\n\n.filter-icon {\n    width: 20px;\n    opacity: 0.46;\n}\n\n.content-scroll {\n    max-height: 650px;\n    overflow: scroll;\n}\n\n.left-15 {\n    margin-left: 20px;\n    margin-top: -20px;\n    margin-bottom: 25px;\n    cursor: pointer;\n}\n\n.even-z-index {\n    z-index: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card min-card-width\">\n      <div class=\"card-header bg-blue text-white text-center\">\n        <img class=\"card-menu-icon\" src=\"./../../assets/images/icons/menu.png\">\n        Users\n      </div>\n      <div class=\"card-block\">\n        <div class=\"card-body content-scroll\">\n          <div class=\"col-5 pull-right form-group\">\n              <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control even-z-index\" name=\"searchString\"\n                    placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\n                  <div class=\"input-group-addon\">\n                    <i>\n                      <img class=\"filter-icon\" src=\"./../../../assets/images/icons/filter-icon.png\"  />\n                    </i>\n                  </div>\n              </div>\n          </div>\n          <table class=\"table table-hover\">\n            <tr class=\"table-header text-white\">\n              <th> Name </th>\n              <th> First name </th>\n              <th> Last name </th>\n              <th> Username </th>\n              <th> Creation Date </th>\n            </tr>\n            <tr class=\"story-row\"\n              *ngFor=\"let user of users | filter : 'username' : searchString;\"\n              (click)=\"clickUser(user)\"\n              [class.selected-row]=\"selectedUser === user\">\n              <td> {{ user.name }} </td>\n              <td> {{ user.firstname }} </td>\n              <td> {{ user.lastname }} </td>\n              <td> {{ user.username }} </td>\n              <td> {{ user.createdAt | date: 'dd/MM/yyyy' }} </td>\n            </tr>\n          </table>\n        </div>\n        <nav>\n          <ul class=\"pagination left-15\">\n            <li class=\"page-item\">\n              <a class=\"page-link\" (click)=\"loadMoreUsers(-1)\">\n                Previous\n              </a>\n            </li>\n            <li class=\"page-item\" *ngFor=\"let page of pages\">\n              <a class=\"page-link\" [class.selected-page]=\"currentPage === page\" (click)=\"loadMoreUsers(page)\"> {{ page }}</a>\n            </li>\n            <li class=\"page-item\">\n              <a class=\"page-link\" (click)=\"loadMoreUsers(0)\">\n                Next\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__ = __webpack_require__("../../../../../dashboard/src/app/services/pagination/paginate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__ = __webpack_require__("../../../../../dashboard/src/app/services/users/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(usersService, paginateService) {
        this.usersService = usersService;
        this.paginateService = paginateService;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.limit = 10;
        this.offset = 0;
        this.loadUsers();
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        this.users = [];
        this.usersService.countUsers().then(function (count) {
            _this.paginator = _this.paginateService.paginateData(count, _this.limit, _this.offset);
            _this.totalCount = count;
            _this.currentPage = _this.paginator.currentPage;
            _this.pages = _this.paginator.pages;
            _this.usersService.getUsers(_this.limit, _this.offset)
                .subscribe(function (user) { return _this.users.push(user); }, function (err) { return console.log(err); });
        }, function (err) { return console.log("Error: " + err); });
    };
    UsersComponent.prototype.clickUser = function (user) {
        this.selectedUser = user;
    };
    UsersComponent.prototype.loadMoreUsers = function (page) {
        var prevOffset = this.offset;
        this.offset = this.paginateService.getOffset(page, this.limit, this.currentPage);
        if (this.offset >= this.totalCount) {
            this.offset = prevOffset; // offset shouldn't be greater than the itemCount
        }
        this.loadUsers();
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../dashboard/src/app/components/users/users.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/users/users.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pagination_paginate_service__["a" /* PaginateService */]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/vertical-bar-chart/entry.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entry; });
/**
 * Created by edwinkato on 10/30/17.
 */
var Entry = (function () {
    function Entry(name, value) {
        this.name = name;
        this.value = value;
    }
    return Entry;
}());

//# sourceMappingURL=entry.model.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-circular-spinner *ngIf=\"!loaded\"></app-circular-spinner>\n  <div *ngIf=\"loaded\">\n    <ngx-charts-bar-vertical\n      [view]=\"[width, height]\"\n      [scheme]=\"colorScheme\"\n      [results]=\"single\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [legend]=\"showLegend\"\n      [yAxis]=\"showYAxis\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-vertical>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalBarChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entry_model__ = __webpack_require__("../../../../../dashboard/src/app/components/vertical-bar-chart/entry.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils__ = __webpack_require__("../../../../../dashboard/src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerticalBarChartComponent = (function () {
    function VerticalBarChartComponent() {
        this.single = [];
        this.entries = [];
        this.showLegend = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Day';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Downloads';
        this.colors = ['#C6E8DB'];
        this.colorScheme = {
            domain: Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["g" /* shuffleColors */])(this.colors)
        };
        this.populateWeeklyBarGraphData(this.data);
        Object.assign(this, { single: this.single });
    }
    VerticalBarChartComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    VerticalBarChartComponent.prototype.ngOnInit = function () {
        if (this.osOrCountryChart === 'CountryChart') {
            this.xAxisLabel = 'Country';
            this.yAxisLabel = 'Number';
            this.showLegend = false;
        }
        else if (this.osOrCountryChart === 'OsChart') {
            this.xAxisLabel = 'Android Version';
            this.yAxisLabel = 'Number';
            this.showLegend = false;
        }
        if (this.chart === 'WeeklyUsers') {
            this.yAxisLabel = 'Users';
        }
    };
    VerticalBarChartComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var simpleChange = changes[propName];
            if (propName === 'data') {
                this.populateWeeklyBarGraphData(simpleChange.currentValue);
            }
        }
    };
    VerticalBarChartComponent.prototype.populateWeeklyBarGraphData = function (appSummary) {
        var dictionary = {};
        if (appSummary) {
            for (var i = 0; i < appSummary.length; i++) {
                var formattedDate = (appSummary[i].dateTime).substring(0, 10);
                var day = new Date(formattedDate);
                this.addToDictionary(appSummary[i], day, dictionary);
            }
            if (this.chart === 'WeeklyUsers') {
                this.extrapolateValuesBasedOnDate(dictionary);
            }
            if (this.chart === 'WeeklyDownloads') {
                this.extrapolateValuesBasedOnDate(dictionary);
            }
            this.single = this.entries;
        }
        else {
            this.single = [];
        }
    };
    VerticalBarChartComponent.prototype.addToDictionary = function (appSummary, day, dictionary) {
        if (this.chart === 'WeeklyUsers') {
            dictionary[day.getDay()] = appSummary.activeDevices;
        }
        else if (this.chart === 'WeeklyDownloads') {
            dictionary[day.getDay()] = appSummary.newDevices;
        }
        else if (this.chart === 'CountryChart') {
            this.entries.push(new __WEBPACK_IMPORTED_MODULE_1__entry_model__["a" /* Entry */](appSummary.country, appSummary.activeDevices));
        }
        else if (this.chart === 'OsChart') {
            this.entries.push(new __WEBPACK_IMPORTED_MODULE_1__entry_model__["a" /* Entry */](appSummary.os, appSummary.activeDevices));
        }
    };
    VerticalBarChartComponent.prototype.extrapolateValuesBasedOnDate = function (dictionary) {
        this.entries = [];
        var date = new Date();
        for (var iterator = 0; iterator < 7; iterator++) {
            date.setDate(date.getDate() - 1);
            var key = date.getDay();
            if (!(key in dictionary)) {
                dictionary[key] = 0;
            }
        }
        for (var dayIterator = 7; dayIterator > 0; dayIterator--) {
            var day = new Date();
            day.setDate(new Date().getDate() - dayIterator);
            var dayKey = day.getDay();
            this.entries.push(new __WEBPACK_IMPORTED_MODULE_1__entry_model__["a" /* Entry */](Object(__WEBPACK_IMPORTED_MODULE_2__utils_utils__["b" /* getDayOfTheWeek */])(dayKey), dictionary[dayKey]));
        }
    };
    return VerticalBarChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], VerticalBarChartComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], VerticalBarChartComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], VerticalBarChartComponent.prototype, "data", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], VerticalBarChartComponent.prototype, "chart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], VerticalBarChartComponent.prototype, "osOrCountryChart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], VerticalBarChartComponent.prototype, "loaded", void 0);
VerticalBarChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vertical-bar-chart',
        template: __webpack_require__("../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.html"),
        styles: [__webpack_require__("../../../../../dashboard/src/app/components/vertical-bar-chart/vertical-bar-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VerticalBarChartComponent);

//# sourceMappingURL=vertical-bar-chart.component.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/guards/authentication/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/**
 * Created by edwinkato on 11/6/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/models/states.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return States; });
var States;
(function (States) {
    States[States["success"] = 0] = "success";
    States[States["danger"] = 1] = "danger";
    States[States["warning"] = 2] = "warning";
    States[States["info"] = 3] = "info";
})(States || (States = {}));
//# sourceMappingURL=states.enum.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/models/story.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Story */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryMedia; });
var Story = (function () {
    function Story() {
    }
    return Story;
}());

var StoryMedia = (function () {
    function StoryMedia() {
    }
    return StoryMedia;
}());

//# sourceMappingURL=story.model.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (item) { return item[field].toLowerCase().includes(value.toLowerCase()); });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/assignments/assignment-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toAssignment;
function toAssignment(assignment) {
    return ({
        id: assignment.id,
        featuredImage: assignment.get('featured_image').url(),
        author: assignment.get('author'),
        updatedAt: assignment.get('updatedAt'),
        location: assignment.get('location'),
        title: assignment.get('title'),
        deadline: assignment.get('deadline'),
        createdAt: assignment.get('createdAt'),
        description: assignment.get('description')
    });
}
//# sourceMappingURL=assignment-utils.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/assignments/create-assignment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAssignmentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assignment_utils__ = __webpack_require__("../../../../../dashboard/src/app/services/assignments/assignment-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CreateAssignmentService = (function () {
    function CreateAssignmentService() {
    }
    CreateAssignmentService.prototype.createAssignment = function (formData) {
        var assignemntsObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('Assignment');
        var featureImage = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].File(formData.featureImage.name, formData.featureImage);
        var newAssignment = new assignemntsObj();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            newAssignment.save({
                featured_image: featureImage,
                title: formData.title,
                author: formData.author,
                location: formData.location,
                description: formData.description,
                deadline: formData.deadline,
                createdAt: new Date(),
                updatedAt: new Date()
            }).then(function (assignment) {
                observer.next(Object(__WEBPACK_IMPORTED_MODULE_3__assignment_utils__["a" /* toAssignment */])(assignment));
                observer.complete();
            }, function (obj, err) { return observer.error("Error: " + err); });
        });
    };
    return CreateAssignmentService;
}());
CreateAssignmentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CreateAssignmentService);

//# sourceMappingURL=create-assignment.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/assignments/get-assignments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetAssignmentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assignment_utils__ = __webpack_require__("../../../../../dashboard/src/app/services/assignments/assignment-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GetAssignmentsService = (function () {
    function GetAssignmentsService() {
    }
    GetAssignmentsService.prototype.getAssignments = function (limit, offset) {
        var assignemntsObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('Assignment');
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(assignemntsObj);
        query.descending('createdAt');
        query.skip(offset);
        query.limit(limit);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            query.find().then(function (stories) {
                stories.map(function (item) { return observer.next(Object(__WEBPACK_IMPORTED_MODULE_3__assignment_utils__["a" /* toAssignment */])(item)); })
                    .catch(function (err) { return observer.error("Error: " + err); });
                observer.complete();
            }, function (error) {
                observer.error("Error: " + error);
            });
        });
    };
    GetAssignmentsService.prototype.countAssignments = function () {
        var assignmentsObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('Assignment');
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(assignmentsObj);
        return new Promise(function (resolve, reject) {
            query.count({
                success: function (count) { return resolve(count); },
                error: function (err) { return reject(err); }
            });
        });
    };
    return GetAssignmentsService;
}());
GetAssignmentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GetAssignmentsService);

//# sourceMappingURL=get-assignments.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/audience-analytics/audience-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudienceAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("../../../../../dashboard/src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AudienceAnalyticsService = (function () {
    function AudienceAnalyticsService(http) {
        this.http = http;
        this.analyticsSummaryUrl = 'https://api-metrics.flurry.com/public/v1/data/appUsage/all' +
            '/app?metrics=sessions,activeDevices,newDevices,timeSpent' +
            ',averageTimePerDevice,averageTimePerSession' +
            '&dateTime=2017-10-01/' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* formatDate */])(new Date());
        this.dailyStatisticsUrl = 'https://api-metrics.flurry.com/public/v1/data/appUsage/all' +
            '/app?metrics=activeDevices,newDevices&dateTime=' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["d" /* getTodaysDateRange */])();
        this.weeklyStatisticsUrl = 'https://api-metrics.flurry.com/public/v1/data/' +
            'appUsage/day/app?metrics=activeDevices,newDevices&dateTime=' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["e" /* getWeekDateRange */])();
        this.countryStatisticsUrl = 'https://api-metrics.flurry.com/public/v1/data/' +
            'appUsage/hour/country?metrics=activeDevices,newDevices&' +
            'dateTime=2017-10-01/' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* formatDate */])(new Date());
        this.appVersionStatisticsUrl = 'https://api-metrics.flurry.com/public/v1/' +
            'data/technical/day/app/osVersion?metrics=activeDevices,newDevices,' +
            'timeSpent,averageTimePerDevice,averageTimePerSession&' +
            'dateTime=2017-10-01/' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* formatDate */])(new Date());
    }
    AudienceAnalyticsService.prototype.getAppAnalyticsSummary = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.analyticsSummaryUrl);
    };
    AudienceAnalyticsService.prototype.getDailyStatistics = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.dailyStatisticsUrl);
    };
    AudienceAnalyticsService.prototype.getWeeklyStatistics = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.weeklyStatisticsUrl);
    };
    AudienceAnalyticsService.prototype.getCountryStatistics = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.countryStatisticsUrl);
    };
    AudienceAnalyticsService.prototype.getOsVersionStatistics = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.appVersionStatisticsUrl);
    };
    return AudienceAnalyticsService;
}());
AudienceAnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AudienceAnalyticsService);

var _a;
//# sourceMappingURL=audience-analytics.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.showDashboardEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AuthenticationService.prototype.logIn = function (username, password, success, error) {
        __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].User.logIn(username, password).then(function (user) {
            var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(__WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Role);
            query.equalTo('users', user);
            return query.find().then(function (roles) {
                var isAdmin = false;
                roles.every(function (element) {
                    if (element.get('name') === 'Administrator') {
                        isAdmin = true;
                        localStorage.setItem('role', 'Administrator');
                        return false;
                    }
                    else if (element.get('name') === 'Editor') {
                        localStorage.setItem('role', 'Editor');
                        isAdmin = true;
                    }
                    return true;
                });
                if (isAdmin) {
                    localStorage.setItem('currentUser', 'LoggedIn');
                    success();
                }
                else {
                    error();
                }
            });
        }, function (e) {
            error();
        });
    };
    AuthenticationService.prototype.toggleAuthentication = function () {
        this.showDashboard(true);
    };
    AuthenticationService.prototype.logout = function () {
        __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].User.logOut().then(function () { });
        this.showDashboard(false);
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.showDashboard = function (ifShow) {
        this.showDashboardEmitter.emit(ifShow);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/create-user/create-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateUserService = (function () {
    function CreateUserService() {
    }
    CreateUserService.prototype.CreateUser = function (userObj) {
        console.log(userObj);
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(__WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Role);
        query.equalTo('name', userObj.role);
        return new Promise(function (resolve, reject) {
            query.find().then(function (roles) {
                var user = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].User;
                user.set('username', userObj.username);
                user.set('email', userObj.email);
                user.set('password', userObj.password);
                user.set('name', userObj.name);
                user.set('first_name', userObj.firstname);
                user.set('last_name', userObj.lastname);
                user.save(null, {
                    success: function (result) {
                        roles[0].getUsers().add(user);
                        roles[0].save();
                        resolve(result);
                    },
                    error: function (error) {
                        reject(error);
                    }
                });
            }, function (err) { return reject(err); });
        });
    };
    return CreateUserService;
}());
CreateUserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CreateUserService);

//# sourceMappingURL=create-user.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/events-analytics/events-analytics.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsAnalyticsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_utils__ = __webpack_require__("../../../../../dashboard/src/app/utils/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsAnalyticsService = (function () {
    function EventsAnalyticsService(http) {
        this.http = http;
        this.weeklyEventsUrl = 'https://api-metrics.flurry.com/public/v1/data/' +
            'appEvent/day/app/event?metrics=activeDevices,newDevices,timeSpent,' +
            'averageTimePerDevice,averageTimePerSession,' +
            'occurrences&dateTime=' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["e" /* getWeekDateRange */])();
        this.monthlyEventsUrl = 'https://api-metrics.flurry.com/public/v1/data/' +
            'appEvent/day/app/event?metrics=activeDevices,newDevices,timeSpent,' +
            'averageTimePerDevice,averageTimePerSession,' +
            'occurrences&dateTime=' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["c" /* getMonthDateRange */])();
        this.analyticsEventsUrl = 'https://api-metrics.flurry.com/public/v1/data/' +
            'appEvent/all/app/event?metrics=activeDevices,newDevices,timeSpent,' +
            'averageTimePerDevice,averageTimePerSession,' +
            'occurrences&dateTime=2017-10-01/' + Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["a" /* formatDate */])(new Date());
    }
    EventsAnalyticsService.prototype.getEventsSummary = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.analyticsEventsUrl);
    };
    EventsAnalyticsService.prototype.getWeeklyEvents = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.weeklyEventsUrl);
    };
    EventsAnalyticsService.prototype.getMonthlyEvents = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3__utils_utils__["f" /* makeGetHttpRequest */])(this.http, this.monthlyEventsUrl);
    };
    return EventsAnalyticsService;
}());
EventsAnalyticsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], EventsAnalyticsService);

var _a;
//# sourceMappingURL=events-analytics.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/notifications/get-locations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLocationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GetLocationsService = (function () {
    function GetLocationsService() {
    }
    GetLocationsService.prototype.getLocations = function () {
        var locations = [
            'Africa/Kampala',
            'Africa/Nairobi'
        ];
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            locations.forEach(function (location) { return observer.next(location); });
            observer.complete();
        });
    };
    return GetLocationsService;
}());
GetLocationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GetLocationsService);

//# sourceMappingURL=get-locations.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/notifications/send-push-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendPushNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SendPushNotificationService = (function () {
    function SendPushNotificationService() {
    }
    SendPushNotificationService.prototype.sendPushNotification = function (message, audience) {
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(__WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Installation);
        query.equalTo(audience.field, audience.value);
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Push.send({
                where: query,
                data: {
                    alert: message
                }
            }, { useMasterKey: true }).then(function () {
                resolve(true);
            }, function (error) {
                reject(error);
            });
        });
    };
    return SendPushNotificationService;
}());
SendPushNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SendPushNotificationService);

//# sourceMappingURL=send-push-notification.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/pagination/paginate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginateService = (function () {
    function PaginateService() {
    }
    PaginateService.prototype.paginateData = function (totalCount, limit, offset) {
        var pages = []; // stores the page numbers of the results
        var totalPages = Math.ceil(totalCount / limit);
        var currentPage = this.findPage(totalPages, limit, offset);
        if (currentPage < 1) {
            return;
        }
        // display all pages if the total pages are less or equal to 10
        if (totalPages <= 10) {
            for (var i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            // adjust pagination numbers for large pages
            for (var startPage = (currentPage - 4), i = startPage > 0 ? startPage : 1, tempEnd = currentPage + 5, endPage = tempEnd <= totalPages ? tempEnd : totalPages; i <= endPage; i++) {
                pages.push(i);
            }
        }
        return {
            totalPages: totalPages,
            currentPage: currentPage,
            pages: pages
        };
    };
    PaginateService.prototype.findPage = function (pages, limit, offset) {
        for (var i = 1; i <= pages; i++) {
            if (offset < (limit * i)) {
                return i;
            }
        }
        return;
    };
    PaginateService.prototype.getOffset = function (page, limit, currentPage) {
        var offset;
        switch (page) {
            case -1:
                offset = ((currentPage - 2) * limit);
                break;
            case 0:
                offset = ((currentPage) * limit);
                break;
            default:
                offset = ((page - 1) * limit);
                break;
        }
        if (!offset || offset < 0) {
            offset = 0; // avoid negative offsets
        }
        return offset;
    };
    return PaginateService;
}());
PaginateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PaginateService);

//# sourceMappingURL=paginate.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/parse-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../dashboard/src/environments/environment.ts");


__WEBPACK_IMPORTED_MODULE_0_parse__["Parse"].initialize(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].APP_ID);
__WEBPACK_IMPORTED_MODULE_0_parse__["Parse"].masterKey = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].MASTER_KEY;
__WEBPACK_IMPORTED_MODULE_0_parse__["Parse"].serverURL = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].SERVER_URL;
var ParseConfig = (function () {
    function ParseConfig() {
    }
    return ParseConfig;
}());

//# sourceMappingURL=parse-config.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/stories/get-stories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__story_utils__ = __webpack_require__("../../../../../dashboard/src/app/services/stories/story-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var GetStoriesService = (function () {
    function GetStoriesService() {
    }
    GetStoriesService.prototype.getStories = function (limit, offset) {
        var storiesObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('Story');
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(storiesObj);
        query.descending('createdAt');
        query.skip(offset);
        query.limit(limit);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            query.find().then(function (stories) {
                stories.map(function (item) { return observer.next(Object(__WEBPACK_IMPORTED_MODULE_5__story_utils__["a" /* toStory */])(item)); })
                    .catch(function (err) { return observer.error("Error: " + err); });
                observer.complete();
            }, function (error) {
                observer.error("Error: " + error);
            });
        });
    };
    GetStoriesService.prototype.countStories = function () {
        var storiesObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('Story');
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(storiesObj);
        return new Promise(function (resolve, reject) {
            query.count({
                success: function (count) { return resolve(count); },
                error: function (err) { return reject(err); }
            });
        });
    };
    return GetStoriesService;
}());
GetStoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GetStoriesService);

//# sourceMappingURL=get-stories.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/stories/story-media.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryMediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoryMediaService = (function () {
    function StoryMediaService() {
    }
    StoryMediaService.prototype.getMediaFiles = function (storyId) {
        var storyObj = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Story');
        var mediaObj = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('mediaFile');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(mediaObj);
        var story = new storyObj();
        story.id = storyId;
        query.equalTo('parent', story);
        query.descending('createdAt');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            query.find().then(function (mediaFiles) {
                mediaFiles.map(function (mediaFile) { return observer.next(mediaFile.get('remoteFile').url()); });
                observer.complete();
            }, function (error) {
                observer.error("Error: " + error);
            });
        });
    };
    return StoryMediaService;
}());
StoryMediaService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StoryMediaService);

//# sourceMappingURL=story-media.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/stories/story-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toStory;
/* unused harmony export setName */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);


function toStory(story) {
    return ({
        id: story.id,
        uploaded: story.get('uploaded'),
        media: story.get('media'),
        localID: story.get('localID'),
        summary: story.get('summary'),
        author: story.get('author'),
        assignment: story.get('assignment'),
        updatedAt: story.get('updatedAt'),
        cachedLocation: story.get('cachedLocation'),
        title: story.get('title'),
        when: story.get('when'),
        createdAt: story.get('createdAt'),
        sourceApp: story.get('source_app'),
        who: story.get('who')
    });
}
function setName(authorId) {
    var authorName;
    getAuthorName(authorId).subscribe(function (name) { authorName = name; console.log(authorName); }, function (err) { return console.log(err); });
    return authorName;
}
function getAuthorName(authorId) {
    var userObj = __WEBPACK_IMPORTED_MODULE_0_parse__["Parse"].Object.extend('User');
    var query = new __WEBPACK_IMPORTED_MODULE_0_parse__["Parse"].Query(userObj);
    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
        query.get(authorId).then(function (author) {
            observer.next(author.get('first_name') + " " + author.get('last_name'));
            observer.complete();
        }, function (err) { console.log("Error: " + err); });
    });
}
//# sourceMappingURL=story-utils.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/services/users/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__("../../../../parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UsersService = (function () {
    function UsersService() {
    }
    UsersService.prototype.countUsers = function () {
        var userObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Object.extend('User');
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(userObj);
        return new Promise(function (resolve, reject) {
            query.count({
                success: function (count) { return resolve(count); },
                error: function (err) { return reject(err); }
            });
        });
    };
    UsersService.prototype.getUsers = function (limit, offset) {
        var _this = this;
        var userObj = __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].User;
        var query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Parse"].Query(userObj);
        query.descending('createdAt');
        query.skip(offset);
        query.limit(limit);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            query.find().then(function (users) {
                users.map(function (user) { return observer.next(_this.toUser(user)); })
                    .catch(function (err) { return observer.error("Error: " + err); });
                observer.complete();
            }, function (error) { return observer.error("Error: " + error); });
        });
    };
    UsersService.prototype.toUser = function (user) {
        return ({
            id: user.id,
            name: user.get('name'),
            firstname: user.get('first_name'),
            lastname: user.get('last_name'),
            username: user.get('username'),
            email: user.getEmail(),
            emailVerified: user.get('emailVerified'),
            createdAt: user.get('createdAt')
        });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], UsersService);

//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../dashboard/src/app/utils/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
/* unused harmony export getHeaders */
/* harmony export (immutable) */ __webpack_exports__["e"] = getWeekDateRange;
/* harmony export (immutable) */ __webpack_exports__["c"] = getMonthDateRange;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDayOfTheWeek;
/* harmony export (immutable) */ __webpack_exports__["f"] = makeGetHttpRequest;
/* harmony export (immutable) */ __webpack_exports__["d"] = getTodaysDateRange;
/* harmony export (immutable) */ __webpack_exports__["g"] = shuffleColors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../dashboard/src/environments/environment.ts");
/**
 * Created by edwinkato on 10/31/17.
 */


function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return yyyy + '-' + mm + '-' + dd;
}
function getHeaders() {
    var token = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].FLURRY_APP_ANALYTICS_TOKEN;
    var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.set('Authorization', "Bearer " + token);
    return headers;
}
function getWeekDateRange() {
    var today = new Date();
    var previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 7);
    return formatDate(previousDay) + '/' + formatDate(today);
}
function getMonthDateRange() {
    var today = new Date();
    var previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 30);
    return formatDate(previousDay) + '/' + formatDate(today);
}
function getDayOfTheWeek(day) {
    if (day === 0) {
        return 'Mon';
    }
    else if (day === 1) {
        return 'Tue';
    }
    else if (day === 2) {
        return 'Wed';
    }
    else if (day === 3) {
        return 'Thu';
    }
    else if (day === 4) {
        return 'Fri';
    }
    else if (day === 5) {
        return 'Sat';
    }
    else {
        return 'Sun';
    }
}
function makeGetHttpRequest(http, url) {
    return http.get(url, {
        headers: getHeaders()
    }).map(function (response) { return response.json(); });
}
function getTodaysDateRange() {
    var today = new Date();
    var previousDay = new Date(today);
    previousDay.setDate(today.getDate() - 1);
    return formatDate(previousDay) + '/' + formatDate(today);
}
function shuffleColors(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffleColors...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "../../../../../dashboard/src/assets/images/icons/app_icon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "app_icon.14e9a03c7817e12d9b18.png";

/***/ }),

/***/ "../../../../../dashboard/src/assets/images/icons/toggle_back.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAbCAYAAAB1NA+iAAAABGdBTUEAALGPC/xhBQAAAHFJREFUOBFjYCAD/P//34gMbRAtQM1ZQPwPiCtINgSqGUiBwV8gqU20IUDFIJthAKQ5dlQznhAABtBogJGYSLSBgQZK2zAwG0/4YpcC6iQ/1GFGjhoCCwkEPRomiLCAsWgVJsSXymguIa9eQDIEXjMBAKFiyc3GWf/ZAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../dashboard/src/assets/images/static/android-phone.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "android-phone.ed6ab573fd3957f51d31.jpg";

/***/ }),

/***/ "../../../../../dashboard/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// This file's contents will be overwritten by the values in the .env file during build.
// This file's contents will be overwritten by the values in the .env file during build.
var environment = {
    production: true,
    APP_ID: 11235813,
    MASTER_KEY: 11235813,
    SERVER_URL: 'https://creporter-server.herokuapp.com/parse',
    FLURRY_APP_ANALYTICS_TOKEN: 'eyJhbGciOiJIUzI1NiIsImtpZCI6ImZsdXJyeS56dXVsLnByb2Qua2V5c3RvcmUua2V5LjIifQ.eyJpc3MiOiJodHRwczovL3p1dWwuZmx1cnJ5LmNvbTo0NDMvdG9rZW4iLCJpYXQiOjE1MTE5NjA1NDQsImV4cCI6MzMwNjg4NjkzNDQsInN1YiI6IjQwOTc4NyIsImF1ZCI6IjQiLCJ0eXBlIjo0LCJqdGkiOiIyODE1In0.tjwrc23z1-kc3jQXR8bLzUYGvm3De6ms4VZWYatFSnU'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../dashboard/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../dashboard/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../dashboard/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../dashboard/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map