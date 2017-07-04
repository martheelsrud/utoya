var UTOYAAPP = {
    
    $dato: null,
    
    init: function(){
        
        var UA = UTOYAAPP;
        
        var setELements = function(){
            
            UA.$dato = $("#datoTall");
        
        }();//END SET ELEMENTS
        
        var setEvents = function(){
            
            
    // START SCROLL //
                       
       $(window).scroll(function () {
            var hT = $(".fem").offset().top,
            hH = $(".fem").outerHeight(),
            wH = $(window).height(),
                
            wS = $(this).scrollTop();
            console.log((hT - wH), wS);
            
            if (wS > (hT + hH - wH)) {
                    $(".fem").fadeTo(2000, 1);
            }
        }); // END SCROLL //
            
            // START ROSER //
            
            function animateElementer(targetElement, speed, top) {
            $(targetElement).animate({ marginLeft: "+=1000px", marginTop: "+=" + top + "px"},
            { duration: speed, complete: function (){
        targetElement.animate({ marginLeft: "-=1000px", marginTop: "-=" + top + "px" },
        { duration: speed, complete: function (){
            animateElementer(targetElement, speed, top);
            }
        });
        }
    });
};

animateElementer($('#roserAvslutningImg'), 9000);
animateElementer($('#epleEnImg'), 8000, 50, 100);
animateElementer($('#epleToImg'), 10000, 250, 250);
animateElementer($('#bananImg'), 5000, -250, 450);
            
            /*$( ".frukt" ).mouseenter(function() {
                $( ".frukt" ).stop();
                });*/
            
            $( ".frukt" ).mouseleave(function() {
                animateElementer($('#epleEnImg'), 8000, 50, 100);
                animateElementer($('#epleToImg'), 10000, 250, 250);
                animateElementer($('#bananImg'), 5000, -250, 250);
            });
            
        $("#bananImg").mouseover(function(){
            $(document).mousemove(function(eventBanan){
                $("#bananImg").stop().css({
                    left: eventBanan.pageX + 10,
                    top: eventBanan.pageY
                });
            });
        });
            
        $("#epleEnImg").mouseover(function(){
            $(document).mousemove(function(eventEpleEn){
                $("#epleEnImg").stop().css({
                    left: eventEpleEn.pageX + 10,
                    top: eventEpleEn.pageY
                });
            });
        });
            
        $("#epleToImg").mouseover(function(){
            $(document).mousemove(function(eventEpleTo){
                $("#epleToImg").stop().css({
                    left: eventEpleTo.pageX + 10,
                    top: eventEpleTo.pageY
                });
            });
        });
            
            
            
        
            
            
            
            // END ANIMASJON FRUKT ++ ROSER //

            
            // SKIFTEFARGE //
            
            $(".skifteFarge")
                .mouseover(function(){
                    $(".skifteFarge")
                    .css("color", "black")
                });
            
            $(".skifteFarge")
                .mouseleave(function(){
                    $(".skifteFarge")
                    .css("color","#7F7F7F")
                }); //SKIFTEFARGE
            
            // TIMEBLINK //
            
            $(window).load(function timeBlink() {
                $( ".tall" ).effect( "pulsate", {times: 10000}, 9000000);
            });  //END TIMEBLINK
            
            //START SCROLL TILBAKE TIL TOPPEN
            
            $("#tilbakeKnappImg").click(function() {
                $("html, body").animate({ scrollTop: 0 }, 10000);
                return false;
                });
            
            //END SCROLL TILBAKE TIL TOPPEN
            
            // START ØKER TALL //
                  
            var divinterval;
            
            function startIncremantation(){
                var dato = document.getElementById("datoTall"); //Legger inn id til variabelen
                
                divinterval = setInterval(function () { //starter function
                    var tallet = dato.innerHTML; //tallet er det som er i HTML'en 
                    tallet++; // ++ på 1 på variabel
                    dato.innerHTML = tallet; //skriver tallet inn i html
                    if (tallet == 22) { //hvis tallet er 22 stopper den.
                        stopIncremantation();
                    }
                }, 85); //jo høyere tall jo tregere går det.
            } //END START ØKER TALL
            
            // START STOP INCREMENTATION
            function stopIncremantation(){
                clearInterval(divinterval);
            } //END STOP INCREMENTATION
            
            UA.$dato.onload = startIncremantation();
        
            
        
        }(); //END SET EVENTS
    
    } //END INIT
    
}; //END UTOYAAPP

$(function(){
    UTOYAAPP.init();        
}); //END UTOYAAPP INIT