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

$("p").mouseenter(function(){
    $(this).hide();
});    //  When the mouse pointer enters a <p> element, it should be hidden. Use the correct event to do so.

// If you press a keyboard key inside an <input> element, it should be hidden. Use the correct event to do so.
$("input").keypress(function(){
  $(this).hide();
});

// Use the on() method to attach a click event handler to all <p> elements.
$("p").on("click", function(){
  $(this).hide();
});

// Use a jQuery method to hide a <p> element when it is clicked on.
$("p").click(function(){    
$(this).hide();
  });

//  Use a jQuery method to hide a <p> element when it is clicked on.

  $("p").click(function(){$(this).hide("slow");
  });

// Use a jQuery method to show a <p> element.


$("button").click(function(){
$("p").show();
});







