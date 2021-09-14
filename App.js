import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";
import Accueil from "./src/pages/Accueil";
import { NativeRouter, Route } from "react-router-native";
import Connexion from "./src/pages/Connexion"

export default function App() {
  return (
    <NativeRouter>
    
        <Route exact path="/">
          <Accueil />
        </Route>
        <Route exact path="/connexion">
          <Connexion />
        </Route>
        
        <FooterMenu />
       
      
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
