import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      display: "flex",
      flexDirection: "row",
      bgcolor: "#3A8B9D",
      color: "black",
      padding: "10px",
    },
    dark: {
      display: "flex",
      flexDirection: "row",
      bgcolor: "black",
      color: "white",
      padding: "10px",
    },
  },
};
