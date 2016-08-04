"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyComponent = (function () {
    function MyComponent() {
        this.myModelChange = new core_1.EventEmitter();
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log('i am ready');
        // this.myModel.subscribe(function() {
        // console.log('i am ready');
        // })
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "myModel", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MyComponent.prototype, "myModelChange", void 0);
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n    <h1>{{ myModel }}</h1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.js.map