(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "push-wrap.js");
	document.body.appendChild(s);
})();

window.addEventListener('load', function() {
    var obj = new PushKaWrapper({
        pid       : 49,
        appId     : 319269901339,
        sourceId  : 116,
        landingId : 22,
        marks     : {"utm_source":"","utm_medium":"","utm_campaign":"","utm_term":"","utm_content":""},
        popupUrl  : "https://notifymepush.info/rs/116",
        languages : {
            en : {
                btnSubscribe : "Subscribe",
                btnContinue  : "Continue",
                btnCancel    : "Cancel",
                btnClose     : "Close",
                notRobot     : "I'm not a robot",
                popupTitle   : "Get notification about actual news from site",
                popupText    : "To continue, enable the subscription"
            }
        },
    });
    
    obj.popup('captcha', 5, 600);
});