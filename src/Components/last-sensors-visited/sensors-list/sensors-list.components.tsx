import { Box, List } from "@mui/material";
import { FC } from "react";
import SensorItem from "./sensor-item";

const SensorsList: FC<{ serialsNumbers: string[] }> = ({ serialsNumbers }) => {
  if (serialsNumbers.length > 0)
    return (
      <List>
        {serialsNumbers.map((serialNumber) => (
          <SensorItem serialNumber={serialNumber}></SensorItem>
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
