/**
 * Created by vzai on 2017/11/28.
 */

;(function(window){
    var route = {
       baseurl: "http://127.0.0.1:9090/api/",
       setfontsize:setfontsize,
       getvalue:getvalue,
       getindexmenu:getindexmenu,
       getmoneyctrl:getmoneyctrl,
       getcategorytitle:getcategorytitle,
       getcategory:getcategory,
       getcategorybyid:getcategorybyid,
       getproductlist:getproductlist,
       getproduct:getproduct,
       getproductcom:getproductcom,
       getmoneyctrlproduct:getmoneyctrlproduct,
       getinlanddiscount:getinlanddiscount,
       getdiscountproduct:getdiscountproduct,
       getbaicaijiatitle:getbaicaijiatitle,
       getbaicaijiaproduct:getbaicaijiaproduct
    };

        // 获取地址栏值
    function getvalue(key){
        var search = location.search;
        var search = decodeURI(search);
        var search = search.slice(1);
        var arr = search.split('&');
        var obj = {};
        arr.forEach(function(e){
            obj[e.split('=')[0]]=e.split('=')[1];
        });
        return obj[key];
    }

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

    function getmoneyctrl(callback){
        url = route.baseurl +"getmoneyctrl";
        $.get(url,function(info){
            callback&&callback(info);
        },'json');
    }
   
     
    function getcategorytitle(success,complete){
        url = route.baseurl +"getcategorytitle";
        $.ajax({
            url:url,
            type:"get",
            success:function(info){
                success&&success(info);
            },
            complete:function(){
                complete&&complete();
            }
        });
    }

     
    function getcategory(titleid,callback){
        url = route.baseurl +"getcategory";
        $.ajax({
            url:url,
            type:"get",
            data:{titleid:titleid},
            success:function(info){
                    callback&&callback(info);
            }
        });
    }
    
    function getcategorybyid(data,callback){
        url = route.baseurl +"getcategorybyid";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }

    function getproductlist(data,callback){
        url = route.baseurl +"getproductlist";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }
    
    
    function getproduct(data,callback){
        url = route.baseurl +"getproduct";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }
    function getproductcom(data,callback){
        url = route.baseurl +"getproductcom";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }
    function getmoneyctrlproduct(data,callback){
        url = route.baseurl +"getmoneyctrlproduct";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }

    function getinlanddiscount(data,callback){
        url = route.baseurl +"getinlanddiscount";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }

    function getdiscountproduct(data,callback){
        url = route.baseurl +"getdiscountproduct";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }
    function getbaicaijiatitle(callback){
        url = route.baseurl +"getbaicaijiatitle";
        $.get(url,function(info){
            callback&&callback(info);
        },'json');
    }
    function getbaicaijiaproduct(data,callback){
        url = route.baseurl +"getbaicaijiaproduct";
        $.get(url,data,function(info){
            callback&&callback(info);
        },'json');
    }

   window.route = route;

})(window);