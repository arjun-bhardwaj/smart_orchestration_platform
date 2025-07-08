"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { generateDevices } from "../../utils/genrateDevices";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
const devices = generateDevices("server", 50, 3);

export default function RobotDeviceCard() {
  const [hoveredDeviceIndex, setHoveredDeviceIndex] = useState<number | null>(null);
  const [hoveredCoords, setHoveredCoords] = useState<{ x: number; y: number } | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleMouseEnter = (index: number, e: React.MouseEvent) => {
    setHoveredDeviceIndex(index);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setHoveredCoords({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  };

  const handleMouseLeave = () => {
    setHoveredDeviceIndex(null);
    setHoveredCoords(null);
  };

  const renderDeviceGrid = (columns: number) => {
    const gridClass =
      columns === 12
        ? "grid-cols-12"
        : columns === 10
        ? "grid-cols-10"
        : "grid-cols-1";

    return (
      <div className={`grid ${gridClass} gap-1.5 mt-4`}>
        {devices.map((device, index) => (
          <div
            key={index}
            className={`relative w-[24px] h-[24px] rounded-sm ${device.color} cursor-pointer`}
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* ❯ Compact View */}
      {!isExpanded && (
        <div className="rounded-2xl border border-gray-200 bg-white p-4 dark:bg-gray-900 dark:border-gray-800 w-80 relative">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Robot</h3>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-gray-600 dark:text-gray-300 text-xl"
              title="Expand"
            >
              ⤢
            </button>
          </div>
          {renderDeviceGrid(10)}
        </div>
      )}

      {/* ❯ Modal-Style Expanded View */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-white/5 flex items-center justify-center">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 w-[90vw] max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Robots</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-600 dark:text-gray-300 text-2xl"
                title="Minimize"
              >
                ✕
              </button>
            </div>
            <div className="overflow-auto pr-2">{renderDeviceGrid(12)}</div>
          </div>
        </div>
      )}

      {/* ❯ Global Tooltip */}
      {hoveredDeviceIndex !== null && hoveredCoords && (
        <div
          className="fixed z-50 w-52 p-2 rounded-md bg-white shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          style={{
            left: hoveredCoords.x,
            top: hoveredCoords.y,
            transform: "translateX(-50%) translateY(-100%)",
          }}
        >
          <p className="text-xs font-semibold text-gray-800 dark:text-white">
            {devices[hoveredDeviceIndex].name}
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400">
            IP: {devices[hoveredDeviceIndex].ip}
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400">
            Location: {devices[hoveredDeviceIndex].location}
          </p>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-1">
            Health: {devices[hoveredDeviceIndex].health}%
          </p>
          <ReactApexChart
            options={{
              chart: { type: "line", sparkline: { enabled: true } },
              stroke: { width: 1.5 },
              tooltip: { enabled: false },
              colors: ["#3b82f6"],
            }}
            series={[{ data: devices[hoveredDeviceIndex].sparklineData }]}
            type="line"
            height={40}
            width={180}
          />
        </div>
      )}
    </>
  );
}
