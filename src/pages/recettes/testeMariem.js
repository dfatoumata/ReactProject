import  React,  {  Component  }  from  'react';
import  {  StyleSheet,  Text,  View}  from  'react-native';

const TesteMariem= () =>{

return (
    <View  style={styles.container}>
        <Example  style={{borderRadius:  20}}>

        <CenteredText>
    
        Example  1:{"\n"}4  Rounded  Corners
        
        </CenteredText>
        </Example>

</View>
);
}

const  Example  =  (props)  =>  (
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
flex:  1, flexDirection:  'row', flexWrap:  'wrap', marginTop:  75
},
example:  {
width:  '90%',
height:  120,
marginLeft:  20,
marginBottom:  20, backgroundColor:  'grey', borderWidth:  2, justifyContent:  'center'
},
centeredText:  { textAlign:  'center', margin:  10
}
});
export default TesteMariem;