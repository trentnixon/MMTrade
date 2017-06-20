jQuery(document).ready(function() {


/* ************************************************************* */
// ViewLocation Modal **/
/* ************************************************************* */	

	$(".ViewLocation").on('click',function(){
		$('#myModal').modal()
	});




/* ************************************************************* */
// Programmically change portfolio **/
/* ************************************************************* */			
		
$(document).on('click', '.ShowModal_old', function(){

	//console.log("Live Click")
	
	var CheckforThis = $(this).html();
	var Filter = $(this).data('filter');
	//console.log(CheckforThis);
	
	if(CheckforThis.indexOf("&amp;") >= 0 )	{ CheckforThis = CheckforThis.replace("&amp;", "&"); }
	//console.log(CheckforThis);
	//console.log(Filter);
	
	// Trigger the swap to the other list
	$( $(this).data('filter') ).trigger( "click" );

	// Stop Interval
	function myStopFunction() {
   		 clearInterval(SelectProduct);
	}
	
	// CHeck before changing
	function  findElement(CheckforThis, Filter) {
		
			var ThisItem = $('*[data-title="'+Filter+'"]');

			if(CheckforThis.length != 0)
				{ }
			else
				{
					$(ThisItem).trigger('click');
					myStopFunction()
					}
		}
	// Now set an Interval to check for when it is save to procced	
	var SelectProduct = setInterval(function(){ findElement($(Filter+'.cbp-item-off'), CheckforThis) }, 500);	
	
})		
		
/* ************************************************************* */
// Show Docs **/
/* ************************************************************* */	

$(document).on("click", "#showDocs", function(){
	
	$( ".SupportingDocs" ).toggle( "slow", function() {
    				// Animation complete.
  				});
})	// Close


/* ************************************************************* */
/***** Scroll Up *****/
/* ************************************************************* */

$('a[href*=#]').bind("click", function(e)
	{
		var anchor = $(this);
		
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50 }, 1500);
				e.preventDefault();
			});


$(window).scroll(function() {
      		if ($(this).scrollTop() > 100) {
        		$('.menu-top').addClass('menu-shrink');
      		} else {
        		$('.menu-top').removeClass('menu-shrink');
      		}		
    	});

$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
    
/**** Instagram Feed **/
// 
// Old Code. Left in just in case F&L wish to re use it
//
// FL access token 1536209952.b326f0b.f14b2b4112134505a1c5d4ba410cf7a3


// htt//instagram.com/oauth/authorize/?client_id=b326f0be50724efc8d14f82edeceb8c7&redirect_uri=http://localhost&response_type=token&scope=public_content

/*

var UseToken = '1536209952.b326f0b.f14b2b4112134505a1c5d4ba410cf7a3';
		var useUser = '1544815277'
		var UseClientID = 'b326f0be50724efc8d14f82edeceb8c7';

var feed = new Instafeed({
        get: 'user',
		userId : useUser,
		accessToken : UseToken,
        clientId: UseClientID,  
		limit : 6,
		resolution : 'standard_resolution',
		template: '<div class="col-md-4"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>'
    });
    feed.run();

	
	$(document).on("click", "#ShowInstaFeed", function(){
			$( "#Hideinstafeed" ).slideToggle( "slow", function() {
    				// Animation complete.
  				});
		})	
	
*/	


/* ************************************************************* */
/***** Contact form *****/
/* ************************************************************* */	
	    
   
   
    
	
/* ************************************************************* */
/* Catalouge Form */
/* ************************************************************* */		

		// Show or hide address if via post or email
		$('#formID input').on('change', function() {
		 
		 	var option = $('input[name=postType]:checked', '#formID').val(); 
		   
		  	if(option == 'post')
				{
					$("#SendviaPost").show(100,'',function(){
							
						$('#SendviaPost input').each(function(){
								$(this).prop('required',true);
							})
						
						});
					}
			else
				{
					$("#SendviaPost").hide(100,'',function(){
						$('#SendviaPost input').each(function(){
								$(this).prop('required',false);
							})
					});
			}
		});		
		
		/* Catalouge Form */
		$( "#formID" ).submit(function( event ) {			 
			 
			 
			 var urlCheck = $('input[name=url]', '#formID').val();
			 
			 if(urlCheck ==''){
				 	console.log("url check empty No robot here")
				 }
			 
			 var url ='/assets/lib/swift4/index.php';
			 var data = $('#formID').serialize();
			 
			 $(this).find('#submit').val('Sending...');
			 
			 var jqxhr = $.post( url, data, function(response) {
				  console.log(response);
				  var Message;
				  var MessageClass;
				  if(response == 1)
				  	{
							Message =' Form Sent';
							MessageClass = 'green';
						}
					else
					{	
							Message =' Error Sending form';
							MessageClass = 'red';
						}
					
					$("#CatalogueFormResponse").html(Message).addClass(MessageClass);
					
				})
				 .done(function() {
					$("#formID").slideUp(300,'swing');
					$("#CatalogueFormResponse").slideDown(300,'swing');
				  })
				  .fail(function() {
					//alert( "error" );
				  })
				  .always(function() {
					//alert( "finished" );
				  });

			  event.preventDefault();
			});


