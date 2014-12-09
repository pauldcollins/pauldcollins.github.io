var futuraCondensed = {
  src: '../flash/futuraCondensed.swf'
};
var featuredItem = {
  src: '../flash/featuredItem.swf'
};

sIFR.debugMode = true;
// sIFR.domains = ['novemberborn.net'] // Don't check for domains in this demo
sIFR.prefetch(futuraCondensed, featuredItem);
if(!sIFR.ua.opera || !sIFR.ua.macintosh) {
	sIFR.activate(futuraCondensed, featuredItem);
}

// second level nav
sIFR.replace(futuraCondensed, {
	selector: '#topNavigation .secondLevel li'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#FFFFFF; }'
	  ,'a { text-decoration:none; }'
	  ,'a:link { color:#FFFFFF; }'
	  ,'a:hover { color:#919F00; text-decoration:none; }'
	  ,'strong { color:#919F00; font-weight:normal; text-decoration:none; }'
    ],
  tuneHeight:-5
});

// main grey large title on preview pages
sIFR.replace(featuredItem, {
	selector: '.mainTitle'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#4A4A49; text-transform:uppercase; }'
    ],
  tuneHeight:-10
});

// main grey large title on preview pages
sIFR.replace(featuredItem, {
	selector: '.mainTitleOrange'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#ff8d00; text-transform:uppercase; }'
    ],
  tuneHeight:-10
});

// orange title on preview boxes
sIFR.replace(featuredItem, {
	selector: 'ul#previewList li h2'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#EF6F1B; }'
    ],
  tuneHeight:-10
});

// section headings in text boxes and blog boxes
sIFR.replace(featuredItem, {
	selector: '.textArea h1, .textAreaWide h1, #blogBox h2, #rightPanel dt'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#4A4A49; text-transform:uppercase; }'
	  ,'a { text-decoration:none; }'
	  ,'a:link { color:#4A4A49; }'
	  ,'a:hover { color:#C04E00; }'
    ],
  tuneHeight:-8
});

// text area smaller headings
sIFR.replace(featuredItem, {
	selector: '#respond, #leaveAReply'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#2C2C2C; text-transform:uppercase; }'
    ],
  tuneHeight:-8
});

// right panel section headings
sIFR.replace(futuraCondensed, {
	selector: '#rightPanel h2'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#4A4A49; text-transform:uppercase; }'
	  ,'a { text-decoration:none; }'
	  ,'a:link { color:#4A4A49; }'
	  ,'a:hover { color:#FFFFFF; }'
    ],
  tuneHeight:-11
});

// right panel sub-headings
sIFR.replace(featuredItem, {
	selector: '#rightPanel h3, #blogBox h1'
	,wmode: 'transparent'
	,css: [
	  '.sIFR-root { color:#FFFFFF; text-transform:uppercase; }'
	  ,'a { text-decoration:none; }'
	  ,'a:link { color:#FFFFFF; }'
	  ,'a:hover { color:#4A4A49; text-decoration:underline; }'
    ],
  tuneHeight:-13
});