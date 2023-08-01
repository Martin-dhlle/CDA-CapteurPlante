import { Context, createContext } from "react";
import Sensor from "../utils/interfaces/Sensor";

export interface AppContextInterface {
  theme: "light" | "dark";
  toggleTheme: () => void;
  selectedSensor: Sensor | null;
  handleSubmitSerialNumber: (
    serialNumber: string,
    fromSearchBar: boolean
  ) => void;
}

export const AppContext: Context<AppContextInterface> =
  createContext<AppContextInterface>({
    theme: "light",
    toggleTheme: () => {},
    selectedSensor: null,
    handleSubmitSerialNumber: () => {},
  });