/* ************************************************************* */
/* Contact Form  Validation */
/* ************************************************************* */				
 $('.contact-form form input[type="text"], .contact-form form textarea').on('focus', function() {
    	$('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
    });
	$('.contact-form form').submit(function(e) {
		e.preventDefault();
	    $('.contact-form form input[type="text"], .contact-form form textarea').removeClass('contact-error');
	    var postdata = $('.contact-form form').serialize();
	    $.ajax({
	        type: 'POST',
	        url: 'index.php?id=42',
	        data: postdata,
	        dataType: 'json',
	        success: function(json) {
	            if(json.emailMessage != '') {
	                $('.contact-form form .contact-email').addClass('contact-error');
	            }
	            if(json.subjectMessage != '') {
	                $('.contact-form form .contact-subject').addClass('contact-error');
	            }
	            if(json.messageMessage != '') {
	                $('.contact-form form textarea').addClass('contact-error');
	            }
	            if(json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
	                $('.contact-form form').fadeOut('fast', function() {
	                    $('.contact-form').append('<p>Thanks for contacting us!</p>');
	                });
	            }
	        }
	    });
	});

   $('.products-by-finish').on('click',function(){
			$('.cbp-filter-item[data-filter=".Product_Finish"]').trigger('click')   
	   })
$('.products-by-type').on('click',function(){
			$('.cbp-filter-item[data-filter=".Product_Type"]').trigger('click')   
	   })
	   

/* ************************************************************* */
/* Contact Form  Send*/
/* ************************************************************* */		   

		$( "#ContactForm" ).submit(function( event ) {			 
			 
			 var url ='/assets/lib/swift4/contact.php';
			 var data = $('#ContactForm').serialize();
			 
			 $(this).find('.btn-submit').html('Sending...');
			 
			 var jqxhr = $.post( url, data, function(response) {
				  console.log(response);
				  var Message;
				  var MessageClass;
				  if(response == 1)
				  	{
							Message ='<h2>Message Sent</h2> <p>Your query has been sent to Forbes and Lomax.<br />  We will be in touch shortly.</p> <p>Keep up to date with  the latest news on our social media channels</p>';
							MessageClass = 'green';
						}
					else
					{	
							Message ='<h2> Error Sending form </h2> <p> Please try again later</p>';
							MessageClass = 'red';
						}
					
					$("#ContactFormResponse .message").html(Message).addClass(MessageClass);
					
				})
				 .done(function() {
					$("#ContactForm").fadeOut(300,'swing');
					$("#ContactFormResponse").fadeIn(300,'swing');
				  })
				  .fail(function() {
					//alert( "error" );
				  })
				  .always(function() {
					//alert( "finished" );
				  });

			  event.preventDefault();
			});			
			
			
/* ************************************************************* */
// IE Jumpy Paralax fix
/* ************************************************************* */		
	
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
	}	
		
	
/* ************************************************************* */
//owl carousel for screenshots
/* ************************************************************* */	
	
 
  $("#owl-example").owlCarousel({
      // Most important owl features
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,3],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    startDragging : true
  });
    // magnific popoup for single images
  $('.popup-link').magnificPopup({
  		type: 'image'
  	});
        

 // magnific popoup for image gallery

 $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
		tLoading: 'Loading image #%curr%...',
        gallery: {
          enabled:true,
		  navigateByImgClick: true,
		  preload: [0,1],
		   arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

  			tPrev: 'Previous (Left arrow key)', // title for left button
  			tNext: 'Next (Right arrow key)', // title for right button
        	}
    	});
	});			
});