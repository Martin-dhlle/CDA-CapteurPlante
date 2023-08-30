import { FC } from "react";
import Data from "../../utils/interfaces/Data";
import ScalableBox from "../UI/scalable-box/scalable-box";
import { ComponentProperties } from "../../hooks/useComponentSize";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJs, registerables } from "chart.js";
import { Button } from "@mui/material";
import { style } from "./data-chart.style";
ChartJs.register(...registerables);

/**
 * Graphique statistique des données
 * @param data données du capteur à passer au composants
 * @param componentsProperties
 * @param changeMultipleComponentProperties
 */
const DataChart: FC<{
  data: Data[];
  componentsProperties: ComponentProperties[];
  changeMultipleComponentProperties: (
    propertiesToChange: ComponentProperties[]
  ) => void;
}> = ({ data, componentsProperties, changeMultipleComponentProperties }) => {
  const handleClickCloseButton = () => {
    changeMultipleComponentProperties([
      {
        componentIndex: 0,
        size: componentsProperties[1].isClosed ? "l" : "m",
        isClosed: false,
      },
      {
        componentIndex: 2,
        size: "m",
        isClosed: true,
      },
    ]);
  };

  if (componentsProperties[2].isClosed) return null;
  return (
    <ScalableBox size={componentsProperties[2].size}>
      <div style={style.divSeparateY}>
        <span>
          <Button type="button" onClick={handleClickCloseButton}>
            fermer
          </Button>
        </span>
        <span>
          <p>Statistiques :</p>
          <Chart
            type="line"
            data={{
              labels: data.map((data) => data.generatedAt),
              datasets: [
                {
                  label: "Humidité",
                  data: data.map((data) => data.humidityRate),
                  backgroundColor: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </span>
      </div>
    </ScalableBox>
  );
};

export default DataChart;
