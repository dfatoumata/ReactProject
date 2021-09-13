import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
      <Link to="/">
        <Image
          style={stylesMenu.Image}
          source={require("../../assets/profil.svg")}
        />
      </Link>
    </View>
  );
};

export default FooterMenu;
const stylesMenu = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: 375,
    height: 100,
    left: 0,
    right: 0,
    top: 597,
    bottom: 0,
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
