import { DarkMode, DarkModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";

const DarkModeSwitcher = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <IconButton onClick={handleClick} sx={{ flex: 1 }}>
      {theme === "light" ? <DarkModeOutlined /> : <DarkMode />}
    </IconButton>
  );
};

export default DarkModeSwitcher;
