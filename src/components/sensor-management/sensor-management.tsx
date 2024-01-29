import { FC } from "react";
import ScalableBox from "../UI/scalable-box/scalable-box";
import Sensor from "../../utils/interfaces/Sensor";
import { ComponentProperties } from "../../hooks/useComponentSize";
import { Button } from "@mui/material";
import { style } from "./sensor-management.style";
import SensorSettings from "../sensor-settings/sensor-settings";

/**
 * La dernière alerte en détail et
 */
const SensorManagement: FC<{
  sensor: Sensor;
  componentsProperties: ComponentProperties[];
  changeMultipleComponentProperties: (
    propertiesToChange: ComponentProperties[]
  ) => void;
}> = ({ sensor, componentsProperties, changeMultipleComponentProperties }) => {
  /**
   * When the user click on "statistiques" button, open component on index 0 and component on index 2
   */
  const handleClickButtonStatistiques = () => {
    changeMultipleComponentProperties([
      {
        componentIndex: 0,
        size: "m",
        isClosed: false,
      },
      {
        componentIndex: 2,
        size: "m",
        isClosed: false,
      },
    ]);
  };

  /**
   * When the user click on "historique" button, open a component on index 0 and another component on index 1
   */
  const handleClickButtonHistorique = () => {
    changeMultipleComponentProperties([
      {
        componentIndex: 0,
        size: "m",
        isClosed: false,
      },
      {
        componentIndex: 1,
        size: "m",
        isClosed: false,
      },
    ]);
  };

  if (componentsProperties[0].isClosed) return null;
  return (
    <ScalableBox size={componentsProperties[0].size}>
      <div>
        <p>Numéro de série : {sensor.serialNumber ?? "erreur"}</p>
        {sensor.name && <p>nom du capteur : {sensor.name ?? "erreur"}</p>}
        {sensor.data && sensor.data.length > 0 ? (
          <div>
            <p>Taux d'humidité : {sensor.data[0].humidityRate ?? "erreur"} %</p>
            <p>{sensor.data[0].generatedAt.toLocaleString()}</p>
            <span style={style.spanSeparateX}>
              {componentsProperties[1].isClosed && (
                <Button
                  onClick={handleClickButtonHistorique}
                  type="button"
                  variant="contained"
                >
                  Historique des alertes
                </Button>
              )}
              {componentsProperties[2].isClosed && (
                <Button
                  onClick={handleClickButtonStatistiques}
                  type="button"
                  variant="contained"
                >
                  Statistiques
                </Button>
              )}
            </span>
          </div>
        ) : (
          <div>
            <p>Aucune données enregistrée par le capteur</p>
          </div>
        )}
      </div>
      {componentsProperties[0].size === "l" && (
        <SensorSettings sensorTimerValue={sensor.timer ?? 0} />
      )}
    </ScalableBox>
  );
};

export default SensorManagement;
