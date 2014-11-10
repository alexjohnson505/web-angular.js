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
    map = L.mapbox.map('map', 'zetter.i73ka9hn')
      .fitBounds([[42.329077, -71.108871], [42.374200, -71.032072]]);

    // Set initial selection (evaluates to nothing ATM)
    initialSelection = d3.set(['Tesco', 'Sainsburys']);

    // Points from XML
    map.on('ready', function() {

      fetchData(function(data){
        // points = data.slice(0, 1000);
        points = data;

        console.log(data.length);

        points = _.map(points, function(point, key){
          
          var i = {
            color: "609128",
            id: key,
            latitude: point.location[1],
            longitude: point.location[0],
            name: key,
            type: "Josh",
            url: "..."
          };

          return i;
        });

        console.log(points[0]);

        points.forEach(function(point) {
          pointTypes.set(point.type, {type: point.type, color: point.color});
        });
        
        drawPointTypeSelection();
        map.addLayer(mapLayer);
        
      });
  });

// Convert Google Location Data's .kml (renamed .xml)
// into a usable JSON format.

function fetchData(next){

  console.log("\nLoading JSON ...");

  /******************************
      Fetch Data from XML (KML)
  ******************************/

  $.ajax({
      url: "/data/alex.xml",
      dataType:"xml"
  }).done(function(xmlData){
    convertData(xmlData);
  });

  // Convert data into usable format
  function convertData(xmlData){
    
    // Convert XML to JSON
    // https://github.com/stsvilik/Xml-to-JSON
      var jsonData = xml.xmlToJSON(xmlData);
      
      console.log("XML Converted to JSON");

      var data = jsonData.kml.Document.Placemark['gx:Track'];
      
      /******************************
         Convert into Usable Format
       ******************************/

      var acc = [];

      acc = _.zip(data.when, data["gx:coord"]);

      acc = _.map(acc, function(point, key){
        return {
          "date"     : point[0].Text,
          'location' : point[1].Text.split(" ")
        };
      });

      console.log('\n Resulting Formatted Data');
      console.log(acc[0]);

      next(acc);
  }
}
  
});
