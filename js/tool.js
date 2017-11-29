
function getvalue(key){
    var search = location.search;
    var search = search.slice(1);
    var search = encodeURI(search);
    var arr = search.split('&');
    var obj = {};
    arr.forEach(function(){
        obj[this.split('=')[0]]=this.split('=')[1];
    });
    return obj[key];
}