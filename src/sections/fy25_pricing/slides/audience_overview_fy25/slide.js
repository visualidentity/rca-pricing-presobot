new Slide({
  onReady() {},
  onRendered() {
    var renderROI = _roiRender(this, 23);

    var storePath = 'audience-overview-fy25';

    var client = $('body').hasClass('client') ? true : false;
    var preview = $('body').hasClass('preview') ? true : false;

    const audienceOverviewList = Bridge.Feed.get('audienceOverviewFy25').raw()
      .states;

    var activeOverview = Bridge.Context.match(
      `.${storePath}-content`,
      audienceOverviewList[0]
    );

    const $pageContainer = $('article#audience-overview-fy25');

    const injectData = data => {
      const uniqueAudienceCompetitor = convertToNumber(
        data.uniqueAudienceCompetitor
      );
      const uniqueAudience = convertToNumber(data.uniqueAudience);
      const exclusiveAudience = convertToNumber(data.exclusiveAudience);
      const sharedAudience = convertToNumber(data.sharedAudience);
      const totalVisitsCompetitor = convertToNumber(data.totalVisitsCompetitor);
      const totalVisits = convertToNumber(data.totalVisits);

      const uniqueAudienceCompetitorRatio =
        uniqueAudienceCompetitor / uniqueAudience;
      const totalVisitsCompetitorRatio = totalVisitsCompetitor / totalVisits;
      const audienceGrowthPercent = Math.round(
        ((uniqueAudience - uniqueAudienceCompetitor) * 100) /
          uniqueAudienceCompetitor
      );
      const visitorGrowthRatio = Number(
        (totalVisits / totalVisitsCompetitor).toFixed(1)
      );

      const sharedAudienceGrowthRatio = sharedAudience / exclusiveAudience;
      const defaultExclusiveAudienceRadius = 263;
      const sharedAudienceRadius = (
        defaultExclusiveAudienceRadius * Math.sqrt(sharedAudienceGrowthRatio)
      ).toFixed(2);

      // Inject statistical number:
      $pageContainer.find('#unique-audience .chart__item--total span').text(
        shortenNumber(uniqueAudience, {
          toFixed:
            uniqueAudience >= 1000 && uniqueAudience < 1000 * 1000 ? 0 : 1
        })
      );
      $pageContainer
        .find('#unique-audience .chart__item--competitor span')
        .text(
          shortenNumber(uniqueAudienceCompetitor, {
            toFixed:
              uniqueAudienceCompetitor >= 1000 &&
              uniqueAudienceCompetitor < 1000 * 1000
                ? 0
                : 1
          })
        );
      $pageContainer
        .find('#unique-audience .container__description span')
        .eq(0)
        .text(
          shortenNumber(uniqueAudience, {
            hasShortenUnit: false,
            toFixed:
              uniqueAudience >= 1000 && uniqueAudience < 1000 * 1000 ? 0 : 1
          }).replace(" thousand", "K")
        );
      $pageContainer
        .find('#unique-audience .container__description span')
        .eq(1)
        .text(`${audienceGrowthPercent}%`);

      $pageContainer
        .find('#audience .chart__circle__item--exclusive span')
        .text(data.exclusiveAudience);
      $pageContainer
        .find('#audience .chart__circle__item--shared span')
        .text(data.sharedAudience);
      $pageContainer
        .find('#audience .container__description span')
        .text(data.exclusiveAudience);

      $pageContainer.find('#visitor .chart__item--total span').text(
        shortenNumber(totalVisits, {
          toFixed: totalVisits >= 1000 && totalVisits < 1000 * 1000 ? 0 : 1
        })
      );
      $pageContainer.find('#visitor .chart__item--competitor span').text(
        shortenNumber(totalVisitsCompetitor, {
          toFixed:
            totalVisitsCompetitor >= 1000 && totalVisitsCompetitor < 1000 * 1000
              ? 0
              : 1
        })
      );
      $pageContainer
        .find('#visitor .container__description span')
        .text(`${visitorGrowthRatio}x`);

      // Chart presentation:
      $pageContainer
        .find('#unique-audience .chart__item--competitor span')
        .css({ 'flex-basis': `${uniqueAudienceCompetitorRatio * 100}%` });
      $pageContainer.find('#audience .chart__circle__item--shared').css({
        width: `${sharedAudienceRadius}px`,
        height: `${sharedAudienceRadius}px`
      });
      $pageContainer
        .find('#visitor .chart__item--competitor span')
        .css({ 'flex-basis': `${totalVisitsCompetitorRatio * 100}%` });

      if ($pageContainer.find('.input-label').text() !== data.state) {
        $pageContainer.find('.input-label').text(data.state);
      }

      // Disclaimers:
      if (data.disclaimers?.length) {
        let footer = '';
        data.disclaimers.forEach((item, i) => {
          footer += `<p>${i + 1}. ${item}</p>`;
        });
        $pageContainer.find('.slide__footer').html(footer);
      }
    };

    const dropdown = [
      { title: 'National', value: 'National' },
      { title: 'NSW', value: 'NSW' },
      { title: 'VIC', value: 'VIC' },
      { title: 'QLD', value: 'QLD' },
      { title: 'WA', value: 'WA' },
      { title: 'TAS', value: 'TAS' },
      { title: 'ACT', value: 'ACT' },
      { title: 'SA/NT', value: 'SA/NT' }
    ];

    const contextStore = Bridge.Context.match('.' + storePath, {
      removableColumns: [
        { visible: true },
        { visible: true },
        { visible: true }
      ]
    });

    function onFilterChange(value) {
      if (value) {
        const audienceOverview = audienceOverviewList?.find(
          item => item.state === value
        );
        if (audienceOverview) injectData(audienceOverview);
        Bridge.Event.trigger('master:audience-overview', {
          audienceOverview: audienceOverview
        });
      }
    }

    function bindMasterEvents() {}

    function bindClientEvents() {
      Bridge.Event.trigger('client:fetch-audience-overview-context');
      Bridge.Event.on('master:audience-overview-context', function(data) {
        if (data.column) {
          contextStore.removableColumns[data.column].visible = false;
          Bridge.Context.set(storePath, contextStore);
          initRemovableRender();
        }
        if (data.refresh) {
          $.each(contextStore.removableColumns, function(index, value) {
            value.visible = true;
          });
          Bridge.Context.set(storePath, contextStore);
          initRemovableRender();
        }
      });
    }

    function initRemovables() {
      const $removableColumn = $pageContainer.find('.container__removable');
      const $removeButton = $removableColumn.find(
        '.container__removable__icon'
      );
      const $refreshButton = $pageContainer.find('.refresh__button');

      $removableColumn
        .find('.container__removable__icon')
        .removeClass('container__removable__icon--disable');

      $removeButton.click(function() {
        const index = $(this)
          .parent()
          .attr('value');
        contextStore.removableColumns[index].visible = false;

        Bridge.Context.set(storePath, contextStore);

        initRemovableRender();
        Bridge.Event.trigger('master:audience-overview-context', {
          column: index
        });
      });

      $refreshButton.click(function() {
        $.each(contextStore.removableColumns, function(index, value) {
          value.visible = true;
        });
        Bridge.Context.set(storePath, contextStore);
        initRemovableRender();
        Bridge.Event.trigger('master:audience-overview-context', {
          refresh: true
        });

        Bridge.Context.set(`${storePath}-content`, audienceOverviewList[0]);
        activeOverview = audienceOverviewList[0];
        injectData(activeOverview);
      });

      Bridge.Event.on('client:audience-overview-context', function() {
        Bridge.Event.trigger('master:audience-overview-context');
      });
    }

    function initRemovableRender() {
      $.each(contextStore.removableColumns, function(index, value) {
        const $removableColumn = $pageContainer.find(
          `.container__removable[value=${index}]`
        );
        !!value.visible ? $removableColumn.show() : $removableColumn.hide();
      });
    }

    renderDropdown(
      dropdown,
      'audience-overview-fy25-dropdown',
      'dropdown-1',
      $pageContainer,
      'States',
      onFilterChange
    );

    Bridge.Event.on('master:audience-overview', function(data) {
      activeOverview = Bridge.Context.set(
        `${storePath}-content`,
        data.audienceOverview
      );
      injectData(data.audienceOverview);
    });

    if (activeOverview) {
      injectData(activeOverview);
    }

    if (client) {
      bindClientEvents();
    } else {
      bindMasterEvents();
    }

    if (preview) initRemovables();
    initRemovableRender();
  }
});
