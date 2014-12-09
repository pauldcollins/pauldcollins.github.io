
// JQUERY STUFF
// -------------------------------------

$(document).ready(function(){
	
// FUNCTION TO ADD IMAGE TAG IN PLACE OF TEXT FOR MAIN NAV LINKS (uses jQuery)
	$('#topNavigation .firstLevel li a').map(function(){
	   // find STRONG element...
	   var b = $(this).find('strong');
	   // return STRONG element or this (an A)...
	   return b.length ? b[0] : this;
	 })
	 // for each A or STRONG found...
	 .each(function(){
	   // get the text...
	   var me = $(this), txt = me.text();
	   // replace the text with constructed html...
	   me.html( [ '<img src="/images/topNav'
	                 , txt
	                 , '.gif" alt="'
	                 , txt
	                 , '" />'
	                 ].join('') );
	 });
		
//	FUNCTION TO REPLACE SUBMIT BUTTON WITH GRAPHIC
	$(":submit[id$='_replace']").each(function() {
	    var submitID = $(this).attr("id");
	    var submitValue = $(this).attr("value");
	    var formID = $(this).parents("form").attr("id");
	    $(this).replaceWith( [ '<a class="replace '
	                    , submitID
	                    , '" id="'
	                    , submitID
	                    , '" href="#"><em></em>'
	                    , submitValue
	                    , '</a>'
	                    ].join('')
	            );
	    $('#'+submitID).click(function() {
	            $('#'+formID).submit();
	            return false;
	            });
	    });
    $("form").validate();
});


// STANDARD JAVASCRIPT
// -------------------------------------

// FUNCTION TO MAKE FOOTER SIT AT BOTTOM OF PAGE
// Taken from Alistapart: http://www.alistapart.com/articles/footers
function getWindowHeight() {
	var windowHeight = 0;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
	}
	else {
		if (document.documentElement && document.documentElement.clientHeight) {
			windowHeight = document.documentElement.clientHeight;
		}
		else {
			if (document.body && document.body.clientHeight) {
				windowHeight = document.body.clientHeight;
			}
		}
	}
	return windowHeight;
}
function setFooter() {
	if (document.getElementById) {
		var windowHeight = getWindowHeight();
		if (windowHeight > 0) {
			var contentHeight = document.getElementById('wrapper').offsetHeight;
			var footerElement = document.getElementById('footer');
			var footerHeight  = footerElement.offsetHeight;
			if (windowHeight - (contentHeight + footerHeight) >= 0) {
				footerElement.style.position = 'relative';
				footerElement.style.top = (windowHeight - (contentHeight + footerHeight)) + 'px';
			}
			else {
				footerElement.style.position = 'static';
			}
		}
	}
}

// Simon Willison's onload Magic
// http://simon.incutio.com/archive/2004/05/26/addLoadEvent
function addLoadEvent(func) {
   var oldonload = window.onload;
   if (typeof window.onload != 'function') {
       window.onload = func;
   } else {
       window.onload = function() {
           oldonload();
           func();
       }
   }
}
  
// add onload event
addLoadEvent(function() { 
	setFooter();
});
window.onresize = function() {
	setFooter();
}
