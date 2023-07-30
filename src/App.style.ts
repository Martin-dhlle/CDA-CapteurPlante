import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const appStyle: { [key: string]: CSSProperties } = {};

export const appStyleSx: { [key: string]: SxProps } = {
  box: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
  },
};
