var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");

var RootViewModel = (function (_super) {
    __extends(RootViewModel, _super);
    function RootViewModel() {
        _super.call(this);
        
        this.set("menuText", "\u2630");

    }
    
    RootViewModel.prototype.tapAction = function () {
        this.counter--;
        if (this.counter <= 0) {
            this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        }
        else {
            this.set("message", this.counter + " taps left");
        }
    };
    return RootViewModel;
})(observable.Observable);
exports.RootViewModel = RootViewModel;
exports.rootViewModel = new RootViewModel();
