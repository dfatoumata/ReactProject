import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { CheckBox } from "react-native-elements/dist/checkbox/CheckBox";
import {Picker} from "react-native-elements/dist/helpers";
import { Link } from "react-router-native";

const NomRecette= () => {
  return (
    
    <View  style={styles.container}>
      <Text style={{ fontSize: 20 }}>Ajouter une recette</Text>
      <Text >Nom du Recette</Text>
      <TextInput style={styles.textInput}></TextInput>
      <Text>photo</Text>
      <View style={styles.AjouterPhoto}>
      
      <Link to="/">
        <Image
          style={styles.Image}
          source={require("../../assets/AjouterPhoto.svg")}
        />
        </Link>
      </View>
     <Text>Difficulté</Text>
     <Button title = "Facile"
    style={styles.Button}>

     </Button>
     <Button title = "Moyen"
    style={styles.Button}>

     </Button>
     <Button title = "Difficile"
    style={styles.Button}>

     </Button>
    
     <Text >Temps de préparation (en minutes)</Text>
     <TextInput style={styles.textInput} value="20"></TextInput>

     <Text >Temps de repos (en minutes)</Text>
     <TextInput style={styles.textInput} value="0"></TextInput>

     <Text >Temps de cuisson (en minutes)</Text>
     <TextInput style={styles.textInput} value="0"></TextInput>

     <Text >Nombre de personnes</Text>
     <TextInput style={styles.textInput} value="0"></TextInput>

     <Text >Ingrédients</Text>

     <View style={styles.AjouterIgredients}>
     <TextInput style= {styles.textIgredients} value="Poulet au olives"></TextInput>
     <Text>Quantité                 Mesure</Text>
     <TextInput style= {styles.textQte}></TextInput>
     <Button title = "Supprimer"
    style={styles.ButtonSupprimer}>

     </Button>

    

         </View>
         <Button title = "Ajouter un ingrédient"
    style={styles.Button}>

     </Button>

     <Text >Étapes</Text>
     <View style={styles.AjouterIgredients}>
     <TextInput style={styles.textEtapes} ></TextInput>
     <Button title = "Supprimer"
    style={styles.ButtonSupprimer}></Button>

     </View>
     
     <Button title = "Ajouter une étape"
    style={styles.Button}></Button>
    <Text >Sauvegarder et mettre en ligne</Text>
    <View style={styles.sauvegarde}>
      <Text >Mettre en ligne</Text>
    <CheckBox style={styles.checkbox}>
    </CheckBox>
    </View>
         
   
     <Button title = "souvegarder"
    style= {styles.ButtonSauvegarder}>
      </Button>

    </View>)};



export default NomRecette;
const styles = StyleSheet.create({
  

  container: {
  
 
       fontFamily: "Roboto",
       fontStyle: "normal",
       fontWeight: "bold",
       fontSize: 20,
       lineHeight:23,
       display:"flex",
       flex:1,
       marginTop:50,
       
    
       padding: 20,
     
       justifyContent: 'space-between',
       minHeight:400,
      color: "#70716F"},

      sauvegarde:{
        flex: 1,
        flexDirection:"row"
      },
   
  textInput:{

width: 331,
height: 50,
left: 8,


/* White */

backgroundColor:"#FFFFFF", 

borderRadius: 5},

AjouterPhoto:{
 
  width: 331,
  height: 200,
  backgroundColor: "#EBEAEB",
    backdropFilter: blur(4),
  borderRadius: 5},

  Image: {
    width: 158,
    height: 113,
    left: 50,
    top: 0,
    margin: 15,
    fontFamily: "Awesome",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 80,
    lineHeight: 92,

    alignItems: "center",
    textAlign: "center",

    color: "#70716F"},

Button:{
backgroundColor:"#EBEAEB",
borderRadius: 10,
width:331,
height:50,
},

ButtonSauvegarder:{
  backgroundColor:"#688649",
  borderRadius: 10,
  width:331,
  height:50,
  },

AjouterIgredients:{
 
  width: 331,
  height: 200,
  backgroundColor: "#EBEAEB",
 backdropFilter: blur(4),
  borderRadius: 5,
  flex:4,
       padding: 20,
       margin: 8, 
       justifyContent: 'space-between',
       minHeight:300},


textButton:{
color:"#70716F",
},

textIgredients:{
  width: 270,
  height: 43,
  left:10,
  top:2,
  backgroundColor:"#FFFFFF"
  },

  textQte:{
    width: 114,
    height: 43,
    left:8,
    top:33,
    backgroundColor:"#FFFFFF"
    },

    
  textMesure:{
    width: 114,
    height: 43,
    left:50,
    top:33,
    backgroundColor:"#FFFFFF"
    },
    ButtonSupprimer:{
      backgroundColor:"#C55252",
      borderRadius: 10,
      width:270,
      height:50,
      },
      
      textEtapes:{
        width: 254,
        height: 200,
        left:7,
        top:5,
        backgroundColor:"#FFFFFF"
        },

        checkbox :{position: "absolute",
          width: 42,
          height: 39,
          left: 0,
          top: 0,
          
          /* White */
          
          background: "#FFFFFF"

        },

}
);

    
  