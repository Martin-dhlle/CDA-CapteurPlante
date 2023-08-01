import { Box } from "@mui/material";
import Header from "./Header/header.component";
import Main from "./Main/main.component";
import AppProvider from "./context/app.provider";
import { styleSx } from "./App.style";
import { useContext } from "react";
import { AppContext } from "./context/app.context";

/*
  Le composant d'entrée de l'application
*/
function App() {
  const { theme } = useContext(AppContext);

  return (
    <AppProvider>
      <Box sx={styleSx.box[theme]}>
        <Header />
        <Main />
      </Box>
    </AppProvider>
  );
}

export default App;
