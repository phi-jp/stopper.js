

window.stopper = function(time) {
  var _setInterval = window.setInterval;
  var _setTimeout = window.setTimeout;
  var _requestAnimationFrame = window.requestAnimationFrame;

  var ids = {
    interval: [],
    timeout: [],
    animation: [],
  };

  window.setInterval = function() {
    var id = _setInterval.apply(window, arguments);
    ids.interval.push(id);
  };

  window.setTimeout = function() {
    var id = _setTimeout.apply(window, arguments);
    ids.timeout.push(id);
  };

  window.requestAnimationFrame = function() {
    var id = _requestAnimationFrame.apply(window, arguments);
    ids.animation.push(id);
  };

  _setTimeout(function() {
    ids.interval.forEach(function(id) {
      clearInterval(id);
    });
    ids.timeout.forEach(function(id) {
      clearTimeout(id);
    });
    ids.animation.forEach(function(id) {
      cancelAnimationFrame(id);
    });
  }, time);
};