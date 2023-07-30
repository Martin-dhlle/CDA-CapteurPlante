import { FC, ReactNode, useState } from "react";
import { AppContext } from "./app.context";

type Props = { children: ReactNode };

const AppProvider: FC<Props> = ({ children }) => {
  const initialState = () => {
    console.log(localStorage.getItem("theme"));
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(initialState);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme);
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
