import { Box, List } from "@mui/material";
import { FC, useContext } from "react";
import SensorItem from "./sensor-item/sensor-item";
import { styleSx } from "./sensor-list.style";
import { AppContext } from "../../../context/app.context";

const SensorsList: FC<{
  serialsNumbers: string[];
  onDelete: (serialNumber: string) => void;
}> = ({ serialsNumbers, onDelete }) => {
  const { theme } = useContext(AppContext);

  return (
    <Box sx={styleSx.box[theme]}>
      {serialsNumbers.length > 0 ? (
        <List>
          {serialsNumbers.map((serialNumber) => (
            <SensorItem
              key={serialNumber}
              serialNumber={serialNumber}
              onDelete={onDelete}
            />
          ))}
        </List>
      ) : (
        <p>Aucun capteurs consultés récemment</p>
      )}
    </Box>
  );
};

export default SensorsList;
