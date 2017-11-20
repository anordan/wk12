
// Response, using jQuery, to at least two different user interaction events


// At least one fade animation


// At least one position animation


// At least one implementation of the jQuery animate() function

		//fadein try 1
//$("#button1").click(function() {
	//$("#page1").fadeIn("slow", "linear");
		
	//});
//});

		//position animate for applesauce try 2
//$(document).ready(function(){
    //$("#button1").click(function(){
       // $("#page1").animate({left: '250px'});
    //});
//});


$(document).ready(function() {

// fadein fade out function for recipes, click on the title to make the recipe disapear, click on each button to make their recipe appear.
 $("#home1").click (function() {
    $("#page0").fadeIn(200);
    
  });


 $("#button1").click (function() {
    $("#page1").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});


//recipe2
$("#button2").click (function() {
    $("#page2").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});


//recipe3
$("#button3").click (function() {
    $("#page3").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});


//recipe4
$("#button4").click (function() {
    $("#page4").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});

//recipe5
$("#button5").click (function() {
    $("#page5").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});

//recipe6
$("#button6").click (function() {
    $("#page6").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});


//recipe7
$("#button7").click (function() {
    $("#page7").fadeIn(200);
    
  });
$("#home1").click(function() {
	$(".copy").fadeOut(600);
});



//apple image user interaction events hide and show
$('.hideimg a').on('click', hideImage);
function hideImage(evt) {
	$('#apple').fadeOut(600);
};

  $('.showimg a').on('click', showImage);
    function showImage(evt) {
      $('#apple').fadeIn(600);
    };


// animate function to increase font size
$("#button1").hover (function () {
$(this).animate ({fontsize: "2em", 
				zIndex: 2 }, 600 );},
function () {
	$(this).animate ({
		fontsize: "1.5em",
		zIndex: 1 });
	
})
	});
	

// animate to click to move the title
$("#title-swing").click(function() {
	$(".move").animate ({right : "300"}, 3000, "swing")
	

});

	


