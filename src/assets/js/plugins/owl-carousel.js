var OwlCarousel=function(){return{initOwlCarousel:function(){var a=jQuery(".blog-carousel").owlCarousel({items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[900,1],itemsTablet:[600,1],itemsMobile:[479,1],slideSpeed:700});jQuery(".next-v3").click(function(){a.trigger("owl.next")}),jQuery(".prev-v3").click(function(){a.trigger("owl.prev")})},initOwlCarousel2:function(){var a=jQuery(".blog-carousel-v2").owlCarousel({items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[900,1],itemsTablet:[600,1],itemsMobile:[479,1],slideSpeed:700});jQuery(".next-v4").click(function(){a.trigger("owl.next")}),jQuery(".prev-v4").click(function(){a.trigger("owl.prev")})}}}();