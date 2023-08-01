import { Box, Button } from "@mui/material";
import { FC, useContext, useState } from "react";
import { AppContext } from "../../../../context/app.context";
import { style, styleSx } from "./sensor-item.style";

const SensorItem: FC<{
  serialNumber: string;
  onDelete: (serialNumber: string) => void;
}> = ({ serialNumber, onDelete }) => {
  const { theme } = useContext(AppContext);

  const { handleSubmitSerialNumber } = useContext(AppContext);

  const [isMouseOver, setMouseOverState] = useState<boolean>(false);

  const handleClickSelect = () => {
    handleSubmitSerialNumber(serialNumber, false);
  };

  const handleClickDelete = () => {
    onDelete(serialNumber);
  };

  const handleMouseEnter = () => {
    setMouseOverState(true);
  };

  const handleMouseLeave = () => {
    setMouseOverState(false);
  };

  return (
    <Box
      sx={styleSx[`box${isMouseOver ? "Over" : ""}`][theme]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={style.text[theme]} onClick={handleClickSelect}>
        {serialNumber}
      </p>
      <Button onClick={handleClickDelete}>supprimer</Button>
    </Box>
  );
};

export default SensorItem;
