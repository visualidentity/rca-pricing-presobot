var _audienceDataRender = function($elm, $type) {
  var $pageContainer = $('article#' + $elm.id);
  var storePath = $elm.id;

  var client = $('body').hasClass('client') ? true : false;
  var preview = $('body').hasClass('preview') ? true : false;

  var data = Bridge.Feed.get('audienceOverview').raw();

  var convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item
      };
    }, initialValue);
  };

  var states = data.states ? convertArrayToObject(data.states, 'state') : null;

  var _initData = function($dropdownOne, $dropdownTwo) {
    var dataToRender;
    if (states[$dropdownOne]) {
      if (
        $dropdownTwo &&
        $dropdownTwo.length > 0 &&
        states[$dropdownOne].regions.length > 0
      ) {
        dataToRender = _.find(states[$dropdownOne].regions, function(item) {
          return item.region === $dropdownTwo;
        });
        if (!dataToRender) {
          dataToRender = states[$dropdownOne];
        }
      } else {
        dataToRender = states[$dropdownOne];
      }
    }

    $pageContainer
      .find('[data-rca-unique-audience]')
      .text(dataToRender.uniqueAudience ? dataToRender.uniqueAudience : '-');
    $pageContainer
      .find('[data-cra-unique-audience]')
      .text(
        dataToRender.uniqueAudienceCompetitor
          ? dataToRender.uniqueAudienceCompetitor
          : '-'
      );
    $pageContainer
      .find('[data-unique-audience-gap]')
      .text(
        dataToRender.uniqueAudienceGap
          ? 'Competitive gap ' + dataToRender.uniqueAudienceGap
          : ''
      );

    $pageContainer
      .find('[data-rca-total-visits]')
      .text(dataToRender.visitors ? dataToRender.visitors : '-');
    $pageContainer
      .find('[data-cra-total-visits]')
      .text(
        dataToRender.visitorsCompetitor ? dataToRender.visitorsCompetitor : '-'
      );
    $pageContainer
      .find('[data-total-visits-gap]')
      .text(
        dataToRender.visitorsGap
          ? 'Competitive gap ' + dataToRender.visitorsGap
          : ''
      );

    $pageContainer
      .find('[data-rca-app-launches]')
      .text(dataToRender.appLaunches ? dataToRender.appLaunches : '-');
    $pageContainer
      .find('[data-cra-app-launches]')
      .text(
        dataToRender.appLaunchesCompetitor
          ? dataToRender.appLaunchesCompetitor
          : '-'
      );
    // $pageContainer.find('[data-app-launches-gap]').text(dataToRender.appLaunchesGap ? 'Competitive gap ' + dataToRender.appLaunchesGap : '');

    if (dataToRender.disclaimers) {
      $pageContainer
        .find('.footer__disclaimer')
        .html(
          '<div class="footer__disclaimer-item"> ' +
            dataToRender.disclaimers +
            '</div>'
        );
    }
  };

  if (client) {
    _bindClientEvents();
  } else {
    _bindMasterEvents();
  }

  console.log('_audienceDataRender', data);

  var filters = ['state', 'region'];

  var contextStore = {};

  _dropdown($pageContainer);

  function _bindMasterEvents() {
    var $dropdownOneValue = 'National';
    var $dropdownTwoValue = '';

    _initData($dropdownOneValue, $dropdownTwoValue);

    Bridge.Event.trigger('master:audience-select-update', {
      instanceOne: $dropdownOneValue,
      instanceTwo: $dropdownTwoValue
    });

    // Dropdown One value select
    $(document).on(
      'click',
      '#audience_overview_size #header-dropdown-1 .results__child',
      function() {
        $dropdownOneValue = $(this).attr('value');
        $dropdownTwoValue = ''; // clear
        _initData($dropdownOneValue, $dropdownTwoValue);

        // $pageContainer.find('#header-dropdown-2 .results__child')

        _setupDrowndowns($dropdownOneValue, $dropdownTwoValue);

        Bridge.Event.trigger('master:audience-select-update', {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue
        });
      }
    );

    $(document).on(
      'click',
      '#audience_overview_size #header-dropdown-2 .results__child',
      function() {
        $dropdownTwoValue = $(this).attr('value');
        _initData($dropdownOneValue, $dropdownTwoValue);

        _setupDrowndowns($dropdownOneValue, $dropdownTwoValue);

        Bridge.Event.trigger('master:audience-select-update', {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue
        });
      }
    );
  }

  // Executing clients
  function _bindClientEvents() {
    Bridge.Event.on('master:audience-select-update', function(data) {
      _initData(data.instanceOne, data.instanceTwo);
      _setupDrowndowns(data.instanceOne, data.instanceTwo);
    });
  }

  // $('#header-dropdown-1')
  //   .click(function() {
  //     console.log('va');
  //     // $(this).toggleClass('is-open');
  //     // _initMonthlyTable(3, 10, 13, 16);

  //     // Bridge.Event.trigger('master:competitor-context', {
  //     //   i: 3,
  //     //   one: 10,
  //     //   two: 13,
  //     //   three: 16
  //     // });

  //     // Bridge.Event.on('client:fetch-competitor-context', function() {
  //     //   Bridge.Event.trigger('master:competitor-context');
  //     // });
  //   });

  var _setupDrowndowns = function(state, region) {
    $pageContainer
      .find('#header-dropdown-1')
      .find('.header__input-dropdown--results')
      .empty();
    $pageContainer
      .find('#header-dropdown-2')
      .find('.header__input-dropdown--results')
      .empty();

    // State
    $.each(data.states, function(index, value) {
      $pageContainer
        .find('#header-dropdown-1')
        .find('.header__input-dropdown--results')
        .append(
          '<div class="results__child" value="' +
            value.state +
            '">' +
            value.state +
            '</div>'
        );
    });

    $pageContainer
      .find('#header-dropdown-1 .input-label')
      .text(state ? state : 'State');

    // Region
    var activeState = state ? states[state] : null;

    $.each(activeState.regions, function(index, value) {
      $pageContainer
        .find('#header-dropdown-2')
        .find('.header__input-dropdown--results')
        .append(
          '<div class="results__child" value="' +
            value.region +
            '">' +
            value.region +
            '</div>'
        );
    });

    $pageContainer
      .find('#header-dropdown-2 .input-label')
      .text(region ? region : 'Region');
  };

  _setupDrowndowns('National', null);

  if (states) {
  }
};
