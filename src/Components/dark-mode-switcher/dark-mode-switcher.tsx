import { DarkMode, DarkModeOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { styleSx } from "./dark-mode-switcher.style";

const DarkModeSwitcher = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <Box>
      <IconButton sx={styleSx.button[theme]} onClick={handleClick}>
        {theme === "light" ? <DarkModeOutlined /> : <DarkMode />}
      </IconButton>
    </Box>
  );
};

export default DarkModeSwitcher;
