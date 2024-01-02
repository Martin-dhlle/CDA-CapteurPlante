import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: { [key: string]: CSSProperties } } = {
  text: {
    light: {
      cursor: "pointer",
    },
    dark: {
      cursor: "pointer",
    },
  },
};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      display: "flex",
      paddingX: "10px",
    },
    dark: {
      display: "flex",
      paddingX: "10px",
    },
  },
  boxOver: {
    light: {
      display: "flex",
      bgcolor: "lightgreen",
      paddingX: "10px",
      borderRadius: "10px",
      color: "darkgreen",
    },
    dark: {
      display: "flex",
      bgcolor: "slategray",
      paddingX: "10px",
      borderRadius: "10px",
      color: "whitesmoke",
    },
  },
  button: {
    light: {
      color: "red",
    },
    dark: {
      color: "darkred",
    },
  },
};
