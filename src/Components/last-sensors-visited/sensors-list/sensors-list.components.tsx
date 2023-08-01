import { Box, List } from "@mui/material";
import { FC } from "react";
import SensorItem from "./sensor-item/sensor-item";

const SensorsList: FC<{
  serialsNumbers: string[];
  onDelete: (serialNumber: string) => void;
}> = ({ serialsNumbers, onDelete }) => {
  if (serialsNumbers.length > 0)
    return (
      <List>
        {serialsNumbers.map((serialNumber) => (
          <SensorItem
            key={serialNumber}
            serialNumber={serialNumber}
            onDelete={onDelete}
          />
        ))}
      </List>
    );
  return (
    <Box>
      <p>Aucun capteurs consultés récemment</p>
    </Box>
  );
};

export default SensorsList;
