Mvc.Control = window.Mvc.Control || {};

Mvc.Control.Utils = function () {

    this.GetFeed = function (filters, successCallback) {
        let hasFilter = !!filters;
        Mvc.Global.flickrSuccessCallback = function (jsonResponse) { successCallback(jsonResponse, hasFilter); };

        let params = '?format=json&lang=' + Mvc.Global.Lang + '&jsoncallback=Mvc.Global.flickrSuccessCallback' + filters;
        let scriptFlickrFeed = document.getElementById('scriptFlickrFeed');
        if (scriptFlickrFeed != null) {
            scriptFlickrFeed.parentNode.removeChild(scriptFlickrFeed);
        }
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'scriptFlickrFeed';
        script.src = 'https://api.flickr.com/services/feeds/photos_public.gne' + params;
        document.body.appendChild(script);

    }

    this.GetMonthText = function (month) {
        return Mvc.Global.Resource.months[Mvc.Global.Lang][month];
    }
}