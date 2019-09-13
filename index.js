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
var Smaple = /** @class */ (function () {
    function Smaple(num) {
        this.sampleField = num;
    }
    __decorate([
        access(),
        __metadata("design:type", Number)
    ], Smaple.prototype, "sampleField", void 0);
    Smaple = __decorate([
        create,
        __metadata("design:paramtypes", [Number])
    ], Smaple);
    return Smaple;
}());
function create(constructor) {
    console.log("New Instance");
}
function access() {
    return function (target, propertyKey) {
        console.log("field accessed and value added");
    };
}
var smaple = new Smaple(1);
console.log(smaple.sampleField);
console.log(smaple.sampleField);
