import type { Metadata } from "next";
import React from "react";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import Networkdevice from "@/components/ecommerce/networkdevice";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";
import RobotDeviceCard from "@/components/ecommerce/RobotDeviceCard";
import ServerDeviceCard from "@/components/ecommerce/ServerDeviceCard";

export const metadata: Metadata = {
  title:
    "Smart Orchestration Platform",
  description: "Orchestration Platform for Robots, Servers, and Networks",
};

export default function Ecommerce() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      {/* LEFT SECTION: Metrics + Device Cards */}
      <div className="col-span-12 xl:col-span-8 space-y-6">
        <EcommerceMetrics />

        {/* Robot + Server + Network Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <RobotDeviceCard />
          <ServerDeviceCard />
          <Networkdevice />
        </div>
      </div>

      {/* RIGHT SECTION: Monthly Target */}
      <div className="col-span-12 xl:col-span-4">
        <MonthlyTarget />
      </div>

      {/* Other Cards */}
      <div className="col-span-12 xl:col-span-6">
        <DemographicCard />
      </div>

      <div className="col-span-12 space-y-6 xl:col-span-6">
        <MonthlySalesChart />
        <RecentOrders />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>
    </div>
  );
}
