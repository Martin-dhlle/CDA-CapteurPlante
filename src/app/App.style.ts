import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      top: 0,
      bottom: 0,
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: "white",
    },
    dark: {
      top: 0,
      bottom: 0,
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      bgcolor: "black",
    },
  },
};
