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
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        //xhr.withCredentials = true;
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
        let tempResult = {
            "title": "Uploads from everyone",
            "link": "https://www.flickr.com/photos/",
            "description": "",
            "modified": "2019-02-17T20:13:57Z",
            "generator": "https://www.flickr.com",
            "items": [
                {
                    "title": "Jack Frost Rally @ Croft Circuit 17 02 2019",
                    "link": "https://www.flickr.com/photos/27482169@N03/32185050757/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7885/32185050757_99e6a8a37e_m.jpg"
                    },
                    "date_taken": "2019-02-17T09:05:47-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/27482169@N03/\">melsonbyuk</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/27482169@N03/32185050757/\" title=\"Jack Frost Rally @ Croft Circuit 17 02 2019\"><img src=\"https://farm8.staticflickr.com/7885/32185050757_99e6a8a37e_m.jpg\" width=\"240\" height=\"159\" alt=\"Jack Frost Rally @ Croft Circuit 17 02 2019\" /></a></p> ",
                    "published": "2019-02-17T20:13:57Z",
                    "author": "nobody@flickr.com (\"melsonbyuk\")",
                    "author_id": "27482169@N03",
                    "tags": ""
                },
                {
                    "title": "Chistmas market in a cave of Valkenburg",
                    "link": "https://www.flickr.com/photos/jbdodane/33251794088/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7822/33251794088_2876376733_m.jpg"
                    },
                    "date_taken": "2018-12-09T12:05:39-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/jbdodane/\">jbdodane</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/jbdodane/33251794088/\" title=\"Chistmas market in a cave of Valkenburg\"><img src=\"https://farm8.staticflickr.com/7822/33251794088_2876376733_m.jpg\" width=\"240\" height=\"135\" alt=\"Chistmas market in a cave of Valkenburg\" /></a></p> <p>Taken on 09 December 2018 in Netherlands around Maastricht-Valkenburg-Christmasmarkets (Valkenburg, Netherlands) (20181209-IMG_20181209_120539)</p>",
                    "published": "2018-12-09T11:05:39Z",
                    "author": "nobody@flickr.com (\"jbdodane\")",
                    "author_id": "27998473@N02",
                    "tags": "christmasmarket europe netherlands valkenburg"
                },
                {
                    "title": "20190202_1261.jpg",
                    "link": "https://www.flickr.com/photos/siriusphotography/33251794228/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7867/33251794228_853de78439_m.jpg"
                    },
                    "date_taken": "2019-02-02T11:45:13-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/siriusphotography/\">EnslavedByCorgis</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/siriusphotography/33251794228/\" title=\"20190202_1261.jpg\"><img src=\"https://farm8.staticflickr.com/7867/33251794228_853de78439_m.jpg\" width=\"240\" height=\"180\" alt=\"20190202_1261.jpg\" /></a></p> ",
                    "published": "2019-02-17T20:13:49Z",
                    "author": "nobody@flickr.com (\"EnslavedByCorgis\")",
                    "author_id": "11218816@N06",
                    "tags": "tulsa ok usa"
                },
                {
                    "title": "DSCN0018",
                    "link": "https://www.flickr.com/photos/145056268@N05/33251795068/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7889/33251795068_bef2222693_m.jpg"
                    },
                    "date_taken": "2018-12-08T09:03:16-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/145056268@N05/\">chowarvianjana</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/145056268@N05/33251795068/\" title=\"DSCN0018\"><img src=\"https://farm8.staticflickr.com/7889/33251795068_bef2222693_m.jpg\" width=\"240\" height=\"180\" alt=\"DSCN0018\" /></a></p> ",
                    "published": "2019-02-17T20:13:54Z",
                    "author": "nobody@flickr.com (\"chowarvianjana\")",
                    "author_id": "145056268@N05",
                    "tags": ""
                },
                {
                    "title": "2019-02-17_09-13-59",
                    "link": "https://www.flickr.com/photos/meierb/33251796808/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7902/33251796808_aaffa936ff_m.jpg"
                    },
                    "date_taken": "2019-02-13T18:26:27-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/meierb/\">Benedikt Meier</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/meierb/33251796808/\" title=\"2019-02-17_09-13-59\"><img src=\"https://farm8.staticflickr.com/7902/33251796808_aaffa936ff_m.jpg\" width=\"240\" height=\"180\" alt=\"2019-02-17_09-13-59\" /></a></p> ",
                    "published": "2019-02-17T20:14:03Z",
                    "author": "nobody@flickr.com (\"Benedikt Meier\")",
                    "author_id": "38632140@N05",
                    "tags": ""
                },
                {
                    "title": " ",
                    "link": "https://www.flickr.com/photos/teaganhunt/40162213173/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7914/40162213173_55e8dd5e40_m.jpg"
                    },
                    "date_taken": "2019-02-05T10:52:33-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/teaganhunt/\">teaganhunt</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/teaganhunt/40162213173/\" title=\" \"><img src=\"https://farm8.staticflickr.com/7914/40162213173_55e8dd5e40_m.jpg\" width=\"240\" height=\"240\" alt=\" \" /></a></p> ",
                    "published": "2019-02-17T20:14:11Z",
                    "author": "nobody@flickr.com (\"teaganhunt\")",
                    "author_id": "155000122@N02",
                    "tags": ""
                },
                {
                    "title": "Nara Vista truck stop. New Mexico.",
                    "link": "https://www.flickr.com/photos/cge1946/46213063865/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7924/46213063865_bb76ed4612_m.jpg"
                    },
                    "date_taken": "2019-02-15T11:24:37-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/cge1946/\">Chris Eiel</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/cge1946/46213063865/\" title=\"Nara Vista truck stop. New Mexico.\"><img src=\"https://farm8.staticflickr.com/7924/46213063865_bb76ed4612_m.jpg\" width=\"240\" height=\"155\" alt=\"Nara Vista truck stop. New Mexico.\" /></a></p> ",
                    "published": "2019-02-17T20:14:02Z",
                    "author": "nobody@flickr.com (\"Chris Eiel\")",
                    "author_id": "92430260@N03",
                    "tags": ""
                },
                {
                    "title": "Colors",
                    "link": "https://www.flickr.com/photos/jaguarish/46403531504/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7832/46403531504_b783b630fb_m.jpg"
                    },
                    "date_taken": "2019-02-16T17:21:02-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/jaguarish/\">jaguarish</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/jaguarish/46403531504/\" title=\"Colors\"><img src=\"https://farm8.staticflickr.com/7832/46403531504_b783b630fb_m.jpg\" width=\"167\" height=\"240\" alt=\"Colors\" /></a></p> ",
                    "published": "2019-02-17T20:13:56Z",
                    "author": "nobody@flickr.com (\"jaguarish\")",
                    "author_id": "11020663@N04",
                    "tags": ""
                },
                {
                    "title": "Oxford England, alte Markthalle",
                    "link": "https://www.flickr.com/photos/143059895@N02/46403532074/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7917/46403532074_07c8705daa_m.jpg"
                    },
                    "date_taken": "2012-01-13T13:14:12-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/143059895@N02/\">wolfgang.schmoekel@t-online.de</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/143059895@N02/46403532074/\" title=\"Oxford England, alte Markthalle\"><img src=\"https://farm8.staticflickr.com/7917/46403532074_07c8705daa_m.jpg\" width=\"240\" height=\"180\" alt=\"Oxford England, alte Markthalle\" /></a></p> ",
                    "published": "2019-02-17T20:14:00Z",
                    "author": "nobody@flickr.com (\"wolfgang.schmoekel@t-online.de\")",
                    "author_id": "143059895@N02",
                    "tags": ""
                },
                {
                    "title": "Blowing in the wind.",
                    "link": "https://www.flickr.com/photos/125407841@N08/46403533794/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7809/46403533794_d1857ed31c_m.jpg"
                    },
                    "date_taken": "2019-02-16T15:57:05-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/125407841@N08/\">Simply Sharon !</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/125407841@N08/46403533794/\" title=\"Blowing in the wind.\"><img src=\"https://farm8.staticflickr.com/7809/46403533794_d1857ed31c_m.jpg\" width=\"240\" height=\"180\" alt=\"Blowing in the wind.\" /></a></p> ",
                    "published": "2019-02-17T20:14:10Z",
                    "author": "nobody@flickr.com (\"Simply Sharon !\")",
                    "author_id": "125407841@N08",
                    "tags": ""
                },
                {
                    "title": "안전공원|메이저토토사이트추천|안전공원추천|안전업체추천【MAX안전놀이터】8년 무사고【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #스포츠토토,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전 안전놀이터 메이져사이트 #믈부,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전",
                    "link": "https://www.flickr.com/photos/169803403@N02/46403534474/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7814/46403534474_255c766cd2_m.jpg"
                    },
                    "date_taken": "2019-02-17T12:14:14-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/169803403@N02/\">maxcall1004</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/169803403@N02/46403534474/\" title=\"안전공원|메이저토토사이트추천|안전공원추천|안전업체추천【MAX안전놀이터】8년 무사고【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #스포츠토토,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전 안전놀이터 메이져사이트 #믈부,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전\"><img src=\"https://farm8.staticflickr.com/7814/46403534474_255c766cd2_m.jpg\" width=\"240\" height=\"240\" alt=\"안전공원|메이저토토사이트추천|안전공원추천|안전업체추천【MAX안전놀이터】8년 무사고【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #스포츠토토,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전 안전놀이터 메이져사이트 #믈부,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전\" /></a></p> <p>해외에서【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #토토정류장,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전 안전하게【MAX안전놀이터】8년 무사고【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #스포츠토토,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전 안전놀이터 메이져사이트 #안전공원,#안전놀이터,#NBA,#프리미어리그,#사설토토,#번개환전,#빠른환전 운영중이며【MAX안전놀이터】8년 무사고【MAX안전놀이터】8년 무사고 안전놀이터 메이져사이트 #스포츠토토,#안전놀이터,#NBA,#프리... <br /> <br /> <a href=\"http://maxcall1004.dothome.co.kr/%ec%95%88%ec%a0%84%ea%b3%b5%ec%9b%90%eb%a9%94%ec%9d%b4%ec%a0%80%ed%86%a0%ed%86%a0%ec%82%ac%ec%9d%b4%ed%8a%b8%ec%b6%94%ec%b2%9c%ec%95%88%ec%a0%84%ea%b3%b5%ec%9b%90%ec%b6%94%ec%b2%9c%ec%95%88/\" rel=\"noreferrer nofollow\">maxcall1004.dothome.co.kr/%ec%95%88%ec%a0%84%ea%b3%b5%ec%...</a></p>",
                    "published": "2019-02-17T20:14:14Z",
                    "author": "nobody@flickr.com (\"maxcall1004\")",
                    "author_id": "169803403@N02",
                    "tags": ""
                },
                {
                    "title": "Liam_The-Fool",
                    "link": "https://www.flickr.com/photos/empmuseum/47074789592/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7843/47074789592_919d4abab6_m.jpg"
                    },
                    "date_taken": "2019-02-17T12:13:49-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/empmuseum/\">MoPOPInteractive</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/empmuseum/47074789592/\" title=\"Liam_The-Fool\"><img src=\"https://farm8.staticflickr.com/7843/47074789592_919d4abab6_m.jpg\" width=\"161\" height=\"240\" alt=\"Liam_The-Fool\" /></a></p> ",
                    "published": "2019-02-17T20:13:49Z",
                    "author": "nobody@flickr.com (\"MoPOPInteractive\")",
                    "author_id": "64943649@N07",
                    "tags": "edtang"
                },
                {
                    "title": "BNSF GP15-1 1482-Y-BIR102",
                    "link": "https://www.flickr.com/photos/93561133@N03/47074789822/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7896/47074789822_970fe2f8c3_m.jpg"
                    },
                    "date_taken": "2019-02-17T12:13:51-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/93561133@N03/\">southernrailway7000</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/93561133@N03/47074789822/\" title=\"BNSF GP15-1 1482-Y-BIR102\"><img src=\"https://farm8.staticflickr.com/7896/47074789822_970fe2f8c3_m.jpg\" width=\"240\" height=\"155\" alt=\"BNSF GP15-1 1482-Y-BIR102\" /></a></p> ",
                    "published": "2019-02-17T20:13:51Z",
                    "author": "nobody@flickr.com (\"southernrailway7000\")",
                    "author_id": "93561133@N03",
                    "tags": ""
                },
                {
                    "title": "Sedlec Ossuary, Kutnã Hora. The bone church. Tragically beautiful. A Chapel artfully decorated with human skeletons of over 40,000 plague victims ☠️",
                    "link": "https://www.flickr.com/photos/156112542@N05/47074791202/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7891/47074791202_82619d502b_m.jpg"
                    },
                    "date_taken": "2019-02-17T12:13:59-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/156112542@N05/\">anniecasey07</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/156112542@N05/47074791202/\" title=\"Sedlec Ossuary, Kutnã Hora. The bone church. Tragically beautiful. A Chapel artfully decorated with human skeletons of over 40,000 plague victims ☠️\"><img src=\"https://farm8.staticflickr.com/7891/47074791202_82619d502b_m.jpg\" width=\"240\" height=\"240\" alt=\"Sedlec Ossuary, Kutnã Hora. The bone church. Tragically beautiful. A Chapel artfully decorated with human skeletons of over 40,000 plague victims ☠️\" /></a></p> ",
                    "published": "2019-02-17T20:13:59Z",
                    "author": "nobody@flickr.com (\"anniecasey07\")",
                    "author_id": "156112542@N05",
                    "tags": ""
                },
                {
                    "title": " ",
                    "link": "https://www.flickr.com/photos/169599963@N02/47074792962/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7873/47074792962_18c400a6fe_m.jpg"
                    },
                    "date_taken": "2019-02-15T23:25:42-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/169599963@N02/\">katiesully99</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/169599963@N02/47074792962/\" title=\" \"><img src=\"https://farm8.staticflickr.com/7873/47074792962_18c400a6fe_m.jpg\" width=\"240\" height=\"160\" alt=\" \" /></a></p> ",
                    "published": "2019-02-17T20:14:08Z",
                    "author": "nobody@flickr.com (\"katiesully99\")",
                    "author_id": "169599963@N02",
                    "tags": ""
                },
                {
                    "title": "16/2/19",
                    "link": "https://www.flickr.com/photos/mogbert/47074793542/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7828/47074793542_90b928d096_m.jpg"
                    },
                    "date_taken": "2019-02-16T15:59:16-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/mogbert/\">Mogbert</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/mogbert/47074793542/\" title=\"16/2/19\"><img src=\"https://farm8.staticflickr.com/7828/47074793542_90b928d096_m.jpg\" width=\"240\" height=\"180\" alt=\"16/2/19\" /></a></p> ",
                    "published": "2019-02-17T20:14:13Z",
                    "author": "nobody@flickr.com (\"Mogbert\")",
                    "author_id": "62853762@N04",
                    "tags": ""
                },
                {
                    "title": "SADNESS BOY🔥 🔥 🔥 🔥",
                    "link": "https://www.flickr.com/photos/_carlospotter/47127148241/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7821/47127148241_92d3a70a92_m.jpg"
                    },
                    "date_taken": "2019-02-17T17:13:51-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/_carlospotter/\">Carlos Ferreira Potter</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/_carlospotter/47127148241/\" title=\"SADNESS BOY🔥 🔥 🔥 🔥\"><img src=\"https://farm8.staticflickr.com/7821/47127148241_92d3a70a92_m.jpg\" width=\"240\" height=\"180\" alt=\"SADNESS BOY🔥 🔥 🔥 🔥\" /></a></p> <p>via Instagram <a href=\"http://bit.ly/2Gvq4ks\" rel=\"noreferrer nofollow\">bit.ly/2Gvq4ks</a></p>",
                    "published": "2019-02-17T20:13:51Z",
                    "author": "nobody@flickr.com (\"Carlos Ferreira Potter\")",
                    "author_id": "74539375@N02",
                    "tags": "ifttt instagram february 17 2019 0412pm"
                },
                {
                    "title": "Black Phoebe",
                    "link": "https://www.flickr.com/photos/cannongate/47127148751/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7882/47127148751_09a3a31ed9_m.jpg"
                    },
                    "date_taken": "2019-02-17T09:12:09-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/cannongate/\">cannongate</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/cannongate/47127148751/\" title=\"Black Phoebe\"><img src=\"https://farm8.staticflickr.com/7882/47127148751_09a3a31ed9_m.jpg\" width=\"188\" height=\"240\" alt=\"Black Phoebe\" /></a></p> ",
                    "published": "2019-02-17T20:13:53Z",
                    "author": "nobody@flickr.com (\"cannongate\")",
                    "author_id": "40588710@N06",
                    "tags": ""
                },
                {
                    "title": "~ who will be in Venice for the Carnival? ~ ITA Ieri sera con la festa sull'acqua è iniziato non ufficialmente il Carnevale di Venezia. L'apertura ufficiale sarà sabato prossimo con il volo dell'angelo. Vi aspetto numerosi per fotografare assieme. ~ ENG ",
                    "link": "https://www.flickr.com/photos/fede1986/47127148931/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7864/47127148931_62339a2e87_m.jpg"
                    },
                    "date_taken": "2019-02-17T21:13:54-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/fede1986/\">Graz_86</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/fede1986/47127148931/\" title=\"~ who will be in Venice for the Carnival? ~ ITA Ieri sera con la festa sull'acqua è iniziato non ufficialmente il Carnevale di Venezia. L'apertura ufficiale sarà sabato prossimo con il volo dell'angelo. Vi aspetto numerosi per fotografare assieme. ~ ENG \"><img src=\"https://farm8.staticflickr.com/7864/47127148931_62339a2e87_m.jpg\" width=\"192\" height=\"240\" alt=\"~ who will be in Venice for the Carnival? ~ ITA Ieri sera con la festa sull'acqua è iniziato non ufficialmente il Carnevale di Venezia. L'apertura ufficiale sarà sabato prossimo con il volo dell'angelo. Vi aspetto numerosi per fotografare assieme. ~ ENG \" /></a></p> <p>via Instagram <a href=\"http://bit.ly/2GNEUSp\" rel=\"noreferrer nofollow\">bit.ly/2GNEUSp</a></p>",
                    "published": "2019-02-17T20:13:54Z",
                    "author": "nobody@flickr.com (\"Graz_86\")",
                    "author_id": "47729076@N07",
                    "tags": "ifttt instagram"
                },
                {
                    "title": "University of Winnipeg Manitoba Graduate Scholarships (MGS) in Canada",
                    "link": "https://www.flickr.com/photos/162792464@N08/47127151691/",
                    "media": {
                        "m": "https://farm8.staticflickr.com/7925/47127151691_5612e4c738_m.jpg"
                    },
                    "date_taken": "2019-02-17T21:43:46-08:00",
                    "description": " <p><a href=\"https://www.flickr.com/people/162792464@N08/\">mkwelijsc</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/162792464@N08/47127151691/\" title=\"University of Winnipeg Manitoba Graduate Scholarships (MGS) in Canada\"><img src=\"https://farm8.staticflickr.com/7925/47127151691_5612e4c738_m.jpg\" width=\"240\" height=\"95\" alt=\"University of Winnipeg Manitoba Graduate Scholarships (MGS) in Canada\" /></a></p> <p>University of Winnipeg Manitoba Graduate Scholarships (MGS) in Canada <a href=\"https://mkwelijs.com/2019/02/17/university-of-winnipeg-manitoba-graduate-scholarships-mgs-in-canada/\" rel=\"noreferrer nofollow\">mkwelijs.com/2019/02/17/university-of-winnipeg-manitoba-g...</a></p>",
                    "published": "2019-02-17T20:14:08Z",
                    "author": "nobody@flickr.com (\"mkwelijsc\")",
                    "author_id": "162792464@N08",
                    "tags": ""
                }
            ]
        }
        successCallback(JSON.stringify(tempResult));
        return;
        var params = 'format=json&lang=' + Mvc.Global.Lang;
        _that.wsRequest(url, successCallback, params, "GET");
    }
}