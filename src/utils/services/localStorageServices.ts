import Sensor from "../interfaces/Sensor";
import {
  formatSerialNumbersListToArray,
  formatSerialNumbersListToString,
} from "./formatterServices";

export function addSensorToLocalStorage(sensor: Sensor) {
  const currentSensors: string[] = getSensorsFromLocalStorage() ?? [];
  if (currentSensors.length > 5) currentSensors.shift();
  currentSensors.push(sensor.serialNumber);
  currentSensors.reverse();
  const newSensors = formatSerialNumbersListToString(currentSensors);
  localStorage.setItem("sensors", newSensors);
}

export function getSensorsFromLocalStorage(): string[] {
  const currentSensors = localStorage.getItem("sensors");
  if (!currentSensors) return [];
  return formatSerialNumbersListToArray(currentSensors);
}
