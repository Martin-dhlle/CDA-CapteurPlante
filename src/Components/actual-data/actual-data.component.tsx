import { FC } from "react";
import ScalableBox from "../UI/scalable-box/scalable-box.component";
import Sensor from "../../utils/interfaces/Sensor";
import { ComponentProperties } from "../../hooks/useComponentSize";

const ActualData: FC<{
  sensor: Sensor;
  componentProperties: ComponentProperties;
}> = ({ sensor, componentProperties }) => {
  if (componentProperties.isClosed) return null;
  return (
    <ScalableBox size={componentProperties.size}>
      <p>Numéro de série : {sensor.serialNumber}</p>
      {sensor.name && <p>nom du capteur : {sensor.name}</p>}
    </ScalableBox>
  );
};

export default ActualData;
