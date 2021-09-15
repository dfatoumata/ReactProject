import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Accueil from "../pages/Accueil";
import Inscription from "../pages/Inscription";
import AjouterRecette from "../pages/AjouterRecette";
import Favoris from "../pages/Favoris";
import Profil from "../pages/Profil";
import HomeSvg from "../../assets/home";
import LogoSvg from "../../assets/logo";
import AjouterSvg from "../../assets/ajouter";
import FavorisSvg from "../../assets/favoris";
import ProfilSvg from "../../assets/profil";
const Tab = createBottomTabNavigator();
import Svg, { Path } from "react-native-svg";
import Recette from "../pages/Recette";


const FooterMenu = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#70716F",
        tabBarInactiveTintColor: "#70716F",
        tabBarInactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Accueil"

        component={Recette}

        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Svg width="35" height="30">
              <Path d={HomeSvg} fill={color} />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="AjouterRecette"
        component={AjouterRecette}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Svg width="35" height="30">
              <Path d={AjouterSvg} fill={color} width="60" />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Inscription"
        component={Inscription}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Svg width="80" height="150">
              <Path d={LogoSvg} fill={color} />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Favoris"
        component={Favoris}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Svg width="35" height="30">
              <Path d={FavorisSvg} fill={color} />
            </Svg>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <Svg width="35" height="30">
              <Path d={ProfilSvg} fill={color} />
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>

  );
};

export default FooterMenu;
const stylesMenu = StyleSheet.create({
  container: {
    position: "fixed",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    minHeight: 60,
    backgroundColor: "#EBEAEB",
    alignSelf: "center",
    backdropFilter: blur(4),
    /* Note: backdrop-filter has minimal browser support */
  },

  Image: {
    minWidth: 40,
    minHeight: 50,
    // lineHeight: 34,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#70716F",
  },
});
