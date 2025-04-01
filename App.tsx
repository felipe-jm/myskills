import React from "react";
import { Home } from "./src/pages/Home";
import { StatusBar } from "react-native";

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default App;
