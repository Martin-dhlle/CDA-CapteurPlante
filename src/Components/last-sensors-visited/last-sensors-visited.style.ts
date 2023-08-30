import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  button: {
    light: {
      color: "lightcyan",
    },
    dark: {
      color: "whitesmoke",
    },
  },
  iconSize: {
    light: {
      height: "40px",
      width: "40px",
    },
    dark: {
      height: "40px",
      width: "40px",
    },
  },
};
