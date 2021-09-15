import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";
import Accueil from "./src/pages/Accueil";
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
      <NavigationContainer>
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
