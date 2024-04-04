new Slide({
  onRendered: function() {
    attachDisclaimerEvents('#depth_overview_table');

    const STORE_PATH = 'depth-overview-table';
    const TABLE_PERFORMANCE_DEFAULTS = {
      'table-performance-1': {
        rows: Array.from({ length: 5 }, () => ({ visible: true })),
        columns: Array.from({ length: 5 }, () => ({ visible: true }))
      },
      'table-performance-2': {
        rows: Array.from({ length: 8 }, () => ({ visible: true })),
        columns: Array.from({ length: 5 }, () => ({ visible: true }))
      }
    };

    // Elements
    const $pageContainer = $('article#depth_overview_table');
    const $tablePerformance1 = $pageContainer.find('.table-performance-1');
    const $tablePerformance2 = $pageContainer.find('.table-performance-2');
    const $refreshButton = $pageContainer.find('[data-header-refresh]');

    // Context Store Functions
    function getContextStore(key) {
      const defaultStore = TABLE_PERFORMANCE_DEFAULTS[key];
      return Bridge.Context.get(
        STORE_PATH + '-' + key,
        JSON.parse(JSON.stringify(defaultStore))
      );
    }

    // Initialization
    function init() {
      renderTable($tablePerformance1, getContextStore('table-performance-1'));
      renderTable($tablePerformance2, getContextStore('table-performance-2'));
    }

    // Rendering Function
    function renderTable($table, contextStore) {
      const rows = contextStore.rows;
      const columns = contextStore.columns;

      // Render rows
      rows.forEach((row, rowIndex) => {
        const $row = $table.find('tr').eq(rowIndex);
        row.visible ? $row.show() : $row.hide();
      });

      // Render columns
      columns.forEach((column, columnIndex) => {
        const $columnHeader = $table.find('th').eq(columnIndex);
        const $column = $table.find('tr td').filter(function() {
          return $(this).index() === columnIndex;
        });

        column.visible
          ? ($columnHeader.show(), $column.show())
          : ($columnHeader.hide(), $column.hide());
      });
    }

    // Event Listeners
    [$tablePerformance1, $tablePerformance2].forEach(($table, index) => {
      const key = 'table-performance-' + (index + 1);

      $table.on('click', '.table-performance__removablesub', function() {
        const columnIndex = $(this).index();
        const contextStore = getContextStore(key);
        contextStore.columns[columnIndex].visible = false;
        Bridge.Context.set(STORE_PATH + '-' + key, contextStore);
        renderTable($table, contextStore);
      });

      $table.on('click', '.table-performance__heading', function() {
        const rowIndex = $(this)
          .parent()
          .index();
        const contextStore = getContextStore(key);
        contextStore.rows[rowIndex].visible = false;
        Bridge.Context.set(STORE_PATH + '-' + key, contextStore);
        renderTable($table, contextStore);
      });
    });

    $refreshButton.on('click', function() {
      Object.keys(TABLE_PERFORMANCE_DEFAULTS).forEach(key => {
        const defaultStore = TABLE_PERFORMANCE_DEFAULTS[key];
        Bridge.Context.set(STORE_PATH + '-' + key, defaultStore);
        renderTable($pageContainer.find('.' + key), defaultStore);
      });
    });

    init();
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
