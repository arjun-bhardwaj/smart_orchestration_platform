"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine, GroupIcon } from "@/icons";

export const EcommerceMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Servers Health */}
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Servers Health
          </span>
          <GroupIcon className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          93%
        </div>
        <div className="text-xs text-gray-500 mt-1 dark:text-gray-400">
          Server is running fine
        </div>
      </div>

      {/* Storage Used */}
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Storage Used
          </span>
          <BoxIconLine className="w-5 h-5 text-teal-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          68 TB <span className="text-base text-gray-400">/ 100 TB</span>
        </div>
        <div className="text-xs text-gray-500 mt-1 dark:text-gray-400">
          68% of total storage utilized
        </div>
      </div>

      {/* Total Power Usage */}
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Power Usage
          </span>
          <ArrowUpIcon className="w-5 h-5 text-rose-500" />
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          890 kw
        </div>
        <div className="text-xs text-gray-500 mt-1 dark:text-gray-400">
          This month
        </div>
      </div>

      {/* Critical Alerts */}
      <div className="rounded-xl border border-gray-200 bg-white px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Critical Alerts
          </span>
          <ArrowDownIcon className="w-5 h-5 text-red-500" />
        </div>
        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
          19
        </div>
        <div className="text-xs text-red-500 mt-1 font-medium">
          ⚠️ 3 Need immediate action
        </div>
      </div>
    </div>
  );
};
