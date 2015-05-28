var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");

var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        
        this.set("menuText", "\u2630");
        this.set("message", this.counter + " taps left");
    }
    
    
    
    return MainViewModel;
})(observable.Observable);
exports.MainViewModel = MainViewModel;
exports.mainViewModel = new MainViewModel();
