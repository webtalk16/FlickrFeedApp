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

        _that.Open('');
    };

    this.Open = function (filters) {
        Mvc.Global.Utils.GetFeed(filters, updateHTML);
    }

    function updateHTML(jsonResponse, hasFilter) {
        let results = jsonResponse;
        console.log(results);
        if (results != null && results.items != null && results.items.length) {
            let html = [];
            html.push('<div id="' + _context + '_Container">');
            html.push('     <div id="' + _context + '_Header">');
            html.push('         <div id="' + _context + '_HeaderLang" onclick="Mvc.Global.GalleryPage.ChangeLang();">' + getLang() + '</div>');
            html.push('         <h1 id="' + _context + '_HeaderTitle">' + results.title + '</h1>');
            if (hasFilter) {
                html.push('     <div class="' + _context + '_ShowAll" onclick="Mvc.Global.GalleryPage.Open(\'\')">' + Mvc.Global.Resource[Mvc.Global.Lang].showAllLink + '</div>');
            }
            html.push('     </div>');
            for (let i = 0; i < results.items.length; i++) {
                html.push(' <div class="' + _context + '_Item">');
                html.push('     <div class="' + _context + '_Item_Thumb">');
                html.push('         <img src="' + results.items[i].media.m + '" />');
                html.push('         <a href="' + results.items[i].link + '" class="' + _context + '_Item_Link">See Full Image</a>');
                html.push('         <div class="' + _context + '_Item_Date">');
                html.push('             <div class="ThumbLabel">Date Taken:</div><div class="ThumbValue">' + getDate(results.items[i].date_taken) + '&nbsp;</div>');
                html.push('         </div>');
                html.push('         <div class="' + _context + '_Item_Author" onclick="Mvc.Global.GalleryPage.Open(' + '\'&id=' + results.items[i].author_id + '\'' + ')">');
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
        formatedDate = Mvc.Global.Utils.GetMonthText(formatedDate.getMonth()) + ' ' + formatedDate.getDate() + ', ' + formatedDate.getFullYear();
        return formatedDate;
    }

    this.ChangeLang = function () {
        let lang = '';
        switch (Mvc.Global.Lang) {
            case 'en-us':
                Mvc.Global.Lang = 'fr-fr';
                document.body.setAttribute('lang', 'fr');
                break;
            case 'fr-fr':
                Mvc.Global.Lang = 'en-us';
                document.body.setAttribute('lang', 'en');
                break;
        }
        _that.Open('');
    }

    function getLang() {
        let lang = '';
        switch (Mvc.Global.Lang) {
            case 'en-us':
                lang = 'French';
                break;
            case 'fr-fr':
                lang = 'English';
                break;
        }
        return lang;
    }
}