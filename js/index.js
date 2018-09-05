$(document).ready(function() {

    $("#digitalSkills").hide()

    //se cambian las paginas
    var changeToDev = $("#changeToDeveloper");
    var changeToDes = $("#changeToDesign");

    changeToDes.click(function(){
        $("#table").hide();
        $("#digitalSkills").show();
        
    });
    changeToDev.click(function(){
        $("#digitalSkills").hide();
        $("#table").show();
    })




    var domAttributesJavascript = anime({
        targets: '#domAttributesJavascript input',
        value: 80+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesAngular = anime({
        targets: '#domAttributesAngular input',
        value: 40+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesjQuery = anime({
        targets: '#domAttributesjQuery input',
        value: 80+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesGit = anime({
        targets: '#domAttributesGit input',
        value: 65+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesMaterialize = anime({
        targets: '#domAttributesMaterialize input',
        value: 60+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesBootstrap = anime({
        targets: '#domAttributesBootstrap input',
        value: 68+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesIllustrator = anime({
        targets: '#domAttributesIllustrator input',
        value: 63+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesPhotoshop = anime({
        targets: '#domAttributesPhotoshop input',
        value: 80+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesWordpress = anime({
        targets: '#domAttributesWordpress input',
        value: 66+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    var domAttributesSeo = anime({
        targets: '#domAttributesSeo input',
        value: 60+"%",
        round: 1,
        easing: 'easeInOutExpo'
    });
    //se siguen añadiendo efectos
    
});