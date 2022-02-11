$(document).ready(function(){

    // $("#test").hide(); 
    
    $("*").hide(); // all elements are hide using *
  });


$(document).ready(function(){
    $("tr:odd").hide(); // of all tr 
});

$("p").click(function(){
$(this).hide();             //Use the correct event to hide all <p> elements with a "click".
});

