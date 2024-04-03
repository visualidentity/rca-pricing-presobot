var _roiSummaryCalcNew = function(type) {
  var $pageContainer = $('article#fy25-roi-summary-moving-contract');
  var storePath = 'fy25_roi_summary_moving_contract';

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

  // Nested data if none
  var contextStoreSet = {
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
  };

  var contextStore = Bridge.Context.match('.' + storePath, contextStoreSet);

  var $roiSummaryContractData = Bridge.Feed.get('roiSummaryContract').raw();

  console.log('roiSummaryContractData: ', $roiSummaryContractData);

  function _handleRoiSummaryContractData(e) {
    $pageContainer
      .find('[data-pre-upgrade-contract-name]')
      .text(
        $roiSummaryContractData[e].preUpgrade.contractName
          ? $roiSummaryContractData[e].preUpgrade.contractName
          : 'Contract name'
      );
    $pageContainer
      .find('[data-post-upgrade-contract-name]')
      .text(
        $roiSummaryContractData[e].postUpgrade.contractName
          ? $roiSummaryContractData[e].postUpgrade.contractName
          : 'Contract name'
      );
    $pageContainer
      .find('[data-total-pre-upgrade]')
      .text(
        $roiSummaryContractData[e].preUpgrade.totalListings
          ? $roiSummaryContractData[e].preUpgrade.totalListings
          : '0'
      );
    $pageContainer
      .find('[data-total-post-upgrade]')
      .text(
        $roiSummaryContractData[e].postUpgrade.totalListings
          ? $roiSummaryContractData[e].postUpgrade.totalListings
          : '0'
      );
    $pageContainer
      .find('[data-pre-upgrade-total-views]')
      .text(
        $roiSummaryContractData[e].preUpgrade.totalViews
          ? $roiSummaryContractData[e].preUpgrade.totalViews
          : '0'
      );
    $pageContainer
      .find('[data-post-upgrade-total-views]')
      .text(
        $roiSummaryContractData[e].postUpgrade.totalViews
          ? $roiSummaryContractData[e].postUpgrade.totalViews
          : '0'
      );
    $pageContainer
      .find('[data-pre-upgrade-average-views]')
      .text(
        $roiSummaryContractData[e].preUpgrade.averageViewsPerListing
          ? $roiSummaryContractData[e].preUpgrade.averageViewsPerListing
          : '0'
      );
    $pageContainer
      .find('[data-post-upgrade-average-views]')
      .text(
        $roiSummaryContractData[e].postUpgrade.averageViewsPerListing
          ? $roiSummaryContractData[e].postUpgrade.averageViewsPerListing
          : '0'
      );
    $pageContainer
      .find('[data-pre-upgrade-total-enquiries]')
      .text(
        $roiSummaryContractData[e].preUpgrade.totalEnquiries
          ? $roiSummaryContractData[e].preUpgrade.totalEnquiries
          : '0'
      );
    $pageContainer
      .find('[data-post-upgrade-total-enquiries]')
      .text(
        $roiSummaryContractData[e].postUpgrade.totalEnquiries
          ? $roiSummaryContractData[e].postUpgrade.totalEnquiries
          : '0'
      );
    $pageContainer
      .find('[data-pre-upgrade-average-enquiries-listing]')
      .text(
        $roiSummaryContractData[e].preUpgrade.averageEnquiriesPerListing
          ? $roiSummaryContractData[e].preUpgrade.averageEnquiriesPerListing
          : '0'
      );
    $pageContainer
      .find('[data-post-upgrade-average-enquiries-listing]')
      .text(
        $roiSummaryContractData[e].postUpgrade.averageEnquiriesPerListing
          ? $roiSummaryContractData[e].postUpgrade.averageEnquiriesPerListing
          : '0'
      );
  }

  if ($roiSummaryContractData) {
    _handleRoiSummaryContractData(type);
  }

  // Initiate prep mode removables
  function _initRemovablesRender() {
    console.log('contextStore: ', contextStore);
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

  function _initRemovables() {
    var $removableHead = $pageContainer.find(
      '.table-summary__head--column-removable'
    );
    var $removableRow = $pageContainer.find('.table-summary__row-removable');
    var $removableColumn = $pageContainer.find(
      '.table-summary__column-removable'
    );
    var $ref = $pageContainer.find('.table-summary__refresh');

    $removableHead.click(function() {
      var index = $(this).attr('val');
      var newHeads = contextStore.heads;
      newHeads[index].visible = false;
      _.assign(contextStore.heads, newHeads);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-summary-moving-contract-context', {
        head: index
      });
    });

    $removableRow.click(function() {
      var index = $(this).attr('val');
      var newRows = contextStore.rows;
      newRows[index].visible = false;
      _.assign(contextStore.rows, newRows);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-summary-moving-contract-context', {
        row: index
      });
    });

    $removableColumn.click(function() {
      console.log('test');
      var index = $(this)
        .closest('.table-summary__column')
        .attr('val');
      var newColumns = contextStore.columns;
      newColumns[index].visible = false;
      _.assign(contextStore.columns, newColumns);
      Bridge.Context.set(storePath, contextStore);

      _initRemovablesRender();
      Bridge.Event.trigger('master:roi-summary-moving-contract-context', {
        column: index
      });
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
      Bridge.Event.trigger('master:roi-summary-moving-contract-context', {
        refresh: true
      });
    });

    Bridge.Event.on(
      'client:fetch-roi-summary-moving-contract-context',
      function() {
        Bridge.Event.trigger('master:roi-summary-moving-contract-context');
      }
    );
  }

  _initRemovablesRender();

  // Client master catchup
  function _bindMasterEvents() {}

  // Executing clients
  function _bindClientEvents() {
    Bridge.Event.trigger('client:fetch-roi-summary-moving-contract-context');
    Bridge.Event.on('master:roi-summary-moving-contract-context', function(
      data
    ) {
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
};
