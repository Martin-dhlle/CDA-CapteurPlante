import { FC, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./app.context";
import Sensor from "../utils/interfaces/Sensor";
import {
  addSensorToLocalStorage,
  getSensorsFromLocalStorage,
} from "../utils/services/localStorageServices";
import { toast } from "react-hot-toast";
import useRequest from "../hooks/useRequest";
import Data from "../utils/interfaces/Data";
import {
  dataApiEndpoint,
  sensorApiEndpoint,
} from "../config/api/api-endpoints";

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
  const [isSensorLoading, setSensorLoadingState] = useState(false);
  const { request: requestSensor, data: newSensor } =
    useRequest<Sensor>(sensorApiEndpoint);
  const { request: requestData, data: newData } =
    useRequest<Data[]>(dataApiEndpoint);

  // Envoi de la requête à la base de donnée afin de changer le capteur sélectionné si réponse favorable.
  const handleSubmitSerialNumber = (
    serialNumber: string,
    fromSearchBar: boolean
  ) => {
    setSensorLoadingState(true); // Passe les composants principaux du main en mode chargement.

    /**
     * Envoi d'une requête afin de récupérer et définir le nouveau capteur actuel selectionné
     * pour l'affichage de ses données si le capteur existe.
     */
    requestSensor("GET", {});
    if (!newSensor) {
      toast.error("Ce numéro de série n'existe pas");
      setSensorLoadingState(false);
      return; // arrête le code ici
    }

    /**
     * Envoi d'une requête afin de récupérer les valeurs d'humidité enregistrés par le capteur.
     */
    requestData("GET", {});
    if (newData) setSelectedSensor({ ...selectedSensor!, data: newData });

    if (!newData) setSelectedSensor(newSensor); // Le nouveau capteur est maintenant selectionné pour l'affichage de ses propres données.
    console.log(newSensor); // Affichage des données du capteur dans la console du navigateur.

    /**
     * Stockage du numero de série du nouveau capteur dans le localStorage si la requête est émise
     * à partir de la barre de recherche input et qu'il n'existe pas déjà dans le localStorage.
     */
    if (fromSearchBar && !getSensorsFromLocalStorage().includes(serialNumber)) {
      addSensorToLocalStorage(newSensor);
    }

    setSensorLoadingState(false); // arrête l'état de chargement des composants du main
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        selectedSensor,
        handleSubmitSerialNumber,
        isSensorLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
