import { Box, Drawer, IconButton } from "@mui/material";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import { styleSx } from "./last-sensors-visited.style";
import { AppContext } from "../../context/app.context";
import { List } from "@mui/icons-material";
import SensorsList from "./sensors-list/sensors-list.components";
import { getSensorsFromLocalStorage } from "../../utils/services/localStorageServices";

const LastSensorsVisited: FC<{}> = ({}) => {
  const { theme } = useContext(AppContext);

  const [isDrawerOpen, setDrawerOpenState] = useState(false);

  const [serialNumbers, setSerialNumbers] = useState<string[]>([]);

  const initSensor = () => {
    setSerialNumbers(getSensorsFromLocalStorage());
  };

  const handleToggleDrawer = () => {
    setSerialNumbers(getSensorsFromLocalStorage());
    setDrawerOpenState(!isDrawerOpen);
  };

  const handleDeleteSerialNumber = (serialNumber: string) => {
    setSerialNumbers((currentSerialNumbers) =>
      currentSerialNumbers.filter(
        (currentSerialNumber) => currentSerialNumber !== serialNumber
      )
    );
  };

  useEffect(() => {
    initSensor();
  }, []);

  return (
    <>
      <Box>
        <IconButton sx={styleSx.button[theme]} onClick={handleToggleDrawer}>
          {theme === "light" ? <List /> : <List />}
        </IconButton>
      </Box>
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer}>
        <SensorsList
          serialsNumbers={serialNumbers}
          onDelete={handleDeleteSerialNumber}
        />
      </Drawer>
    </>
  );
};

export default LastSensorsVisited;