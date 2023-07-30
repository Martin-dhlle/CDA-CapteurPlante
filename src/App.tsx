import { useState } from "react";
import Header from "./Header/header.component";
import Sensor from "./utils/interfaces/Sensor";
import Main from "./Main/main.component";
import { sensors } from "./utils/fakeData/sensors.data";
import { notFindError } from "./utils/errorMessages";
import AppProvider from "./context/app.provider";
import { Box } from "@mui/material";

/*
  Le composant d'entrée de l'application
*/
function App() {
  // définit le capteur à passer au compo main
  const [sensorSelected, setSensorSelected] = useState<Sensor | null>(null);

  // gestion de l'erreur de la requête émise par handleSubmitSerialNumber
  const [fetchError, SetFetchError] = useState<string | null>(null);

  // envoi de la requête à la base de donnée afin de changer le capteur sélectionné si réponse favorable
  const handleSubmitSerialNumber = (serialNumber: string) => {
    // remplacer par la requête via AWS lambda function
    const newSensor = sensors.filter(
      (sensor) => sensor.serialNumber === serialNumber
    )[0];
    if (!newSensor) {
      SetFetchError(notFindError);
      return;
    }
    SetFetchError(null);
    setSensorSelected(newSensor);
    console.log(sensorSelected);
  };

  return (
    <AppProvider>
      <Header fetchError={fetchError} onSubmit={handleSubmitSerialNumber} />
      <Main />
    </AppProvider>
  );
}

export default App;
