"use client";

import React from "react";
import Select from "../Select";
import { ChevronDownIcon } from "@/icons";

interface LocationSelectRowProps {
  country: string;
  region: string;
  fc: string;
  onCountryChange: (val: string) => void;
  onRegionChange: (val: string) => void;
  onFcChange: (val: string) => void;
}

const countryOptions = [
  { value: "kr", label: "South Korea" },
  { value: "jp", label: "Japan" },
];

const regionOptionsMap: { [key: string]: { value: string; label: string }[] } = {
  kr: [
    { value: "gw", label: "Gangwon" },
    { value: "gg", label: "Gyeonggi" },
  ],
  jp: [
    { value: "tk", label: "Tokyo" },
    { value: "os", label: "Osaka" },
  ],
};

const fcOptionsMap: { [key: string]: { value: string; label: string }[] } = {
  gw: [
    { value: "fc1", label: "FC GW-RX567" },
    { value: "fc2", label: "FC GW-0213R" },
  ],
  gg: [
    { value: "fc3", label: "FC GG-X90T" },
    { value: "fc4", label: "FC GG-PQ101" },
  ],
  tk: [
    { value: "fc5", label: "FC Tokyo-C1" },
  ],
  os: [
    { value: "fc6", label: "FC Osaka-ZX" },
  ],
};

export default function LocationSelectRow({
  country,
  region,
  fc,
  onCountryChange,
  onRegionChange,
  onFcChange,
}: LocationSelectRowProps) {
  const regions = regionOptionsMap[country] || [];
  const fcs = fcOptionsMap[region] || [];

  return (
    <div className="flex gap-6 w-full">
      {/* Country Select */}
      <div className="relative w-1/3">
        <Select
          value={country}
          options={countryOptions}
          placeholder="Country"
          onChange={onCountryChange}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>

      {/* Region Select */}
      <div className="relative w-1/3">
        <Select
          value={region}
          options={regions}
          placeholder="Region"
          onChange={onRegionChange}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>

      {/* Fulfillment Center Select */}
      <div className="relative w-1/3">
        <Select
          value={fc}
          options={fcs}
          placeholder="Fulfillment Center"
          onChange={onFcChange}
          className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-10 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}