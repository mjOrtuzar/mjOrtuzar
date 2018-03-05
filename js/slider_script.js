//slider
$(document).ready(function(){
    var imgItems = $(".slider li").length;//numero de imagenes
    var imgPos = 1;
    
    $(".slider li").hide();
    $(".slider li:first").show();
 //funciones para pasar las imagenes
    $(".right ").click(nextSlider);
    $(".left ").click(prevSlider);

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
        $(".slider li").hide();
        $(".slider li:nth-child("+  imgPos +")").fadeIn();
    }
    function prevSlider(){
        if(imgPos<=1){
            imgPos = imgItems;
        }else{
            imgPos--;
        }
        $(".slider li").hide();
        $(".slider li:nth-child("+  imgPos +")").fadeIn();
    }


})

