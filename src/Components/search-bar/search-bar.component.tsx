import { Box, TextField } from "@mui/material";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from "react";
import { stringValidator } from "./validator";
import { SearchBarStyle, SearchBarStyleSx } from "./search-bar.style";

const SearchBar: FC<{
  fetchError: string | null;
  onSubmit: (serialNumber: string) => void;
}> = ({ fetchError, onSubmit }) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<"initial" | "include" | "none">("initial");

  useEffect(() => {
    if (stringValidator.test(value) && error !== "initial") {
      setError("none");
      console.log("no error");
    }
  }, [error, value]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setValue(event.target.value);
    setError("include");
  };

  const handleConfirmSubmitValue: KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && error === "none") {
      onSubmit(value);
    }
  };

  return (
    <Box sx={SearchBarStyleSx.box}>
      <p>Identification du capteur par la valeur hexadécimal</p>
      <TextField
        variant="outlined"
        type="text"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleConfirmSubmitValue}
        error={error === "include"}
      />
      <p style={SearchBarStyle.textRed}>{fetchError}</p>
    </Box>
  );
};

export default SearchBar;
