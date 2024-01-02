import { Box } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { styleSx } from "./scalable-box.style";
import { AppContext } from "../../../context/app.context";

const ScalableBox: FC<{
  children: ReactNode;
  size: "xs" | "s" | "m" | "l";
}> = ({ children, size }) => {
  const { theme } = useContext(AppContext);

  return <Box sx={styleSx[size][theme]}>{children}</Box>;
};

export default ScalableBox;
