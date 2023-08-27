import { Box } from "@mui/material";
import { styleSx } from "./App.style";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import { AppContext } from "../context/app.context";
import AppProvider from "../context/app.provider";
import Header from "./header/header";
import Main from "./main/main";

/*
  Le composant d'entrée de l'application
*/
function App() {
  const { theme } = useContext(AppContext);

  return (
    <AppProvider>
      <Toaster position="top-right" />
      <Box sx={styleSx.box[theme]}>
        <Header />
        <Main />
      </Box>
    </AppProvider>
  );
}

export default App;
