import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#506355"
        stroke="#333333"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[4.70093, 50.87959]}
        dx={-90}
        dy={10}
        connectorProps={{
          stroke: "#e8e8e8",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#e8e8e8">
          {"Leuven"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
