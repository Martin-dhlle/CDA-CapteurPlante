import { Box, Button } from "@mui/material";
import { styleSx } from "./sensor-settings.style";

type SensorSettingsProps = {
  sensorTimerValue: number;
};

const SensorSettings = ({ sensorTimerValue }: SensorSettingsProps) => {
  return (
    <Box sx={styleSx.box}>
      <p>Paramètres du capteur</p>
      <span>
        <Button type="button" variant="contained">
          Changer le type de plante
        </Button>
      </span>
      <span>
        <p>Fréquence de vérification :</p>
        <p>{`${sensorTimerValue} H`}</p>
        <Button type="button" variant="contained">
          Changer l'intervalle
        </Button>
      </span>
    </Box>
  );
};

export default SensorSettings;
