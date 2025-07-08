import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";

interface FCDevice {
  id: number;
  name: string;
  type: "Robot" | "DRVD" | "Network";
  ip: string;
  health: "Healthy" | "Warning" | "Faulty";
  image: string;
}

const fcDevices: FCDevice[] = [
  {
    id: 1,
    name: "Robot-A1",
    type: "Robot",
    ip: "10.0.1.12",
    health: "Healthy",
    image: "/images/fc/robot.png",
  },
  {
    id: 2,
    name: "DRVD-South",
    type: "DRVD",
    ip: "10.0.2.22",
    health: "Faulty",
    image: "/images/fc/drvd.png",
  },
  {
    id: 3,
    name: "Net-Rack-07",
    type: "Network",
    ip: "192.168.1.33",
    health: "Warning",
    image: "/images/fc/network.png",
  },
  {
    id: 4,
    name: "Robot-B3",
    type: "Robot",
    ip: "10.0.1.45",
    health: "Healthy",
    image: "/images/fc/robot.png",
  },
  {
    id: 5,
    name: "Net-Hub-01",
    type: "Network",
    ip: "192.168.1.11",
    health: "Healthy",
    image: "/images/fc/network.png",
  },
];

export default function FulfillmentDevices() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Fulfillment Center Devices
        </h3>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                FC Device
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Type
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                IP Address
              </TableCell>
              <TableCell isHeader className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400">
                Health
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {fcDevices.map((device) => (
              <TableRow key={device.id}>
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[42px] w-[42px] overflow-hidden rounded-md">
                   
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {device.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {device.type}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {device.ip}
                </TableCell>
                <TableCell className="py-3">
                  <Badge
                    size="sm"
                    color={
                      device.health === "Healthy"
                        ? "success"
                        : device.health === "Warning"
                        ? "warning"
                        : "error"
                    }
                  >
                    {device.health}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
