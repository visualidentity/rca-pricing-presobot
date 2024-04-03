var supportForYourAgencyRender = function($elm, $path) {
	var $pageContainer = $('article#' + $elm.id);
	var storePath = $path;

	var client = $('body').hasClass('client') ? true : false;
	var preview = $('body').hasClass('preview') ? true : false;
	
	if (client) {
        _bindClientEvents();
    } else if (preview) {
        _initRemovables();
	}
	
	// Context
	var contextStore = {
		tile: [{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		},{
			visible: true
		}]
	};

	// Initiate prep mode removables
	function _initRemovables() {
		var $removableTile = $pageContainer.find('.tile__child--removable');
		var $ref = $pageContainer.find('[data-header-refresh]');

		$removableTile.click(function() {
			var index = $(this).attr('val');
			var newTile = contextStore.tile;
			newTile[index].visible = false;
			_.assign(contextStore.tile, newTile);
			Bridge.Context.set(storePath, contextStore);
			
			_initRemovablesRender();
			Bridge.Event.trigger('master:tile-context', {tile: index});
		});

		// Tile refresh
		$ref.click(function() {
			var tileRef = contextStore.tile;

			$.each( tileRef, function( index, value ) {
				value.visible = true;
			});
			_.assign(contextStore.tile, tileRef);
			Bridge.Context.set(storePath, contextStore);

			_initRemovablesRender();
			Bridge.Event.trigger('master:tile-context', {refresh: tileRef});
		});

		Bridge.Event.on('client:fetch-tile-context', function() {
			Bridge.Event.trigger('master:tile-context');
		});
	}

	_initRemovablesRender();

	function _initRemovablesRender() {
		var $container = $pageContainer.find('.tile');
		var $context = Bridge.Context.match('.' + storePath, contextStore);
		var visibleTiles = 0;

		$.each( $context.tile, function( index, value ) {
			value.visible != true ? (
				$pageContainer.find('div[val="'+ index + '"]').hide(),
				visibleTiles = visibleTiles - 1,
				index == 7 && $pageContainer.find('.footer__disclaimer-item').hide('')
			) : (
				$pageContainer.find('div[val="'+ index + '"]').show(),
				visibleTiles = visibleTiles + 1,
				index == 7 && $pageContainer.find('.footer__disclaimer-item').show('')
			);
		});

		visibleTiles < 5 ? $container.addClass('tile-extension') : $container.removeClass('tile-extension');
	}

	// Executing clients
	function _bindClientEvents() {
		Bridge.Event.trigger('client:fetch-tile-context');
		Bridge.Event.on('master:tile-context', function (data) {
			if (data.tile) {
				var newTile = contextStore.tile;
				newTile[data.tile].visible = false;
				_.assign(contextStore.tile, newTile);
				Bridge.Context.set(storePath, contextStore);
				_initRemovablesRender();
			} else if (data.refresh) {
				$.each( data.refresh, function( index, value ) {
					value.visible = true;
				});
				_.assign(contextStore.tile, data.refresh);
				Bridge.Context.set(storePath, contextStore);
	
				_initRemovablesRender();
			}
		});
	}
};