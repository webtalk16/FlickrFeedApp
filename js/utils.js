Mvc.Control = window.Mvc.Control || {};

Mvc.Control.Utils = function () {


    this.GetFeed = function (successCallback) {
        Mvc.Global.Services.GetFlickerFeed('https://api.flickr.com/services/feeds/photos_public.gne', successCallback);
    }
}