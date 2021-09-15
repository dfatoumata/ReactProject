import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";
import Recette from "./src/pages/recettes/Recette";
import { NativeRouter, Route } from "react-router-native";
<<<<<<< HEAD
import Connexion from "./src/pages/Connexion"
import Profil from "./src/pages/Profil"
=======
import Connexion from "./src/pages/Connexion";
import { NavigationContainer } from "@react-navigation/native";
import AjouterRecette from "./src/pages/AjouterRecette";
import Inscription from "./src/pages/Inscription";
import Favoris from "./src/pages/Favoris";
import Profil from "./src/pages/Profil";
>>>>>>> 6bd0d5ae2bea4264bf3550dcb6f330788f4ae252

export default function App() {
  return (
    <NativeRouter>
<<<<<<< HEAD
    
        <Route exact path="/">
          <Accueil />
        </Route>
        <Route exact path="/connexion">
          <Connexion />
          </Route>
          <Route exact path="/profil">
          <Profil />
        </Route>
        
=======

      <NavigationContainer>

>>>>>>> 6bd0d5ae2bea4264bf3550dcb6f330788f4ae252
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
