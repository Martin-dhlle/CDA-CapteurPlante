import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const SearchBarStyle: { [key: string]: CSSProperties } = {
  textRed: { color: "red" },
};

export const SearchBarStyleSx: { [key: string]: SxProps } = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
