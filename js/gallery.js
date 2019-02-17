Mvc.Control = window.Mvc.Control || {};

Mvc.Control.GalleryPage = function (context) {
    var _name = "GarleryPage";
    var _that = this;

    this.Initialize = function () {
        _that.Open();
    };

    this.Open = function () {
        Mvc.Global.Utils.GetFeed(updateHTML);
    }

    function updateHTML () {
        console.log('todo - build HTML');
    }
}