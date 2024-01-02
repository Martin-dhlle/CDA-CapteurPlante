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
import { toast } from "react-hot-toast";
import useRequest from "../../hooks/useRequest";
import Sensor from "../../utils/interfaces/Sensor";
import {
  dataApiEndpoint,
  sensorApiEndpoint,
} from "../../config/api/api-endpoints";
import Data from "../../utils/interfaces/Data";
import {
  addSensorToLocalStorage,
  getSensorsFromLocalStorage,
} from "../../utils/services/localStorageServices";
import {
  dataErrorMessages,
  sensorErrorMessages,
} from "../../utils/error/apiErrorMessage";

/**
 * La barre de recherche
 */
const SearchBar: FC<{}> = ({}) => {
  const { theme, setSelectedSensor, setSensorLoading } = useContext(AppContext);

  const [serialNumberValue, setSerialNumberValue] = useState<string>("");
  const [inputError, setInputError] = useState<"initial" | "include" | "none">(
    "initial"
  );

  const {
    request: requestSensor,
    data: newSensor,
    error: sensorError,
  } = useRequest<Sensor>(sensorApiEndpoint, sensorErrorMessages);
  const {
    request: requestData,
    data: newData,
    error: dataError,
  } = useRequest<Data[]>(dataApiEndpoint, dataErrorMessages);

  const handleSubmitSerialNumber = async (serialNumber: string) => {
    setSensorLoading(true);

    /**
     * Envoi d'une requête afin de récupérer et définir le nouveau capteur actuel selectionné
     * pour l'affichage de ses données si le capteur existe.
     */
    requestSensor("GET", serialNumber); // param : serialNumber

    /**
     * Envoi d'une requête afin de récupérer les valeurs d'humidité enregistrés par le capteur.
     */
    requestData("GET", serialNumber); // param : serialNumber
  };

  // useEffect pour la vérification des requêtes du capteur
  useEffect(() => {
    if (sensorError) {
      toast.error(sensorError);
      setSensorLoading(false);
    }

    if (newSensor && dataError) {
      toast(dataError);
      setSelectedSensor({ ...newSensor, data: [] });
      if (!getSensorsFromLocalStorage().includes(newSensor.serialNumber)) {
        addSensorToLocalStorage(newSensor);
      }
      setSensorLoading(false);
    }

    if (newSensor && newData) {
      setSelectedSensor({ ...newSensor, data: newData });
      if (!getSensorsFromLocalStorage().includes(newSensor.serialNumber)) {
        addSensorToLocalStorage(newSensor);
      }
      setSensorLoading(false);
    }
  }, [
    newData,
    sensorError,
    dataError,
    newSensor,
    serialNumberValue,
    setSelectedSensor,
    setSensorLoading,
  ]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSerialNumberValue(event.target.value);
    setInputError("include");
  };

  const handleConfirmSubmitValue: KeyboardEventHandler<HTMLInputElement> = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      inputError === "none"
        ? handleSubmitSerialNumber(serialNumberValue)
        : toast.error("Le format du numéro de série est incorrect");
      return;
    }
  };

  useEffect(() => {
    if (stringValidator.test(serialNumberValue) && inputError !== "initial") {
      setInputError("none");
      console.log("no error");
    }
  }, [inputError, serialNumberValue]);

  return (
    <Box sx={styleSx.box[theme]}>
      <p>Identification du capteur par la valeur hexadécimal</p>
      <TextField
        inputProps={{
          style: style.input[theme],
          maxLength: 17,
        }}
        placeholder="00:00:00:00:00:00"
        variant="outlined"
        type="text"
        value={serialNumberValue}
        onChange={handleChangeValue}
        onKeyDown={handleConfirmSubmitValue}
        error={inputError === "include"}
      />
    </Box>
  );
};

export default SearchBar;
