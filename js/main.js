var Mvc = window.Mvc || {};
Mvc.Control = window.Mvc.Control || {};

Mvc.Control.Main = function (name) {
    var _name = name;

    this.Initialize = function () {
        Mvc.Global = {};
        Mvc.Global.Utils = new Mvc.Control.Utils();
        Mvc.Global.Services = new Mvc.Control.Services();
        Mvc.Global.Lang = 'en-us';

        var galleryPage = new Mvc.Control.GalleryPage(_name);
        galleryPage.Initialize();
    };
}