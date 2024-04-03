var _audienceSnapshotRender = function($elm) {
	var $pageContainer = $('article#' + $elm.id);

	// Feed get
	var $audiencesnapshotData = Bridge.Feed.get('audiencesnapshot').raw();

	// Nested data if none
	var nestedBar = {
		"visits": {
			"heading": "Visits*&",
			"text": "2.25x more compared to CRE",
			"rcaNum": "2,245,497",
			"rcaFig": "+25% YoY",
			"competitorNum": "1,000,000"
		},
		"timeONSite": {
			"heading": "Time on site (minutes)*",
			"text": "2.83x more compared to CRE",
			"rcaNum": "8,503,358",
			"rcaFig": "+12% YoY",
			"competitorNum": "3,000,000"
		},
		"appLaunches": {
			"heading": "App launches#",
			"text": "2.28x more compared to CRE",
			"rcaNum": "456,713",
			"rcaFig": "+17% YoY",
			"competitorNum": "100,000"
		},
		"sources": [
			"*Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain",
			"&Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain",
			"#Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain"
		]
	}

	var $barValues = jQuery.isEmptyObject($audiencesnapshotData) ? nestedBar : $audiencesnapshotData;

	// Initiate bar(s)
	_initBar($barValues);

	function _initBar($barValues) {
		$pageContainer.find('[data-visits-title]').text($barValues.visits.heading);
		var tierOneTextStart = $barValues.visits.text.substring(0, 5);
		var tierOneTextEnd = $barValues.visits.text.substring(5, $barValues.visits.text.length);
		$pageContainer.find('[data-visits-blue-bar-text]').html('<span class="audience-highlight">' + tierOneTextStart + '</span>' + tierOneTextEnd);
		$pageContainer.find('[data-visits-blue-bar-rca]').text($barValues.visits.rcaNum);
		$pageContainer.find('[data-visits-blue-bar-figure]').text($barValues.visits.yoy);
		$pageContainer.find('[data-visits-blue-bar-compet]').text($barValues.visits.competitorNum);

		$pageContainer.find('[data-time-title]').text($barValues.timeONSite.heading);
		var tierTwoTextStart = $barValues.timeONSite.text.substring(0, 5);
		var tierTwoTextEnd = $barValues.timeONSite.text.substring(5, $barValues.timeONSite.text.length);
		$pageContainer.find('[data-time-blue-bar-text]').html('<span class="audience-highlight">' + tierTwoTextStart + '</span>' + tierTwoTextEnd);
		$pageContainer.find('[data-time-blue-bar-rca]').text($barValues.timeONSite.rcaNum);
		$pageContainer.find('[data-time-blue-bar-figure]').text($barValues.timeONSite.yoy);
		$pageContainer.find('[data-time-blue-bar-compet]').text($barValues.timeONSite.competitorNum);

		$pageContainer.find('[data-app-title]').text($barValues.appLaunches.heading);
		var tierThreeTextStart = $barValues.appLaunches.text.substring(0, 5);
		var tierThreeTextEnd = $barValues.appLaunches.text.substring(5, $barValues.appLaunches.text.length);
		$pageContainer.find('[data-app-blue-bar-text]').html('<span class="audience-highlight">' + tierThreeTextStart + '</span>' + tierThreeTextEnd);
		$pageContainer.find('[data-app-blue-bar-rca]').text($barValues.appLaunches.rcaNum);
		$pageContainer.find('[data-app-blue-bar-figure]').text($barValues.appLaunches.yoy);
		$pageContainer.find('[data-app-blue-bar-compet]').text($barValues.appLaunches.competitorNum);

		$pageContainer.find('[data-audience-disclaimer-1]').text($barValues.sources[0]);
		$pageContainer.find('[data-audience-disclaimer-2]').text($barValues.sources[1]);
		// $pageContainer.find('[data-audience-disclaimer-3]').text($barValues.sources[2]);
	}
};

// Bar animation (where the bar starts/stops)
var _audienceSnapshotAnimation = function($elm) {
	var $pageContainer = $('article#' + $elm.id);
	var $audiencesnapshotData = Bridge.Feed.get('audiencesnapshot').raw();

	var nestedBar = {
		"visits": {
			"heading": "Visits*&",
			"text": "2.25x more compared to CRE",
			"rcaNum": "2,245,497",
			"rcaFig": "+25% YoY",
			"competitorNum": "1,000,000"
		},
		"timeONSite": {
			"heading": "Time on site (minutes)*",
			"text": "2.83x more compared to CRE",
			"rcaNum": "8,503,358",
			"rcaFig": "+12% YoY",
			"competitorNum": "3,000,000"
		},
		"appLaunches": {
			"heading": "App launches#",
			"text": "2.28x more compared to CRE",
			"rcaNum": "456,713",
			"rcaFig": "+17% YoY",
			"competitorNum": "100,000"
		},
		"sources": [
			"*Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain",
			"&Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain",
			"#Nielsen Digital Panel, Duplication report, May 2020, realestate.com.au and Domain"
		]
	}

	var $barValues = jQuery.isEmptyObject($audiencesnapshotData) ? nestedBar : $audiencesnapshotData;

	var visitsStyle = Math.round(($barValues.visits.rcaNum.replace(/,/g , '') / 3500000) * 100);
	var visitsCompStyle = Math.round(($barValues.visits.competitorNum.replace(/,/g , '') / 3500000) * 100);

	var timeStyle = Math.round(($barValues.timeONSite.rcaNum.replace(/,/g , '') / 10000000) * 100);
	var timeCompStyle = Math.round(($barValues.timeONSite.competitorNum.replace(/,/g , '') / 10000000) * 100);

	var appStyle = Math.round(($barValues.appLaunches.rcaNum.replace(/,/g , '') / 600000) * 100);
	var appCompStyle = Math.round(($barValues.appLaunches.competitorNum.replace(/,/g , '') / 600000) * 100);

	_initAnimation();

	function _initAnimation() {
		$pageContainer.find('[data-visits-blue-bar-1]').css('width', visitsStyle + '%').addClass(visitsStyle < 16 && 'snapshot-visualisation__bar-invert');
		$pageContainer.find('[data-visits-orange-bar-1]').css('width', visitsCompStyle + '%').addClass(visitsCompStyle < 16 && 'snapshot-visualisation__bar-invert');

		$pageContainer.find('[data-visits-blue-bar-2]').css('width', timeStyle + '%').addClass(timeStyle < 16 && 'snapshot-visualisation__bar-invert');
		$pageContainer.find('[data-visits-orange-bar-2]').css('width', timeCompStyle + '%').addClass(timeCompStyle < 16 && 'snapshot-visualisation__bar-invert');

		$pageContainer.find('[data-visits-blue-bar-3]').css('width', appStyle + '%').addClass(appStyle < 16 && 'snapshot-visualisation__bar-invert');
		$pageContainer.find('[data-visits-orange-bar-3]').css('width', appCompStyle + '%').addClass(appCompStyle < 16 && 'snapshot-visualisation__bar-invert');
	}
};