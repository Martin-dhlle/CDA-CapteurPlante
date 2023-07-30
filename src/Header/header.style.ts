import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const headerStyle: { [key: string]: CSSProperties } = {
  textRed: { color: "red" },
};

export const headerStyleSx: { [key: string]: SxProps } = {
  box: {
    display: "flex",
    flexDirection: "row",
    height: "30%",
    width: "100%",
    bgcolor: "slategrey",
  },
};
