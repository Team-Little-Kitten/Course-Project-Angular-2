var App=function(){function a(){jQuery(window).scroll(function(){jQuery(window).scrollTop()>100?jQuery(".header-fixed .header-sticky").addClass("header-fixed-shrink"):jQuery(".header-fixed .header-sticky").removeClass("header-fixed-shrink")})}function b(){$(".blog-topbar .search-btn").on("click",function(){jQuery(".topbar-search-block").hasClass("topbar-search-visible")?(jQuery(".topbar-search-block").slideUp(),jQuery(".topbar-search-block").removeClass("topbar-search-visible")):(jQuery(".topbar-search-block").slideDown(),jQuery(".topbar-search-block").addClass("topbar-search-visible"))}),$(".blog-topbar .search-close").on("click",function(){jQuery(".topbar-search-block").slideUp(),jQuery(".topbar-search-block").removeClass("topbar-search-visible")}),jQuery(window).scroll(function(){jQuery(".topbar-search-block").slideUp(),jQuery(".topbar-search-block").removeClass("topbar-search-visible")})}function c(){$(".topbar-toggler").on("click",function(){jQuery(".topbar-toggler").hasClass("topbar-list-visible")?(jQuery(".topbar-menu").slideUp(),jQuery(this).removeClass("topbar-list-visible")):(jQuery(".topbar-menu").slideDown(),jQuery(this).addClass("topbar-list-visible"))})}function d(){$(".topbar-list > li").on("click",function(a){jQuery(this).children("ul").hasClass("topbar-dropdown")&&(jQuery(this).children("ul").hasClass("topbar-dropdown-visible")?(jQuery(this).children(".topbar-dropdown").slideUp(),jQuery(this).children(".topbar-dropdown").removeClass("topbar-dropdown-visible")):(jQuery(this).children(".topbar-dropdown").slideDown(),jQuery(this).children(".topbar-dropdown").addClass("topbar-dropdown-visible")))})}function e(){var a=!0,b=$(".outside-more-articles").attr("data-scrollTop");$(window).scroll(function(){$(window).scrollTop()>b&&a===!0?$(".outside-more-articles").addClass("outside-more-articles--show"):$(".outside-more-articles").removeClass("outside-more-articles--show")}),$(".outside-more-articles__close").on("click",function(b){$(".outside-more-articles").removeClass("outside-more-articles--show"),a=!1})}function f(){var a=!0;$(document).mouseleave(function(b){b.clientY<0&&a===!0&&($(".g-popup-wrapper").show(),$(".g-popup-wrapper").is(":visible")&&$("body").addClass("g-blur"))}),$(".g-popup__close").on("click",function(b){$(".g-popup-wrapper").hide(),$("body").removeClass("g-blur"),a=!1})}function g(){$(".hoverSelector").on("hover",function(a){$(".hoverSelectorBlock",this).toggleClass("show"),a.stopPropagation()})}function h(){jQuery(".carousel").carousel({interval:15e3,pause:"hover"}),jQuery(".tooltips").tooltip(),jQuery(".tooltips-show").tooltip("show"),jQuery(".tooltips-hide").tooltip("hide"),jQuery(".tooltips-toggle").tooltip("toggle"),jQuery(".tooltips-destroy").tooltip("destroy"),jQuery(".popovers").popover(),jQuery(".popovers-show").popover("show"),jQuery(".popovers-hide").popover("hide"),jQuery(".popovers-toggle").popover("toggle"),jQuery(".popovers-destroy").popover("destroy")}return $.fn.hasAttr=function(a){return void 0!==this.attr(a)},{init:function(){b(),c(),a(),h(),g(),d(),e(),f()},initScrollBar:function(){jQuery(".mCustomScrollbar").mCustomScrollbar({theme:"minimal",scrollInertia:300,scrollEasing:"linear"})},initCounter:function(){jQuery(".counter").counterUp({delay:10,time:1e3})}}}();