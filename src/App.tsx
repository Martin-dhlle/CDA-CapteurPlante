import { useState } from "react";
import Header from "./Header/header.component";
import Sensor from "./utils/interfaces/Sensor";
import Main from "./Main/main.component";

function App() {
  const [sensorSelected, setSensorSelected] = useState<Sensor | null>(null);

  const handleSubmitSerialNumber = (serialNumber: string) => {};

  return (
    <>
      <Header onSubmit={handleSubmitSerialNumber} />
      <Main />
    </>
  );
}

export default App;
