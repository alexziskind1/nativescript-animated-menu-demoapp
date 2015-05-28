var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var observable = require("data/observable");

var MenuViewModel = (function (_super) {
    __extends(MenuViewModel, _super);
    function MenuViewModel() {
        _super.call(this);
        
        
    }
    
    MenuViewModel.prototype.tapMenuItem = function() {
        alert('menu tap');
    };
    
    return MenuViewModel;
})(observable.Observable);
exports.MenuViewModel = MenuViewModel;
exports.menuViewModel = new MenuViewModel();
