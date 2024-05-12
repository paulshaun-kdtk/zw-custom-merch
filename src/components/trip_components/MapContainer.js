import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-bing-layer";

const MapInterface = () => {
  useEffect(() => {
    const apiKey =
      "Apfxm3QHp-CFdaiHdKbT_j0VgXfvPbrrz9pbLtHnSsn90lDQHIshsxfU35k9OBiI";
    const map = L.map("bingmap").setView([-17.824858, 31.0504], 12);

    const mapOptions = {
      bingMapsKey: apiKey,
      imagerySet: "Road",
      style:
        "&st=wt|fc:ffffff_me|lbc:FF042AFF;loc:ffffff_cah|lbc:CCCCCC;fc:CCCCCC;sc:CCCCCC_tr|lbc:CCCCCC;fc:CCCCCC;sc:CCCCCC_nh|v:0;lv:0_pl|v:0;lv:0_vg|v:0;lv:0_ad|v:0;lv:0_wr|sc:FF001D94;sws:5;v:1",
    };

    L.tileLayer.bing(mapOptions).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="bingmap" style={{ width: "100%", height: "400px" }} />;
};

export default MapInterface;
