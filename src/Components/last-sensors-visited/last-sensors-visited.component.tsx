import { Box, Drawer, IconButton } from "@mui/material";
import { FC, useContext, useState } from "react";
import { styleSx } from "./last-sensors-visited.style";
import { AppContext } from "../../context/app.context";
import { List } from "@mui/icons-material";
import SensorsList from "./sensors-list/sensors-list.components";

const LastSensorsVisited: FC<{}> = ({}) => {
  const { theme } = useContext(AppContext);

  const [isDrawerOpen, setDrawerOpenState] = useState(false);

  const [serialNumbers, setSerialNumbers] = useState<string[]>([]);

  const handleToggleDrawer = () => {
    setDrawerOpenState(!isDrawerOpen);
  };

  const handleDeleteSerialNumber = (serialNumberToDelete: string) => {
    setSerialNumbers((currentSerialNumbers) =>
      currentSerialNumbers.filter(
        (currentSerialNumber) => currentSerialNumber !== serialNumberToDelete
      )
    );
  };

  return (
    <>
      <Box>
        <IconButton sx={styleSx.button[theme]} onClick={handleToggleDrawer}>
          {theme === "light" ? <List /> : <List />}
        </IconButton>
      </Box>
      <Drawer open={isDrawerOpen} onClose={handleToggleDrawer}>
        <SensorsList serialsNumbers={serialNumbers} />
      </Drawer>
    </>
  );
};

export default LastSensorsVisited;
