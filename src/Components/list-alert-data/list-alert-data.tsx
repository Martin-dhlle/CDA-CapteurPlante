import { FC } from "react";
import ScalableBox from "../UI/scalable-box/scalable-box";
import { ComponentProperties } from "../../hooks/useComponentSize";
import Data from "../../utils/interfaces/Data";
import { Button } from "@mui/material";
import { style } from "./list-alert-data.style";

/**
 * La liste des alertes
 */
const ListAlertData: FC<{
  sensorData: Data[];
  componentsProperties: ComponentProperties[];
  changeMultipleComponentProperties: (
    propertiesToChange: ComponentProperties[]
  ) => void;
}> = ({
  sensorData,
  componentsProperties,
  changeMultipleComponentProperties,
}) => {
  const handleClickCloseButton = () => {
    changeMultipleComponentProperties([
      {
        componentIndex: 0,
        size: componentsProperties[2].isClosed ? "l" : "m",
        isClosed: false,
      },
      {
        componentIndex: 1,
        size: "m",
        isClosed: true,
      },
    ]);
  };

  if (componentsProperties[1].isClosed) return null;
  return (
    <ScalableBox size={componentsProperties[1].size}>
      <span>
        <Button type="button" onClick={handleClickCloseButton}>
          fermer
        </Button>
      </span>
      <div style={style.divSeparateY}>
        {sensorData.map((data) => (
          <Item data={data} key={data._id} />
        ))}
      </div>
    </ScalableBox>
  );
};

const Item: FC<{ data: Data }> = ({ data }) => (
  <span style={style.itemBg} /* onMouseOver={} */>
    <p>{`Date et heure : ${data.generatedAt.toLocaleString()}`}</p>
    <p>{`Taux d'humidité : ${data.humidityRate} %`}</p>
  </span>
);

export default ListAlertData;
