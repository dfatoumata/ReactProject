import React from "react";
import {View, Image, Button, Text } from 'react-native';
import Stars from 'react-native-stars';
const Etoiles= () => {
     
    
    return (
        
    <View style={{alignItems:'center'}}>
        <Stars
            default={2.5}
            count={5}
            half={true}
            starSize={50} 
        />
    </View>
    )
};
export default Etoiles;

