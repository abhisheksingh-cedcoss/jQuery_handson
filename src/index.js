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

// Use a jQuery method to toggle between hiding and showing a <p> element.

$("button").click(function(){
    $("p").toggle();
  });

// Use a jQuery method to fade out a <div> element.

$("div").fadeOut();

// Use a jQuery method to fade out a <div> element

$("div").fadeOut("slow");

// Use a jQuery method to fade a <div> element to an opacity of "0.2".
$("div").fadeTo("slow", 0.2);

// Use a jQuery method to toggle between fading in and out a <div> element, when clicking on a button.



$("button").click(function(){
  $("div").fadeToggle(1000);});

  // use a jQuery method to slide up a <div> element.
$("div").slideUp();


// Use a jQuery method to slide up a <div> element.

$("div").slideUp("slow");

// Use a jQuery method to slide down a <div> element.
$("div").slideDown();

// use a jQuery method to toggle between sliding up and down a <div> element, when clicking on a button.


$("button").click(function(){  
    $("div").slideToggle();
});


// Use the animate() method to move a <div> element 250 pixels to the right.

$("div").animate({left: '250px'});


// Use the animate() method to set the height of a <div> element to 500 pixels.

$("div").animate({height: '500px'});

// Use the animate() method to set the following CSS properties for <div>:

$("div").animate({
  
    opacity: '0.4',height: '500px',width: '500px'});


//Use the animate() method to set the font-size of a <div> element to 100 pixels:

$("div").animate({
    fontSize: '100px'}, "slow");

// Use a jQuery method to stop the animation effect of a <div> element.
$("div").stop();

// Use a jQuery method to return the text content of a <div> element.
$("div").txt();

// use a jQuery method to return the HTML content of a <div> element.
$("div").html();

// Use a jQuery method to return the value of an input field.
$("input").val();

// Use a jQuery method to return the URL address of a link.

$("a").attr("href");

// Use a jQuery method to change the text of a <div> element to "Hello World".
$("div").text("Hello World")

// Use a jQuery method to change the value of an input field to "John Doe".
$("input").val("John doe")


//Use a jQuery method to change the value of an image's src attribute to "myimage.jpg".


$("img").attr("src", "myimage.jpg");

// Use jQuery to change the text of a link to "Demo",
$("#myLink").text("Demo");
$("#myLink").attr("href", "https://www.demo.com");

// method to insert the text "YES!" at the end of a <p> element.


$("p").append("YES!");

// insert at the starting of para

$("p").prepend("YES!");

// method to remove a div

$("div").remove();

// remove the child element of a div

$("div").empty();

// remove all element all div element with class 

$("div").
remove(".test, .demo");

// jQuery method to add the "important" class to a <p> element.

$("p").
addClass("important");

// method to add both the "important" and "test" class to a <p> element.

$("p").addClass("important test");

// jQuery method to remove the "important" class from a <p> element.

$("p").removeClass("important");

// 

$("p").click(function(){
  $(this).toggleClass("important");
});


// e the css() method to add a pink background color to a <p> element.


$("p").css("background-color", "pink");

//Use the css() method to add a 5 pixels red dotted border to a <p> element.


$("p").css("border", "5px dotted red");

//Return the background color of a <p> element.

$("p").css("background-color");

// 
//Use the css() method to set the following styles for <p>:
$("p").
css
({"background-color": "green",
  "color": "white","font-size": "25px","padding": "15px"});


// Use jQuery methods to set the height and width of <div> to 500 pixels.
$("div").height(500).width(500);

// Use a jQuery method to get the height of a <div> element, excluding padding, border and margin.
$("div").height()











