import { Box } from "@mui/material";
import { FC, useContext } from "react";
import { styleSx } from "./main.style";
import { AppContext } from "../context/app.context";

const Main: FC<{}> = ({}) => {
  const { theme } = useContext(AppContext);
  return <Box sx={styleSx.box[theme]}></Box>;
};

export default Main;
