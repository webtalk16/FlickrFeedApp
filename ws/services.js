Mvc.Control = window.Mvc.Control || {};

Mvc.Control.Services = function () {
    var _that = this;

    this.wsRequest = function loadDoc(url, successCallback, params, httpType) {
        if (params != null) {
            url = url + '?' + params;
        }
        var xhr = new XMLHttpRequest();
        xhr.open(httpType, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (successCallback != null) {
                    successCallback(this.responseText);
                }
            }
        };
        xhr.send();
    }

    this.GetFlickerFeed = function (url, successCallback) {
        var params = 'format=json';
        _that.wsRequest(url, successCallback, params, "GET");
    }
}