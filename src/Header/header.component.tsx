import SearchBar from "../Components/search-bar/search-bar.component";
import headerStyle from "./header.style";

const Header: React.FC<{
  error: string | null;
  onSubmit: (serialNumber: string) => void;
}> = ({ error, onSubmit }) => {
  return (
    <header>
      <SearchBar onSubmit={onSubmit} />
      <p style={headerStyle}>{error}</p>
    </header>
  );
};

export default Header;
