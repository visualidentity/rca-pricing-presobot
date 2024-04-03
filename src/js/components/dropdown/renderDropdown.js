/**
 * @param {Array<{title: string, value: string}>} data Data for dropdown.
 * @param {string} targetId Target element id that the dropdown will be appended.
 * @param {string} dropdownId Id of the dropdown
 * @param {any} $pageContainer Jquery Object of dropdown's container
 * @param {string} placeholder Placeholder.
 * @param {function(string):void} onChange Callback that executed when an option is clicked.
 */
var renderDropdown = (
  data,
  targetId,
  dropdownId,
  $pageContainer,
  placeholder,
  onChange
) => {
  var client = $('body').hasClass('client') ? true : false;

  const storeKey = dropdownId;
  const dropdownContext = Bridge.Context.get(storeKey, {});

  const containerClass = 'header__input-dropdown';
  const labelClass = 'input-label';
  const optionsContainerClass = 'header__input-dropdown--results';
  const optionsClass = 'results__child';
  const isOpenClass = 'is-open';
  const activeClass = 'strong';

  const dropdownELement = `
    <div class="${containerClass}" id="${dropdownId}">
      <h6 class="${labelClass}">${placeholder}</h6>
      <div class="${optionsContainerClass}">
      </div>
    </div>
  `;

  function injectOptions() {
    if (data.length) {
      data.forEach(function(item) {
        $(`#${dropdownId} .${optionsContainerClass}`).append(
          `<div class="${optionsClass}" value="${item.value}">${item.title}</div>`
        );
      });
    }
  }

  function bindClientEvents() {
    injectOptions();

    Bridge.Event.trigger('client:fetch-dropdown-state');
    Bridge.Event.on('master:dropdown-open', function(data) {
      $pageContainer.find(`#${data.dropdownId}`).toggleClass(isOpenClass);
      $pageContainer
        .find(`.${containerClass}:not(#${data.dropdownId})`)
        .removeClass(isOpenClass);
    });
    Bridge.Event.on('master:dropdown-property', function(data) {
      $pageContainer
        .find(`#${dropdownId} .${labelClass}`)
        .text(data.dropdownLabel || placeholder);
      $pageContainer
        .find(`#${dropdownId} .${optionsClass}[value=${data.dropdownValue}]`)
        .addClass(activeClass);
      $pageContainer
        .find(
          `#${dropdownId} .${optionsClass}:not([value=${data.dropdownValue}])`
        )
        .removeClass(activeClass);
      if (data) onChange(data.dropdownValue);
    });
  }

  function bindMasterEvents() {
    injectOptions();

    // Click dropdown:
    $pageContainer.find(`#${dropdownId}`).click(function() {
      $(this).toggleClass(isOpenClass);
      $pageContainer
        .find(`.${containerClass}:not(#${dropdownId})`)
        .removeClass(isOpenClass);

      Bridge.Event.trigger('master:dropdown-open', {
        dropdownId: targetId
      });
    });

    // Click dropdown item:
    $pageContainer.find(`#${dropdownId} .${optionsClass}`).click(function() {
      const value = $(this).attr('value');
      const label = $(this).html();
      $(this).addClass(activeClass);
      $(`#${dropdownId} .${optionsClass}`)
        .not(this)
        .removeClass(activeClass);
      $(`#${dropdownId} .${labelClass}`).text(label);
      onChange(value);
      Bridge.Event.trigger('master:dropdown-property', {
        dropdownValue: value,
        dropdownLabel: label
      });

      dropdownContext.dropdownValue = value;
      dropdownContext.dropdownLabel = label;
      Bridge.Context.set(storeKey, dropdownContext);
    });

    Bridge.Event.on('client:fetch-dropdown-state', function() {
      Bridge.Event.trigger('master:dropdown-open', {
        dropdownId: dropdownId
      });
      Bridge.Event.trigger('master:dropdown-property', {
        dropdownValue: null,
        dropdownLabel: null
      });
    });
  }

  // Append dropdown
  $(`#${targetId}`).html(dropdownELement);

  if (client) {
    bindClientEvents();
  } else {
    bindMasterEvents();
  }
};
