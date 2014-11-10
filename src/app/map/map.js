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

    // Define a map object
    map = L.mapbox.map('map', 'zetter.i73ka9hn').fitBounds([[42.329077, -71.108871], [42.374200, -71.032072]]);

    // Set initial selection (evaluates to nothing ATM)
    initialSelection = d3.set(['Tesco', 'Sainsburys']);

    // Points from XML
    map.on('ready', function() {

      points = $scope.sampleData;

      console.log(points.length);

      points = _.map(points, function(point, key){
        return {
          color: "609128",
          id: key,
          latitude: point.location[1],
          longitude: point.location[0],
          name: key,
          type: "Josh",
          url: "..."
        };

          
      });

      console.log(points[0]);

      points.forEach(function(point) {
        pointTypes.set(point.type, {type: point.type, color: point.color});
      });
        
      drawPointTypeSelection();
      map.addLayer(mapLayer);

    });

    

$scope.sampleData = [{
    "date": "2014-03-04T18:09:43.885-08:00",
    "location": [
      "-71.0979113",
      "42.3316544",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:15:02.253-08:00",
    "location": [
      "-71.0979026",
      "42.3316533",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:19:46.682-08:00",
    "location": [
      "-71.0978709",
      "42.3316432",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:24:50.897-08:00",
    "location": [
      "-71.0978894",
      "42.3316473",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:30:02.263-08:00",
    "location": [
      "-71.0979312",
      "42.3316533",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:34:47.881-08:00",
    "location": [
      "-71.0979121",
      "42.3316469",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:39:32.901-08:00",
    "location": [
      "-71.0978786",
      "42.3316668",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:45:02.326-08:00",
    "location": [
      "-71.0978823",
      "42.3316242",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:50:00.918-08:00",
    "location": [
      "-71.0979136",
      "42.3316289",
      "0"
    ]
  },
  {
    "date": "2014-03-04T18:56:31.223-08:00",
    "location": [
      "-71.0978755",
      "42.331622",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:02:20.885-08:00",
    "location": [
      "-71.0978866",
      "42.3316392",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:07:51.962-08:00",
    "location": [
      "-71.0978766",
      "42.3316291",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:14:02.399-08:00",
    "location": [
      "-71.0978559",
      "42.3316262",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:16:56.063-08:00",
    "location": [
      "-71.0978921",
      "42.3315975",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:21:41.014-08:00",
    "location": [
      "-71.0979115",
      "42.3316545",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:24:17.516-08:00",
    "location": [
      "-71.0979058",
      "42.3316359",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:25:47.930-08:00",
    "location": [
      "-71.0978836",
      "42.3316299",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:26:49.905-08:00",
    "location": [
      "-71.09792",
      "42.3315921",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:27:49.893-08:00",
    "location": [
      "-71.0978893",
      "42.3316501",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:28:49.879-08:00",
    "location": [
      "-71.0978871",
      "42.3316498",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:29:49.887-08:00",
    "location": [
      "-71.0979332",
      "42.3316368",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:30:52.922-08:00",
    "location": [
      "-71.0978673",
      "42.3316532",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:32:07.942-08:00",
    "location": [
      "-71.0978878",
      "42.3316045",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:33:07.932-08:00",
    "location": [
      "-71.0978855",
      "42.3316048",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:34:08.885-08:00",
    "location": [
      "-71.0978944",
      "42.3316314",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:35:15.853-08:00",
    "location": [
      "-71.09786",
      "42.3316304",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:36:40.854-08:00",
    "location": [
      "-71.0979312",
      "42.331618",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:37:40.947-08:00",
    "location": [
      "-71.0979123",
      "42.3315974",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:42:25.890-08:00",
    "location": [
      "-71.0978622",
      "42.3316063",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:45:07.844-08:00",
    "location": [
      "-71.0978731",
      "42.3316453",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:46:21.234-08:00",
    "location": [
      "-71.0978578",
      "42.3316308",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:47:22.195-08:00",
    "location": [
      "-71.0979086",
      "42.3315967",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:48:22.879-08:00",
    "location": [
      "-71.0979282",
      "42.3316034",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:49:22.896-08:00",
    "location": [
      "-71.097921",
      "42.3316283",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:50:29.172-08:00",
    "location": [
      "-71.0978848",
      "42.3316362",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:51:57.919-08:00",
    "location": [
      "-71.0978709",
      "42.3316303",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:52:56.741-08:00",
    "location": [
      "-71.0978759",
      "42.3316159",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:53:58.889-08:00",
    "location": [
      "-71.0979208",
      "42.331629",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:54:58.955-08:00",
    "location": [
      "-71.0978807",
      "42.3316167",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:55:59.990-08:00",
    "location": [
      "-71.0978468",
      "42.3316182",
      "0"
    ]
  },
  {
    "date": "2014-03-04T19:57:05.430-08:00",
    "location": [
      "-71.0978995",
      "42.331641",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:01:50.469-08:00",
    "location": [
      "-71.0978967",
      "42.331644",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:04:18.890-08:00",
    "location": [
      "-71.0978588",
      "42.3316317",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:05:18.827-08:00",
    "location": [
      "-71.0978796",
      "42.3316262",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:06:19.859-08:00",
    "location": [
      "-71.0978734",
      "42.3316265",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:07:19.964-08:00",
    "location": [
      "-71.0978659",
      "42.3316033",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:08:19.979-08:00",
    "location": [
      "-71.0978736",
      "42.3316113",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:09:19.892-08:00",
    "location": [
      "-71.0978857",
      "42.3315997",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:10:55.870-08:00",
    "location": [
      "-71.0979076",
      "42.3316151",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:11:56.917-08:00",
    "location": [
      "-71.0978839",
      "42.3316268",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:12:56.876-08:00",
    "location": [
      "-71.0978819",
      "42.3316023",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:16:55.958-08:00",
    "location": [
      "-71.0978589",
      "42.3316356",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:21:58.165-08:00",
    "location": [
      "-71.097904",
      "42.3316205",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:26:43.065-08:00",
    "location": [
      "-71.097883",
      "42.3316627",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:31:28.121-08:00",
    "location": [
      "-71.0978723",
      "42.3316183",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:36:13.082-08:00",
    "location": [
      "-71.0978876",
      "42.3316603",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:40:57.005-08:00",
    "location": [
      "-71.0978909",
      "42.3316433",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:45:43.145-08:00",
    "location": [
      "-71.0978836",
      "42.3316349",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:50:28.131-08:00",
    "location": [
      "-71.0979315",
      "42.3316207",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:55:13.187-08:00",
    "location": [
      "-71.0978894",
      "42.3316126",
      "0"
    ]
  },
  {
    "date": "2014-03-04T20:59:58.221-08:00",
    "location": [
      "-71.0978689",
      "42.3315998",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:04:43.116-08:00",
    "location": [
      "-71.0978917",
      "42.3316423",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:09:28.183-08:00",
    "location": [
      "-71.0978691",
      "42.3316169",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:15:02.380-08:00",
    "location": [
      "-71.0979311",
      "42.3316146",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:20:41.369-08:00",
    "location": [
      "-71.0978909",
      "42.33164",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:25:35.894-08:00",
    "location": [
      "-71.0979059",
      "42.3315901",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:30:20.971-08:00",
    "location": [
      "-71.0978803",
      "42.3316354",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:35:41.648-08:00",
    "location": [
      "-71.0978905",
      "42.3316223",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:40:56.545-08:00",
    "location": [
      "-71.0978972",
      "42.3316261",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:46:55.942-08:00",
    "location": [
      "-71.0978687",
      "42.3316174",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:51:41.188-08:00",
    "location": [
      "-71.0978738",
      "42.3316396",
      "0"
    ]
  },
  {
    "date": "2014-03-04T21:58:56.846-08:00",
    "location": [
      "-71.0979043",
      "42.3316082",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:03:41.775-08:00",
    "location": [
      "-71.0979447",
      "42.3316338",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:08:26.910-08:00",
    "location": [
      "-71.0978748",
      "42.3316544",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:14:02.247-08:00",
    "location": [
      "-71.0978684",
      "42.331626",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:16:56.120-08:00",
    "location": [
      "-71.0978539",
      "42.3316329",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:23:08.007-08:00",
    "location": [
      "-71.0979021",
      "42.331628",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:27:53.260-08:00",
    "location": [
      "-71.0978803",
      "42.3316511",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:34:56.869-08:00",
    "location": [
      "-71.0978699",
      "42.3316187",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:39:41.971-08:00",
    "location": [
      "-71.0979009",
      "42.3316341",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:44:27.053-08:00",
    "location": [
      "-71.0979032",
      "42.3316534",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:49:56.395-08:00",
    "location": [
      "-71.0978595",
      "42.3316583",
      "0"
    ]
  },
  {
    "date": "2014-03-04T22:55:08.030-08:00",
    "location": [
      "-71.0978763",
      "42.3316132",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:00:02.353-08:00",
    "location": [
      "-71.0978849",
      "42.3316503",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:04:57.082-08:00",
    "location": [
      "-71.0979242",
      "42.3316133",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:10:57.152-08:00",
    "location": [
      "-71.0979036",
      "42.33164",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:15:42.257-08:00",
    "location": [
      "-71.0979088",
      "42.3316384",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:20:45.210-08:00",
    "location": [
      "-71.0979331",
      "42.3316366",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:25:36.680-08:00",
    "location": [
      "-71.0979084",
      "42.3316489",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:30:21.717-08:00",
    "location": [
      "-71.0978595",
      "42.3316256",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:37:57.387-08:00",
    "location": [
      "-71.0979001",
      "42.331635",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:42:44.073-08:00",
    "location": [
      "-71.0978497",
      "42.3316407",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:46:57.634-08:00",
    "location": [
      "-71.0978619",
      "42.33162",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:52:59.074-08:00",
    "location": [
      "-71.0978788",
      "42.331651",
      "0"
    ]
  },
  {
    "date": "2014-03-04T23:57:44.124-08:00",
    "location": [
      "-71.0979505",
      "42.3316428",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:02:30.171-08:00",
    "location": [
      "-71.0978977",
      "42.3316451",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:07:57.684-08:00",
    "location": [
      "-71.0979107",
      "42.3316372",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:12:42.676-08:00",
    "location": [
      "-71.0978776",
      "42.3316151",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:16:57.759-08:00",
    "location": [
      "-71.0978787",
      "42.3316317",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:22:59.143-08:00",
    "location": [
      "-71.0978959",
      "42.3316292",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:27:33.500-08:00",
    "location": [
      "-71.0979081",
      "42.3316447",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:32:21.411-08:00",
    "location": [
      "-71.0979364",
      "42.3316307",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:37:06.400-08:00",
    "location": [
      "-71.0978574",
      "42.3316603",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:41:51.401-08:00",
    "location": [
      "-71.097927",
      "42.3316547",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:46:56.886-08:00",
    "location": [
      "-71.0978988",
      "42.331632",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:52:58.929-08:00",
    "location": [
      "-71.0978702",
      "42.3316569",
      "0"
    ]
  },
  {
    "date": "2014-03-05T00:58:59.056-08:00",
    "location": [
      "-71.0978729",
      "42.3316508",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:03:44.106-08:00",
    "location": [
      "-71.09793",
      "42.3316219",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:08:29.105-08:00",
    "location": [
      "-71.0978863",
      "42.3316507",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:13:14.116-08:00",
    "location": [
      "-71.0979242",
      "42.3316299",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:16:57.017-08:00",
    "location": [
      "-71.097848",
      "42.3316304",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:23:44.768-08:00",
    "location": [
      "-71.0979233",
      "42.3316381",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:30:02.320-08:00",
    "location": [
      "-71.0978945",
      "42.3316114",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:34:59.190-08:00",
    "location": [
      "-71.0978612",
      "42.3316433",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:39:44.242-08:00",
    "location": [
      "-71.0979094",
      "42.3316098",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:44:29.263-08:00",
    "location": [
      "-71.0978837",
      "42.3316509",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:49:57.353-08:00",
    "location": [
      "-71.0979102",
      "42.3316341",
      "0"
    ]
  },
  {
    "date": "2014-03-05T01:55:37.828-08:00",
    "location": [
      "-71.0978699",
      "42.3316473",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:00:22.856-08:00",
    "location": [
      "-71.0979064",
      "42.3316139",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:05:07.880-08:00",
    "location": [
      "-71.0978618",
      "42.3316396",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:10:09.538-08:00",
    "location": [
      "-71.097894",
      "42.3316447",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:15:02.338-08:00",
    "location": [
      "-71.0979224",
      "42.3316308",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:19:56.913-08:00",
    "location": [
      "-71.0978518",
      "42.3316563",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:25:14.668-08:00",
    "location": [
      "-71.0979135",
      "42.3316319",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:30:02.351-08:00",
    "location": [
      "-71.0979103",
      "42.3316143",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:37:57.081-08:00",
    "location": [
      "-71.0978668",
      "42.3316493",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:42:42.070-08:00",
    "location": [
      "-71.0978868",
      "42.3316444",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:46:56.996-08:00",
    "location": [
      "-71.0978646",
      "42.3316586",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:51:42.136-08:00",
    "location": [
      "-71.0979197",
      "42.3316407",
      "0"
    ]
  },
  {
    "date": "2014-03-05T02:56:27.182-08:00",
    "location": [
      "-71.0978779",
      "42.3315922",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:02:21.344-08:00",
    "location": [
      "-71.0978897",
      "42.3316485",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:07:06.404-08:00",
    "location": [
      "-71.0978927",
      "42.3316173",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:13:57.315-08:00",
    "location": [
      "-71.0978856",
      "42.3316238",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:16:56.995-08:00",
    "location": [
      "-71.0978629",
      "42.3316347",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:22:57.341-08:00",
    "location": [
      "-71.0978812",
      "42.3316089",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:30:02.231-08:00",
    "location": [
      "-71.0978967",
      "42.3316173",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:34:57.504-08:00",
    "location": [
      "-71.0978631",
      "42.3316292",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:40:57.429-08:00",
    "location": [
      "-71.0978751",
      "42.3316384",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:46:56.850-08:00",
    "location": [
      "-71.0978534",
      "42.3316451",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:51:42.294-08:00",
    "location": [
      "-71.0978653",
      "42.3316586",
      "0"
    ]
  },
  {
    "date": "2014-03-05T03:56:59.187-08:00",
    "location": [
      "-71.0978648",
      "42.3316228",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:01:45.477-08:00",
    "location": [
      "-71.0979085",
      "42.3316363",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:06:30.445-08:00",
    "location": [
      "-71.0978714",
      "42.3316535",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:12:20.578-08:00",
    "location": [
      "-71.0978664",
      "42.3316457",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:16:56.984-08:00",
    "location": [
      "-71.0979186",
      "42.3316129",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:21:41.957-08:00",
    "location": [
      "-71.0979204",
      "42.3316278",
      "0"
    ]
  },
  {
    "date": "2014-03-05T04:26:27.185-08:00",
    "location": [
      "-71.097925",
      "42.331637",
      "0"
    ]
  }];
  
});
