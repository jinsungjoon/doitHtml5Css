
$(window).ready(function(){
	
});
$(document).ready(function(){
	$(window).scroll(function() {
			if($(this).scrollTop()>20){
				if($("#myBtn").length==0){
//		        	$("#body").append('<button onclick="topFunction()" id="myBtn" title="Go to top"></button>');
		        	$("#body").append('<button onclick="" id="myBtn" title="Go to top"></button>');
		        }
				$("#myBtn").show();
			}else{
	        	$("#myBtn").hide();
	        }
	});
	$(document).on('click', '#myBtn', function(){ 
//	    $("html, body").animate({ scrollTop: 0 }, 600);
	    $(document).scrollTop(0);
	}); 
});



//window.onscroll = function() {scrollFunction()};
//
//function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//        if($("#myBtn").length==0){
//        	$("#body").append('<button onclick="topFunction()" id="myBtn" title="Go to top"></button>');
//        }
//        $("#myBtn").show();
//    } else {
//    	$("#myBtn").hide();
//    }
//}
//
//function topFunction() {
//    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//    document.documentElement.scrollTop = 0; // For IE and Firefox
//}