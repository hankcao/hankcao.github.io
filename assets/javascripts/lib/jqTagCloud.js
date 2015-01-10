/**
 * Created by Jokee on 15-1-3.
 */
$(function() {
    $.extend({
        rangeRandom: function( start, end ) {
            var min, max;

            start = start || 0;
            end   = end   || 1;

            min = Math.min( start, end );
            max = Math.max( start, end );

            return Math.floor( Math.random() * ( max - min ) + min );
        },

        randomColor: function() {
            var colorEle = "0123456789abcdef".split(""),
                len = colorEle.length;
            return "#"
                    + colorEle[ $.rangeRandom( 0, len) ]
                    + colorEle[ $.rangeRandom( 0, len) ]
                    + colorEle[ $.rangeRandom( 0, len) ]
                    + colorEle[ $.rangeRandom( 0, len) ]
                    + colorEle[ $.rangeRandom( 0, len) ]
                    + colorEle[ $.rangeRandom( 0, len) ];
        }
    });

    $.fn.extend({
        tagCloud: function() {
            $( this ).each( function() {
                var $this = $(this),
                    $tags = $this.find("a"),
                    wrapW = $this.width(),
                    wrapH = $this.height();

                $tags.each( function(i) {
                    var weight = $(this).data("weight"),
                        selfW = $(this).width(),
                        selfH = $(this).height();
                    $(this).css({
                        /*"fontSize" : ( weight / 10 ) * 14 + 14,
                        "color"    : $.randomColor(),*/
                        /*"position" : "absolute",
                        "top"      : $.rangeRandom(0, wrapH - selfH),
                        "left"     : $.rangeRandom(0, wrapW - selfW)*/
                    });
                });

                function zoomOut() {
                    var tag = $tags.get( $.rangeRandom(0, $tags.length)),
                        weight = $( tag).data("weight") + 1;
                    $tags.css({
                        "transform": "scale(1)",
                        "zIndex"   : 1
                    });
                    $( tag ).css({
                        "transform": "scale(" + weight + ")",
                        "zIndex"   : 9999
                    });
                }

                /*var stZoomOut = setInterval( function() {
                    zoomOut();
                }, 1200);*/

                $this
                    .on("mouseover", function() {
                        // clearInterval( stZoomOut );
                    })
                    .on("mouseout" , function() {
                        /*stZoomOut = setInterval( function() {
                            zoomOut();
                        }, 1000);*/
                    })
                    .on("mousemove", function() {

                    })
                    .on("resize"   , function() {

                    });

                $tags
                    .on("mouseover", function() {
                        /*$( this ).css({
                            "transform": "scale(2)"
                        });*/
                    })
                    .on("mouseout" , function() {
                        /*$( this ).css({
                            "transform": "scale(1)"
                        });*/
                    });
            });

        }
    });
});