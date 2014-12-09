/*=:project
    scalable Inman Flash Replacement (sIFR) version 3, revision 278

  =:file
    Copyright: 2006 Mark Wubben.
    Author: Mark Wubben, <http://novemberborn.net/>

  =:history
    * IFR: Shaun Inman
    * sIFR 1: Mike Davidson, Shaun Inman and Tomas Jogin
    * sIFR 2: Mike Davidson, Shaun Inman, Tomas Jogin and Mark Wubben

  =:license
    This software is licensed and provided under the CC-GNU LGPL.
    See <http://creativecommons.org/licenses/LGPL/2.1/>    
*/

var parseSelector=(function(){var _1=/\s*,\s*/;var _2=/\s*([\s>+~(),]|^|$)\s*/g;var _3=/([\s>+~,]|[^(]\+|^)([#.:@])/g;var _4=/^[^\s>+~]/;var _5=/[\s#.:>+~()@]|[^\s#.:>+~()@]+/g;function parseSelector(_6,_7){_7=_7||document.documentElement;var _8=_6.split(_1),_9=[];for(var i=0;i<_8.length;i++){var _b=[_7],_c=toStream(_8[i]);for(var j=0;j<_c.length;){var _e=_c[j++],_f=_c[j++],_10="";if(_c[j]=="("){while(_c[j++]!=")"&&j<_c.length){_10+=_c[j]}_10=_10.slice(0,-1)}_b=select(_b,_e,_f,_10)}_9=_9.concat(_b)}return _9}function toStream(_11){var _12=_11.replace(_2,"$1").replace(_3,"$1*$2");if(_4.test(_12)){_12=" "+_12}return _12.match(_5)||[]}function select(_13,_14,_15,_16){return (_17[_14])?_17[_14](_13,_15,_16):[]}var _18={toArray:function(_19){var a=[];for(var i=0;i<_19.length;i++){a.push(_19[i])}return a}};var dom={isTag:function(_1d,tag){return (tag=="*")||(tag.toLowerCase()==_1d.nodeName.toLowerCase())},previousSiblingElement:function(_1f){do{_1f=_1f.previousSibling}while(_1f&&_1f.nodeType!=1);return _1f},nextSiblingElement:function(_20){do{_20=_20.nextSibling}while(_20&&_20.nodeType!=1);return _20},hasClass:function(_21,_22){return (_22.className||"").match("(^|\\s)"+_21+"(\\s|$)")},getByTag:function(tag,_24){return _24.getElementsByTagName(tag)}};var _17={"#":function(_25,_26){for(var i=0;i<_25.length;i++){if(_25[i].getAttribute("id")==_26){return [_25[i]]}}return []}," ":function(_28,_29){var _2a=[];for(var i=0;i<_28.length;i++){_2a=_2a.concat(_18.toArray(dom.getByTag(_29,_28[i])))}return _2a},">":function(_2c,_2d){var _2e=[];for(var i=0,_30;i<_2c.length;i++){_30=_2c[i];for(var j=0,_32;j<_30.childNodes.length;j++){_32=_30.childNodes[j];if(_32.nodeType==1&&dom.isTag(_32,_2d)){_2e.push(_32)}}}return _2e},".":function(_33,_34){var _35=[];for(var i=0,_37;i<_33.length;i++){_37=_33[i];if(dom.hasClass([_34],_37)){_35.push(_37)}}return _35},":":function(_38,_39,_3a){return (pseudoClasses[_39])?pseudoClasses[_39](_38,_3a):[]}};parseSelector.selectors=_17;parseSelector.pseudoClasses={};parseSelector.util=_18;parseSelector.dom=dom;return parseSelector})();
var sIFR=new function(){var _3b=this;var _3c="sIFR-active";var _3d="sIFR-replaced";var _3e="sIFR-replacing";var _3f="sIFR-flash";var _40="sIFR-ignore";var _41="sIFR-alternate";var _42="sIFR-class";var _43="sIFR-layout";var _44=6;var _45=126;var _46=8;var _47="SIFR-PREFETCHED";var _48=[];var _49=5;this.isActive=false;this.isEnabled=true;this.hideElements=true;this.preserveSingleWhitespace=false;this.fixWrap=true;this.fixHover=true;this.registerEvents=true;this.setPrefetchCookie=true;this.cookiePath="/";this.domains=[];this.fromLocal=false;this.forceClear=false;this.forceWidth=true;this.fitExactly=true;this.forceTextTransform=true;this.useDomContentLoaded=true;this.hasFlashClassSet=false;this.delayCss=false;this.callbacks=[];var _4a=0;var _4b=false,_4c=false;var dom=new function(){var _4e="http://www.w3.org/1999/xhtml";this.getBody=function(){var _4f=document.getElementsByTagName("body");if(_4f.length==1){return _4f[0]}return null};this.addClass=function(_50,_51){if(_51){_51.className=((_51.className||"")==""?"":_51.className+" ")+_50}};this.removeClass=function(_52,_53){if(_53){_53.className=_53.className.replace(new RegExp("(^|\\s)"+_52+"(\\s|$)"),"").replace(/^\s+|(\s)\s+/g,"$1")}};this.hasClass=function(_54,_55){return new RegExp("(^|\\s)"+_54+"(\\s|$)").test(_55.className)};this.hasOneOfClassses=function(_56,_57){for(var i=0;i<_56.length;i++){if(this.hasClass(_56[i],_57)){return true}}return false};this.create=function(_59){if(document.createElementNS){return document.createElementNS(_4e,_59)}return document.createElement(_59)};this.setInnerHtml=function(_5a,_5b){if(ua.innerHtmlSupport){_5a.innerHTML=_5b}else{if(ua.xhtmlSupport){_5b=["<root xmlns=\"",_4e,"\">",_5b,"</root>"].join("");var xml=(new DOMParser()).parseFromString(_5b,"text/xml");xml=document.importNode(xml.documentElement,true);while(_5a.firstChild){_5a.removeChild(_5a.firstChild)}while(xml.firstChild){_5a.appendChild(xml.firstChild)}}}};this.nodeFromHtml=function(_5d){var _5e=this.create("div");_5e.innerHTML=_5d;return _5e.firstChild};this.getComputedStyle=function(_5f,_60){var _61;if(document.defaultView&&document.defaultView.getComputedStyle){_61=document.defaultView.getComputedStyle(_5f,null)[_60]}else{if(_5f.currentStyle){_61=_5f.currentStyle[_60]}}return _61||""};this.getStyleAsInt=function(_62,_63,_64){var _65=this.getComputedStyle(_62,_63);if(_64&&!/px$/.test(_65)){return 0}_65=parseInt(_65);return isNaN(_65)?0:_65};this.getZoom=function(){return _66.zoom.getLatest()}};this.dom=dom;var ua=new function(){var ua=navigator.userAgent.toLowerCase();var _69=(navigator.product||"").toLowerCase();this.macintosh=ua.indexOf("mac")>-1;this.windows=ua.indexOf("windows")>-1;this.quicktime=false;this.opera=ua.indexOf("opera")>-1;this.konqueror=_69.indexOf("konqueror")>-1;this.ie=false/*@cc_on || true @*/;this.ieSupported=this.ie&&!/ppc|smartphone|iemobile|msie\s5\.5/.test(ua)/*@cc_on && @_jscript_version >= 5.5 @*/;this.ieWin=this.ie&&this.windows/*@cc_on && @_jscript_version >= 5.1 @*/;this.windows=this.windows&&(!this.ie||this.ieWin);this.ieMac=this.ie&&this.macintosh/*@cc_on && @_jscript_version < 5.1 @*/;this.macintosh=this.macintosh&&(!this.ie||this.ieMac);this.safari=ua.indexOf("safari")>-1;this.webkit=ua.indexOf("applewebkit")>-1&&!this.konqueror;this.khtml=this.webkit||this.konqueror;this.gecko=!this.webkit&&_69=="gecko";this.operaVersion=this.opera&&/.*opera(\s|\/)(\d+\.\d+)/.exec(ua)?parseInt(RegExp.$2):0;this.webkitVersion=this.webkit&&/.*applewebkit\/(\d+).*/.exec(ua)?parseInt(RegExp.$1):0;this.geckoBuildDate=this.gecko&&/.*gecko\/(\d{8}).*/.exec(ua)?parseInt(RegExp.$1):0;this.konquerorVersion=this.konqueror&&/.*konqueror\/(\d\.\d).*/.exec(ua)?parseInt(RegExp.$1):0;this.flashVersion=0;if(this.ieWin){var axo;var _6b=false;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(e){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");this.flashVersion=6;axo.AllowScriptAccess="always"}catch(e){_6b=this.flashVersion==6}if(!_6b){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(e){}}}if(!_6b&&axo){this.flashVersion=parseFloat(/([\d,?]+)/.exec(axo.GetVariable("$version"))[1].replace(/,/g,"."))}}else{if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){var _6c=navigator.plugins["Shockwave Flash"];this.flashVersion=parseFloat(/(\d+\.?\d*)/.exec(_6c.description)[1]);var i=0;while(this.flashVersion>=_46&&i<navigator.mimeTypes.length){var _6e=navigator.mimeTypes[i];if(_6e.type=="application/x-shockwave-flash"&&_6e.enabledPlugin.description.toLowerCase().indexOf("quicktime")>-1){this.flashVersion=0;this.quicktime=true}i++}}}this.flash=this.flashVersion>=_46;this.transparencySupport=this.macintosh||this.windows;this.computedStyleSupport=this.ie||document.defaultView&&document.defaultView.getComputedStyle&&(!this.gecko||this.geckoBuildDate>=20030624);this.css=true;if(this.computedStyleSupport){try{var _6f=document.getElementsByTagName("head")[0];_6f.style.backgroundColor="#FF0000";var _70=dom.getComputedStyle(_6f,"backgroundColor");this.css=!_70||/\#F{2}0{4}|rgb\(255,\s?0,\s?0\)/i.test(_70);_6f.style.backgroundColor="";_6f=null}catch(e){}}this.xhtmlSupport=!!window.DOMParser&&!!document.importNode;try{var n=dom.create("span");if(!this.ieMac){n.innerHTML="x"}this.innerHtmlSupport=n.innerHTML=="x"}catch(e){this.innerHtmlSupport=false}this.zoomSupport=!!(this.opera&&document.documentElement);this.geckoXml=this.gecko&&(document.contentType||"").indexOf("xml")>-1;this.requiresPrefetch=this.ieWin||this.khtml;this.verifiedKonqueror=false;this.supported=this.flash&&this.css&&(!this.ie||this.ieSupported)&&(!this.opera||this.operaVersion>=8)&&(!this.webkit||this.webkitVersion>=412)&&(!this.konqueror||this.konquerorVersion>3.5)&&this.computedStyleSupport&&(this.innerHtmlSupport||!this.khtml&&this.xhtmlSupport)&&(!this.gecko||this.geckoBuildDate>20040804)};this.ua=ua;var _72=new function(){var _73={leading:true,"margin-left":true,"margin-right":true,"text-indent":true};var _74=" ";function capitalize($){return $.toUpperCase()}this.normalize=function(str){if(_3b.preserveSingleWhitespace){return str.replace(/\s/g,_74)}return str.replace(/(\s)\s+/g,"$1").replace(/\xA0/,_74)};this.textTransform=function(_77,str){switch(_77){case "uppercase":str=str.toUpperCase();break;case "lowercase":str=str.toLowerCase();break;case "capitalize":var _79=str;str=str.replace(/^\w|\s\w/g,capitalize);if(str.indexOf("function capitalize")!=-1){var _7a=_79.replace(/(^|\s)(\w)/g,"$1$1$2$2").split(/^\w|\s\w/g);str="";for(var i=0;i<_7a.length;i++){str+=_7a[i].charAt(0).toUpperCase()+_7a[i].substring(1)}}break}return str};this.toHexString=function(str){if(typeof (str)!="string"||!str.charAt(0)=="#"||str.length!=4&&str.length!=7){return str}str=str.replace(/#/,"");if(str.length==3){str=str.replace(/(.)(.)(.)/,"$1$1$2$2$3$3")}return "0x"+str};this.toJson=function(obj){var _7e="";switch(typeof (obj)){case "string":_7e="\""+obj+"\"";break;case "number":case "boolean":_7e=obj.toString();break;case "object":_7e=[];for(var _7f in obj){if(obj[_7f]==Object.prototype[_7f]){continue}_7e.push("\""+_7f+"\":"+_72.toJson(obj[_7f]))}_7e="{"+_7e.join(",")+"}";break}return _7e};this.convertCssArg=function(arg){if(!arg){return {}}if(typeof (arg)=="object"){if(arg.constructor==Array){arg=arg.join("")}else{return arg}}var obj={};var _82=arg.split("}");for(var i=0;i<_82.length;i++){var $=_82[i].match(/([^\s{]+)\s*\{(.+)\s*;?\s*/);if(!$||$.length!=3){continue}if(!obj[$[1]]){obj[$[1]]={}}var _85=$[2].split(";");for(var j=0;j<_85.length;j++){var $2=_85[j].match(/\s*([^:\s]+)\s*\:\s*([^\s;]+)/);if(!$2||$2.length!=3){continue}obj[$[1]][$2[1]]=$2[2]}}return obj};this.extractFromCss=function(css,_89,_8a,_8b){var _8c=null;if(css&&css[_89]&&css[_89][_8a]){_8c=css[_89][_8a];if(_8b){delete css[_89][_8a]}}return _8c};this.cssToString=function(arg){var css=[];for(var _8f in arg){var _90=arg[_8f];if(_90==Object.prototype[_8f]){continue}css.push(_8f,"{");for(var _91 in _90){if(_90[_91]==Object.prototype[_91]){continue}var _92=_90[_91];if(_73[_91]){_92=parseInt(_92,10)}css.push(_91,":",_92,";")}css.push("}")}return css.join("")};this.bind=function(_93,_94){return function(){_93[_94].apply(_93,arguments)}};this.escape=function(str){return escape(str).replace(/\+/,"%2B")}};this.util=_72;var _66={};_66.fragmentIdentifier=new function(){this.fix=true;var _96;this.cache=function(){_96=document.title};function doFix(){document.title=_96}this.restore=function(){if(this.fix){setTimeout(doFix,0)}}};_66.synchronizer=new function(){this.isBlocked=false;this.block=function(){this.isBlocked=true};this.unblock=function(){this.isBlocked=false;_97.replaceAll()}};_66.zoom=new function(){var _98=100;this.getLatest=function(){return _98};if(ua.zoomSupport&&ua.opera){var _99=document.createElement("div");_99.style.position="fixed";_99.style.left="-65536px";_99.style.top="0";_99.style.height="100%";_99.style.width="1px";_99.style.zIndex="-32";document.documentElement.appendChild(_99);function updateZoom(){if(!_99){return}var _9a=window.innerHeight/_99.offsetHeight;var _9b=Math.round(_9a*100)%10;if(_9b>5){_9a=Math.round(_9a*100)+10-_9b}else{_9a=Math.round(_9a*100)-_9b}_98=isNaN(_9a)?100:_9a;_66.synchronizer.unblock();document.documentElement.removeChild(_99);_99=null}_66.synchronizer.block();setTimeout(updateZoom,54)}};this.hacks=_66;this.errors={};var _9c={kwargs:[],replaceAll:function(_9d){for(var i=0;i<this.kwargs.length;i++){_3b.replace(this.kwargs[i])}if(!_9d){this.kwargs=[]}}};var _97={kwargs:[],replaceAll:_9c.replaceAll};function isValidDomain(){if(_3b.domains.length==0){return true}var _9f="";try{_9f=document.domain}catch(e){}for(var i=0;i<_3b.domains.length;i++){var _a1=_3b.domains[i];if(_a1=="*"||_a1==_9f){return true}var _a2=_a1.lastIndexOf("*");if(_a2>-1){_a1=_a1.substr(_a2+1);var _a3=_9f.lastIndexOf(_a1);if(_a3>-1&&(_a3+_a1.length)==_9f.length){return true}}}return false}function isFile(){if(!_3b.fromLocal&&document.location.protocol=="file:"){if(_3b.debug){throw new Error(_3b.errors.isFile)}return true}return false}this.activate=function(){if(!ua.supported||!this.isEnabled||this.isActive||!isValidDomain()||isFile()){return}if(arguments.length>0){this.prefetch.apply(this,arguments)}this.isActive=true;if(this.hideElements){this.setFlashClass()}if(ua.ieWin&&_66.fragmentIdentifier.fix&&window.location.hash!=""){_66.fragmentIdentifier.cache()}else{_66.fragmentIdentifier.fix=false}if(!this.registerEvents){return}function handler(evt,_a5){_3b.initialize(_a5);if(evt&&evt.type=="load"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",handler,false)}if(window.removeEventListener){window.removeEventListener("load",handler,false)}}}if(window.addEventListener){if(_3b.useDomContentLoaded&&ua.gecko){document.addEventListener("DOMContentLoaded",handler,false)}window.addEventListener("load",handler,false)}else{if(ua.ieWin){if(_3b.useDomContentLoaded){document.write("<scr"+"ipt id=__sifr_ie_onload defer src=//:></script>");document.getElementById("__sifr_ie_onload").onreadystatechange=function(){if(this.readyState=="complete"){handler(null,true);this.removeNode()}}}window.attachEvent("onload",handler)}}};this.setFlashClass=function(){if(this.hasFlashClassSet){return}dom.addClass(_3c,dom.getBody()||document.documentElement);this.hasFlashClassSet=true};this.removeFlashClass=function(){if(!this.hasFlashClassSet){return}dom.removeClass(_3c,dom.getBody());dom.removeClass(_3c,document.documentElement);this.hasFlashClassSet=false};this.initialize=function(_a6){if(!this.isActive||!this.isEnabled){return}if(_4c){if(!_a6){_9c.replaceAll(false)}return}_4c=true;_9c.replaceAll(_a6);clearPrefetch()};function getSource(src){if(typeof (src)!="string"){if(src.src){src=src.src}if(typeof (src)!="string"){var _a8=[];for(var _a9 in src){if(src[_a9]!=Object.prototype[_a9]){_a8.push(_a9)}}_a8.sort().reverse();var _aa="";var i=-1;while(!_aa&&++i<_a8.length){if(parseFloat(_a8[i])<=ua.flashVersion){_aa=src[_a8[i]]}}src=_aa}}if(!src&&_3b.debug){throw new Error(_3b.errors.getSource)}if(ua.ie&&src.charAt(0)=="/"){src=window.location.toString().replace(/([^:]+)(:\/?\/?)([^\/]+).*/,"$1$2$3")+src}return src}this.prefetch=function(){if((!ua.requiresPrefetch&&!this.isActive)||!ua.supported||!this.isEnabled||!isValidDomain()){return}if(this.setPrefetchCookie&&new RegExp(";?"+_47+"=true;?").test(document.cookie)){return}try{_4b=true;if(ua.ieWin){prefetchIexplore(arguments)}else{prefetchLight(arguments)}if(this.setPrefetchCookie){document.cookie=_47+"=true;path="+this.cookiePath}}catch(e){if(_3b.debug){throw e}}};function prefetchIexplore(_ac){for(var i=0;i<_ac.length;i++){document.write("<script defer type=\"sifr/prefetch\" src=\""+getSource(_ac[i])+"\"></script>")}}function prefetchLight(_ae){for(var i=0;i<_ae.length;i++){new Image().src=getSource(_ae[i])}}function clearPrefetch(){if(!ua.ieWin||!_4b){return}try{var _b0=document.getElementsByTagName("script");for(var i=_b0.length-1;i>=0;i--){var _b2=_b0[i];if(_b2.type=="sifr/prefetch"){_b2.parentNode.removeChild(_b2)}}}catch(e){}}function getRatio(_b3,_b4){for(var i=0;i<_b4.length;i+=2){if(_b3<=_b4[i]){return _b4[i+1]}}return _b4[_b4.length-1]||1}function getFilters(obj){var _b7=[];for(var _b8 in obj){if(obj[_b8]==Object.prototype[_b8]){continue}var _b9=obj[_b8];_b8=[_b8.replace(/filter/i,"")+"Filter"];for(var _ba in _b9){if(_b9[_ba]==Object.prototype[_ba]){continue}_b8.push(_ba+":"+_72.escape(_72.toJson(_72.toHexString(_b9[_ba]))))}_b7.push(_b8.join(","))}return _72.escape(_b7.join(";"))}function calculate(_bb){var _bc,_bd;if(!ua.ie){_bc=dom.getStyleAsInt(_bb,"lineHeight");_bd=Math.floor(dom.getStyleAsInt(_bb,"height")/_bc)}else{if(ua.ie){var _be=_bb.innerHTML;_bb.style.visibility="visible";_bb.style.overflow="visible";_bb.style.position="static";_bb.style.zoom="normal";_bb.style.writingMode="lr-tb";_bb.style.width=_bb.style.height="auto";_bb.style.maxWidth=_bb.style.maxHeight=_bb.style.styleFloat="none";var _bf=_bb;var _c0=_bb.currentStyle.hasLayout;if(_c0){dom.setInnerHtml(_bb,"<div class=\""+_43+"\">X<br />X<br />X</div>");_bf=_bb.firstChild}else{dom.setInnerHtml(_bb,"X<br />X<br />X")}var _c1=_bf.getClientRects();_bc=_c1[1].bottom-_c1[1].top;_bc=Math.ceil(_bc*0.8);if(_c0){dom.setInnerHtml(_bb,"<div class=\""+_43+"\">"+_be+"</div>");_bf=_bb.firstChild}else{dom.setInnerHtml(_bb,_be)}_c1=_bf.getClientRects();_bd=_c1.length;if(_c0){dom.setInnerHtml(_bb,_be)}_bb.style.visibility=_bb.style.width=_bb.style.height=_bb.style.maxWidth=_bb.style.maxHeight=_bb.style.overflow=_bb.style.styleFloat=_bb.style.position=_bb.style.zoom=_bb.style.writingMode=""}}return {lineHeight:_bc,lines:_bd}}this.replace=function(_c2,_c3){if(!ua.supported){return}if(_c3){for(var _c4 in _c2){if(typeof (_c3[_c4])=="undefined"){_c3[_c4]=_c2[_c4]}}_c2=_c3}if(!_4c){return _9c.kwargs.push(_c2)}if(_66.synchronizer.isBlocked){return _97.kwargs.push(_c2)}var _c5=_c2.elements;if(!_c5&&parseSelector){_c5=parseSelector(_c2.selector)}if(_c5.length==0){return}this.setFlashClass();var src=getSource(_c2.src);var css=_72.convertCssArg(_c2.css);var _c8=getFilters(_c2.filters);var _c9=(_c2.forceClear==null)?_3b.forceClear:_c2.forceClear;var _ca=(_c2.fitExactly==null)?_3b.fitExactly:_c2.fitExactly;var _cb=_ca||(_c2.forceWidth==null?_3b.forceWidth:_c2.forceWidth);var _cc=parseInt(_72.extractFromCss(css,".sIFR-root","leading"))||0;var _cd=_72.extractFromCss(css,".sIFR-root","font-size",true)||0;var _ce=_72.extractFromCss(css,".sIFR-root","background-color",true)||"#FFFFFF";var _cf=_72.extractFromCss(css,".sIFR-root","kerning",true)||"";var _d0=_c2.gridFitType||_72.extractFromCss(css,".sIFR-root","text-align")=="right"?"subpixel":"pixel";var _d1=_3b.forceTextTransform?_72.extractFromCss(css,".sIFR-root","text-transform",true)||"none":"none";var _d2=_72.extractFromCss(css,".sIFR-root","opacity",true)||"100";var _d3=_c2.pixelFont||false;var _d4=_c2.ratios||_48;var _d5=parseInt(_c2.tuneHeight)||0;if(parseInt(_cd).toString()!=_cd&&_cd.indexOf("px")==-1){_cd=0}else{_cd=parseInt(_cd)}if(parseFloat(_d2)<1){_d2=100*parseFloat(_d2)}var _d6="";if(_ca){_72.extractFromCss(css,".sIFR-root","text-align",true)}if(!_c2.modifyCss){_d6=_72.cssToString(css)}var _d7=!ua.opera&&_3b.delayCss;var _d8=_c2.wmode||"";if(!_d8){if(_c2.transparent){_d8="transparent"}else{if(_c2.opaque){_d8="opaque"}}}if(_d8=="transparent"){if(!ua.transparencySupport){_d8="opaque"}else{_ce="transparent"}}for(var i=0;i<_c5.length;i++){var _da=_c5[i];if(!ua.verifiedKonqueror){if(dom.getComputedStyle(_da,"lineHeight").match(/e\+08px/)){ua.supported=_3b.isEnabled=false;this.removeFlashClass();return}ua.verifiedKonqueror=true}if(dom.hasOneOfClassses([_3d,_3e,_40,_41],_da)){continue}var _db=_da.offsetHeight;var _dc=_da.offsetWidth;var _dd=dom.getComputedStyle(_da,"display");if(!_db||!_dc||_dd==null||_dd=="none"){continue}if(_c9&&ua.gecko){_da.style.clear="both"}var _de=null;if(_3b.fixWrap&&ua.ie&&_dd=="block"){_de=_da.innerHTML;dom.setInnerHtml(_da,"X")}_dc=dom.getStyleAsInt(_da,"width",ua.ie);if(_dc==0){var _df=dom.getStyleAsInt(_da,"paddingRight",true);var _e0=dom.getStyleAsInt(_da,"paddingLeft",true);var _e1=dom.getStyleAsInt(_da,"borderRightWidth",true);var _e2=dom.getStyleAsInt(_da,"borderLeftWidth",true);_dc=_da.offsetWidth-_e0-_df-_e2-_e1}if(_de&&_3b.fixWrap&&ua.ie){dom.setInnerHtml(_da,_de)}var _e3,_e4;if(!_cd){var _e5=calculate(_da);_e3=Math.min(_45,Math.max(_44,_e5.lineHeight));if(_d3){_e3=Math.max(8,8*Math.round(_e3/8))}_e4=_e5.lines;if(isNaN(_e4)||!isFinite(_e4)||_e4==0){_e4=1}if(_e4>1&&_cc){_db+=Math.round((_e4-1)*_cc)}}else{_e3=_cd;_e4=1}_db=Math.round(_e4*_e3);if(_c9&&ua.gecko){_da.style.clear=""}var _e6=dom.create("span");_e6.className=_41;var _e7=_da.cloneNode(true);for(var j=0,l=_e7.childNodes.length;j<l;j++){_e6.appendChild(_e7.childNodes[j].cloneNode(true))}if(_c2.modifyContent){_c2.modifyContent(_e7,_c2.selector)}if(_c2.modifyCss){_d6=_c2.modifyCss(css,_e7,_c2.selector)}var _ea=handleContent(_e7,_d1);if(_c2.modifyContentString){_ea.text=_c2.modifyContentString(_ea.text,_c2.selector)}if(_ea==""){continue}var _eb=["content="+_72.escape(_ea.text),"width="+_dc,"height="+_db,"fitexactly="+(_ca?"true":""),"tunewidth="+(_c2.tuneWidth||""),"tuneheight="+_d5,"offsetleft="+(_c2.offsetLeft||""),"offsettop="+(_c2.offsetTop||""),"thickness="+(_c2.thickness||""),"sharpness="+(_c2.sharpness||""),"kerning="+_cf,"gridfittype="+_d0,"zoomsupport="+ua.zoomSupport,"flashfilters="+_c8,"opacity="+_d2,"blendmode="+(_c2.blendMode||""),"size="+_e3,"zoom="+dom.getZoom(),"css="+_72.escape(_d6),"selectable="+(_c2.selectable==null?"true":_c2.selectable),"lines="+_e4,"fixhover="+(_3b.fixHover?"true":""),"antialiastype="+(_c2.antiAliasType||""),"preventwrap="+(_c2.preventWrap?"true":"false"),"link="+_72.escape(_ea.primaryLink[0]||""),"target="+_72.escape(_ea.primaryLink[1]||"")];var _ec=encodeVars(_eb);var _ed="sIFR_callback_"+_4a++;var _ee=new CallbackInfo(_ed,_eb,_c2.onReplacement);window[_ed+"_DoFSCommand"]=(function(_ef){return function(_f0,arg){_ef.handle(_f0,arg)}})(_ee);_db=Math.round(_e4*getRatio(_e3,_d4)*_e3)+_49+_d5;var _f2=_cb?_dc:"100%";var _f3;if(ua.ie){_f3=["<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" id=\"",_ed,"\" sifr=\"true\" width=\"",_f2,"\" height=\"",_db,"\" class=\"",_3f,"\">","<param name=\"movie\" value=\"",src,"\"></param>","<param name=\"flashvars\" value=\"",_ec,"\"></param>","<param name=\"allowScriptAccess\" value=\"always\"></param>","<param name=\"quality\" value=\"best\"></param>","<param name=\"wmode\" value=\"",_d8,"\"></param>","<param name=\"bgcolor\" value=\"",_ce,"\"></param>","<param name=\"name\" value=\"",_ed,"\"></param>","</object>","<scr","ipt event=FSCommand(info,args) for=",_ed,">",_ed,"_DoFSCommand(info, args);","</","script>"].join("")}else{_f3=["<embed type=\"application/x-shockwave-flash\"",(_d7?" class=\""+_3f+"\"":"")," src=\"",src,"\" quality=\"best\" flashvars=\"",_ec,"\" width=\"",_f2,"\" height=\"",_db,"\" wmode=\"",_d8,"\" bgcolor=\"",_ce,"\" name=\"",_ed,"\" id=\"",_ed,"\" allowScriptAccess=\"always\" sifr=\"true\"></embed>"].join("")}dom.setInnerHtml(_da,_f3);_ee.flashNode=_da.firstChild;_ee.html=_f3;_3b.callbacks.push(_ee);if(_c2.selector){if(!_3b.callbacks[_c2.selector]){_3b.callbacks[_c2.selector]=[_ee]}else{_3b.callbacks[_c2.selector].push(_ee)}}_da.appendChild(_e6);dom.addClass(_d7?_3e:_3d,_da)}_66.fragmentIdentifier.restore()};this.getCallbackByFlashElement=function(_f4){for(var i=0;i<_3b.callbacks.length;i++){if(_3b.callbacks[i].id==_f4.getAttribute("id")){return _3b.callbacks[i]}}};this.redraw=function(){for(var i=0;i<_3b.callbacks.length;i++){_3b.callbacks[i].resetMovie()}};function encodeVars(_f7){return _f7.join("&amp;").replace(/%/g,"%25")}function handleContent(_f8,_f9){var _fa=[],_fb=[],_fc=[];var _fd=_f8.childNodes;var i=0;while(i<_fd.length){var _ff=_fd[i];if(_ff.nodeType==3){var text=_72.normalize(_ff.nodeValue);text=_72.textTransform(_f9,text);_fb.push(text)}if(_ff.nodeType==1){var _101=[];var _102=_ff.nodeName.toLowerCase();var _103=_ff.className||"";if(/\s+/.test(_103)){if(_103.indexOf(_42)>-1){_103=_103.match("(\\s|^)"+_42+"-([^\\s$]*)(\\s|$)")[2]}else{_103=_103.match(/^([^\s]+)/)[1]}}if(_103!=""){_101.push("class=\""+_103+"\"")}if(_102=="a"){var href=_ff.getAttribute("href")||"";var _105=_ff.getAttribute("target")||"";_101.push("href=\""+href+"\"","target=\""+_105+"\"");if(_fc.length==0){_fc=[href,_105]}}_fb.push("<"+_102+(_101.length>0?" ":"")+_101.join(" ")+">");if(_ff.hasChildNodes()){_fa.push(i);i=0;_fd=_ff.childNodes;continue}else{if(!/^(br|img)$/i.test(_ff.nodeName)){_fb.push("</",_ff.nodeName.toLowerCase(),">")}}}if(_fa.length>0&&!_ff.nextSibling){do{i=_fa.pop();_fd=_ff.parentNode.parentNode.childNodes;_ff=_fd[i];if(_ff){_fb.push("</",_ff.nodeName.toLowerCase(),">")}}while(i==_fd.length-1&&_fa.length>0)}i++}return {text:_fb.join("").replace(/\n|\r/g,""),primaryLink:_fc}}function CallbackInfo(id,vars,_108,_109){this.id=id;this.vars=vars;this._replacementHandler=_108;this._firedReplacementEvent=!(this._replacementHandler!=null);this._fixHover=_109;this._setClasses=!_3b.delayCss;this.html=""}CallbackInfo.prototype.getFlashElement=function(){return document.getElementById(this.id)};CallbackInfo.prototype.available=function(){var _10a=this.getFlashElement();return _10a&&_10a.parentNode};CallbackInfo.prototype.handle=function(info,arg){if(!this.available()){return}if(/(FSCommand\:)?resize/.test(info)){var _10d=this.getFlashElement();var $=arg.split(/\:|,/);_10d.setAttribute($[0],$[1]);if($.length>2){_10d.setAttribute($[2],$[3])}if(!this._setClasses){if(!ua.ie&&!ua.opera){dom.addClass(_3f,_10d)}dom.removeClass(_3e,_10d.parentNode);dom.addClass(_3d,_10d.parentNode);this._setClasses=true}if(ua.khtml){var _10f=_10d.offsetHeight}if(!this._firedReplacementEvent){this._replacementHandler(this);this._firedReplacementEvent=true}}else{if(/(FSCommand\:)?resetmovie/.test(info)){this.resetMovie()}else{if(this.debugHandler&&/(FSCommand\:)?debug/.test(info)){this.debugHandler(info,arg)}}}};CallbackInfo.prototype.call=function(type,_111){if(!this.available()){return false}var _112=this.getFlashElement();try{_112.SetVariable("callbackType",type);_112.SetVariable("callbackValue",_111);_112.SetVariable("callbackTrigger",true)}catch(e){return false}return true};CallbackInfo.prototype.replaceText=function(_113){_113=_72.escape(_113);this.vars[0]="content="+_113;this.html=this.html.replace(/(flashvars(=|\"\svalue=)\")[^\"]+/,"$1"+encodeVars(this.vars));return this.call("replacetext",_113)};CallbackInfo.prototype.resetMovie=function(){if(!this.available()){return}var _114=this.getFlashElement();var node=_114.parentNode;node.replaceChild(dom.nodeFromHtml(this.html),_114)}};