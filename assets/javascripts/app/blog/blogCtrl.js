/**
 * Created by Jokee on 15-1-2.
 */
$(function() {
    var BlogModel = $.BlogModel,
        BlogCtrl = {

            /*
            * Get all posted blogs.
            * Need handle data.
            * @return <Promise>
            */

            getBlogs: function() {
                var deferred = $.Deferred(),
                    prGetBlogs = BlogModel.getBlogs();

                prGetBlogs.done(function(result) {
                    deferred.resolve(result.items, result.length);
                    // [{title:"",date:"",url:"",tags:[],cats:[]},{},...]
                }).fail(function(error) {
                    deferred.reject(error);
                });

                return deferred.promise();
            },

            /*
            * Get all cats.
            * Need handle data.
            * @return <Promise>
            */

            getCats : function() {
                var deferred = $.Deferred(),
                    prGetCats = BlogModel.getCats();

                prGetCats.done(function(result) {
                    deferred.resolve(result.items, result.length);
                    // [{"title":"Tools","length":1,"items":[title,date,url]},{},..]
                }).fail(function(error) {
                    deferred.reject(error);
                });

                return deferred.promise();
            },

            /*
            * Get all cats.
            * Need handle data.
            * @return <Promise>
            */

            getTags : function() {
                var deferred = $.Deferred(),
                    prGetTags = BlogModel.getTags();

                prGetTags.done(function(result) {
                    deferred.resolve(result.items, result.length);
                    // [{"title":"Tools","length":1,"items":[title,date,url]},{},..]
                }).fail(function(error) {
                    deferred.reject(error);
                });

                return deferred.promise();
            },

            /*
            * Get some cat all posts.
            * @param catName
            * @return <Promise>
            */

            getBlogsByCatName: function(catName) {
                var deferred = $.Deferred(),
                    prGetCats = this.getCats(),
                    blogs = [],
                    length = 0;

                catName = decodeURIComponent(catName);

                prGetCats.done(function(result) {
                    for (var i = 0, cat, len = result.length; i < len; i++) {
                        cat = result[i];
                        if (cat.title === catName) {
                            blogs = cat.items;
                            length = cat.length;
                            break;
                        }
                    }
                    deferred.resolve(blogs, length);
                    // [{title:"",date:"",url:""},{},...]
                }).fail(function(error) {
                    deferred.reject(error);
                });

                return deferred.promise();
            },

            /*
            * Get some tags all posts.
            * @param tagName
            * @return <Promise>
            */

            getBlogsByTagName: function(tagName) {
                var deferred = $.Deferred(),
                    prGetTags = this.getTags(),
                    blogs = [],
                    length = 0;

                tagName = decodeURIComponent(tagName);

                prGetTags.done(function(result) {
                    for (var i = 0, tag, len = result.length; i < len; i++) {
                        tag = result[i];
                        if (tag.title === tagName) {
                            blogs = tag.items;
                            length = tag.length;
                            break;
                        }
                    }
                    deferred.resolve(blogs, length);
                    // [{title:"",date:"",url:""},{},...]
                }).fail(function(error) {
                    deferred.reject(error);
                });

                return deferred.promise();
            }
        };
    $.extend({ BlogCtrl: BlogCtrl });
});