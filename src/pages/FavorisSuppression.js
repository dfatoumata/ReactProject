import React from 'react'
import { Button, ImageBackground, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'

const image1 = {
  uri:
    'https://images-ext-2.discordapp.net/external/JnnY8hLdRXYOhZTGvHys81oWpKtrFe-1rIb-34vqvKc/%3Falt%3Dmedia%26token%3D07109fee-00af-4d9a-a816-a35d6736e306/https/firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/Suhis.jpg?width=400&height=267',
}

const onPressOui = () => {}

const onPressNon = () => {}

export default () => {
  return (
   // <ScrollView >
    
      <View style={styles.container}>
      <ImageBackground source={image1} style={styles.imageBg} resizeMode="cover" />
     
      <View>
      <Text style={styles.textTitle}>
          Êtes vous sur de vouloir supprimer cette recette de vos favoris{' '}
        </Text>
      <Text style={styles.textContent}> Poulet sauce moutarde </Text>
        </View>
        <View style={styles.button}>
        <TouchableOpacity
          style={styles.btnStyle}
          color="#C55252"
         // style={styles.button}
          title="Oui"
          onPress={onPressOui}>
          <Text style={styles.whiteText}>OUI</Text>
        </TouchableOpacity>
        <Button
          style={styles.btnStyle}
          color="#688649"
         
          title="Non"
          onPress={onPressNon}
        ></Button>
     </View>
      </View>
    //</ScrollView>
    
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: '#B8AE57'
  }, 
  textTitle: {
    color: '#70716F',
    textAlign: 'center',
    margin: 5,
    padding: 15,
    fontSize: 20,
  },
  textContent: {
    color: '#70716F',
    textAlign: 'center',
    margin: 5,
    padding: 15,
    fontSize: 16,
  },
  button: {
    justifyContent: 'space-between',
    fontSize: 16,
    textColor: 'white',
    fontWeight: 'bold',
    //textAlign: 'center',
    padding: 15,
    margin: 5,
    marginTop: 8,
    marginBottom: 10,
    flexDirection: 'row'
  },
  btnStyle: {
    flex: 1,
    flexBasis: 100,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: '0.5',
  },
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
  whiteText: {
    color: 'white',
    fontWeight: 'bold',
  }
})
