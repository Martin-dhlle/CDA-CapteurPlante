import { Box } from "@mui/material";
import SearchBar from "../Components/search-bar/search-bar.component";
import { headerStyleSx } from "./header.style";
import DarkModeSwitcher from "../Components/dark-mode-switcher/dark-mode-switcher";

const Header: React.FC<{
  fetchError: string | null;
  onSubmit: (serialNumber: string) => void;
}> = ({ fetchError, onSubmit }) => {
  return (
    <Box sx={headerStyleSx.box}>
      <Box sx={{ flex: 1 }}></Box>
      <SearchBar fetchError={fetchError} onSubmit={onSubmit} />
      <DarkModeSwitcher />
    </Box>
  );
};

export default Header;
