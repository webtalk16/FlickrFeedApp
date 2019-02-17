Mvc.Control = window.Mvc.Control || {};

Mvc.Control.GalleryPage = function (context) {
    let _name = "GarleryPage";
    let _context = context + _name;
    let _that = this;
    let _container = null;

    this.Initialize = function () {
        let root = document.getElementById('root');
        let newElement = document.createElement("div");
        newElement.setAttribute("id", _context);
        _container = newElement;
        root.appendChild(newElement);

        _that.Open();
    };

    this.Open = function () {
        Mvc.Global.Utils.GetFeed(updateHTML);
    }

    function updateHTML(jsonResponse) {
        let results = JSON.parse(jsonResponse);
        console.log(results);
        if (results != null && results.items != null && results.items.length) {
            let html = [];
            html.push('<div id="' + _context + '_Container">');
            for (let i = 0; i < results.items.length; i++) {
                html.push(' <div class="' + _context + '_Item">');
                html.push('     <div class="' + _context + '_Item_Thumb">');
                html.push('         <img src="' + results.items[i].media.m + '" />');
                html.push('         <a href="' + results.items[i].link + '" class="' + _context + '_Item_Link">See Full Image</a>');
                html.push('         <div class="' + _context + '_Item_Date">');
                html.push('             <div class="ThumbLabel">Date Taken:</div><div class="ThumbValue">' + getDate(results.items[i].date_taken) + '&nbsp;</div>');
                html.push('         </div>');
                html.push('         <div class="' + _context + '_Item_Author">');
                html.push('             <div class="ThumbLabel">Author:</div><div class="ThumbValue">' + results.items[i].author + '&nbsp;</div>');
                html.push('         </div>');
                html.push('         <div class="' + _context + '_Item_Title">');
                html.push('             <div class="ThumbLabel">Title:</div><div class="ThumbValue">' + results.items[i].title + '&nbsp;</div>');
                html.push('         </div>');
                html.push('     </div>');
                html.push(' </div>');
            }
            html.push('</div>');
            _container.innerHTML = html.join('');
        }
        
    }
    function getDate(date) {
        let formatedDate = new Date(date);
        formatedDate = getMonthText(formatedDate.getMonth()) + ' ' + formatedDate.getDate() + ', ' + formatedDate.getFullYear();
        return formatedDate;
    }

    function getMonthText(month) {
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        return months[month];
    }
}