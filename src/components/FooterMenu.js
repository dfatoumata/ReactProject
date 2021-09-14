import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Link } from "react-router-native";

const FooterMenu = () => {
  return (
    <View style={stylesMenu.container}>
      <Link to="/">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/home.svg")}
        />
      </Link>
      <Link to="/">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/ajouter.svg")}
        />
      </Link>
      <Link to="/">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/logo.svg")}
        />
      </Link>
      <Link to="/">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/favoris.svg")}
        />
      </Link>
      <Link to="/connexion">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/profil.svg")}
        />
      </Link>
      <Link to="/inscription">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/favicon.png")}
        />

      </Link>

      <Link to="/favorisSuppression">
      <Image
          style={stylesMenu.Image}
          source={require("../../assets/icon.png")}
          />
      </Link>

    </View>
    
  );
};

export default FooterMenu;
const stylesMenu = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 0,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: "row",
    width: '100%',
    minHeight: 100,
    backgroundColor: "#EBEAEB",
    backdropFilter: blur(4),
    /* Note: backdrop-filter has minimal browser support */
  },

  Image: {
    width: 44,
    height: 45,
    left: 13,
    top: 12,
    margin: 15,
    fontFamily: "Awesome",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 30,
    lineHeight: 34,

    alignItems: "center",
    textAlign: "center",

    color: "#70716F",
  },
});
