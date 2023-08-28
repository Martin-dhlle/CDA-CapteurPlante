import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  xs: {
    light: { bgcolor: "lightblue", borderRadius: "10px", paddingX: "20px" },
    dark: {
      bgcolor: "black",
      borderRadius: "10px",
      paddingX: "20px",
    },
  },
  s: {
    light: {
      display: "flex",
      justifyContent: "space-between",
      bgcolor: "lightblue",
      borderRadius: "10px",
      padding: "20px",
      width: "50vh",
    },
    dark: {
      display: "flex",
      justifyContent: "space-between",
      bgcolor: "black",
      borderRadius: "10px",
      padding: "20px",
      width: "50vh",
    },
  },
  m: {
    light: {
      display: "flex",
      justifyContent: "center",
      bgcolor: "lightblue",
      borderRadius: "10px",
      padding: "20px",
      width: "50vh",
      height: "30vh",
    },
    dark: {
      display: "flex",
      justifyContent: "space-between",
      bgcolor: "black",
      borderRadius: "10px",
      padding: "20px",
      width: "50vh",
      height: "40vh",
    },
  },
  l: {
    light: {
      display: "flex",
      justifyContent: "space-between",
      bgcolor: "lightblue",
      borderRadius: "10px",
      padding: "20px",
      width: "100vh",
    },
    dark: {
      display: "flex",
      justifyContent: "space-between",
      bgcolor: "black",
      borderRadius: "10px",
      padding: "20px",
      width: "100vh",
    },
  },
};
