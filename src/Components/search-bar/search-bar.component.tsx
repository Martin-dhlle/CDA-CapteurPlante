import { TextField } from "@mui/material";
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

const SearchBar: FC<{ onSubmit: (serialNumber: string) => void }> = ({
  onSubmit,
}) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<"initial" | "include" | "none">("initial");

  useEffect(() => {
    if (stringValidator.test(value) || error === "initial") {
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
    <div>
      <p>Identification du capteur par la valeur héxadécimal</p>
      <TextField
        variant="outlined"
        type="text"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={handleConfirmSubmitValue}
        error={error === "include"}
      />
    </div>
  );
};

export default SearchBar;
