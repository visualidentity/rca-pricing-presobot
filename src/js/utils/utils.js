window.deckBaseURL = window.deckBaseURL ? window.deckBaseURL : 'deck/';

// timeouts and intervals
window.slideIntervals = window.slideIntervals || {};
window.slideTimeouts = window.slideTimeouts || {};

// Clear setIntervals
var clearIntervals = function(slideId) {
  while (window.slideIntervals[slideId].length > 0) {
    clearInterval(window.slideIntervals[slideId].pop());
  }
};

// Clear setIntervals
var clearAllIntervals = function() {
  _.each(window.slideIntervals, function(interval) {
    while (interval.length > 0) {
      clearInterval(interval.pop());
    }
  });
};

// Clear setTimeouts
var clearTimeouts = function(slideId) {
  while (window.slideTimeouts[slideId].length > 0) {
    clearTimeout(window.slideTimeouts[slideId].pop());
  }
};

// Clear setTimeouts
var clearAllTimeouts = function() {
  _.each(window.slideTimeouts, function(interval) {
    while (interval.length > 0) {
      clearTimeout(interval.pop());
    }
  });
};

// Used for interactive tables, and removable assets
var incrementClasses = function(iteree, prefix) {
  var classString = '';

  for (var i = 0; i <= iteree; i++) {
    if (i === 0) {
      classString += prefix + i;
    } else {
      classString += ' ' + prefix + i;
    }
  }

  return classString;
};

// Check if an element is the descendant of another
var isDescendant = function(parent, child) {
  var node = child.parentNode;

  while (node != null) {
    if (node == parent) return true;
    node = node.parentNode;
  }

  return false;
};

// Check for multiple classes extension
$.fn.extend({
  hasClasses: function(selector) {
    var classNamesRegex = new RegExp(
        '( ' + selector.replace(/ +/g, '').replace(/,/g, ' | ') + ' )'
      ),
      rclass = /[\n\t\r]/g,
      i = 0,
      l = this.length;
    for (; i < l; i++) {
      if (
        this[i].nodeType === 1 &&
        classNamesRegex.test(
          (' ' + this[i].className + ' ').replace(rclass, ' ')
        )
      ) {
        return true;
      }
    }
    return false;
  }
});

// Check for same class
var compareClasses = function(comparer, comparison, selector) {
  for (var i = 0; i < selector.length; i++) {
    var klass = selector[i];
    if (comparer.hasClass(klass) && comparison.hasClass(klass)) {
      return true;
    }
  }
  return false;
};

/**
 *
 * @param {string} stringNum - number as string type: ex '1000'
 * @return {number}
 */
var convertToNumber = function(stringNum) {
  if (!isNaN(stringNum)) return stringNum;
  if (!stringNum) return null;
  let str = stringNum.replaceAll(',', '');
  str = str.replaceAll('%', '');
  const result = Number(str);
  if (isNaN(result)) return null;
  return result;
};

/**
 *
 * @param {number} number
 * @param {boolean} hasShortenUnit
 * @param {Object} config
 * @param {boolean} config.hasShortenUnit: If true, "99 thousands" will become "99k"
 * @param {number} config.toFixed
 */
var shortenNumber = function(number, config) {
  const hasShortenUnit =
    config.hasShortenUnit !== undefined ? config.hasShortenUnit : true;
  const toFixed = config.toFixed !== undefined ? config.toFixed : 1;

  if (!number) return null;

  let formattedInput = convertToNumber(number);

  if (isNaN(formattedInput)) {
    formattedInput = Number(number.replaceAll(',', ''));
    if (isNaN(formattedInput)) return null;
  }

  const absNum = Math.abs(formattedInput);
  if (absNum < 1000) {
    return formattedInput;
  }

  if (absNum >= 1000 && absNum < 1000 * 1000) {
    const result = Number((formattedInput / 1000).toFixed(toFixed));
    return `${result}${hasShortenUnit ? 'k' : ' thousand'}`;
  }
  if (absNum >= 1000 * 1000 && absNum < 1000 * 1000 * 1000) {
    const result = Number((formattedInput / (1000 * 1000)).toFixed(toFixed));
    return `${result}${hasShortenUnit ? 'm' : ' milion'}`;
  }
  if (absNum >= 1000 * 1000 * 1000) {
    const result = Number(
      (formattedInput / (1000 * 1000 * 1000)).toFixed(toFixed)
    );
    return `${result}${hasShortenUnit ? 'B' : ' bilion'}`;
  }
};
