"use client";
import { useState } from "react";
import { MoreDotIcon } from "@/icons";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const [isOpen, setIsOpen] = useState(false);

  const regions = [
    { name: "Seoul", fcs: 8, percent: 40, color: "bg-green-500", status: "Healthy" },
    { name: "Busan", fcs: 4, percent: 20, color: "bg-orange-400", status: "Moderate" },
    { name: "Incheon", fcs: 3, percent: 15, color: "bg-green-500", status: "Healthy" },
    { name: "Tokyo", fcs: 2, percent: 10, color: "bg-red-500", status: "Critical" },
    { name: "Osaka", fcs: 2, percent: 10, color: "bg-orange-400", status: "Moderate" },
    { name: "Taipei", fcs: 1, percent: 5, color: "bg-green-500", status: "Healthy" },
  ];

  const statusEmoji: Record<string, string> = {
    Healthy: "✅",
    Moderate: "⚠️",
    Critical: "❌",
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm transition">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            FC Distribution – East Asia
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Real-time health of fulfillment centers
          </p>
        </div>

        <div className="relative">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            <MoreDotIcon className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
          </button>
          <Dropdown isOpen={isOpen} onClose={closeDropdown} className="w-40 p-2">
            <DropdownItem
              onItemClick={closeDropdown}
              className="w-full text-left text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              View Map
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="w-full text-left text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              Export Data
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-3">
        <div className="w-full aspect-[3/2] sm:aspect-[4/2] overflow-hidden">
          <CountryMap />
        </div>
      </div>

      {/* FC Region Stats */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {regions.map(({ name, fcs, percent, color, status }) => (
          <div
            key={name}
            className="flex flex-col gap-2 border border-gray-100 dark:border-white/5 p-4 rounded-lg bg-white dark:bg-white/[0.02] hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${color}`} />
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{fcs} FCs</p>
                </div>
              </div>

              <div className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 font-medium">
                {statusEmoji[status]} {status}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-sm overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full transition-all duration-500 ease-in-out ${color}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-sm text-gray-700 dark:text-white/80 font-medium w-10 text-right">
                {percent}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
