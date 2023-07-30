import { Box } from "@mui/material";
import SearchBar from "../Components/search-bar/search-bar.component";
import { styleSx } from "./header.style";
import DarkModeSwitcher from "../Components/dark-mode-switcher/dark-mode-switcher";
import { useContext } from "react";
import { AppContext } from "../context/app.context";
import LastSensorsVisited from "../Components/last-sensors-visited/last-sensors-visited.component";

const Header: React.FC<{
  fetchError: string | null;
  onSubmit: (serialNumber: string) => void;
}> = ({ fetchError, onSubmit }) => {
  const { theme } = useContext(AppContext);

  return (
    <Box sx={styleSx.box[theme]}>
      <LastSensorsVisited />
      <SearchBar fetchError={fetchError} onSubmit={onSubmit} />
      <DarkModeSwitcher />
    </Box>
  );
};

export default Header;
