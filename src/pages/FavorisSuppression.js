import React from 'react'
import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'

const image = {
  uri:
    'https://images-ext-2.discordapp.net/external/JnnY8hLdRXYOhZTGvHys81oWpKtrFe-1rIb-34vqvKc/%3Falt%3Dmedia%26token%3D07109fee-00af-4d9a-a816-a35d6736e306/https/firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/Suhis.jpg?width=400&height=267',
}

const onPressOui = () => {}

const onPressNon = () => {}

export default () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageB}
        resizeMode="cover"
      />
      

      <View><Text style={styles.textTitle}>
          Êtes vous sur de vouloir supprimer cette recette de vos favoris{' '}
        </Text>
        </View>
        <View>
        <Text style={styles.textContent}> Poulet sauce moutarde </Text>
        </View>
        <View>
        <Button
          color="#C55252"
          style={styles.buttonOui}
          title="Oui"
          onPress={onPressOui}>
        </Button>

        
        <Button
          color="#688649"
          style={styles.buttonNon}
          title="Non"
          onPress={onPressNon}
        ></Button>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex:1,
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
  buttonOui: {
    fontSize: 16,
    textColor: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    marginTop: 8,
    marginBottom: 10,
  },

  buttonNon: {
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
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    margin: 5,
    position: 'relative',
    top: 0,
    left: 0,
    opacity: '0.5',
  },
  error: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'red',
  },
})
