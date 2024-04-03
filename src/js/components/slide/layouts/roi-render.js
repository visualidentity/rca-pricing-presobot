var _roiRender = function($elm, variant) {
  var $pageContainer = $('article#' + $elm.id);

  var articleFy25 = $('#fy25_roi_summary');

  var storePath = 'roi';

  var client = $('body').hasClass('client') ? true : false;
  var preview = $('body').hasClass('preview') ? true : false;

  if (client) {
    _bindClientEvents();
  } else {
    _bindMasterEvents();
  }

  if (preview) {
    _initRemovables();
  }

  // Context
  var contextStore = Bridge.Context.match('.' + storePath, {
    heads: [
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
    ],
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
      }
    ]
  });

  var $riosummaryData = Bridge.Context.match(
    '.' + storePath + '-data',
    Bridge.Feed.get('riosummaryNewListings').raw()
  );

  _dropdown($pageContainer);

  function _renderDropdowns() {}

  function _initRemovables() {
    var $removableHead = $pageContainer.find(
      '.table-summary__head--column-removable'
    );
    var $removableRow = $pageContainer.find('.table-summary__row-removable');
    var $removableColumn = $pageContainer.find(
      '.table-summary__column-removable'
    );
    var $ref = $pageContainer.find('[data-refresh]');

    $removableHead.click(function() {
      var index = $(this).attr('val');
      var newHeads = contextStore.heads;
      newHeads[index].visible = false;
      _.assign(contextStore.heads, newHeads);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-context', { head: index });
    });

    $removableRow.click(function() {
      var index = $(this).attr('val');
      var newRows = contextStore.rows;
      newRows[index].visible = false;
      _.assign(contextStore.rows, newRows);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-context', { row: index });
    });

    $removableColumn.click(function() {
      var index = $(this)
        .closest('.table-summary__column')
        .attr('val');
      var newColumns = contextStore.columns;
      newColumns[index].visible = false;
      _.assign(contextStore.columns, newColumns);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-context', { column: index });
    });

    // Table refresh
    $ref.click(function() {
      var tableRef = contextStore;

      $.each(tableRef.heads, function(index, head) {
        head.visible = true;
      });
      $.each(tableRef.rows, function(index, row) {
        row.visible = true;
      });
      $.each(tableRef.columns, function(index, column) {
        column.visible = true;
      });
      _.assign(contextStore.tile, tableRef);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-context', { refresh: true });
    });

    Bridge.Event.on('client:fetch-roi-context', function() {
      Bridge.Event.trigger('master:roi-context');
    });
  }

  _initRemovablesRender();

  function _initRemovablesRender() {
    $.each(contextStore.heads, function(index, value) {
      value.visible != true
        ? $pageContainer
            .find('.table-summary__head--column-removable[val="' + index + '"]')
            .hide()
        : $pageContainer
            .find('.table-summary__head--column-removable[val="' + index + '"]')
            .show();
    });
    $.each(contextStore.rows, function(index, value) {
      value.visible != true
        ? $pageContainer
            .find('.table-summary__row-removable[val="' + index + '"]')
            .hide()
        : $pageContainer
            .find('.table-summary__row-removable[val="' + index + '"]')
            .show();
    });
    $.each(contextStore.columns, function(index, value) {
      value.visible != true
        ? $pageContainer
            .find('.table-summary__column[val="' + index + '"]')
            .hide()
        : $pageContainer
            .find('.table-summary__column[val="' + index + '"]')
            .show();
    });
  }

  function _initTable($data1, $data2, $data3) {
    var $dropdownOne = $data1 == null ? 'New listings' : $data1;
    var $dropdownTwo = $data2 == null ? 'All Channels' : $data2;
    var $dropdownThree = $data3 == null ? 'All asset classes' : $data3;

    console.log('data1: ', $data1);
    console.log('data2: ', $data2);
    console.log('data3: ', $data3);

    // Manually filters dropdowns and data preped content
    if ($dropdownOne === 'Upgraded and re-upgraded listings') {
      $pageContainer
        .find('.table-summary__head--column[val="1"] h6')
        .text('Total upgraded/re-upgraded listings*');
      $pageContainer.find('.table-summary__head--column[val="2"]').hide();
      $pageContainer.find('.table-summary__column--cell[val="4"]').hide();
      $pageContainer.find('.table-summary__column--cell[val="5"]').hide();
      $pageContainer.find('.table-summary__column--cell[val="6"]').hide();

      if (articleFy25.length) {
        $pageContainer.find('.table-summary__column--cell[val="6"]').show();
      }

      $pageContainer
        .find('#header-dropdown-2 .results__child')
        .eq(1)
        .addClass('disabled');
      $pageContainer
        .find('#header-dropdown-3 .results__child')
        .filter(':eq(1), :eq(2), :eq(3), :eq(4), :eq(7), :eq(8)')
        .addClass('disabled');
    } else {
      $pageContainer
        .find('.table-summary__head--column[val="1"] h6')
        .text('Total new listings*');
      if (contextStore.heads[2].visible === true) {
        $pageContainer.find('.table-summary__head--column[val="2"]').show();
      }
      if (contextStore.rows[4].visible === true) {
        $pageContainer.find('.table-summary__column--cell[val="4"]').show();
      }
      if (contextStore.rows[5].visible === true) {
        $pageContainer.find('.table-summary__column--cell[val="5"]').show();
      }
      if (contextStore.rows[6].visible === true) {
        $pageContainer.find('.table-summary__column--cell[val="6"]').show();
      }

      $pageContainer
        .find('.header__input-dropdown .results__child')
        .removeClass('disabled');
    }

    if (
      ($dropdownTwo === 'All Channels' || $dropdownTwo === 'Sale only') &&
      $dropdownThree === 'Other'
    ) {
      $pageContainer
        .find('#header-dropdown-2 .results__child')
        .eq(2)
        .addClass('disabled');
    } else if (
      $dropdownTwo === 'Sale only' ||
      $dropdownThree === 'Hotel/Leisure' ||
      $dropdownThree === 'Land/Development' ||
      $dropdownThree === 'Medical/Consulting' ||
      $dropdownThree === 'Showrooms/Bulky Goods' ||
      $dropdownThree === 'Other'
    ) {
      $pageContainer.find('#header-dropdown-1').addClass('disabled');
    } else if ($dropdownTwo === 'Lease only') {
      $pageContainer
        .find('#header-dropdown-3 .results__child')
        .filter(':eq(8)')
        .addClass('disabled');
    } else {
      $pageContainer.find('#header-dropdown-1').removeClass('disabled');
    }

    var nestedValues = {
      totalNewListings: '0',
      lastTotalNewListings: '0',
      yoyNewListingsChange: '0%',
      totalViews: '0',
      lastTotalViews: '0',
      averageViewsPerListing: '0',
      yoyViewsChange: '0%',
      yoyAverageViewsChange: '0%',
      totalPhoneReveals: '0',
      lastTotalPhoneReveals: '0',
      averagePhoneRevealsPerListing: '0',
      yoyPhoneRevealsChange: '0%',
      totalEmails: '0',
      lastTotalEmails: '0',
      averageEmails: '0',
      yoyEmailsChange: '0%',
      yoyAverageEmailsChange: '0%',
      totalEnquiry: '0',
      lastTotalEnquiry: '0',
      averageEnquiryPerListing: '0',
      yoyEnquiryChange: '0%',
      yoyAverageEnquiryChange: '0%',
      totalEnquiryState: '0',
      averageEnquiryState: '0'
    };

    var $riosummarynewData = $riosummaryData;

    var $channelClassValues;

    $channelClassValues = jQuery.isEmptyObject($riosummarynewData)
      ? nestedValues
      : $riosummarynewData[$dropdownTwo][$dropdownThree] == null
      ? nestedValues
      : $riosummarynewData[$dropdownTwo][$dropdownThree];

    // ROI Table Config
    $pageContainer
      .find('[data-total-new-listings]')
      .text($channelClassValues.totalNewListings);
    $pageContainer
      .find('[data-yoy-change]')
      .text($channelClassValues.yoyNewListingsChange);
    // Views
    $pageContainer
      .find('[data-total-views]')
      .text($channelClassValues.totalViews);
    $pageContainer
      .find('[data-average-views]')
      .text($channelClassValues.averageViewsPerListing);
    $pageContainer
      .find('[data-yoy-total-views]')
      .text($channelClassValues.yoyViewsChange);
    $pageContainer
      .find('[data-yoy-average-views]')
      .text($channelClassValues.yoyAverageViewsChange);
    $pageContainer
      .find('[data-state-views]')
      .text($channelClassValues.averageViewsState);
    // Phone Reveals
    $pageContainer
      .find('[data-Phone-reveals]')
      .text($channelClassValues.totalPhoneReveals);
    $pageContainer
      .find('[data-average-Phone-reveals]')
      .text($channelClassValues.averagePhoneRevealsPerListing);
    $pageContainer
      .find('[data-yoy-total-Phone-reveals]')
      .text($channelClassValues.yoyPhoneRevealsChange);
    $pageContainer
      .find('[data-yoy-average-Phone-reveals]')
      .text($channelClassValues.yoyAveragePhoneRevealsChange);
    $pageContainer
      .find('[data-state-phone]')
      .text($channelClassValues.averagePhoneRevealsState);
    // Email Enquiries
    $pageContainer
      .find('[data-email-enquiries]')
      .text($channelClassValues.totalEmails);
    $pageContainer
      .find('[data-average-email-enquiries]')
      .text($channelClassValues.averageEmails);
    $pageContainer
      .find('[data-yoy-total-email-enquiries]')
      .text($channelClassValues.yoyEmailsChange);
    $pageContainer
      .find('[data-yoy-average-email-enquiries]')
      .text($channelClassValues.yoyAverageEmailsChange);
    // Total Enquiries
    $pageContainer
      .find('[data-total-enquiries]')
      .text($channelClassValues.totalEnquiry);
    $pageContainer
      .find('[data-average-enquiries-listing]')
      .text($channelClassValues.averageEnquiryPerListing);
    $pageContainer
      .find('[data-yoy-total-enquiries]')
      .text($channelClassValues.yoyEnquiryChange);
    $pageContainer
      .find('[data-yoy-average-enquiries]')
      .text($channelClassValues.yoyAverageEnquiryChange);
    $pageContainer
      .find('[data-state-email]')
      .text($channelClassValues.averageEmailsState);
    $pageContainer
      .find('[data-state-total]')
      .text($channelClassValues.averageEnquiryState);
  }

  function _bindMasterEvents() {
    // var $refresh = $pageContainer.find('[data-refresh]');

    var $dropdownOneChild = $pageContainer.find(
      '#header-dropdown-1 .results__child'
    );
    var $dropdownTwoChild = $pageContainer.find(
      '#header-dropdown-2 .results__child'
    );
    var $dropdownThreeChild = $pageContainer.find(
      '#header-dropdown-3 .results__child'
    );
    var $dropdownOneValue = Bridge.Context.match(
      '.' + storePath + '-dropdownOne',
      'New Listings'
    );
    var $dropdownTwoValue = Bridge.Context.match(
      '.' + storePath + '-dropdownTwo',
      'All Channels'
    );
    var $dropdownThreeValue = Bridge.Context.match(
      '.' + storePath + '-dropdownThree',
      'All asset classes'
    );
    var instanceOne;
    var instanceTwo;
    var instanceThree;

    // Dropdown One value select
    $dropdownOneChild.click(function() {
      $dropdownOneValue = $(this).attr('value');
      Bridge.Context.set(storePath + '-dropdownOne', $dropdownOneValue);

      if ($dropdownOneValue === 'Upgraded and re-upgraded listings') {
        $riosummaryData = Bridge.Feed.get('riosummaryUpgraded').raw();
        Bridge.Context.set(storePath + '-data', $riosummaryData);
        _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
        Bridge.Event.trigger('master:roi-update', {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue,
          instanceThree: $dropdownThreeValue,
          dataUpdate: $riosummaryData
        });
      } else {
        $riosummaryData = Bridge.Feed.get('riosummaryNewListings').raw();
        Bridge.Context.set(storePath + '-data', $riosummaryData);
        _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
        Bridge.Event.trigger('master:roi-update', {
          instanceOne: $dropdownOneValue,
          instanceTwo: $dropdownTwoValue,
          instanceThree: $dropdownThreeValue,
          dataUpdate: $riosummaryData
        });
      }
    });

    // Dropdown Two value select
    $dropdownTwoChild.click(function() {
      $dropdownTwoValue = $(this).attr('value');
      Bridge.Context.set(storePath + '-dropdownTwo', $dropdownTwoValue);

      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger('master:roi-update', {
        instanceOne: $dropdownOneValue,
        instanceTwo: $dropdownTwoValue,
        instanceThree: $dropdownThreeValue
      });
    });

    // Dropdown Three value select
    $dropdownThreeChild.click(function() {
      $dropdownThreeValue = $(this).attr('value');
      Bridge.Context.set(storePath + '-dropdownThree', $dropdownThreeValue);

      _initTable($dropdownOneValue, $dropdownTwoValue, $dropdownThreeValue);
      Bridge.Event.trigger('master:roi-update', {
        instanceOne: $dropdownOneValue,
        instanceTwo: $dropdownTwoValue,
        instanceThree: $dropdownThreeValue
      });
    });

    // Bridging events for client
    Bridge.Event.on('client:fetch-roi-state', function() {
      Bridge.Event.trigger('master:roi-update', {
        instanceOne: instanceOne,
        instanceTwo: instanceTwo,
        instanceThree: instanceThree
      });
    });
  }

  // Executing clients
  function _bindClientEvents() {
    Bridge.Event.trigger('client:fetch-roi-state');
    Bridge.Event.on('master:roi-update', function(data) {
      Bridge.Context.set(storePath + '-dropdownOne', data.instanceOne);
      Bridge.Context.set(storePath + '-dropdownTwo', data.instanceTwo);
      Bridge.Context.set(storePath + '-dropdownThree', data.instanceThree);

      if (data.dataUpdate) {
        $riosummaryData = data.dataUpdate;
        Bridge.Context.set(storePath + '-data', $riosummaryData);
      }

      _initTable(data.instanceOne, data.instanceTwo, data.instanceThree);
    });

    Bridge.Event.trigger('client:fetch-roi-context');
    Bridge.Event.on('master:roi-context', function(data) {
      if (data.head) {
        var newHeads = contextStore.heads;
        newHeads[data.head].visible = false;
        _.assign(contextStore.heads, newHeads);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
      } else if (data.row) {
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
      } else if (data.dropdownOneRefresh) {
        var tableRef = contextStore;

        tableRef.heads[2].visible = true;
        tableRef.rows[4].visible = true;
        tableRef.rows[5].visible = true;
        _.assign(contextStore.tile, tableRef);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
      } else if (data.refresh) {
        var tableRef = contextStore;

        $.each(tableRef.heads, function(index, head) {
          head.visible = true;
        });
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

  _branding();
  _initTable(
    Bridge.Context.match('.' + storePath + '-dropdownOne', 'New Listings'),
    Bridge.Context.match('.' + storePath + '-dropdownTwo', 'All Channels'),
    Bridge.Context.match(
      '.' + storePath + '-dropdownThree',
      'All asset classes'
    )
  );
};
