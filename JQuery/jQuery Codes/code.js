//  to select an element

document.querySelectorAll("element");
// can be written as
$("element")  

// to change style

$("element").css("color","red")

// to add and remove class

$("element").addClass("style")
$("element").removeClass("style")

//  to check if an class is attached to the element or not

$("element").hasClass("style")


// to change text content

$("element").text("hello")

$("element").html("<p>hello</p>")


// to get and set attribute

$("img").attr("src")

$("img").attr("src","pic.jpeg")

// to add event listners

$("button").click(function(){})     
// or
$("button").on("click",function(){})     

// add element before and after an element 

$("h1").before("<button>new</button>")     
$("h1").after("<button>new</button>")     


// add element before and after inside the selected element

$("h1").prepend("<button>new</button>")     
$("h1").append("<button>new</button>")    

// remove element using JQuery

$("h1").hide()

// similarly
fadeOut()
fadeIn()
fadeToggle()
slideUp()
slideDown()
slideToggle()

// customize using animate method but can only use properties with NUMERIC values

animate()