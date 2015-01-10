/**
 * Created by Jokee on 15-1-2.
 */
$(function() {
    var BaseModel = $.BaseModel,
        BlogModel = {

        /*
        * get all posted blog list.
        * return <Promise>
        */

        getBlogs: function() {
            var opts = {
                url: Config.path.blog_posts_list
            };
            return BaseModel.request(opts);
        },

        /*
        * Get all cat.
        * return <Promise>
        */

        getCats : function() {
            var opts = {
                url: Config.path.blog_cats_list
            };
            return BaseModel.request(opts);
        },

        /*
        * Get all tag.
        * return <Promise>
        */

        getTags : function() {
            var opts = {
                url: Config.path.blog_tags_list
            };
            return BaseModel.request(opts);
        }
    };

    $.extend({ BlogModel: BlogModel });
});