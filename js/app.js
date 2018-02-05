//slider
$(document).ready(function(){
    var imgItems = $(".slider li").length;//numero de imagenes
    var imgPos = 1;
    
    $(".slider li").hide();
    $(".slider li:first").show();
    $(".pagination li:first").css({'color': '#CD6E2E'});
 //funciones para pasar las imagenes
    $(".right span").click(nextSlider);
    $(".left span").click(prevSlider);

    setInterval(function(){ //animacion
        nextSlider();
    },4000);

    //funciones

    
    function nextSlider(){
        if(imgPos>=imgItems){
            imgPos = 1
        }else{
            imgPos++;
        }
        $(".pagination li").css({'color':'#858585'});
        $(".pagination li:nth-child("+ imgPos +")").css({'color':'#CD6E2E'});
        $(".slider li").hide();
        $(".slider li:nth-child("+  imgPos +")").fadeIn();
    }
    function prevSlider(){
        if(imgPos<=1){
            imgPos = imgItems;
        }else{
            imgPos--;
        }
        $(".pagination li").css({'color':'#858585'});
        $(".pagination li:nth-child("+ imgPos +")").css({'color':'#CD6E2E'});
        $(".slider li").hide();
        $(".slider li:nth-child("+  imgPos +")").fadeIn();
    }


})

