import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const Preparation= (props) => {
     
    const tabIngedients = ["200g farine ",
                           " 300 ml lait",
                           "40 g sucre "];
      
    
    return (

        <View  style={styles.container}>
        <Tab  style={{borderRadius:  20}}>

        <CenteredText>
    
        Temps Total: {props.prep.temps} mnt
        <br/>  
        <br/> 
        <Text style ={{margin : 10}}>
            preparation : {props.prep.prepar} mnt      
        </Text>
        <Text style ={{margin : 10}}>
        Repos : {props.prep.repos} mnt
        </Text>    
        <Text style ={{margin : 10}}>
        
        Cuisson : {props.prep.cuisson} mnt    
        </Text> 
        </CenteredText>
        </Tab>

</View>
);
}

const  Tab  =  (props)  =>  (
<View  style={[styles.example,props.style]}>
{props.children}
</View>
);
const  CenteredText  =  (props)  =>  (
<Text  style={[styles.centeredText,  props.style]}>
{props.children}
</Text>
);
const  styles  =  StyleSheet.create({ container:  {
flex:  1, flexDirection:  'row', flexWrap:  'wrap'
},
example:  {
width:  '90%',
height:  120,
marginLeft:  20,
marginBottom:  20, backgroundColor:  'white', borderWidth:  2, justifyContent:  'center'
},
centeredText:  { textAlign:  'center' 
}
});
  
export default Preparation;
