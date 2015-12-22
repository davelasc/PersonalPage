$(document).ready(function() {
				
				var timer;
				
				$(".navbar-nav li").click(function() {
					$(".navbar-nav li").removeClass("active");
					$(this).addClass("active");
				});
				
				$(".navbar-brand").click(function () {
					$(".navbar-nav li").removeClass("active");
				});
				
				$("#inputBody").width($("#divEmail").width() - 27);
				
				$(window).on('resize', function() {
					clearTimeout(timer);
					timer = setTimeout(function() {
						$("#inputBody").width($("#divEmail").width() - 27);
					}, 500);
				});
				
				$(".contentContainer").css("min-height", $(window).height()/1.5);
				
				$("#inputEmail").on("input", function(){
					var enableBtnFlag = false;
					
					alert(isValidEmailAddress($("#inputEmail").val()));
					
					if(isValidEmailAddress($("#inputEmail").val())) {
						
						enableBtnFlag = true;
					}
					
					$("#sendEmail").toggleClass("disabled", enableBtnFlag);
				});
				
			});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}