/**
 * Created by Jokee on 15-1-2.
 */
$(function() {
    var BaseModel = {
        request: function(ajaxOpts) {
            var defaultOpts = {
                url : "",
                type: "GET",
                dataType: "json",
                cache: false
            },
            opts;
            opts = $.extend(defaultOpts, ajaxOpts || {});
            return $.ajax(opts);
        }
    };

    $.extend({ BaseModel: BaseModel });
});