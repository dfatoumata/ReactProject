import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterMenu from "./src/components/FooterMenu";
import Accueil from "./src/pages/Accueil";
import { NativeRouter, Route } from "react-router-native";
import AjouterRecette from "./src/pages/AjouterRecette";

export default function App() {
  return (
    <NativeRouter>
      <View style={{flex:1}}>
        <Route exact path="/">
          <AjouterRecette/>
        </Route>
        <Route exact path="/">
          <FooterMenu></FooterMenu>
        </Route>
      </View>
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
