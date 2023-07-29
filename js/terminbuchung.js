//<![CDATA[
    diy.module.emotionHeader.slideShow.init({ slides: [{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"},{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader_1.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"},{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader_2.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"},{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader_3.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"},{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader_4.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"},{"url":"https:\/\/www.meinhausarzt.biz\/s\/img\/emotionheader_5.JPG?1527802902.920px.124px","image_alt":"","bgColor":"#eeeeee"}] });
    //]]>
//<![CDATA[
    (function ($) {
        function enableSvgTitle() {
                        var titleSvg = $('svg#emotion-header-title-svg'),
                titleHtml = $('#emotion-header-title'),
                emoWidthAbs = 920,
                emoHeightAbs = 124,
                offsetParent,
                titlePosition,
                svgBoxWidth,
                svgBoxHeight;

                        if (titleSvg.length && titleHtml.length) {
                offsetParent = titleHtml.offsetParent();
                titlePosition = titleHtml.position();
                svgBoxWidth = titleHtml.width();
                svgBoxHeight = titleHtml.height();

                                titleSvg.get(0).setAttribute('viewBox', '0 0 ' + svgBoxWidth + ' ' + svgBoxHeight);
                titleSvg.css({
                   left: Math.roundTo(100 * titlePosition.left / offsetParent.width(), 3) + '%',
                   top: Math.roundTo(100 * titlePosition.top / offsetParent.height(), 3) + '%',
                   width: Math.roundTo(100 * svgBoxWidth / emoWidthAbs, 3) + '%',
                   height: Math.roundTo(100 * svgBoxHeight / emoHeightAbs, 3) + '%'
                });

                titleHtml.css('visibility','hidden');
                titleSvg.css('visibility','visible');
            }
        }

        
            var posFunc = function($, overrideSize) {
                var elems = [], containerWidth, containerHeight;
                                    elems.push({
                        selector: '#emotion-header-title',
                        overrideSize: true,
                        horPos: 54.21,
                        vertPos: 31                    });
                    lastTitleWidth = $('#emotion-header-title').width();
                                                elems.push({
                    selector: '#emotion-header-title-bg',
                    horPos: 0,
                    vertPos: 38                });
                                
                containerWidth = parseInt('920');
                containerHeight = parseInt('124');

                for (var i = 0; i < elems.length; ++i) {
                    var el = elems[i],
                        $el = $(el.selector),
                        pos = {
                            left: el.horPos,
                            top: el.vertPos
                        };
                    if (!$el.length) continue;
                    var anchorPos = $el.anchorPosition();
                    anchorPos.$container = $('#emotion-header');

                    if (overrideSize === true || el.overrideSize === true) {
                        anchorPos.setContainerSize(containerWidth, containerHeight);
                    } else {
                        anchorPos.setContainerSize(null, null);
                    }

                    var pxPos = anchorPos.fromAnchorPosition(pos),
                        pcPos = anchorPos.toPercentPosition(pxPos);

                    var elPos = {};
                    if (!isNaN(parseFloat(pcPos.top)) && isFinite(pcPos.top)) {
                        elPos.top = pcPos.top + '%';
                    }
                    if (!isNaN(parseFloat(pcPos.left)) && isFinite(pcPos.left)) {
                        elPos.left = pcPos.left + '%';
                    }
                    $el.css(elPos);
                }

                // switch to svg title
                enableSvgTitle();
            };

                        var $emotionImg = jQuery('#emotion-header-img');
            if ($emotionImg.length > 0) {
                // first position the element based on stored size
                posFunc(jQuery, true);

                // trigger reposition using the real size when the element is loaded
                var ehLoadEvTriggered = false;
                $emotionImg.one('load', function(){
                    posFunc(jQuery);
                    ehLoadEvTriggered = true;
                                        diy.module.emotionHeader.slideShow.start();
                                    }).each(function() {
                                        if(this.complete || typeof this.complete === 'undefined') {
                        jQuery(this).load();
                    }
                });

                                noLoadTriggeredTimeoutId = setTimeout(function() {
                    if (!ehLoadEvTriggered) {
                        posFunc(jQuery);
                    }
                    window.clearTimeout(noLoadTriggeredTimeoutId)
                }, 5000);//after 5 seconds
            } else {
                jQuery(function(){
                    posFunc(jQuery);
                });
            }

                        if (jQuery.isBrowser && jQuery.isBrowser.ie8) {
                var longTitleRepositionCalls = 0;
                longTitleRepositionInterval = setInterval(function() {
                    if (lastTitleWidth > 0 && lastTitleWidth != jQuery('#emotion-header-title').width()) {
                        posFunc(jQuery);
                    }
                    longTitleRepositionCalls++;
                    // try this for 5 seconds
                    if (longTitleRepositionCalls === 5) {
                        window.clearInterval(longTitleRepositionInterval);
                    }
                }, 1000);//each 1 second
            }

            }(jQuery));
    //]]>

if (window.jQuery_1and1) {
    window.jQuery = window.jQuery_1and1;
}
if (window.jQuery) {
    window.jQuery_1and1 = window.jQuery;
}