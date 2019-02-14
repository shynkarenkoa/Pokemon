var obj = new PushKaWrapper({
    pid       : 49,
    appId     : 319269901339,
    sourceId  : 116,
    landingId : 22,
    marks     : {"utm_source":"test1","utm_medium":"test2","utm_campaign":"","utm_term":"","utm_content":""},
	popupUrl  : "https://notifymepush.info/rs/116?utm_source=test1&utm_medium=test2",
	languages : {
        en : {
            btnSubscribe : "Subscribe",
            btnContinue  : "Continue",
            btnCancel    : "Cancel",
            btnClose     : "Close",
            notRobot     : "I'm not a robot",
            popupTitle   : "TOSTER",
            popupText    : "To continue, enable the subscription"
        }
    },
});

obj.popup('full', 5, 10);