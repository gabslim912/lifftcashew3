var interceptPath = Math.floor(Math.random() * 100) + 1;
var is_iPad = navigator.userAgent.match(/iPad/i) != null;
function isTrueOrNot() {
    if(screen.width <= 812 || is_iPad) {
        return true;
    } else {
        return false;
    }
}
var inlineCheck = isTrueOrNot();

if (interceptPath < 0) {
    console.log("New Intercept");
    var mcxSiteInterceptParameters = [{
        uniqueID: 'popupModal',
        surveyURL: 'https://thomsonreuters.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=NEG9DF', // string
        showOnLoad: true, // boolean
        showOnMouseTopOfPage: false,
        invitationID: 'mcxInvitationModal', // string
        probability: 0, // number (0 - 100 (%))
        width: 550, // number (px)
        height: 700, // number (px)
        cookieID: undefined, // string
        expireDaysIfYes: 90, // number (days)
        expireDaysIfNo: 90, // number (days)
        delay: 23000, // number (ms)
        waitUntilClose: false, // boolean
        placeholderURL: '',
        showInline: (inlineCheck ? false : true), // boolean
        inlineID: 'mcxSurveyDialog', // string
        inlineWrapperID: 'mcxSurveyWrapper', // string
        inlineCloseID: 'mcxSurveyClose', // string
        cleanseCookie: false,
        trackingID: 'UA-80071917-13',
        modalTrackingYesButtonID: 'mcxYes',
        modalTrackingNoButtonID: 'mcxNo',
        debug: false, // boolean // should be set to 'false' in production,
        pageVisit: 3
    }];
    var newMcxText = "Thank you for visiting Reuters.com." + "\n" + "We are committed to delivering trusted news to our readers." + "\n" + "If you have time (3 to 5 minutes), we'd love to get feedback on your experience today so we can ensure we're delivering on this commitment.";
    setTimeout(function(){
       $("#mcxText1").text(newMcxText); 
       $("#mcxInfo2").css("height","auto");
    },3000);
    
} else {
    console.log("Old Intercept");
    var mcxSiteInterceptParameters = [{
        uniqueID: 'popupModal',
        surveyURL: 'https://thomsonreuters.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=94JJQB', // string
        showOnLoad: true, // boolean
        showOnMouseTopOfPage: false,
        invitationID: 'mcxInvitationModal', // string
        probability: 5, // number (0 - 100 (%))
        width: 550, // number (px)
        height: 700, // number (px)
        cookieID: undefined, // string
        expireDaysIfYes: 90, // number (days)
        expireDaysIfNo: 90, // number (days)
        delay: 23000, // number (ms)
        waitUntilClose: false, // boolean
        placeholderURL: '',
        showInline: (inlineCheck ? false : true), // boolean
        inlineID: 'mcxSurveyDialog', // string
        inlineWrapperID: 'mcxSurveyWrapper', // string
        inlineCloseID: 'mcxSurveyClose', // string
        cleanseCookie: false,
        trackingID: 'UA-80071917-13',
        modalTrackingYesButtonID: 'mcxYes',
        modalTrackingNoButtonID: 'mcxNo',
        debug: false, // boolean // should be set to 'false' in production,
        pageVisit: 3
    }];
}