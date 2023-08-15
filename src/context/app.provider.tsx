import { FC, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./app.context";
import Sensor from "../utils/interfaces/Sensor";
import {
  addSensorToLocalStorage,
  getSensorsFromLocalStorage,
} from "../utils/services/localStorageServices";
import { sensors } from "../utils/fakeData/sensors.data";
import { toast } from "react-hot-toast";

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // définit le capteur à passer au compo main
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);

  // envoi de la requête à la base de donnée afin de changer le capteur sélectionné si réponse favorable
  const handleSubmitSerialNumber = (
    serialNumber: string,
    fromSearchBar: boolean
  ) => {
    // remplacer par la requête via AWS lambda function
    const newSensor = sensors.filter(
      (sensor) => sensor.serialNumber === serialNumber
    )[0];

    if (!newSensor) {
      toast.error("Ce numéro de série n'existe pas");
      return;
    }

    setSelectedSensor(newSensor); // le nouveau capteur est maintenant selectionné pour l'affichage de ses propres données
    console.log(newSensor); // affichage des données du capteur dans la console du navigateur

    /* 
      stockage du numero de série du nouveau capteur dans le localStorage si la requête est émise
      à partir de la barre de recherche input et qu'il n'existe pas déjà dans le localStorage
    */
    if (fromSearchBar && !getSensorsFromLocalStorage().includes(serialNumber)) {
      addSensorToLocalStorage(newSensor);
    }
  };

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, selectedSensor, handleSubmitSerialNumber }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
