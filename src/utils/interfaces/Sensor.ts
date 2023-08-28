import Data from "./Data";

export default interface Sensor {
  _id: string;
  serialNumber: string;
  timer?: number;
  name?: string;
  data?: Data[];
}
