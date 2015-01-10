/**
 * Created by Jokee on 15-1-1.
 */
$(function() {
    var $blogList = $("#blog-list"),
        search = getSearchParam(),
        BlogCtrl = $.BlogCtrl;

    getBlogList(search.type, search.value);

    function getSearchParam() {
        var search = location.search,
            result = {
                type : "",
                value: ""
            },
            searchStrs;
        if (search !== "") {
            search = search.slice(1);
            searchStrs = search.split("&");
            for (var i = 0, items, len = searchStrs.length; i < len; i++) {
                items = searchStrs[i].split("=");
                result[ items[0] ] = decodeURI( items[1] );
            }
        }
        return result;
    }

    function getBlogList(type, value) {
        switch (type) {
            case "cat":
                BlogCtrl.getBlogsByCatName(value).done(function(result){
                    renderBlogList(result);
                }).fail(function(error) {
                    $blogList.html("获取博文列表失败！刷新页面重试！");
                });
                break;
            case "tag":
                BlogCtrl.getBlogsByTagName(value).done(function(result){
                    renderBlogList(result);
                }).fail(function(error) {
                    $blogList.html("获取博文列表失败！刷新页面重试！");
                });
                break;
            default :
                BlogCtrl.getBlogs().done(function(result){
                    renderBlogList(result);
                }).fail(function(error) {
                    $blogList.html("获取博文列表失败！刷新页面重试！");
                });
        }
    }

    function renderBlogList(list){
        var _html = "<div class='list-group'>";
        for (var i = 0, blog, len = list.length; i < len; i++) {
            blog = list[i];
            _html += "<a href='" + blog.url + "' class='list-group-item'>";
            _html += "<i class='glyphicon glyphicon-file'></i>&nbsp;";
            _html += blog.title;
            _html += "<span class='pull-right'>" + blog.date + "</span>";
            _html += "</a>";
        }
        _html += "</div>";
        $blogList.html(_html);
    }

});