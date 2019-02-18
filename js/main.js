Mvc.Control = window.Mvc.Control || {};

Mvc.Control.Main = function (name) {
    let _name = name;

    this.Initialize = function () {
        Mvc.Global.Utils = new Mvc.Control.Utils();
        Mvc.Global.Lang = 'en-us';

        let galleryPage = new Mvc.Control.GalleryPage(_name);
        Mvc.Global.GalleryPage = galleryPage;
        galleryPage.Initialize();
    };
}