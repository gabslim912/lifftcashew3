!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mcx-site-intercept",[],t):"object"==typeof exports?exports["mcx-site-intercept"]=t():e["mcx-site-intercept"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2);r.init(window).then(function(e){e.initParameters(),e.parameters.doLoadOnReady?(window.mcxLog("mcxSiteIntercept arming loadOnReady"),r.loadOnReady(window)):window.mcxLog("mcxSiteIntercept not loaded. Set window.mcxSiteInterceptParameters.doLoadOnReady = true to trigger loading.")})},function(e,t,n){"use strict";(function(t){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){return new t(function(r,i){e.mcxWarn=function(t,n){if("undefined"!=typeof console&&console.warn&&e.McxSiteInterceptOnExit&&e.McxSiteInterceptOnExit.parameters&&!1===e.McxSiteInterceptOnExit.parameters.ignoreWarning){var r=n?"":"mcxSiteIntercept: ";console.warn(r+t)}},e.mcxLog=function(t,n){if("undefined"!=typeof console&&console.log&&e.McxSiteInterceptOnExit&&e.McxSiteInterceptOnExit.parameters&&!0===e.McxSiteInterceptOnExit.parameters.debug){var r=n?"":"mcxSiteIntercept: ";console.log(r+t)}},e.McxSiteInterceptOnExit={takeSurvey:!1,surveyWindow:void 0,surveyURLParams:void 0,cachedHTML:void 0,inviteMethod:void 0,mouseXAxis:void 0,initParameters:function(){void 0===e.mcxSiteInterceptParameters&&(void 0!==e.allegianceSiteInterceptParameters?(e.mcxSiteInterceptParameters=e.allegianceSiteInterceptParameters,e.mcxWarn("The parameters variable (allegianceSiteInterceptParameters) needs to be renamed to mcxSiteInterceptParameters inside of the client extensibility. allegianceSiteInterceptParameters may be deprecated in future versions.")):(e.mcxWarn("mcxSiteInterceptParameters undefined, ensure that it is defined in client extensibility and that the site intercept script is loaded in after the client extensibility script. Default parameters used."),e.mcxSiteInterceptParameters=""));var t=function(){return e.mcxSiteInterceptParameters&&e.mcxSiteInterceptParameters.constructor===Array&&e.mcxSiteInterceptParameters.length>0};if(t()){for(var r=e.mcxUniqueID||"MCX_DEFAULT",i=0;i<e.mcxSiteInterceptParameters.length;i++)e.mcxSiteInterceptParameters[i].uniqueID&&r===e.mcxSiteInterceptParameters[i].uniqueID&&(e.mcxSiteInterceptParameters=e.mcxSiteInterceptParameters[i]);if(t()){for(var o=0;o<e.mcxSiteInterceptParameters.length;o++)e.mcxSiteInterceptParameters[o].uniqueID&&"MCX_DEFAULT"===e.mcxSiteInterceptParameters[o].uniqueID&&(e.mcxSiteInterceptParameters=e.mcxSiteInterceptParameters[o]);t()&&(e.mcxSiteInterceptParameters=e.mcxSiteInterceptParameters[0])}}var a=e.mcxSiteInterceptParameters;e.McxSiteInterceptOnExit.parameters={surveyURL:"string"==typeof a.surveyURL?a.surveyURL:"",showOnLoad:"boolean"!=typeof a.showOnLoad||a.showOnLoad,showOnMouseTopOfPage:"boolean"==typeof a.showOnMouseTopOfPage&&a.showOnMouseTopOfPage,showOnMouseTopOfPageMinMouseXAxis:"number"==typeof a.showOnMouseTopOfPageMinMouseXAxis?a.showOnMouseTopOfPageMinMouseXAxis:void 0,showOnMouseTopOfPageMaxMouseXAxis:"number"==typeof a.showOnMouseTopOfPageMaxMouseXAxis?a.showOnMouseTopOfPageMaxMouseXAxis:void 0,invitationID:"string"==typeof a.invitationID?a.invitationID:"",probability:"number"==typeof a.probability?a.probability:100,width:"number"==typeof a.width?a.width:550,height:"number"==typeof a.height?a.height:520,cookieID:"string"==typeof a.cookieID?a.cookieID:"",expireDaysIfYes:"number"==typeof a.expireDaysIfYes?a.expireDaysIfYes:30,expireDaysIfNo:"number"==typeof a.expireDaysIfNo?a.expireDaysIfNo:30,delay:"number"==typeof a.delay?a.delay:0,waitUntilClose:"boolean"==typeof a.waitUntilClose&&a.waitUntilClose,placeholderURL:"string"==typeof a.placeholderURL?a.placeholderURL:"",showInline:"boolean"==typeof a.showInline&&a.showInline,inlineID:"string"==typeof a.inlineID?a.inlineID:"mcxSurveyDialog",inlineWrapperID:"string"==typeof a.inlineWrapperID?a.inlineWrapperID:"mcxSurveyWrapper",inlineCloseID:"string"==typeof a.inlineCloseID?a.inlineCloseID:"mcxSurveyClose",inlineCloseClass:"string"==typeof a.inlineCloseClass?a.inlineCloseClass:"mcxSurveyCloseClass",inlineCloseWrapperClass:"string"==typeof a.inlineCloseWrapperClass?a.inlineCloseWrapperClass:"mcxSurveyCloseWrapperClass",inlineIFrameID:"string"==typeof a.inlineIFrameID?a.inlineIFrameID:"mcxSurveyIFrame",cleanseCookie:"boolean"==typeof a.cleanseCookie&&a.cleanseCookie,debug:"boolean"==typeof a.debug&&a.debug,ignoreWarning:"boolean"==typeof a.ignoreWarning&&a.ignoreWarning,enabled:"boolean"!=typeof a.enabled||a.enabled,multiSurveys:"boolean"==typeof a.multiSurveys&&a.multiSurveys,pageVisit:"number"==typeof a.pageVisit?a.pageVisit:1,pageVisitExpireDays:"number"==typeof a.pageVisitExpireDays?a.pageVisitExpireDays:364,mcxBlackList:"object"===n(a.mcxBlackList)?a.mcxBlackList:[],surveyList:"object"===n(a.surveyList)?a.surveyList:[],domainChecker:"object"===n(a.domainChecker)?a.domainChecker:[],domainPath:"string"==typeof a.domainPath?a.domainPath:"",trackingID:"string"==typeof a.trackingID?a.trackingID:"",modalTrackingCampaignSource:"string"==typeof a.modalTrackingCampaignSource?a.modalTrackingCampaignSource:"Maritz Survey",modalTrackingYesButtonID:"string"==typeof a.modalTrackingYesButtonID?a.modalTrackingYesButtonID:"mcxYes",modalTrackingNoButtonID:"string"==typeof a.modalTrackingNoButtonID?a.modalTrackingNoButtonID:"mcxNo",modalTrackingImageClass:"string"==typeof a.modalTrackingImageClass?a.modalTrackingImageClass:"mcxGATrackingImage",modalTrackingImageID:"string"==typeof a.modalTrackingImageID?a.modalTrackingImageID:"mcxGATrackingImage",doLoadOnReady:"boolean"!=typeof a.doLoadOnReady||a.doLoadOnReady,callbackOnInlineClose:"function"==typeof a.callbackOnInlineClose&&a.callbackOnInlineClose,callbackOnLoadSiteIntercept:"function"==typeof a.callbackOnLoadSiteIntercept&&a.callbackOnLoadSiteIntercept,callbackOnShowModal:"function"==typeof a.callbackOnShowModal&&a.callbackOnShowModal}},onPageLoad:function(){return new t(function(t,n){e.mcxLog("onPageLoad"),e.McxSiteInterceptOnExit.parameters.multiSurveys&&(e.mcxLog("Multiple surveys are being used."),e.McxSiteInterceptOnExit.checkMultiSurveys()),e.McxSiteInterceptOnExit.cookieVisitCount(),e.McxSiteInterceptOnExit.parameters.uniqueID&&e.mcxLog("uniqueID: "+e.McxSiteInterceptOnExit.parameters.uniqueID),e.McxSiteInterceptOnExit.surveyURLParams=sessionStorage["mcx.surveyURLParams"],e.McxSiteInterceptOnExit.surveyURLParams||(sessionStorage["mcx.surveyURLParams"]="[{}]"),sessionStorage.mcxRandom=sessionStorage.mcxRandom||Math.floor(100*Math.random());var r=parseInt(sessionStorage.mcxRandom,10);if(e.McxSiteInterceptOnExit.parameters.probability<1&&e.McxSiteInterceptOnExit.parameters.probability>0){var i=e.McxSiteInterceptOnExit.parameters.probability;e.McxSiteInterceptOnExit.parameters.probability=Math.floor(100*e.McxSiteInterceptOnExit.parameters.probability),e.mcxWarn("mcxSiteIntercept warning: The script detected a probability between 0 and 1. Probability should be a whole number between 0 and 100. The script has converted it to a whole number: "+i+" -> "+e.McxSiteInterceptOnExit.parameters.probability)}if(e.McxSiteInterceptOnExit.parameters.probability<=0&&e.mcxWarn("mcxSiteIntercept warning: Probability it set to "+e.McxSiteInterceptOnExit.parameters.probability+". It must be greater than 0 to have any chance of displaying the survey."),r>=e.McxSiteInterceptOnExit.parameters.probability)return n("Site Intercept not loading... Probability fail. Chance to succeed: "+e.McxSiteInterceptOnExit.parameters.probability+"%");if(!e.McxSiteInterceptOnExit.parameters.enabled)return n("Site Intercept not loading... Survey is disabled");if(parseInt(e.McxSiteInterceptOnExit.RgetCookie("McxPageVisit"),10)<e.McxSiteInterceptOnExit.parameters.pageVisit)return n("Site Intercept not loading... Havent visited McxPageVisit("+e.McxSiteInterceptOnExit.parameters.pageVisit+") pages");if(!0===e.McxSiteInterceptOnExit.McxBlackList())return n("Site Intercept not loading... McxBlackList(ed)");if(e.McxSiteInterceptOnExit.parameters.callbackOnLoadSiteIntercept&&"function"==typeof e.McxSiteInterceptOnExit.parameters.callbackOnLoadSiteIntercept){var o=e.McxSiteInterceptOnExit.parameters.callbackOnLoadSiteIntercept();if(e.mcxLog("callbackOnLoadSiteIntercept returned: "+o),!1===o)return e.mcxLog("Rejecting Site Intercept Load. callbackOnLoadSiteIntercept returned: "+o),n("Site Intercept not loading... callbackOnLoadSiteIntercept returned false.")}return e.McxSiteInterceptOnExit.hasCookie()?e.mcxLog("Cookie from previous invitation has not yet expired"):e.McxSiteInterceptOnExit.parameters.showOnLoad&&(e.McxSiteInterceptOnExit.parameters.invitationID.length>0?e.McxSiteInterceptOnExit.inviteMethod=e.McxSiteInterceptOnExit.showModal:e.McxSiteInterceptOnExit.inviteMethod=function(){e.McxSiteInterceptOnExit.popUp(!0)},e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPage?e.McxSiteInterceptOnExit.startInviteTimer(function(){e.McxSiteInterceptOnExit.listenMouseLeave(e.McxSiteInterceptOnExit.inviteMethod)}):e.McxSiteInterceptOnExit.startInviteTimer(e.McxSiteInterceptOnExit.inviteMethod)),t(e.McxSiteInterceptOnExit)})},cookieVisitCount:function(){if(""===e.McxSiteInterceptOnExit.RgetCookie("McxPageVisit"))e.McxSiteInterceptOnExit.createCookie("McxPageVisit",1,e.McxSiteInterceptOnExit.parameters.pageVisitExpireDays);else{var t=parseInt(e.McxSiteInterceptOnExit.RgetCookie("McxPageVisit"),10);e.McxSiteInterceptOnExit.createCookie("McxPageVisit",t+1,e.McxSiteInterceptOnExit.parameters.pageVisitExpireDays)}},RgetCookie:function(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "===i.charAt(0);)i=i.substring(1);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return""},McxBlackList:function(){for(var t=e.McxSiteInterceptOnExit.parameters.mcxBlackList,n=t.length,r=window.location.href,i=0;i<n;i++){if(RegExp(t[i]).test(r))return!0}return!1},addUrlParameter:function(t,n){e.mcxLog("Added URL parameter: ["+t+", "+n+"]"),e.McxSiteInterceptOnExit.surveyURLParams=sessionStorage["mcx.surveyURLParams"];var r=e.McxSiteInterceptOnExit.surveyURLParams?JSON.parse(e.McxSiteInterceptOnExit.surveyURLParams):[{}];r[0][t]=n,sessionStorage["mcx.surveyURLParams"]=JSON.stringify(r),e.McxSiteInterceptOnExit.surveyURLParams=sessionStorage["mcx.surveyURLParams"]},removeUrlParameter:function(t){e.mcxLog("Removed URL parameter: ["+t+"]"),e.McxSiteInterceptOnExit.surveyURLParams=sessionStorage["mcx.surveyURLParams"];var n=e.McxSiteInterceptOnExit.surveyURLParams?JSON.parse(e.McxSiteInterceptOnExit.surveyURLParams):[{}];n[0][t]&&(delete n[0][t],sessionStorage["mcx.surveyURLParams"]=JSON.stringify(n),e.McxSiteInterceptOnExit.surveyURLParams=sessionStorage["mcx.surveyURLParams"])},checkMultiSurveys:function(){var t=window.location.href.toLowerCase();if(e.McxSiteInterceptOnExit.parameters.domainChecker.length>0)for(var n=0;n<e.McxSiteInterceptOnExit.parameters.domainChecker.length;n++){var r=new RegExp(e.McxSiteInterceptOnExit.parameters.domainChecker[n]),i=r.test(t);if(i){e.McxSiteInterceptOnExit.parameters.surveyURL=e.McxSiteInterceptOnExit.parameters.surveyList[n];break}}},generateSurveyURL:function(){var t,n=e.McxSiteInterceptOnExit.parameters.surveyURL.split("?",2);return t=2===n.length&&n[1].length>0?e.McxSiteInterceptOnExit.parameters.surveyURL+"&"+e.McxSiteInterceptOnExit.urlParametersToQueryString():-1!==e.McxSiteInterceptOnExit.parameters.surveyURL.indexOf("?",e.McxSiteInterceptOnExit.parameters.surveyURL.length-1)?e.McxSiteInterceptOnExit.parameters.surveyURL+e.McxSiteInterceptOnExit.urlParametersToQueryString():e.McxSiteInterceptOnExit.parameters.surveyURL+"?"+e.McxSiteInterceptOnExit.urlParametersToQueryString(),e.mcxLog("generated Survey URL: "+t),t},urlParametersToQueryString:function(){if(e.mcxLog("urlParametersToQueryString ..."),e.McxSiteInterceptOnExit.surveyURLParams){var t=JSON.parse(e.McxSiteInterceptOnExit.surveyURLParams)[0],n=[];for(var r in t)t.hasOwnProperty(r)&&n.push(r+"="+t[r]);return e.mcxLog("... urlParametersToQueryString "),n.join("&")}return""},createCookie:function(t,n,r){e.mcxLog("createCookie: ["+t+", "+n+", "+r+"]");var i=new Date;i.setTime(i.getTime()+24*r*60*60*1e3),e.docCookies.setItem(t,n,i)},hasCookie:function(){var t=e.docCookies.hasItem("mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID,e.McxSiteInterceptOnExit.parameters.cleanseCookie);return e.mcxLog("hasCookie: mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID+": "+t),t},onPageClose:function(){if(e.mcxLog("onPageClose"),e.McxSiteInterceptOnExit.parameters.enabled){try{e.McxSiteInterceptOnExit.addUrlParameter("lastVisitedURL",encodeURIComponent(e.location.href))}catch(t){e.mcxLog(t)}if(!(e.McxSiteInterceptOnExit.takeSurvey&&e.McxSiteInterceptOnExit.surveyWindow&&e.McxSiteInterceptOnExit.surveyWindow.opener)||e.McxSiteInterceptOnExit.surveyWindow.opener.closed)return;e.McxSiteInterceptOnExit.surveyWindow.location=e.McxSiteInterceptOnExit.generateSurveyURL()}},mouseXAxisListener:function(t){var n,r,i;t=t||window.e,null==t.pageX&&null!=t.clientX&&(n=t.target&&t.target.ownerDocument||document,r=n.documentElement,i=n.body,event.pageX=event.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0)),e.McxSiteInterceptOnExit.mouseXAxis=t.pageX},mouseoutListener:function(t){t=t||window.event;var n=t.relatedTarget||t.toElement;if(!n||"HTML"===n.nodeName){var r=window.pageYOffset||window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop;t.pageY-r<=1&&(void 0===e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPageMinMouseXAxis||e.McxSiteInterceptOnExit.mouseXAxis>=e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPageMinMouseXAxis)&&(void 0===e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPageMaxMouseXAxis||e.McxSiteInterceptOnExit.mouseXAxis<=e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPageMaxMouseXAxis)&&(e.McxSiteInterceptOnExit.inviteMethod(),e.McxSiteInterceptOnExit.removeEvent(document,"mouseout",e.McxSiteInterceptOnExit.mouseoutListener),e.McxSiteInterceptOnExit.removeEvent(document,"mousemove",e.McxSiteInterceptOnExit.mouseXAxisListener))}},listenMouseLeave:function(t){e.McxSiteInterceptOnExit.parameters.showOnMouseTopOfPageMinMouseXAxis>0&&(e.mcxLog("listenting for mousemove..."),document.addEventListener?document.addEventListener("mousemove",e.McxSiteInterceptOnExit.mouseXAxisListener):document.attachEvent("mousemove",e.McxSiteInterceptOnExit.mouseXAxisListener)),document.addEventListener?document.addEventListener("mouseout",e.McxSiteInterceptOnExit.mouseoutListener,!1):document.attachEvent("mouseout",e.McxSiteInterceptOnExit.mouseoutListener),e.mcxLog("invite will show on mouseleave...")},startInviteTimer:function(t){var n=e.McxSiteInterceptOnExit.parameters.delay;n?e.setTimeout(t,n):t()},popUp:function(t){if(e.mcxLog("popUp"),!e.McxSiteInterceptOnExit.parameters.enabled)return void e.mcxLog("Not popping... Site Intercept disabled.");if(t&&e.McxSiteInterceptOnExit.hasCookie())return void e.mcxLog("Not popping... Site Intercept cookie not yet expired.");e.McxSiteInterceptOnExit.parameters.clearVistCountOnInvitation;var n="menubar=0,resizable=1,scrollbars=1,toolbar=0,status=1,width="+e.McxSiteInterceptOnExit.parameters.width+",height="+e.McxSiteInterceptOnExit.parameters.height;e.McxSiteInterceptOnExit.takeSurvey=!0,t&&e.McxSiteInterceptOnExit.createCookie("mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID,"mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID,e.McxSiteInterceptOnExit.parameters.expireDaysIfYes);var r=document.getElementById(e.McxSiteInterceptOnExit.parameters.invitationID);if(r&&(r.style.display="none"),e.McxSiteInterceptOnExit.parameters.waitUntilClose){e.McxSiteInterceptOnExit.surveyWindow=e.open(e.McxSiteInterceptOnExit.parameters.placeholderURL,"mcxWindow",n),e.McxSiteInterceptOnExit.surveyWindow.blur();try{window.top.focus()}catch(e){}}else if(e.McxSiteInterceptOnExit.parameters.showInline){var i=document.getElementById(e.McxSiteInterceptOnExit.parameters.inlineID);i||(i=document.createElement("div"),i.setAttribute("id",e.McxSiteInterceptOnExit.parameters.inlineID),document.body.appendChild(i)),void 0===e.McxSiteInterceptOnExit.cachedHTML&&(e.McxSiteInterceptOnExit.cachedHTML=i.innerHTML),i.innerHTML=e.McxSiteInterceptOnExit.cachedHTML+'<div id="'+e.McxSiteInterceptOnExit.parameters.inlineWrapperID+'"><div class="'+e.McxSiteInterceptOnExit.parameters.inlineCloseWrapperClass+'"><div class="'+e.McxSiteInterceptOnExit.parameters.inlineCloseClass+'" id="'+e.McxSiteInterceptOnExit.parameters.inlineCloseID+'"></div></div><iframe id="'+e.McxSiteInterceptOnExit.parameters.inlineIFrameID+'" onload="" frameborder="0" src="'+e.McxSiteInterceptOnExit.generateSurveyURL()+'" width="'+e.McxSiteInterceptOnExit.parameters.width+'" height="'+e.McxSiteInterceptOnExit.parameters.height+'"></iframe></div>',i.style.display="block";var o=document.getElementById(e.McxSiteInterceptOnExit.parameters.inlineCloseID);o.addEventListener?o.addEventListener("click",e.McxSiteInterceptOnExit.closeSurveyModal,!1):o.attachEvent("onclick",e.McxSiteInterceptOnExit.closeSurveyModal)}else e.McxSiteInterceptOnExit.surveyWindow=e.open(e.McxSiteInterceptOnExit.generateSurveyURL(),"mcxWindow",n);e.focus()},closeSurveyModal:function(){e.mcxLog("closeSurveyModal");var t=document.getElementById(e.McxSiteInterceptOnExit.parameters.inlineID);t.parentNode.removeChild(t),e.McxSiteInterceptOnExit.parameters.callbackOnInlineClose&&"function"==typeof e.McxSiteInterceptOnExit.parameters.callbackOnInlineClose&&e.McxSiteInterceptOnExit.parameters.callbackOnInlineClose()},acceptSurvey:function(){e.mcxLog("acceptSurvey"),e.McxSiteInterceptOnExit.addPassThroughParameters(),e.McxSiteInterceptOnExit.popUp(!0)},acceptSurveyNoCookie:function(){e.mcxLog("acceptSurvey"),e.McxSiteInterceptOnExit.addPassThroughParameters(),e.McxSiteInterceptOnExit.popUp(!1)},declineSurvey:function(){e.mcxLog("declineSurvey"),e.McxSiteInterceptOnExit.createCookie("mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID,"mcxSurveyQuarantine"+e.McxSiteInterceptOnExit.parameters.cookieID,e.McxSiteInterceptOnExit.parameters.expireDaysIfNo),document.getElementById(e.McxSiteInterceptOnExit.parameters.invitationID).style.display="none"},showModal:function(){if(!e.McxSiteInterceptOnExit.parameters.enabled)return void e.mcxLog("Not showing modal... Site Intercept disabled.");if(e.mcxLog("checking callbackOnShowModal "+n(e.McxSiteInterceptOnExit.parameters.callbackOnShowModal)),e.McxSiteInterceptOnExit.parameters.callbackOnShowModal&&"function"==typeof e.McxSiteInterceptOnExit.parameters.callbackOnShowModal){if(!1===e.McxSiteInterceptOnExit.parameters.callbackOnShowModal())return void e.mcxLog("Not showing modal... callbackOnShowModal returned false")}e.mcxLog("showing modal...");var t=document.getElementById(e.McxSiteInterceptOnExit.parameters.invitationID);t?(e.McxSiteInterceptOnExit.parameters.trackingID&&e.McxSiteInterceptOnExit.parameters.trackingID.length&&e.McxSiteInterceptOnExit.setGATracking(),t.style.display="block"):e.mcxLog("Not showing modal... div "+e.McxSiteInterceptOnExit.parameters.invitationID+" not found.")},addOnLoadEvent:function(t){var n=e.onload;"function"!=typeof e.onload?e.onload=t:e.onload=function(){n&&n(),t()}},addBeforeUnLoadEvent:function(t){var n=e.onbeforeunload;"function"!=typeof e.onbeforeunload?e.onbeforeunload=t:e.onbeforeunload=function(){n&&n(),t()}},addOnUnLoadEvent:function(t){var n=e.onunload;"function"!=typeof e.onunload?e.onunload=t:e.onunload=function(){n&&n(),t()}},addEvent:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},removeEvent:function(e,t,n){e.addEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n)},addPassThroughParameters:function(){if(void 0!==e.MCXPassThroughParameters){e.mcxLog("MCXPassThroughParameters being loaded...");for(var t in e.MCXPassThroughParameters)e.MCXPassThroughParameters.hasOwnProperty(t)&&e.McxSiteInterceptOnExit.addUrlParameter(t,encodeURIComponent(e.MCXPassThroughParameters[t]))}else e.mcxLog("MCXPassThroughParameters not defined")},setGATracking:function(){function t(t){return"https://www.google-analytics.com/collect?v=1&tid="+e.McxSiteInterceptOnExit.parameters.trackingID+"&cid="+e.McxSiteInterceptOnExit.parameters.uniqueID+"&t=event&ec=survey&ea="+t+"&cs="+e.McxSiteInterceptOnExit.parameters.modalTrackingCampaignSource+"&cn="+e.McxSiteInterceptOnExit.parameters.invitationID+"&ds="+e.McxSiteInterceptOnExit.parameters.probability}function n(n){var r=document.getElementById(e.McxSiteInterceptOnExit.parameters.modalTrackingImageID);if(!r){e.mcxLog("Inject GA Tracking image("+e.McxSiteInterceptOnExit.parameters.modalTrackingImageID+") into DOM");var i=document.getElementById(e.McxSiteInterceptOnExit.parameters.invitationID);r=document.createElement("img"),r.setAttribute("id",e.McxSiteInterceptOnExit.parameters.modalTrackingImageID),r.setAttribute("style",e.McxSiteInterceptOnExit.parameters.modalTrackingImageClass),i.appendChild(r)}r?(r.src=t(n),r.removeAttribute("style"),r.setAttribute("style","display:block !important")):e.mcxLog("Skipping GA Tracking. Tracking image ("+e.McxSiteInterceptOnExit.parameters.modalTrackingImageID+") is not in DOM")}if(e.McxSiteInterceptOnExit.parameters.trackingID&&e.McxSiteInterceptOnExit.parameters.trackingID.length){n("invited");var r=document.getElementById(e.McxSiteInterceptOnExit.parameters.modalTrackingNoButtonID),i=document.getElementById(e.McxSiteInterceptOnExit.parameters.modalTrackingYesButtonID);r?e.McxSiteInterceptOnExit.addEvent(r,"click",function(){n("declined")}):e.mcxLog("Skipping Google Analytics Tracking on Decline. No button "+e.McxSiteInterceptOnExit.parameters.modalTrackingNoButtonID+" does not exist"),i?e.McxSiteInterceptOnExit.addEvent(i,"click",function(){n("accepted")}):e.mcxLog("Skipping Google Analytics Tracking on Accept. Yes button "+e.McxSiteInterceptOnExit.parameters.modalTrackingYesButtonID+" does not exist")}else e.mcxLog("Skipping Google Analytics Tracking. To enable tracking set mcxSiteInterceptParameters.modalTrackingImageID. ")}},e.docCookies={generateCookie:function(t,n,r){var i=this.getBrowser(),o="",a="";if(r)switch(r.constructor){case Number:a=r===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:a="; expires="+r;break;case Date:a="; expires="+r.toUTCString()}i.isIE||i.isEdge||!e.McxSiteInterceptOnExit.parameters.domainPath||(e.mcxLog("Creating cookie without domain. IE: "+i.isIE+"; Edge: "+i.isEdge+"; domainPath: not used(IE)",!0),o="; domain="+e.McxSiteInterceptOnExit.parameters.domainPath);var c=encodeURIComponent(t)+"="+encodeURIComponent(n)+a+o+"; path=/";e.mcxLog("Creating cookie: "+c),document.cookie=c},getBrowser:function(){var e=!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,t="undefined"!=typeof InstallTrigger,n=/constructor/i.test(window.HTMLElement)||function(e){return"[object SafariRemoteNotification]"===e.toString()}(!window.safari||"undefined"!=typeof safari&&safari.pushNotification),r=!!document.documentMode;return{isOpera:e,isFirefox:t,isSafari:n,isIE:r,isEdge:!r&&!!window.StyleMedia,isChrome:!!window.chrome&&!!window.chrome.webstore}},getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,n,r,i,o){return!(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))&&(this.generateCookie(e,t,n),!0)},removeItem:function(e){if(!this.hasItem(e))return!1;var t=new Date(1970,0,1,0,0,0,0);return this.generateCookie(e,"",t),!0},hasItem:function(e,t){return!!e&&(!0===t&&this.removeItem(e),new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie))},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;n<t;n++)e[n]=decodeURIComponent(e[n]);return e}},e.AllegianceSiteInterceptOnExit=e.McxSiteInterceptOnExit,e.McxSiteInterceptOnExit.addOnUnLoadEvent(e.McxSiteInterceptOnExit.onPageClose),e.McxSiteInterceptOnExit.addBeforeUnLoadEvent(e.McxSiteInterceptOnExit.onPageClose),r(e.McxSiteInterceptOnExit)})},i=function(e){!function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}(function(){e.McxSiteInterceptOnExit.onPageLoad().then(function(){e.mcxLog("Site Intercept setup complete.")}).catch(function(t){e.mcxLog("Site Intercept not loaded: "+JSON.stringify(t))})})};e.exports={init:r,loadOnReady:i}}).call(t,n(3).Promise)},function(e,t,n){(function(t,n){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
!function(t,n){e.exports=n()}(0,function(){"use strict";function e(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}function r(e){return"function"==typeof e}function i(e){j=e}function o(e){V=e}function a(){return void 0!==W?function(){W(s)}:c()}function c(){var e=setTimeout;return function(){return e(s,1)}}function s(){for(var e=0;e<N;e+=2){(0,H[e])(H[e+1]),H[e]=void 0,H[e+1]=void 0}N=0}function u(e,t){var n=this,r=new this.constructor(l);void 0===r[J]&&P(r);var i=n._state;if(i){var o=arguments[i-1];V(function(){return w(i,r,o,n._result)})}else O(n,r,e,t);return r}function p(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(l);return v(n,e),n}function l(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function x(){return new TypeError("A promises callback cannot return that same promise.")}function d(e){try{return e.then}catch(e){return ee.error=e,ee}}function f(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function I(e,t,n){V(function(e){var r=!1,i=f(n,t,function(n){r||(r=!0,t!==n?v(e,n):y(e,n))},function(t){r||(r=!0,M(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&i&&(r=!0,M(e,i))},e)}function g(e,t){t._state===K?y(e,t._result):t._state===Z?M(e,t._result):O(t,void 0,function(t){return v(e,t)},function(t){return M(e,t)})}function S(e,t,n){t.constructor===e.constructor&&n===u&&t.constructor.resolve===p?g(e,t):n===ee?(M(e,ee.error),ee.error=null):void 0===n?y(e,t):r(n)?I(e,t,n):y(e,t)}function v(t,n){t===n?M(t,m()):e(n)?S(t,n,d(n)):y(t,n)}function h(e){e._onerror&&e._onerror(e._result),E(e)}function y(e,t){e._state===z&&(e._result=t,e._state=K,0!==e._subscribers.length&&V(E,e))}function M(e,t){e._state===z&&(e._state=Z,e._result=t,V(h,e))}function O(e,t,n,r){var i=e._subscribers,o=i.length;e._onerror=null,i[o]=t,i[o+K]=n,i[o+Z]=r,0===o&&e._state&&V(E,e)}function E(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,i=void 0,o=e._result,a=0;a<t.length;a+=3)r=t[a],i=t[a+n],r?w(n,r,i,o):i(o);e._subscribers.length=0}}function b(e,t){try{return e(t)}catch(e){return ee.error=e,ee}}function w(e,t,n,i){var o=r(n),a=void 0,c=void 0,s=void 0,u=void 0;if(o){if(a=b(n,i),a===ee?(u=!0,c=a.error,a.error=null):s=!0,t===a)return void M(t,x())}else a=i,s=!0;t._state!==z||(o&&s?v(t,a):u?M(t,c):e===K?y(t,a):e===Z&&M(t,a))}function L(e,t){try{t(function(t){v(e,t)},function(t){M(e,t)})}catch(t){M(e,t)}}function k(){return te++}function P(e){e[J]=te++,e._state=void 0,e._result=void 0,e._subscribers=[]}function T(){return new Error("Array Methods must be provided an Array")}function C(e){return new ne(this,e).promise}function D(e){var t=this;return new t(X(e)?function(n,r){for(var i=e.length,o=0;o<i;o++)t.resolve(e[o]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function R(e){var t=this,n=new t(l);return M(n,e),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function _(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function A(){var e=void 0;if(void 0!==n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=re}var B=void 0;B=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var X=B,N=0,W=void 0,j=void 0,V=function(e,t){H[N]=e,H[N+1]=t,2===(N+=2)&&(j?j(s):$())},Y="undefined"!=typeof window?window:void 0,F=Y||{},Q=F.MutationObserver||F.WebKitMutationObserver,q="undefined"==typeof self&&void 0!==t&&"[object process]"==={}.toString.call(t),G="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,H=new Array(1e3),$=void 0;$=q?function(){return function(){return t.nextTick(s)}}():Q?function(){var e=0,t=new Q(s),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}():G?function(){var e=new MessageChannel;return e.port1.onmessage=s,function(){return e.port2.postMessage(0)}}():void 0===Y?function(){try{var e=Function("return this")().require("vertx");return W=e.runOnLoop||e.runOnContext,a()}catch(e){return c()}}():c();var J=Math.random().toString(36).substring(2),z=void 0,K=1,Z=2,ee={error:null},te=0,ne=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(l),this.promise[J]||P(this.promise),X(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?y(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&y(this.promise,this._result))):M(this.promise,T())}return e.prototype._enumerate=function(e){for(var t=0;this._state===z&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===p){var i=d(e);if(i===u&&e._state!==z)this._settledAt(e._state,t,e._result);else if("function"!=typeof i)this._remaining--,this._result[t]=e;else if(n===re){var o=new n(l);S(o,e,i),this._willSettleAt(o,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===z&&(this._remaining--,e===Z?M(r,n):this._result[t]=n),0===this._remaining&&y(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;O(e,void 0,function(e){return n._settledAt(K,t,e)},function(e){return n._settledAt(Z,t,e)})},e}(),re=function(){function e(t){this[J]=k(),this._result=this._state=void 0,this._subscribers=[],l!==t&&("function"!=typeof t&&U(),this instanceof e?L(this,t):_())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var t=this,n=t.constructor;return t.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})})},e}();return re.prototype.then=u,re.all=C,re.race=D,re.resolve=p,re.reject=R,re._setScheduler=i,re._setAsap=o,re._asap=V,re.polyfill=A,re.Promise=re,re})}).call(t,n(4),n(5))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function o(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){f&&x&&(f=!1,x.length?d=x.concat(d):I=-1,d.length&&c())}function c(){if(!f){var e=i(a);f=!0;for(var t=d.length;t;){for(x=d,d=[];++I<t;)x&&x[I].run();I=-1,t=d.length}x=null,f=!1,o(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var p,l,m=e.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(e){p=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var x,d=[],f=!1,I=-1;m.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new s(e,t)),1!==d.length||f||i(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=u,m.addListener=u,m.once=u,m.off=u,m.removeListener=u,m.removeAllListeners=u,m.emit=u,m.prependListener=u,m.prependOnceListener=u,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});