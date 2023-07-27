import { useState } from "react";
import Header from "./Header/header.component";
import Sensor from "./utils/interfaces/Sensor";
import Main from "./Main/main.component";
import { sensors } from "./utils/fakeDataJson/sensors.data";
import { notFindError } from "./utils/errorMessages";

function App() {
  const [sensorSelected, setSensorSelected] = useState<Sensor | null>(null);
  const [error, SetError] = useState<string | null>(null);

  const handleSubmitSerialNumber = (serialNumber: string) => {
    const newSensor = sensors.filter(
      (sensor) => sensor.serialNumber === serialNumber
    )[0];
    if (!newSensor) {
      SetError(notFindError);
      return;
    }
    SetError(null);
    setSensorSelected(newSensor);
  };

  return (
    <>
      <Header error={error} onSubmit={handleSubmitSerialNumber} />
      <Main />
    </>
  );
}

export default App;
