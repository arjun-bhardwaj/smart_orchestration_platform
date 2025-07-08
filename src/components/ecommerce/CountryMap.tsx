import React from "react";
import { worldMill } from "@react-jvectormap/world";
import dynamic from "next/dynamic";

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((mod) => mod.VectorMap),
  { ssr: false }
);

// Marker Type
type Marker = {
  latLng: [number, number];
  name: string;
  style?: {
    fill: string;
    borderWidth: number;
    borderColor: string;
    stroke?: string;
    strokeOpacity?: number;
  };
};

// Component Props
interface CountryMapProps {
  mapColor?: string;
}

const CountryMap: React.FC<CountryMapProps> = ({ mapColor }) => {
  // Health color coding
  const getHealthColor = (health: number): string => {
    if (health >= 75) return "#22c55e"; // Green
    if (health >= 40) return "#facc15"; // Yellow
    return "#ef4444"; // Red
  };

  // Sample FC markers for Korea, Japan, Taiwan
  const markers: Marker[] = [
    {
      latLng: [37.5665, 126.978], // Seoul
      name: "Seoul FC - Healthy",
      style: {
        fill: getHealthColor(90),
        borderWidth: 1,
        borderColor: "white",
      },
    },
    {
      latLng: [35.1796, 129.0756], // Busan
      name: "Busan FC - Warning",
      style: {
        fill: getHealthColor(50),
        borderWidth: 1,
        borderColor: "white",
      },
    },
    {
      latLng: [35.6895, 139.6917], // Tokyo
      name: "Tokyo FC - Faulty",
      style: {
        fill: getHealthColor(25),
        borderWidth: 1,
        borderColor: "white",
      },
    },
    {
      latLng: [25.0329, 121.5654], // Taipei
      name: "Taipei FC - Healthy",
      style: {
        fill: getHealthColor(85),
        borderWidth: 1,
        borderColor: "white",
      },
    },
  ];

  return (
    <VectorMap
      map={worldMill}
      backgroundColor="transparent"
      markers={markers}
      markerStyle={{
        initial: {
          fill: "#465FFF",
          r: 5,
        },
      }}
      zoomOnScroll={false}
      zoomMax={10}
      zoomMin={1}
      zoomAnimate={true}
      zoomStep={1.5}
      regionStyle={{
        initial: {
          fill: mapColor || "#D0D5DD",
          fillOpacity: 1,
          fontFamily: "Outfit",
          stroke: "none",
          strokeWidth: 0,
        },
        hover: {
          fillOpacity: 0.7,
          cursor: "pointer",
          fill: "#465fff",
        },
      }}
      regionLabelStyle={{
        initial: {
          fill: "#35373e",
          fontWeight: 500,
          fontSize: "13px",
        },
      }}
      focusOn={{
        // Zoom into East Asia
        x: 0.82,
        y: 0.45,
        scale: 5.2,
      }}
    />
  );
};

export default CountryMap;
