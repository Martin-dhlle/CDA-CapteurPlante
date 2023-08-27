import { FC, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./app.context";
import Sensor from "../utils/interfaces/Sensor";

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // définit le capteur à passer au compo main
  const [selectedSensor, setSelectedSensor] = useState<Sensor | null>(null);
  const [isSensorLoading, setSensorLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        selectedSensor,
        setSelectedSensor,
        isSensorLoading,
        setSensorLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
