import { Box } from "@mui/material";
import SearchBar from "../../components/search-bar/search-bar";
import { styleSx } from "./header.style";
import DarkModeSwitcher from "../../components/dark-mode-switcher/dark-mode-switcher";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import LastSensorsVisited from "../../components/last-sensors-visited/last-sensors-visited";

/**
 *
 * Le header de l'application comportant la liste des derniers sensors visités,
 * la barre de recherche et le commutateur de dark/light mode
 */
const Header: React.FC<{}> = ({}) => {
  const { theme } = useContext(AppContext);

  return (
    <Box sx={styleSx.box[theme]}>
      <LastSensorsVisited />
      <SearchBar />
      <DarkModeSwitcher />
    </Box>
  );
};

export default Header;
