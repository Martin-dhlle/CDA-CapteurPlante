import { Box, CircularProgress } from "@mui/material";
import { FC, useContext } from "react";
import { AppContext } from "../../context/app.context";
import LastData from "../../components/last-data/last-data.component";
import ListAlertData from "../../components/list-alert-data/list-alert-data.component";
import ScalableBox from "../../components/UI/scalable-box/scalable-box.component";
import DataChart from "../../components/data-chart/data-chart.component";
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

  if (isSensorLoading) return <CircularProgress />;
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
                componentsProperties={componentsProperties}
                changeComponentProperties={changeComponentProperties}
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
