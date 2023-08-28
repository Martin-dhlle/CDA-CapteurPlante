import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const style: { [key: string]: CSSProperties } = {
  divSeparateY: {
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    gap: 20,
    padding: 10,
  },
  itemBg: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 20,
  },
};

export const styleSx: { [key: string]: { [key: string]: SxProps } } = {};
