var vmModule = require("./root-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.rootViewModel;
}
exports.pageLoaded = pageLoaded;


function animenuLoaded(args) {
    
}
exports.animenuLoaded = animenuLoaded;