import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  button: {
    light: {
      color: "black",
    },
    dark: {
      color: "white",
    },
  },
};
