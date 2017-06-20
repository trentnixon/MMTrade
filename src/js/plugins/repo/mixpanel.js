// JavaScript Document
// Mix Panel Finctions

function PageViewed(id)
	{
			mixpanel.track("Page Viewed", {
					"Page": id,
				});
		}
		
		
function ClientClick(location, value)
	{
		console.log(location)
		console.log(value)
		mixpanel.track("Link Clicked", {
					"Location": location,
					"PageName":value,
				});
		}
		
// Listen to events
$(document).on("click", ".Mixpanel", function(){
			// get Attributes
			ClientClick($(this).attr('data-location'), $(this).attr('href'))
	})


