(function(angular) {
    'use strict';
  angular.module('heroApp').component('loginComp', {
    templateUrl: 'loginComp.html',
    bindings: {
      hero: '='
    }
  });
  })(window.angular);