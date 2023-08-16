import Data from "./Data";

export default interface Sensor {
  _id: string;
  serialNumber: string;
  name?: string;
  data: Data[];
}
