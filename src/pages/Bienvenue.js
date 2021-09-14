import React from "react";
import { ImageBackground, Text, View, } from "react-native";
export default Bienvenue = () => {
  return (
    <View >
      <ImageBackground source={image} style={styles.imageB} resizeMode="cover" />
      <Text>Bienvenue</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
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