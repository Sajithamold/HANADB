sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'democapfiorireport1/test/integration/FirstJourney',
		'democapfiorireport1/test/integration/pages/partnerList',
		'democapfiorireport1/test/integration/pages/partnerObjectPage'
    ],
    function(JourneyRunner, opaJourney, partnerList, partnerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('democapfiorireport1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepartnerList: partnerList,
					onThepartnerObjectPage: partnerObjectPage
                }
            },
            opaJourney.run
        );
    }
);