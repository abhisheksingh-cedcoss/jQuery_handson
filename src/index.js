$(document).ready(function(){

    // $("#test").hide(); 
    
    $("*").hide(); // all elements are hide using *
  });


$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    })


});

$("p").click(function(){
$(this).hide();             //Use the correct event to hide all <p> elements with a "click".
});

