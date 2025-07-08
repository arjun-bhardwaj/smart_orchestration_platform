export function generateDevices(
  type: "network" | "robot" | "server",
  count = 50,
  redLimit = 5
) {
  const devices = [];
  let redCount = 0;

  for (let i = 0; i < count; i++) {
    let health = Math.floor(Math.random() * 100);
    let color = "bg-green-500";

    // Limit red devices
    if (health < 40 && redCount < redLimit) {
      color = "bg-red-500";
      redCount++;
    } else if (health < 70) {
      color = "bg-yellow-400";
    } else {
      color = "bg-green-500";
    }

    devices.push({
      name: `${type.charAt(0).toUpperCase() + type.slice(1)}-${i + 1}`,
      health,
      ip: `10.0.${type === "server" ? 2 : type === "robot" ? 1 : 0}.${i + 1}`,
      location: `Rack ${String.fromCharCode(65 + (i % 10))}${Math.floor(i / 10) + 1}`,
      color,
      sparklineData: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
    });
  }

  return devices;
}
