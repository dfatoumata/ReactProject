import React from "react";
import { StyleSheet, View, Image, Button, Text } from 'react-native';

const Ingredients= () => {
     
    const tabIngedients = ["200g farine ",
                           " 300 ml lait",
                           "40 g sucre "];
      
    
    return (
        <ul>
        {tabIngedients.map((reptile) => (
          <li>{reptile}</li>
        ))}
      </ul>
    )
};
export default Ingredients;

