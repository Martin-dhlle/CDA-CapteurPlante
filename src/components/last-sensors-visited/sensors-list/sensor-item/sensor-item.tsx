import { Box, Button } from "@mui/material";
import { FC, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../context/app.context";
import { style, styleSx } from "./sensor-item.style";
import { toast } from "react-hot-toast";
import useRequest from "../../../../hooks/useRequest";
import Sensor from "../../../../utils/interfaces/Sensor";
import Data from "../../../../utils/interfaces/Data";
import {
  dataApiEndpoint,
  sensorApiEndpoint,
} from "../../../../config/api/api-endpoints";
import {
  dataErrorMessages,
  sensorErrorMessages,
} from "../../../../utils/error/apiErrorMessage";

const SensorItem: FC<{
  serialNumber: string;
  onDelete: (serialNumber: string) => void;
}> = ({ serialNumber, onDelete }) => {
  const { theme } = useContext(AppContext);

  const { setSelectedSensor, setSensorLoading } = useContext(AppContext);

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
      setSensorLoading(false);
    }

    if (newSensor && newData) {
      setSelectedSensor({ ...newSensor, data: newData });
      setSensorLoading(false);
    }
  }, [
    dataError,
    newData,
    newSensor,
    sensorError,
    setSelectedSensor,
    setSensorLoading,
  ]);

  const [isMouseOver, setMouseOverState] = useState<boolean>(false);

  const handleClickSelect = () => {
    handleSubmitSerialNumber(serialNumber);
  };

  const handleClickDelete = () => {
    onDelete(serialNumber);
  };

  const handleMouseEnter = () => {
    setMouseOverState(true);
  };

  const handleMouseLeave = () => {
    setMouseOverState(false);
  };

  return (
    <Box
      sx={styleSx[`box${isMouseOver ? "Over" : ""}`][theme]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={style.text[theme]} onClick={handleClickSelect}>
        {serialNumber}
      </p>
      <Button sx={styleSx.button[theme]} onClick={handleClickDelete}>
        supprimer
      </Button>
    </Box>
  );
};

export default SensorItem;
