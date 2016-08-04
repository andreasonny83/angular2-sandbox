"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./components/login.component');
var _404_component_1 = require('./components/404.component');
var dashboard_component_1 = require('./components/dashboard.component');
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'user', children: [
            { path: ':id', component: dashboard_component_1.UserDashbardComponent }
        ] },
    { path: '**', component: _404_component_1.PageNotFoundComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map