var vmModule = require("./main-view-model");
var aniMenu = require( "./node_modules/nativescript-animated-menu/animatedmenu" );

function mainContentLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}

function menuBtnLoaded(args) {
    var btn = args.object;
    btn.on('tap', aniMenu.menuTriggerAction);
}

exports.mainContentLoaded = mainContentLoaded;
exports.menuBtnLoaded = menuBtnLoaded;

