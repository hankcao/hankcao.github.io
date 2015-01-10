/**
 * Created by Jokee on 15-1-2.
 */
var Config = (function() {
    var base_path = "http://" + location.host;
    var blog_path = base_path + "/data/blog"
    return {
        path: {
            blog_posts_list: blog_path + "/blogs.html",
            blog_cats_list : blog_path + "/cats.html" ,
            blog_tags_list : blog_path + "/tags.html"
        }
    }
})();