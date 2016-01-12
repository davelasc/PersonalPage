/*
	*Last update: January 11, 2016
	*Author: David Velasco
	*Contains: Personal web page's functionality
/**/

$(document).ready(function() {
				
				$(".nav-pills li").click(function() {
					
					if(($("#techSkillPill").hasClass("active") && $(this).attr("id") == "techSkillPill") || 
						($("#workExpPill").hasClass("active") && $(this).attr("id") == "workExpPill")) {
							return; //Make sure not to toggle things when selecting the same pill that is active
						}
						
					//We switch the tabs
					$(".nav-pills li").removeClass("active").addClass("inactive");
					$(this).addClass("active");
					//Than we switch the table to show
					$(".col-md-6 .activeSection").removeClass("activeSection").addClass("tempInactive");
					$(".col-md-6 .inactiveSection").removeClass("inactiveSection").addClass("tempActive");
					
					$(".col-md-6 .tempInactive").removeClass("tempInactive").addClass("inactiveSection");
					$(".col-md-6 .tempActive").removeClass("tempActive").addClass("activeSection");
					
				});
				
/****************************************************************************************************************/				
				
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
				
				$(".contentContainer").css("min-height", $(window).height()/1.2);
				
				$("#SubmitEmail").click(function(event) {
					var canSubmit = false;
					event.preventDefault();
					$(".alert").hide();
					
					if($("#inputEmail").val() != "") {
						if(isValidEmailAddress($("#inputEmail").val())) {
							canSubmit = true;
						}else {
							$("#invalidEmailError").fadeIn();
						}
					}else {
						$("#noEmailError").fadeIn();
					}
					
					if($("#inputBody").val() == "" || ($("#inputBody").val() == "" && canSubmit)) {
						$("#noBodyError").fadeIn();
						canSubmit = false;
					}
					
					if(canSubmit) {
						$url = "src/sendEmail.php?inputEmail="+$("#inputEmail").val()+"&inputSubject="+$("#inputSubject").val()+"&inputBody="+$("#inputBody").val();
						$.get($url, function(data) {
							if(data=="0") {
								$("#failureMessage").fadeIn();
							}else {
								$("#successMessage").fadeIn();
								$("#inputEmail").val("");
								$("#inputSubject").val("");
								$("#inputBody").val("");
							}
						});
					}
					
				});
				
				$("#offlineCaC").click(function(event) {
					event.preventDefault();
					
					if($("#glyphOffline").attr("class").indexOf("plus") >= 0) {
						$("#glyphOffline").removeClass("glyphicon glyphicon-plus").addClass("glyphicon glyphicon-minus");
						$("#CoursesAndCertifications").fadeIn();
					}else {
						$("#glyphOffline").removeClass("glyphicon glyphicon-minus").addClass("glyphicon glyphicon-plus");
						$("#CoursesAndCertifications").fadeOut();
					}
					
				});
				
				$("#olineCaC").click(function(event) {
					event.preventDefault();
					
					if($("#glyphOnline").attr("class").indexOf("plus") >= 0) {
						$("#glyphOnline").removeClass("glyphicon glyphicon-plus").addClass("glyphicon glyphicon-minus");
						$("#OnlineCoursesAndCertifications").fadeIn();
					}else {
						$("#glyphOnline").removeClass("glyphicon glyphicon-minus").addClass("glyphicon glyphicon-plus");
						$("#OnlineCoursesAndCertifications").fadeOut();
					}
					
				});
				
				$("#logoHewlettPackard").click(function(event) {
					event.preventDefault();
					
					$(".logoContainer").removeClass("button logoContainer logoSelected").addClass("button logoContainer");
					$(this).addClass("logoSelected");
					$("#tableTitle").html("ALL ABOUT... Hewlett-Packard");
					$("#tdPeriod").html("October 2014 - Present");
					$("#tdRole").html("ITIO Cloud Automation L3 Support Engineer");
					$("#tdDescription").html("Give technical and customer support to cloud services. Give manual configuration and build load balancers, file shares, and servers.");
					$("#tdLanguages").html("vSphere, XML, Microsoft SQL, jSon");
				});
				
				$("#logoContinental").click(function(event) {
					event.preventDefault();
					
					$(".logoContainer").removeClass("button logoContainer logoSelected").addClass("button logoContainer");
					$(this).addClass("logoSelected");
					
					$("#tableTitle").html("ALL ABOUT... CONTINENTAL AC");
					$("#tdPeriod").html("April 2014 – October 2014");
					$("#tdRole").html("Software Trainee");
					$("#tdDescription").html("Performed role of database admin as well as debugging/updating a high end web system to automate internal process.");
					$("#tdLanguages").html("HTML5, CSS3, Javascript, PHP, MySQL, jQuery");
					
				});
				
				$("#logoIteso").click(function(event) {
					event.preventDefault();
					
					$(".logoContainer").removeClass("button logoContainer logoSelected").addClass("button logoContainer");
					$(this).addClass("logoSelected");
					
					$("#tableTitle").html("ALL ABOUT... Laboratorio de Aplicaciones Móviles ITESO-NOKIA");
					$("#tdPeriod").html("March 2013 - December 2013");
					$("#tdRole").html("Programmer");
					$("#tdDescription").html("Design and develop apps for Windows Phone and Nokia-S40.");
					$("#tdLanguages").html("HTML5, CSS3, Javascript, XML, .NET, #C");
					
				});
				
			});

function isValidEmailAddress(emailAddress) {
	/*Credit to use Rory McCrossan in stackoverflow*/
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};