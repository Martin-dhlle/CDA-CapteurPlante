import Sensor from "../interfaces/Sensor";
import {
  formatSerialNumbersListToArray,
  formatSerialNumbersListToString,
} from "./formatterServices";

export function addSensorToLocalStorage(sensor: Sensor) {
  const currentSensors: string[] = getSensorsFromLocalStorage() ?? [];
  currentSensors.push(sensor.serialNumber);
  const newSensors = formatSerialNumbersListToString(currentSensors);
  localStorage.setItem("sensors", newSensors);
}

export function getSensorsFromLocalStorage(): string[] {
  const currentSensors = localStorage.getItem("sensors");
  if (!currentSensors) return [];
  return formatSerialNumbersListToArray(currentSensors);
}
