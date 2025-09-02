require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function (Map, MapView, FeatureLayer) {

  // Create map
  const map = new Map({
    basemap: "hybrid"
  });

  // Create view with USA extent
  const view = new MapView({
    container: "viewDiv",
    map: map,
    extent: {
      xmin: -13884991,
      ymin: 2870341,
      xmax: -7455066,
      ymax: 6338219,
      spatialReference: { wkid: 102100 }
    }
  });

  // First Feature Layer - USA County Demographics
  const featureLayer2 = new FeatureLayer({
    url: "https://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/2020_USA_county_demographics/FeatureServer"
  });
  map.add(featureLayer2);

  // Second Feature Layer - Major Cities
  const featureLayer1 = new FeatureLayer({
    url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities_/FeatureServer"
  });
  map.add(featureLayer1);

});