import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: { [key: string]: CSSProperties } } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      padding: "10px",
      bgcolor: "aliceblue",
      height: "100vh",
    },
    dark: {
      padding: "10px",
      bgcolor: "darkgray",
      height: "100vh",
    },
  },
};
