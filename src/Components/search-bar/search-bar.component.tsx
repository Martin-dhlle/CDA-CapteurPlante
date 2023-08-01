import { Box, TextField } from "@mui/material";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  KeyboardEvent,
  KeyboardEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { stringValidator } from "./validator";
import { style, styleSx } from "./search-bar.style";
import { AppContext } from "../../context/app.context";

const SearchBar: FC<{}> = ({}) => {
  const { theme, handleSubmitSerialNumber } = useContext(AppContext);

  const [serialNumberValue, setSerialNumberValue] = useState<string>("");
  const [error, setError] = useState<"initial" | "include" | "none">("initial");

  useEffect(() => {
    if (stringValidator.test(serialNumberValue) && error !== "initial") {
      setError("none");
      console.log("no error");
    }
  }, [error, serialNumberValue]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSerialNumberValue(event.target.value);
    setError("include");
  };

  const handleConfirmSubmitValue: KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && error === "none") {
      handleSubmitSerialNumber(serialNumberValue, true);
    }
  };

  return (
    <Box sx={styleSx.box[theme]}>
      <p>Identification du capteur par la valeur hexadécimal</p>
      <TextField
        inputProps={{
          style: style.input[theme],
        }}
        variant="outlined"
        type="text"
        value={serialNumberValue}
        onChange={handleChangeValue}
        onKeyDown={handleConfirmSubmitValue}
        error={error === "include"}
      />
    </Box>
  );
};

export default SearchBar;
