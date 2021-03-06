var map_options = {
	"base_map_layers": {
    "Scan25 IGN": new L.tileLayer.wms(
        "https://www.geopicardie.fr/geoserver/wms?", {
            layers: 'geopicardie:picardie_scan25',
            format: 'image/jpeg',
            attribution: "Scan25 - IGN"
        }),
    "Images aériennes": new L.tileLayer.wms(
        "https://www.geopicardie.fr/geoserver/wms?", {
                layers: 'agglo_st_quentin:agglo_st_quentin_ortho_2012_vis',
                format: 'image/jpeg',
                attribution: "Géo2France"
            }),
    "OpenStreetMap - Géo2France": new L.tileLayer.wms(
        "https://osm.geo2france.fr/mapproxy/service?", {
          layers: 'bright',
          format: 'image/jpeg',
          attribution: "OpenStreetMap - Géo2France"
        })
	},
	"init_view": {
		"center": [49.8460,3.3110],
		"level": 15
	}
};
