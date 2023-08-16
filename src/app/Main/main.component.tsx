import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { style, styleSx } from "./main.style";
import { AppContext } from "../../context/app.context";
import ActualData from "../../components/actual-data/actual-data.component";
import ListAlertData from "../../components/list-alert-data/list-alert-data.component";
import ScalableBox from "../../components/UI/scalable-box/scalable-box.component";
import DataChart from "../../components/data-chart/data-chart.component";
import useComponentSize from "../../hooks/useComponentSize";
import componentsDeclaration from "./componentsPropertiesDeclaration";

const Main: FC<{}> = (props) => {
  const { theme, selectedSensor } = useContext(AppContext);

  const { componentsProperties } = useComponentSize(componentsDeclaration);

  return (
    <Box sx={styleSx.box[theme]}>
      {selectedSensor ? (
        <div style={style.rowSeparate}>
          <ActualData
            sensor={selectedSensor}
            componentProperties={componentsProperties[0]}
          />
          <ListAlertData componentProperties={componentsProperties[1]} />
          <DataChart componentProperties={componentsProperties[2]} />
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
