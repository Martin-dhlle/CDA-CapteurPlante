import { Box, Button } from "@mui/material";
import { FC } from "react";

const SensorItem: FC<{
  serialNumber: string;
  onDelete: (serialNumber: string) => void;
}> = ({ serialNumber, onDelete }) => {
  const handleClickSelect = () => {};

  const handleClickDelete = () => {
    onDelete(serialNumber);
  };

  return (
    <Box>
      <p>{serialNumber}</p>
      <Button onClick={handleClickDelete}>supprimer</Button>
    </Box>
  );
};

export default SensorItem;
