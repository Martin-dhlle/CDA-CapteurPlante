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
    },
    dark: {
      display: "flex",
    },
  },
  boxOver: {
    light: {
      display: "flex",
      bgcolor: "yellowgreen",
    },
    dark: {
      display: "flex",
      bgcolor: "yellowgreen",
    },
  },
};
