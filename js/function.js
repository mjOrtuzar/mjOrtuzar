$(document).ready(()=> {
    const item = $(".ico i");
    const boton = $(".button");
    const panel = $(".panel");

    // agrego la clase blur a todos los 'ítem' que NO sea al que le se le esta aplicando el evento 'hover'
    item.hover(function() {
        item.not($(this)).addClass('blur');
        
    // al perder el foco, retiro la clase a todos los 'item'
    }, function() {
        item.removeClass('blur');
    
    });

    $('#boton1').click(function() {

        $('#panel1').slideToggle('slow')

    })
    $('#boton2').click(function() {

        $('#panel2').slideToggle('slow')

    })
    $('#boton3').click(function() {

        $('#panel3').slideToggle('slow')

    })

    
    

})