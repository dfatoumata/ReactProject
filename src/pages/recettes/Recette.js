import React from "react";
import Ingredients from "./ingredients";
import Preparation from "./preparation";
import { StyleSheet, View, Image, Button, Text,  ScrollView, StatusBar} from 'react-native';


const Recette = () => {
 const prep= {
   temps : 25,
   cuisson : 20,
   repos : 2,
   prepar : 15
 }
  return (
    <ScrollView style={styles.main_container}>
      <Image style={styles.img} source={{uri: 'https://firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/PouletSauceMoutarde.jpg?alt=media&token=d179cdf9-3ea0-4798-8314-96afa54968bb'}}/>
       
       <Text style={styles.title}>Ingredients:</Text>
        
        <Ingredients/>

     <Text style={styles.title}> Préparation:</Text>

      <Preparation prep = {prep}/>
        </ScrollView>
  );
};

const styles = StyleSheet.create({
  main_container: {
    marginTop: 0
  },
 
  title: {
    margin: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color : '#70716F',
    textAlign: 'left'
  },
  img: {
    width: '100%', 
    height: 400
  }
  

})

export default Recette;
// Components/Search.js
