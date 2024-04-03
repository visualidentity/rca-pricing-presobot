var attachAudienceOverviewEventsFy24 = function(options) {
  var $pageContainer;

  var { slide, data } = options;

  var stateDd = Bridge.Context.get('state_dropdown-2' + slide);
  var regionDd = Bridge.Context.get('region_dropdown' + slide);

  this.init = function() {
    $pageContainer = $(options.container);
    this.stateDropdown();
    this.regionDropdown();
  };

  var resetDropdown = function(stateData) {
    var defaultData = data.overviewData.states.find(function(item) {
      return item.state === stateData.state;
    });

    var listHtml = '';
    var $value;
    var $dropdown = $pageContainer.find('.region-dropdown .input--dropdown');

    var $largeDropdownName = $pageContainer.find(
      '.region-dropdown .input-label'
    );
    $largeDropdownName.text('Region');

    if (regionDd) {
      regionDd.regions.forEach(function(item) {
        listHtml +=
          '<li data-value="' +
          item.region +
          '" data-dropdown>' +
          item.region +
          '</li>';
      });
    } else {
      defaultData.regions.forEach(function(item) {
        listHtml +=
          '<li data-value="' +
          item.region +
          '" data-dropdown>' +
          item.region +
          '</li>';
      });
    }

    if (listHtml == '') {
      $pageContainer.find('.region-dropdown').addClass('inactive');
    } else {
      $pageContainer.find('.region-dropdown').removeClass('inactive');
    }

    $pageContainer
      .find('.region-dropdown #dropdown_group')
      .html('<div class="dropdown-icon"></div>' + '<ul>' + listHtml + '</ul>');

    var $dropdownListing = $pageContainer.find(
      '.region-dropdown [data-dropdown]'
    );

    $dropdownListing.click(function() {
      $value = $(this)
        .closest('li')
        .attr('data-value');
      $dropdown.toggleClass('dropdown--open');
      $largeDropdownName.text($value);
      Bridge.Event.trigger('master:' + $pageContainer + 'region-update', {
        instance: $value
      });
    });
  };

  this.regionDropdown = function() {
    // Easy dropdown
    var $value;

    var defaultState = 'National';

    var defaultData = data.overviewData.states.find(function(item) {
      return item.state === defaultState;
    });

    var regionDd = Bridge.Context.get('region_dropdown' + slide);

    if (regionDd) {
      $value = regionDd.region;
      $pageContainer
        .find('[data-ma-audience]')
        .html(addCommas(regionDd.uniqueAudience));
      $pageContainer
        .find('[data-ma-audience-competitor]')
        .html(addCommas(regionDd.uniqueAudienceCompetitor));
      $pageContainer
        .find('[data-ma-audience-compare]')
        .html(addCommas(regionDd.uniqueAudienceMultiplier));
      $pageContainer
        .find('[data-ma-competitor]')
        .html(addCommas(regionDd.competitorName));

      _widthColumnHandle(
        '[data-ma-audience]',
        regionDd.uniqueAudience,
        '[data-ma-audience-competitor]',
        regionDd.uniqueAudienceCompetitor
      );

      if (regionDd.visitors == 0) {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .show();
        $pageContainer
          .find('[data-ma-visits]')
          .html(addCommas(regionDd.visitors));
        $pageContainer
          .find('[data-ma-visits-competitor]')
          .html(addCommas(regionDd.visitorsCompetitor));
        $pageContainer
          .find('[data-ma-visits-compare]')
          .html(addCommas(regionDd.visitorsMultiplier));
        $pageContainer
          .find('[data-ma-app-compare]')
          .html(addCommas(regionDd.appLaunchesMultiplier));

        _widthColumnHandle(
          '[data-ma-visits]',
          regionDd.visitors,
          '[data-ma-visits-competitor]',
          regionDd.visitorsCompetitor
        );
      }

      if (regionDd.appLaunches == 0) {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .show();
        $pageContainer
          .find('[data-ma-exclusive]')
          .html(addCommas(regionDd.appLaunches));
        $pageContainer
          .find('[data-ma-exclusive-competitor]')
          .html(addCommas(regionDd.appLaunchesCompetitor));
      }

      $pageContainer.find('[data-ma-disclaimer]').html(regionDd.disclaimers);

      _widthColumnHandle(
        '[data-ma-exclusive]',
        regionDd.appLaunches,
        '[data-ma-exclusive-competitor]',
        regionDd.appLaunchesCompetitor
      );
    }

    var $largeDropdownName = $pageContainer.find(
      '.region-dropdown .input-label'
    );
    var $dropdown = $pageContainer.find('.region-dropdown .input--dropdown');
    $largeDropdownName.text($value);

    var listHtml = '';

    if (regionDd) {
      regionDd.regions.forEach(function(item) {
        listHtml +=
          '<li data-value="' +
          item.region +
          '" data-dropdown>' +
          item.region +
          '</li>';
      });
    } else {
      defaultData.regions.forEach(function(item) {
        listHtml +=
          '<li data-value="' +
          item.region +
          '" data-dropdown>' +
          item.region +
          '</li>';
      });
    }

    $pageContainer
      .find('.region-dropdown #dropdown_group')
      .html('<div class="dropdown-icon"></div>' + '<ul>' + listHtml + '</ul>');

    if (listHtml == '') {
      $pageContainer.find('.region-dropdown').addClass('inactive');
    } else {
      $pageContainer.find('.region-dropdown').removeClass('inactive');
    }

    if ($('body').hasClass('master') || $('body').hasClass('share_online')) {
      $largeDropdownName.click(function() {
        $dropdown.toggleClass('dropdown--open');
      });
    }

    var $dropdownListing = $pageContainer.find(
      '.region-dropdown [data-dropdown]'
    );

    $dropdownListing.click(function() {
      $value = $(this)
        .closest('li')
        .attr('data-value');
      $dropdown.toggleClass('dropdown--open');
      $largeDropdownName.text($value);
      Bridge.Event.trigger('master:' + $pageContainer + 'region-update', {
        instance: $value
      });
    });

    // Bridging events for client
    Bridge.Event.on('client:fetch-' + $pageContainer + '-state', function() {
      Bridge.Event.trigger('master:' + $pageContainer + '-region', {
        instance: $value
      });
    });

    Bridge.Event.on('master:' + $pageContainer + 'region-update', function(
      state
    ) {
      var $regionDropdownLabel = $pageContainer.find(
        '.region-dropdown .input-label'
      );
      $regionDropdownLabel.text(state.instance);

      //var sData;
      var regions;
      var stateDd = Bridge.Context.get('state_dropdown-2' + slide);

      if (stateDd) {
        //sData = state
        regions = stateDd.regions;
      } else {
        //sData = defaultState
        regions = defaultData.regions;
      }

      var regionData = regions.find(function(item) {
        return item.region === state.instance;
      });

      if (regionData) {
        $pageContainer
          .find('[data-ma-audience]')
          .html(addCommas(regionData.uniqueAudience));
        $pageContainer
          .find('[data-ma-audience-competitor]')
          .html(addCommas(regionData.uniqueAudienceCompetitor));
        $pageContainer
          .find('[data-ma-audience-compare]')
          .html(addCommas(regionData.uniqueAudienceMultiplier));
        $pageContainer
          .find('[data-ma-competitor]')
          .html(addCommas(regionData.competitorName));
        _widthColumnHandle(
          '[data-ma-audience]',
          regionData.uniqueAudience,
          '[data-ma-audience-competitor]',
          regionData.uniqueAudienceCompetitor
        );

        if (regionData.visitors == 0) {
          $pageContainer
            .find('.va-card')
            .eq(1)
            .hide();
        } else {
          $pageContainer
            .find('.va-card')
            .eq(1)
            .show();
          $pageContainer
            .find('[data-ma-visits]')
            .html(addCommas(regionData.visitors));
          $pageContainer
            .find('[data-ma-visits-competitor]')
            .html(addCommas(regionData.visitorsCompetitor));
          $pageContainer
            .find('[data-ma-visits-compare]')
            .html(addCommas(regionData.visitorsMultiplier));
          $pageContainer
            .find('[data-ma-app-compare]')
            .html(addCommas(regionData.appLaunchesMultiplier));

          _widthColumnHandle(
            '[data-ma-visits]',
            regionData.visitors,
            '[data-ma-visits-competitor]',
            regionData.visitorsCompetitor
          );
        }

        if (regionData.appLaunches == 0) {
          $pageContainer
            .find('.va-card')
            .eq(2)
            .hide();
        } else {
          $pageContainer
            .find('.va-card')
            .eq(2)
            .show();
          $pageContainer
            .find('[data-ma-exclusive]')
            .html(addCommas(regionData.appLaunches));
          $pageContainer
            .find('[data-ma-exclusive-competitor]')
            .html(addCommas(regionData.appLaunchesCompetitor));
        }

        $pageContainer
          .find('[data-ma-disclaimer]')
          .html(regionData.disclaimers);

        _widthColumnHandle(
          '[data-ma-exclusive]',
          regionData.appLaunches,
          '[data-ma-exclusive-competitor]',
          regionData.appLaunchesCompetitor
        );

        Bridge.Context.set('region_dropdown-2' + slide, {
          regions: regions,
          region: regionData.region
        });
      } else {
        console.log('something else here');
      }
    });
  };

  this.stateDropdown = function() {
    // Easy dropdown
    var $value;
    var defaultState = 'National';

    var defaultData = data.overviewData.states.find(function(item) {
      return item.state === defaultState;
    });

    if (stateDd) {
      $value = stateDd.state;
      $pageContainer
        .find('[data-ma-audience]')
        .html(addCommas(stateDd.uniqueAudience));
      $pageContainer
        .find('[data-ma-audience-competitor]')
        .html(addCommas(stateDd.uniqueAudienceCompetitor));
      $pageContainer
        .find('[data-ma-audience-compare]')
        .html(addCommas(stateDd.uniqueAudienceMultiplier));
      $pageContainer
        .find('[data-ma-competitor]')
        .html(addCommas(stateDd.competitorName));
      _widthColumnHandle(
        '[data-ma-audience]',
        stateDd.uniqueAudience,
        '[data-ma-audience-competitor]',
        stateDd.uniqueAudienceCompetitor
      );

      if (stateDd.visitors == 0) {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .show();
        $pageContainer
          .find('[data-ma-visits]')
          .html(addCommas(stateDd.visitors));
        $pageContainer
          .find('[data-ma-visits-competitor]')
          .html(addCommas(stateDd.visitorsCompetitor));
        $pageContainer
          .find('[data-ma-visits-compare]')
          .html(addCommas(stateDd.visitorsMultiplier));
        $pageContainer
          .find('[data-ma-app-compare]')
          .html(addCommas(stateDd.appLaunchesMultiplier));

        _widthColumnHandle(
          '[data-ma-visits]',
          stateDd.visitors,
          '[data-ma-visits-competitor]',
          stateDd.visitorsCompetitor
        );
      }

      if (stateDd.appLaunches == 0) {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .show();
        $pageContainer
          .find('[data-ma-exclusive]')
          .html(addCommas(stateDd.appLaunches));
        $pageContainer
          .find('[data-ma-exclusive-competitor]')
          .html(addCommas(stateDd.appLaunchesCompetitor));
        _widthColumnHandle(
          '[data-ma-exclusive]',
          stateDd.appLaunches,
          '[data-ma-exclusive-competitor]',
          stateDd.appLaunchesCompetitor
        );
      }

      $pageContainer.find('[data-ma-disclaimer]').html(stateDd.disclaimers);
    } else {
      $value = defaultState;
      $pageContainer
        .find('[data-ma-audience]')
        .html(addCommas(defaultData.uniqueAudience));
      $pageContainer
        .find('[data-ma-audience-competitor]')
        .html(addCommas(defaultData.uniqueAudienceCompetitor));
      $pageContainer
        .find('[data-ma-audience-compare]')
        .html(addCommas(defaultData.uniqueAudienceMultiplier));
      $pageContainer
        .find('[data-ma-competitor]')
        .html(addCommas(defaultData.competitorName));
      _widthColumnHandle(
        '[data-ma-audience]',
        defaultData.uniqueAudience,
        '[data-ma-audience-competitor]',
        defaultData.uniqueAudienceCompetitor
      );

      if (defaultData.visitors == 0) {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .show();
        $pageContainer
          .find('[data-ma-visits]')
          .html(addCommas(defaultData.visitors));
        $pageContainer
          .find('[data-ma-visits-competitor]')
          .html(addCommas(defaultData.visitorsCompetitor));
        $pageContainer
          .find('[data-ma-visits-compare]')
          .html(addCommas(defaultData.visitorsMultiplier));
        $pageContainer
          .find('[data-ma-app-compare]')
          .html(addCommas(defaultData.appLaunchesMultiplier));

        _widthColumnHandle(
          '[data-ma-visits]',
          defaultData.visitors,
          '[data-ma-visits-competitor]',
          defaultData.visitorsCompetitor
        );
      }

      if (defaultData.appLaunches == 0) {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .show();
        $pageContainer
          .find('[data-ma-exclusive]')
          .html(addCommas(defaultData.appLaunches));
        $pageContainer
          .find('[data-ma-exclusive-competitor]')
          .html(addCommas(defaultData.appLaunchesCompetitor));
        _widthColumnHandle(
          '[data-ma-exclusive]',
          defaultData.appLaunches,
          '[data-ma-exclusive-competitor]',
          defaultData.appLaunchesCompetitor
        );
      }

      $pageContainer.find('[data-ma-disclaimer]').html(defaultData.disclaimers);
    }

    var $smallDropdownName = $pageContainer.find(
      '.state-dropdown .input-label'
    );
    $smallDropdownName.text($value);
    var $dropdown = $pageContainer.find('.state-dropdown .input--dropdown');

    var listHtml = '';

    data.overviewData.states.forEach(function(item) {
      listHtml +=
        '<li data-value="' +
        item.state +
        '" data-dropdown>' +
        item.state +
        '</li>';
    });

    $pageContainer
      .find('.state-dropdown #dropdown_group')
      .html('<div class="dropdown-icon"></div>' + '<ul>' + listHtml + '</ul>');

    if (listHtml == '') {
      $pageContainer.find('.region-dropdown').addClass('inactive');
    } else {
      $pageContainer.find('.region-dropdown').removeClass('inactive');
    }

    if ($('body').hasClass('master') || $('body').hasClass('share_online')) {
      $smallDropdownName.click(function() {
        $dropdown.toggleClass('dropdown--open');
      });
    }

    var $dropdownListing = $pageContainer.find(
      '.state-dropdown [data-dropdown]'
    );

    $dropdownListing.click(function() {
      $value = $(this)
        .closest('li')
        .attr('data-value');
      $dropdown.toggleClass('dropdown--open');
      Bridge.Event.trigger('master:' + $pageContainer + 'state-update', {
        instance: $value
      });
    });

    // Bridging events for client
    Bridge.Event.on('client:fetch-' + $pageContainer + '-state', function() {
      Bridge.Event.trigger('master:' + $pageContainer + '-update', {
        instance: $value
      });
    });

    Bridge.Event.on('master:' + $pageContainer + 'state-update', function(
      state
    ) {
      var stateData = data.overviewData.states.find(function(item) {
        return item.state === state.instance;
      });

      $smallDropdownName.text(stateData.state);

      $pageContainer
        .find('[data-ma-audience]')
        .html(addCommas(stateData.uniqueAudience));
      $pageContainer
        .find('[data-ma-audience-competitor]')
        .html(addCommas(stateData.uniqueAudienceCompetitor));
      $pageContainer
        .find('[data-ma-audience-compare]')
        .html(addCommas(stateData.uniqueAudienceMultiplier));
      $pageContainer
        .find('[data-ma-competitor]')
        .html(addCommas(stateData.competitorName));
      _widthColumnHandle(
        '[data-ma-audience]',
        stateData.uniqueAudience,
        '[data-ma-audience-competitor]',
        stateData.uniqueAudienceCompetitor
      );

      if (stateData.visitors == 0) {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(1)
          .show();
        $pageContainer
          .find('[data-ma-visits]')
          .html(addCommas(stateData.visitors));
        $pageContainer
          .find('[data-ma-visits-competitor]')
          .html(addCommas(stateData.visitorsCompetitor));
        $pageContainer
          .find('[data-ma-visits-compare]')
          .html(addCommas(stateData.visitorsMultiplier));
        $pageContainer
          .find('[data-ma-app-compare]')
          .html(addCommas(stateData.appLaunchesMultiplier));

        _widthColumnHandle(
          '[data-ma-visits]',
          stateData.visitors,
          '[data-ma-visits-competitor]',
          stateData.visitorsCompetitor
        );
      }

      if (stateData.appLaunches == 0) {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .hide();
      } else {
        $pageContainer
          .find('.va-card')
          .eq(2)
          .show();
        $pageContainer
          .find('[data-ma-exclusive]')
          .html(addCommas(stateData.appLaunches));
        $pageContainer
          .find('[data-ma-exclusive-competitor]')
          .html(addCommas(stateData.appLaunchesCompetitor));
      }

      $pageContainer.find('[data-ma-disclaimer]').html(stateData.disclaimers);

      resetDropdown(stateData);

      Bridge.Context.set('state_dropdown-2' + slide, stateData);

      Bridge.Context.set('region_dropdown-2' + slide, {
        regions: stateData.regions,
        region: 'Region'
      });
    });
  };

  _heightColumnHandle = function(element1, dataE1, element2, dataE2) {
    let height = 0;
    let data1 = parseInt(dataE1.replace(/,|%/g, ''));
    let data2 = parseInt(dataE2.replace(/,|%/g, ''));
    if (data1 > data2) {
      height = (359 / data1) * data2;
      $pageContainer.find(element1).css('height', '359px');
      $pageContainer.find(element2).css('height', height + 'px');
    } else if (data2 > data1) {
      height = (359 / data2) * data1;
      $pageContainer.find(element1).css('height', height + 'px');
      $pageContainer.find(element2).css('height', '359px');
    } else if (data2 > 0 && data1 > 0) {
      $pageContainer.find(element1).css('height', '359px');
      $pageContainer.find(element2).css('height', '359px');
    }
  };

  _widthColumnHandle = function(element1, dataE1, element2, dataE2) {
    let width = 0;
    let widthBase = 359;
    let data1 = parseInt(dataE1.replace(/,|%/g, ''));
    let data2 = parseInt(dataE2.replace(/,|%/g, ''));

    if (data1 > data2) {
      width = (widthBase / data1) * data2;
      $pageContainer.find(element1).css('width', widthBase + 'px');
      $pageContainer.find(element2).css('width', width + 'px');
      if (element1 == "[data-ma-exclusive]" && width < 133) {
        $pageContainer.find(element2).html(`<span>${$pageContainer.find(element2).text()}</span>`);
      }
    } else if (data2 > data1) {
      width = (widthBase / data2) * data1;
      $pageContainer.find(element1).css('width', width + 'px');
      $pageContainer.find(element2).css('width', widthBase + 'px');
    } else if (data2 > 0 && data1 > 0) {
      $pageContainer.find(element1).css('width', widthBase + 'px');
      $pageContainer.find(element2).css('width', widthBase + 'px');
    }
  };

  this.init();
};
