import React from "react";
import { ImageBackground, StyleSheet, Text, View, } from "react-native";

const image = {uri:'https://images-ext-1.discordapp.net/external/RwxMgYcfzelP05orLTXX8IAKRFBjexzFojFIaChKHAo/%3Falt%3Dmedia%26token%3De9b83d09-63a1-49d9-92ea-7c9e9c61b20c/https/firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/salade-caesar.jpeg?width=400&height=267'}; 

export default Bienvenue = () => {
  return (
    <View >
      <ImageBackground source={image} style={styles.imageB} resizeMode="cover" />
      <Text>Bienvenue</Text>
      <Image source = '../../assets/favicon.png'/>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backGroundColor: '#EBEAEB', 

  },
  textTitle: {   
    color: '#70716F',
    margin: 5,
    padding: 15,
    fontSize: 20,
  },
  imageB: {
    flex: 1,
    justifyContent: "center"
  },
})