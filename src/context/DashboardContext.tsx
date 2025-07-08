"use client";
import { createContext, useContext } from "react";

interface DashboardContextType {
  country: string;
  region: string;
  fc: string;
}

const defaultContext: DashboardContextType = {
  country: "Korea",
  region: "Seoul",
  fc: "FC-001",
};

export const DashboardContext = createContext<DashboardContextType>(defaultContext);

export const useDashboard = () => useContext(DashboardContext);

interface ProviderProps {
  country: string;
  region: string;
  fc: string;
  children: React.ReactNode;
}

export const DashboardProvider = ({ country, region, fc, children }: ProviderProps) => {
  return (
    <DashboardContext.Provider value={{ country, region, fc }}>
      {children}
    </DashboardContext.Provider>
  );
};
