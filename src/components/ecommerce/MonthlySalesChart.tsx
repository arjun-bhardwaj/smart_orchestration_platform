"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { MoreDotIcon } from "@/icons";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type ViewOption = "Daily" | "Monthly" | "Quarterly";

export default function FCOrderProcessedChart() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ViewOption>("Monthly");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const fcLabels = [
    "FC - Seoul",
    "FC - Busan",
    "FC - Incheon",
    "FC - Daegu",
    "FC - Daejeon",
    "FC - Gwangju",
    "FC - Suwon",
    "FC - Ulsan",
    "FC - Goyang",
    "FC - Yongin",
  ];

  const getSeriesData = (): number[] => {
    switch (view) {
      case "Daily":
        return [80, 120, 95, 110, 130, 90, 105, 70, 88, 100];
      case "Monthly":
        return [2040, 1760, 1885, 1420, 1605, 1200, 1580, 1100, 1325, 1480];
      case "Quarterly":
        return [6020, 5320, 5685, 4520, 4870, 3950, 4750, 3800, 4120, 4430];
    }
  };

  const options: ApexOptions = {
    colors: ["#3b82f6"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 220,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: fcLabels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },
    legend: { show: false },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: "#6b7280",
        },
      },
    },
    grid: {
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} orders`,
      },
    },
  };

  const series = [
    {
      name: "Orders",
      data: getSeriesData(),
    },
  ];

  const viewOptions: ViewOption[] = ["Daily", "Monthly", "Quarterly"];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          FC Order Processed - {view}
        </h3>

        <div className="flex items-center gap-4">
          <select
            value={view}
            onChange={(e) => setView(e.target.value as ViewOption)}
            className="text-sm border rounded-md px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          >
            {viewOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <div className="relative inline-block">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
            </button>
            <Dropdown
              isOpen={isOpen}
              onClose={closeDropdown}
              className="w-40 p-2"
            >
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                View More
              </DropdownItem>
              <DropdownItem
                onItemClick={closeDropdown}
                className="flex w-full font-normal text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
              >
                Delete
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
