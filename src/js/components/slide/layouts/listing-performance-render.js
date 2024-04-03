var _listingPerformanceRender = function($elm, store) {
  var $pageContainer = $('article#' + $elm.id);
  var storePath = store ? store : 'listing-performance';

  var client = $('body').hasClass('client') ? true : false;
  var preview = $('body').hasClass('preview') ? true : false;

  // Nested data if none
  var contextStore = {
    rows: [
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      }
    ],
    columns: [
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      },
      {
        visible: true
      }
    ]
  };

  // Calling dropdown functionality
  _dropdown($pageContainer);

  // Initiate prep mode removables
  function _initRemovables() {
    var $removableRow = $pageContainer.find(
      '.table-performance__removable > .table-performance__heading'
    );
    var $removableColumn = $pageContainer.find(
      '.table-performance__removablesub'
    );
    var $ref = $pageContainer.find('[data-refresh]');

    $removableRow.click(function() {
      var index = $(this)
        .closest('tr')
        .attr('val');
      var newRows = contextStore.rows;
      newRows[index].visible = false;
      _.assign(contextStore.rows, newRows);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:listing-performance-context', {
        row: index
      });
    });

    $removableColumn.click(function() {
      var index = $(this).attr('val');
      var newColumns = contextStore.columns;
      newColumns[index].visible = false;
      _.assign(contextStore.columns, newColumns);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:listing-performance-context', {
        column: index
      });
    });

    // Table refresh
    $ref.click(function() {
      var tableRef = contextStore;

      $.each(tableRef.rows, function(index, row) {
        row.visible = true;
      });
      $.each(tableRef.columns, function(index, column) {
        column.visible = true;
      });
      _.assign(contextStore.tile, tableRef);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:listing-performance-context', {
        refresh: true
      });
    });

    Bridge.Event.on('client:fetch-listing-performance-context', function() {
      Bridge.Event.trigger('master:listing-performance-context');
    });
  }

  _initRemovablesRender();

  function _initRemovablesRender() {
    var $context = Bridge.Context.match('.' + storePath, contextStore);

    $.each($context.rows, function(index, value) {
      value.visible != true
        ? $pageContainer.find('tr[val="' + index + '"]').hide()
        : $pageContainer.find('tr[val="' + index + '"]').show();
    });

    $.each($context.columns, function(index, value) {
      var inc = index - 1;
      value.visible != true
        ? ($pageContainer.find('th[val="' + index + '"]').hide(),
          $pageContainer.find('td[val="' + inc + '"]').hide())
        : ($pageContainer.find('th[val="' + index + '"]').show(),
          $pageContainer.find('td[val="' + inc + '"]').show());
    });
  }

  // Feed get
  var $listingperformanceData = Bridge.Feed.get('listingperformance21').raw(),
    $channelData = $listingperformanceData.filters.channel,
    $classData = $listingperformanceData.filters.assetClass,
    $periodData = $listingperformanceData.filters.quarter;

  console.log('periodData: ', $periodData);

  $pageContainer
    .find(
      '#header-dropdown-1 .header__input-dropdown--results .results__child:not(:first-child), #header-dropdown-2 .header__input-dropdown--results .results__child:not(:first-child), #header-dropdown-3 .header__input-dropdown--results .results__child:not(:first-child)'
    )
    .remove();

  //Populate Channels
  $.each($channelData, function(index, value) {
    $pageContainer
      .find('#header-dropdown-1 .header__input-dropdown--results')
      .append(
        '<div class="results__child" value="' + value + '">' + value + '</div>'
      );
  });
  //Populate Classes
  $.each($classData, function(index, value) {
    $pageContainer
      .find('#header-dropdown-2 .header__input-dropdown--results')
      .append(
        '<div class="results__child" value="' + value + '">' + value + '</div>'
      );
  });
  //Populate Period
  $.each($periodData, function(index, value) {
    $pageContainer
      .find('#header-dropdown-3 .header__input-dropdown--results')
      .append(
        '<div class="results__child" value="' +
          value +
          '">' +
          value +
          ' ' +
          `${
            index === 2 || index === 3
              ? parseFloat(
                  $pageContainer
                    .find('[data-listing-performance-title]')
                    .text()
                    .slice(-2) - 1
                )
              : $pageContainer
                  .find('[data-listing-performance-title]')
                  .text()
                  .slice(-2)
          }` +
          '</div>'
      );
  });

  $pageContainer
    .find('#header-dropdown-1, #header-dropdown-2, #header-dropdown-3')
    .find('.results__child:first-child')
    .addClass('strong');

  var host = Bridge.Context.match('.feed_host', '');
  var agent_id = Bridge.Context.match('.agent .code', '');
  _initTable('All', 'All', 'All');

  if (client) {
    _bindClientEvents();
  } else {
    _bindMasterEvents();
  }

  if (preview) {
    _initRemovables();
  }

  // Render Listings table
  function _initTable($data1, $data2, $data3) {
    if (agent_id === '') {
      agent_id = 'ABCADF';
    }

    console.log('host: ', host);

    Bridge.Request.get('/api-proxy/', {
      query: {
        url: `https://salespreso.api-realestate-com-au.vi.com.au/${host}/rca/listing-performance/${agent_id}?channel=${$data1}&assetClass=${$data2}&quarter=${$data3}`
      }
    }).then(function(response) {
      console.log(response);

      var $channelClassValues = response.data;

      $pageContainer
        .find('[data-listings-elite-plus]')
        .text($channelClassValues['Elite Plus'].numberOfListings);
      $pageContainer
        .find('[data-listings-elite]')
        .text($channelClassValues.Elite.numberOfListings);
      $pageContainer
        .find('[data-listings-enhanced]')
        .text($channelClassValues.Enhanced.numberOfListings);
      $pageContainer
        .find('[data-listings-basic]')
        .text($channelClassValues.Basic.numberOfListings);

      $pageContainer
        .find('[data-average-views-elite-plus]')
        .text($channelClassValues['Elite Plus'].averageViews);
      $pageContainer
        .find('[data-average-views-elite]')
        .text($channelClassValues.Elite.averageViews);
      $pageContainer
        .find('[data-average-views-enhanced]')
        .text($channelClassValues.Enhanced.averageViews);
      $pageContainer
        .find('[data-average-views-basic]')
        .text($channelClassValues.Basic.averageViews);

      $pageContainer
        .find('[data-average-phone-elite-plus]')
        .text($channelClassValues['Elite Plus'].averagePhoneReveals);
      $pageContainer
        .find('[data-average-phone-elite]')
        .text($channelClassValues.Elite.averagePhoneReveals);
      $pageContainer
        .find('[data-average-phone-enhanced]')
        .text($channelClassValues.Enhanced.averagePhoneReveals);
      $pageContainer
        .find('[data-average-phone-basic]')
        .text($channelClassValues.Basic.averagePhoneReveals);

      $pageContainer
        .find('[data-email-enquiries-elite-plus]')
        .text($channelClassValues['Elite Plus'].averageEmails);
      $pageContainer
        .find('[data-email-enquiries-elite]')
        .text($channelClassValues.Elite.averageEmails);
      $pageContainer
        .find('[data-email-enquiries-enhanced]')
        .text($channelClassValues.Enhanced.averageEmails);
      $pageContainer
        .find('[data-email-enquiries-basic]')
        .text($channelClassValues.Basic.averageEmails);

      $pageContainer
        .find('[data-total-enquiries-elite-plus]')
        .text($channelClassValues['Elite Plus'].averageTotalEnquiries);
      $pageContainer
        .find('[data-total-enquiries-elite]')
        .text($channelClassValues.Elite.averageTotalEnquiries);
      $pageContainer
        .find('[data-total-enquiries-enhanced]')
        .text($channelClassValues.Enhanced.averageTotalEnquiries);
      $pageContainer
        .find('[data-total-enquiries-basic]')
        .text($channelClassValues.Basic.averageTotalEnquiries);
    });
  }

  // Client master catchup
  function _bindMasterEvents() {
    var $refresh = $pageContainer.find('[data-refresh]');
    var $apply = $pageContainer.find('.header__input-apply');

    var $dropdownOneChild = $pageContainer.find(
      '#header-dropdown-1 .results__child'
    );
    var $dropdownTwoChild = $pageContainer.find(
      '#header-dropdown-2 .results__child'
    );
    var $dropdownThreeChild = $pageContainer.find(
      '#header-dropdown-3 .results__child'
    );
    var $dropdownOneValue = 'All';
    var $dropdownTwoValue = 'All';
    var $dropdownThreeValue = 'All';
    var instanceOne;
    var instanceTwo;
    var instanceThree;

    $dropdownOneChild.on('click', function() {
      $dropdownOneText = $(this).text();
      $dropdownOneValue = $(this).attr('value');
      $pageContainer
        .find('#header-dropdown-1')
        .find('.input-label')
        .text($dropdownOneText);
      $pageContainer
        .find('#header-dropdown-1 .results__child')
        .removeClass('strong');
      $(this).addClass('strong');
      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger('master:listing-performance-update', {
        instanceOne: $dropdownOneValue,
        instanceTwo: $dropdownTwoValue,
        instanceThree: $dropdownThreeValue
      });
    });

    // Dropdown Two value select
    $dropdownTwoChild.on('click', function() {
      $dropdownTwoText = $(this).text();
      $dropdownTwoValue = $(this).attr('value');
      $pageContainer
        .find('#header-dropdown-2')
        .find('.input-label')
        .text($dropdownTwoText);
      $pageContainer
        .find('#header-dropdown-2 .results__child')
        .removeClass('strong');
      $(this).addClass('strong');
      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger('master:listing-performance-update', {
        instanceOne: $dropdownOneValue,
        instanceTwo: $dropdownTwoValue,
        instanceThree: $dropdownThreeValue
      });
    });

    // Dropdown Three value select
    $dropdownThreeChild.on('click', function() {
      $dropdownThreeText = $(this).text();
      $dropdownThreeValue = $(this).attr('value');
      $pageContainer
        .find('#header-dropdown-3')
        .find('.input-label')
        .text($dropdownThreeText);
      $pageContainer
        .find('#header-dropdown-3 .results__child')
        .removeClass('strong');
      $(this).addClass('strong');
      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger('master:listing-performance-update', {
        instanceOne: $dropdownOneValue,
        instanceTwo: $dropdownTwoValue,
        instanceThree: $dropdownThreeValue
      });
    });

    $refresh.click(function() {
      _initTable('All', 'All', 'All');
      $pageContainer
        .find('#header-dropdown-1 .input-label')
        .text('All channels');
      $pageContainer
        .find('#header-dropdown-2 .input-label')
        .text('All asset classes');
      $pageContainer.find('#header-dropdown-3 .input-label').text('Quarter');
      $pageContainer
        .find('#header-dropdown-1, #header-dropdown-2, #header-dropdown-3')
        .find('.results__child')
        .removeClass('strong');
      $pageContainer
        .find('#header-dropdown-1, #header-dropdown-2, #header-dropdown-3')
        .find('.results__child:first-child')
        .addClass('strong');
      Bridge.Event.trigger(
        'master:listing-performance-update',
        {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue,
          instanceThree: $dropdownThreeValue
        },
        true
      );
    });

    $apply.click(function() {
      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger(
        'master:listing-performance-update',
        {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue,
          instanceThree: $dropdownThreeValue
        },
        true
      );
    });

    // Bridging events for client
    Bridge.Event.on('client:fetch-listing-performance-state', function() {
      Bridge.Event.trigger('master:listing-performance-update', {
        instanceOne: instanceOne,
        instanceTwo: instanceTwo,
        instanceThree: instanceThree
      });
    });
  }

  // Executing clients
  function _bindClientEvents() {
    Bridge.Event.trigger('client:fetch-listing-performance-state');
    Bridge.Event.on('master:listing-performance-update', function(data, apply) {
      _initTable(data.instanceOne, data.instanceTwo, data.instanceThree);

      $pageContainer
        .find('#header-dropdown-1')
        .find('.input-label')
        .text(data.instanceOne);
      $pageContainer
        .find('#header-dropdown-2')
        .find('.input-label')
        .text(data.instanceTwo);
      $pageContainer
        .find('#header-dropdown-3')
        .find('.input-label')
        .text(data.instanceThree);
    });

    Bridge.Event.trigger('client:fetch-listing-performance-context');
    Bridge.Event.on('master:listing-performance-context', function(data) {
      if (data.row) {
        var newRows = contextStore.rows;
        newRows[data.row].visible = false;
        _.assign(contextStore.rows, newRows);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
      } else if (data.column) {
        var newColumns = contextStore.columns;
        newColumns[data.column].visible = false;
        _.assign(contextStore.columns, newColumns);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
      } else if (data.refresh) {
        var tableRef = contextStore;

        $.each(tableRef.rows, function(index, row) {
          row.visible = true;
        });
        $.each(tableRef.columns, function(index, column) {
          column.visible = true;
        });
        _.assign(contextStore.tile, tableRef);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
      }
    });
  }
};
