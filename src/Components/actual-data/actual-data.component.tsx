import { FC } from "react";
import ScalableBox from "../UI/scalable-box/scalable-box.component";
import Sensor from "../../utils/interfaces/Sensor";
import { ComponentProperties } from "../../hooks/useComponentSize";
import { Button } from "@mui/material";

const ActualData: FC<{
  sensor: Sensor;
  componentProperties: ComponentProperties;
}> = ({ sensor, componentProperties }) => {
  if (componentProperties.isClosed) return null;
  return (
    <ScalableBox size={componentProperties.size}>
      <div>
        <p>Numéro de série : {sensor.serialNumber}</p>
        {sensor.name && <p>nom du capteur : {sensor.name}</p>}
        <p>Taux d'humidité : {sensor.data[0].humidityRate} %</p>
        <p>{sensor.data[0].updatedAt.toLocaleString()}</p>
        <Button type="button" variant="contained">
          Historique et statistiques
        </Button>
      </div>
      <div>
        <p>Paramètres du capteur</p>
        <Button type="button" variant="contained">
          Changer le type de plante
        </Button>
        <Button type="button" variant="contained">
          Changer l'intervalle
        </Button>
      </div>
    </ScalableBox>
  );
};

export default ActualData;
