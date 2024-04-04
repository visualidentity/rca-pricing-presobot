new Slide({
  onRendered: function() {
    attachDisclaimerEvents('#subscription-options-fy25');

    var $pageContainer = $('article#subscription-options-fy25');

    var storePath = 'subscription-option-fy25';

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
    var contextStore = Bridge.Context.match('.' + storePath, {
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
        },
        {
          visible: true
        }
      ]
    });

    // Initiate prep mode removables
    function _initRemovables() {
      var $removableRow = $pageContainer.find(
        '.table-performance__removable > .table-performance__heading'
      );
      var $removableColumn = $pageContainer.find(
        '.table-performance__removablesub'
      );
      var $ref = $pageContainer.find('[data-header-refresh]');

      $removableRow.click(function() {
        var index = $(this)
          .closest('tr')
          .attr('val');
        var newRows = contextStore.rows;
        newRows[index].visible = false;
        _.assign(contextStore.rows, newRows);
        Bridge.Context.set(storePath, contextStore);

        _initRemovablesRender();
        Bridge.Event.trigger('master:subscription-option-fy25-context', {
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
        Bridge.Event.trigger('master:subscription-option-fy25-context', {
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
        Bridge.Event.trigger('master:subscription-option-fy25-context', {
          refresh: true
        });
      });

      Bridge.Event.on(
        'client:fetch-subscription-option-fy25-context',
        function() {
          Bridge.Event.trigger('master:subscription-option-fy25-context');
        }
      );
    }

    _initRemovablesRender();

    function _initRemovablesRender() {
      var $context = Bridge.Context.match('.' + storePath, contextStore);

      $.each($context.rows, function(index, value) {
        value.visible != true
          ? $pageContainer
              .find('.subslide.active tr[val="' + index + '"]')
              .hide()
          : $pageContainer
              .find('.subslide.active tr[val="' + index + '"]')
              .show();
      });

      $.each($context.columns, function(index, value) {
        var inc = index - 1;
        value.visible != true
          ? ($pageContainer
              .find('.subslide.active th[val="' + index + '"]')
              .hide(),
            $pageContainer
              .find('.subslide.active td[val="' + inc + '"]')
              .hide(),
            index == 5 ? $pageContainer.find('.subslide.active').addClass("removed-last-column") : $pageContainer.find('.subslide.active').removeClass("removed-last-column"))            
          : ($pageContainer
              .find('.subslide.active th[val="' + index + '"]')
              .show(),
            $pageContainer
              .find('.subslide.active td[val="' + inc + '"]')
              .show(),
              index == 5 ? $pageContainer.find('.subslide.active').removeClass("removed-last-column") : "");

      });
    }

    // Client master catchup
    function _bindMasterEvents() {}

    // Executing clients
    function _bindClientEvents() {
      Bridge.Event.trigger('client:fetch-subscription-option-fy25-context');
      Bridge.Event.on('master:subscription-option-fy25-context', function(
        data
      ) {
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
  },
  onReady: function() {
    if (!$('body').hasClass('client')) {
      var $arrowUp = $('[data-arrow-up]'),
        $arrowDown = $('[data-arrow-down]');

      $arrowDown.on('click', function() { 
        if(!$(this).hasClass("disable")) {
          Bridge.Sub.show('subslide-2');
        }
      }); 

      $arrowUp.on('click', function() {
        if(!$(this).hasClass("disable")) {
          Bridge.Sub.show('subslide-1');
        }
      });
    }
  }
});
