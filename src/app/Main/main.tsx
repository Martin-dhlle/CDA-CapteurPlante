import { Box, CircularProgress } from "@mui/material";
import { FC, useContext } from "react";
import { AppContext } from "../../context/app.context";
import LastData from "../../components/last-data/last-data";
import ListAlertData from "../../components/list-alert-data/list-alert-data";
import ScalableBox from "../../components/UI/scalable-box/scalable-box";
import DataChart from "../../components/data-chart/data-chart";
import useComponentSize from "../../hooks/useComponentSize";
import componentsDeclaration from "./componentsPropertiesDeclaration";
import { style, styleSx } from "./main.style";

/**
 * Composant regroupant l'affichage de la dernière alerte, la liste de l'historique
 * des alertes et le graphique des alertes
 */

const Main: FC<{}> = (props) => {
  const { theme, selectedSensor, isSensorLoading } = useContext(AppContext);

  const {
    componentsProperties,
    changeComponentProperties,
    changeMultipleComponentProperties,
  } = useComponentSize(componentsDeclaration);

  if (isSensorLoading)
    return (
      <Box sx={styleSx.box[theme]}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={styleSx.box[theme]}>
      {selectedSensor ? (
        <div style={style.rowSeparate}>
          <LastData
            sensor={selectedSensor}
            componentsProperties={componentsProperties}
            changeMultipleComponentProperties={
              changeMultipleComponentProperties
            }
          />
          {selectedSensor.data && (
            <>
              <ListAlertData
                sensorData={selectedSensor.data}
                componentsProperties={componentsProperties}
                changeMultipleComponentProperties={
                  changeMultipleComponentProperties
                }
              />
              <DataChart
                data={selectedSensor.data}
                componentsProperties={componentsProperties}
                changeMultipleComponentProperties={
                  changeMultipleComponentProperties
                }
              />
            </>
          )}
        </div>
      ) : (
        <ScalableBox size="xs">
          <p>Aucun capteur selectionné</p>
        </ScalableBox>
      )}
    </Box>
  );
};

export default Main;
