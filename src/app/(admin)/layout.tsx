"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React, { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const [country, setCountry] = useState("Korea");
  const [region, setRegion] = useState("Seoul");
  const [fc, setFc] = useState("FC-001");

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { country, region, fc });
    }
    return child;
  });

  return (
    <div className="min-h-screen xl:flex">
      <AppSidebar />
      <Backdrop />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
        <AppHeader
          country={country}
          region={region}
          fc={fc}
          onCountryChange={setCountry}
          onRegionChange={setRegion}
          onFcChange={setFc}
        />
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {childrenWithProps}
        </div>
      </div>
    </div>
  );
}
