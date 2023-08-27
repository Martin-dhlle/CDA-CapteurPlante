import { Box, CircularProgress } from "@mui/material";
import { FC, useContext } from "react";
import { style, styleSx } from "./main.style";
import { AppContext } from "../../context/app.context";
import LastData from "../../components/last-data/last-data.component";
import ListAlertData from "../../components/list-alert-data/list-alert-data.component";
import ScalableBox from "../../components/UI/scalable-box/scalable-box.component";
import DataChart from "../../components/data-chart/data-chart.component";
import useComponentSize from "../../hooks/useComponentSize";
import componentsDeclaration from "./componentsPropertiesDeclaration";

const Main: FC<{}> = (props) => {
  const { theme, selectedSensor, isSensorLoading } = useContext(AppContext);

  const { componentsProperties, changeComponentProperties } = useComponentSize(
    componentsDeclaration
  );

  if (isSensorLoading) return <CircularProgress />;
  return (
    <Box sx={styleSx.box[theme]}>
      {selectedSensor ? (
        <div style={style.rowSeparate}>
          <LastData
            sensor={selectedSensor}
            componentProperties={componentsProperties[0]}
            changeComponentProperties={changeComponentProperties}
          />
          {selectedSensor.data && (
            <>
              <ListAlertData
                componentProperties={componentsProperties[1]}
                changeComponentProperties={changeComponentProperties}
              />
              <DataChart
                data={selectedSensor.data}
                componentProperties={componentsProperties[2]}
                changeComponentProperties={changeComponentProperties}
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
