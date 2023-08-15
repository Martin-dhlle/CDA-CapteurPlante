import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { styleSx } from "./main.style";
import { AppContext } from "../../context/app.context";
import ActualData from "../../components/actual-data/actual-data.component";
import ListAlertData from "../../components/list-alert-data/list-alert-data.component";

const Main: FC<{}> = ({}) => {
  const { theme, selectedSensor } = useContext(AppContext);
  return (
    <Box sx={styleSx.box[theme]}>
      {selectedSensor ? (
        <>
          <ActualData />
          <ListAlertData />
        </>
      ) : (
        <p>Aucun capteur selectionné</p>
      )}
    </Box>
  );
};

export default Main;
