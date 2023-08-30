import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {
  columnSeparate: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    rowGap: "30%",
    paddingTop: 20,
  },
  rowSeparate: {
    width: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "1em",
  },
};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {
  box: {
    light: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      bgcolor: "white",
      color: "black",
      padding: "10px",
    },
    dark: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      bgcolor: "gray",
      color: "white",
      padding: "10px",
    },
  },
};
