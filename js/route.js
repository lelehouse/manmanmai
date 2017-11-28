/**
 * Created by vzai on 2017/11/28.
 */

;(function(){

    var route= {
       baseurl: "http://127.0.0.1:9090/api/",
       setfontsize:setfontsize,
       getindexmenu:getindexmenu,


    };

    function setfontsize(){
        // 640是54px    320 27px
        // 320/640  * 54px
        var windowWidth = document.body.offsetWidth;
        var htmlfontSize = windowWidth / 640 * 54;
        document.querySelector('html').style.fontSize = htmlfontSize + 'px';
        window.addEventListener('resize', function() {
            var windowWidth = document.body.offsetWidth;
            var htmlfontSize = windowWidth / 640 * 54;
            if (htmlfontSize > 54) {
                htmlfontSize = 54;
            }
            document.querySelector('html').style.fontSize = htmlfontSize + 'px';
        });
    }


    function getindexmenu(callback){
        url = route.baseurl +"getindexmenu";
        $.get(url,function(info){
            callback&&callback(info);
        },'json');

    }

   window.route = route;

})();