/**
 * Created by Jokee on 15-1-2.
 */
$(function() {
    var $blogTagsCloud = $("#blog-tags-cloud"),
        $blogCatsTitle = $("#blog-cats-title"),
        $blogTagsTitle = $("#blog-tags-title");

    // Use jQCloud plugin make the tags cloud.
    $blogTagsCloud.jQCloud(blog_tags);

    // When window resize, tags cloud need repaint.
    // At the same time, the tags container need reset width.
    $(window).on("resize", function() {
        var width = $blogTagsCloud.parent().width();
        width = parseInt(width) - 32;
        $blogTagsCloud.width(width);
        $blogTagsCloud.html("");
        $blogTagsCloud.jQCloud(blog_tags);
    });

    var $blogCatsTitleSiblings = $blogCatsTitle.siblings(),
        $blogCatsTitleToggleIcon = $blogCatsTitle.find(".toggle-icon"),
        $catsContainer = $blogCatsTitle.parent();

    // Click categories title bar will toggle the sibling.
    $blogCatsTitle.on("click", function() {
        var hide = $blogCatsTitleSiblings.hasClass("hidden");
        if (hide) {
            $blogCatsTitleSiblings.removeClass("hidden");
            $blogCatsTitleToggleIcon.removeClass("glyphicon-chevron-down");
            $blogCatsTitleToggleIcon.addClass("glyphicon-chevron-up");
        } else {
            $blogCatsTitleSiblings.addClass("hidden");
            $blogCatsTitleToggleIcon.removeClass("glyphicon-chevron-up");
            $blogCatsTitleToggleIcon.addClass("glyphicon-chevron-down");
        }
    });

    var $blogTagsTitleSiblings = $blogTagsTitle.siblings(),
        $blogTagsTitleToggleIcon = $blogTagsTitle.find(".toggle-icon"),
        $tagsContainer = $blogTagsTitle.parent();

    // Click tags title bar will toggle the sibling.
    $blogTagsTitle.on("click", function() {
        var hide = $blogTagsTitleSiblings.hasClass("hidden");
        if (hide) {
            $blogTagsTitleSiblings.removeClass("hidden");
            $blogTagsTitleToggleIcon.removeClass("glyphicon-chevron-down");
            $blogTagsTitleToggleIcon.addClass("glyphicon-chevron-up");
        } else {
            $blogTagsTitleSiblings.addClass("hidden");
            $blogTagsTitleToggleIcon.removeClass("glyphicon-chevron-up");
            $blogTagsTitleToggleIcon.addClass("glyphicon-chevron-down");
        }
    });
});