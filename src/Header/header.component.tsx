import { FC } from "react";
import SearchBar from "../Components/search-bar/search-bar.component";

const Header: FC<{ onSubmit: (serialNumber: string) => void }> = ({
  onSubmit,
}) => {
  return (
    <header>
      <SearchBar onSubmit={onSubmit} />
    </header>
  );
};

export default Header;
