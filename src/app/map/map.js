angular.module( 'ngBoilerplate.map', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'map', {
    url: '/map',
    views: {
      "main": {
        controller: 'MapCtrl',
        templateUrl: 'map/map.tpl.html'
      }
    },
    data:{ pageTitle: 'Map' }
  });
})

.controller( 'MapCtrl', function AboutCtrl( $scope ) {
  // 
  // console.log(_.map([1,2,3], function(i){return i + 1;}));

  
  
});
