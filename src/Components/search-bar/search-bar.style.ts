import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: { [key: string]: CSSProperties } } = {
  input: {
    light: { textAlign: "center", backgroundColor: "white" },
    dark: { textAlign: "center", backgroundColor: "white" },
  },
  error: {
    light: { color: "red" },
    dark: { color: "red" },
  },
};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    dark: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
};
