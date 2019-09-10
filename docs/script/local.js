'use strict';

define(['require'], function (require) {
  'use strict';

  var localKey = 'nav-data';
  return {
    getLocal: function getLocal() {
      localStorage.getItem(localKey);
    },
    setLocal: function setLocal(jsonString) {
      localStorage.setItem(localKey, jsonString);
    },
    combine: function combine() {}
  };
});