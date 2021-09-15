import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";
import Recette from "./src/pages/recettes/Recette";
import { NativeRouter, Route } from "react-router-native";
import Connexion from "./src/pages/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import AjouterRecette from "./src/pages/AjouterRecette";
import Inscription from "./src/pages/Inscription";
import Favoris from "./src/pages/Favoris";
import Profil from "./src/pages/Profil";

export default function App() {
  return (
    <NativeRouter>
<<<<<<< HEAD
    
        <Route exact path="/">
          <Recette />
          
        </Route>
        <Route exact path="/connexion">
          <Connexion />
        </Route>
        
=======
      <NavigationContainer>
>>>>>>> 2b1f1882b5875d7cd901ac79aa3e8db9d0afda8d
        <FooterMenu />
      </NavigationContainer>
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
