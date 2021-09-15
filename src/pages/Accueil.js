import React from 'react'
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

const onPress = () => {}

export default function Accueil() {
  return (
    <View>
      <Text>Accueil</Text>
      <Button
        title = "Inscription"
        color = '#688649' 
        onPress = {onPress}
      >
        
      </Button>
    </View>
  );
};

