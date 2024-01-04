import { Box, TextField } from "@mui/material";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
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
const SearchBar = () => {
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

    if (dataError) toast(dataError);

    if (newSensor) {
      console.log("pas d'erreur");
      console.log(newData);

      setSelectedSensor({ ...newSensor, data: newData ?? [] });
      if (!getSensorsFromLocalStorage().includes(newSensor.serialNumber)) {
        addSensorToLocalStorage(newSensor);
      }
      setSensorLoading(false);
      console.log(newData?.length);
    }
  }, [
    dataError,
    newData,
    newSensor,
    sensorError,
    setSelectedSensor,
    setSensorLoading,
  ]);

  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setSerialNumberValue(event.target.value);
    setInputError("include");
  };

  const handleConfirmSubmitValue: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    inputError === "none"
      ? await handleSubmitSerialNumber(serialNumberValue)
      : toast.error("Le format du numéro de série est incorrect");
  };

  useEffect(() => {
    if (stringValidator.test(serialNumberValue) && inputError !== "initial") {
      setInputError("none");
    }
  }, [inputError, serialNumberValue]);

  return (
    <Box sx={styleSx.box[theme]}>
      <p>Identification du capteur par la valeur hexadécimal</p>
      <form onSubmit={handleConfirmSubmitValue}>
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
          error={inputError === "include"}
        />
      </form>
    </Box>
  );
};

export default SearchBar;
