import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      display: "flex",
      flexDirection: "row",
      height: "20vh",
      width: "100%",
      bgcolor: "lightgreen",
      color: "black",
    },
    dark: {
      display: "flex",
      flexDirection: "row",
      height: "20vh",
      width: "100%",
      bgcolor: "black",
      color: "white",
    },
  },
};
