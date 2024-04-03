var _screenRender = function($elm) {
	var $pageContainer = $('article#' + $elm.id);
  var storePath = $elm.id;

	var client = $('body').hasClass('client') ? true : false;

	if (client) {
		_bindClientEvents();
	}
	else {
		_bindMasterEvents();
	}

  var contextStore = {};

	function _bindMasterEvents() {
    var $open = $pageContainer.find('[data-screen-open]');
    var $close = $pageContainer.find('[data-screen-close]');

    Bridge.Event.on('client:getState', function() {
      var currentContext = Bridge.Context.match('.' + storePath, contextStore);
      Bridge.Event.trigger('master:active-screen', {
        active: currentContext.active
      });
    });

    $close.on('click', function(e) {
      Bridge.Context.set(storePath, {
        active: '-'
      });

      Bridge.Event.trigger('master:active-screen', {
        active: '-'
      });
    });

    $open.on('click', function(e) {
      var currentContext = Bridge.Context.match('.' + storePath, contextStore);

      var val = $(this).data('screenOpen');
      var value = (val === currentContext.active) ? '-' : val;

      Bridge.Context.set(storePath, {
        active: value
      });

      Bridge.Event.trigger('master:active-screen', {
        active: value
      });

      Bridge.Event.on('client:fetch-active-screen', function() {
        Bridge.Event.trigger('master:active-screen', {
          active: value
        });
      });

      e.preventDefault();
    });

    
		Bridge.Event.on('master:active-screen', function (i, e, b) {
			var currentContext = Bridge.Context.match('.' + storePath, contextStore);
      setActive(currentContext.active);
		});

	}

  function setActive (value) {
    var $screens = $pageContainer.find('[data-screen]');
    var $screen = $pageContainer.find('[data-screen="'+value+'"]');

    if ($screen) {
      $screen.toggleClass('is-inactive');
    }

    $.each( $screens, function( index, item ) {
      if ($(item).attr('data-screen') !== value) {
        $(item).addClass('is-inactive');
      }
    });
  }

	// Executing clients
	function _bindClientEvents() {    
    Bridge.Event.trigger('client:getState');
		Bridge.Event.on('master:active-screen', function (context) {
      setActive(context.active);
		});
	}
};