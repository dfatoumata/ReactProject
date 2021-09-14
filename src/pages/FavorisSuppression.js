import React from "react";
import { 
  Button, 
  ImageBackground, 
  Text, 
  View 
} from "react-native";

const image = {uri:'../../assets//salade-caesar.jpeg'}; 

const FavorisSuppression = () => {
  return (
   
    <View style = {styles.container}>
      <ImageBackground source={image} style={styles.imageB} resizeMode="cover" />
      <Text style = {styles.textTitle}>Êtes vous sur de vouloir supprimer cette recette de vos favoris </Text>
      <Text style = {styles.textContent}> Poulet sauce moutarde </Text> 
      {/* ajouter code pour text content  */}

      <Button style = {styles.buttonOui}> Oui</Button>
      <Button style = {styles.buttonNon}> Non</Button>
      
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
  textContent: {    
    color: '#70716F',
    margin: 5,
    padding: 15,
    fontSize: 16,
  },
  buttonOui: {
    color: '#C55252',
    fontSize: 16,
    textColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    marginTop: 8,
    marginBottom: 10,
  },
  buttonNon: {
    color: '#688649',
    fontSize: 16,
    textColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    marginTop: 8,
    marginBottom: 10,
  },
  imageB: {
    flex: 1,
    justifyContent: "center"
  },
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
})

export default FavorisSuppression;
