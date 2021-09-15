import React from 'react'
import { Button } from 'react-native-elements/dist/buttons/Button'


  const [emailField, setEmailField] = useState({ value: '', error: '' })
  const [nomUtilsateur, setNomUtilsateur] = useState({ value: '', error: '' })
  const [changePasswordField, setChangePasswordField] = useState({value: '', error: '',})
  const [formError, setFormError] = useState('')
 // const [step, setStep] = useState(SENDING_STEPS.NONE)

export default  () => {
    return (
        <View>
           <View style={styles.container}>
    <ImageBackground source={image} style={styles.imageB} resizeMode="cover" />
    <View>
        <Button 
        title = 'Mes recettes'
        color = 'gray' 
        style={styles.button}>
        </Button>
        <Button 
        title = 'Mes favoris'
        color = 'gray' 
        style={styles.button}>
        </Button>
        
      </View>
      <View>
        <Text style={styles.textLabel}>Email :</Text>
        {!!emailField.error && (
          <Text style={styles.error}>{emailField.error}</Text>
        )}
        <TextInput
          value={emailField.value}
          style={styles.textInput}
          // onChangeText :: String -> Void
          //onChangeText={changeField(setEmailField)} 
          />
      </View>
      <View>
        <Text style={styles.textLabel}>Nom d'utilisateur :</Text>
        {!!nomUtilsateur.error && (
          <Text style={styles.error}>{nomUtilsateur.error}</Text>
        )}
        <TextInput
          value={nomUtilsateur.value}
          style={styles.textInput}
          //onChangeText={changeField(setPasswordField)} 
          />
      </View>
      <View>
        <Text style={styles.textLabel}>Nouveau mot de passe :</Text>
        {!!changePasswordField.error && (
          <Text style={styles.error}>{changePasswordField.error}</Text>
        )}
        <TextInput
          value={changePasswordField.value}
          style={styles.textInput}
          //onChangeText={changeField(setConfirmPasswordField)} 
          />
      </View>

         <View>
        <Button 
        title = 'Mise à jour de mes recettes'
        color = 'gray' 
        style={styles.button}>
        </Button>
        
      </View>
    </View> 
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundImage: '#B8AE57'
    }, 
    textInput: {
      backgroundColor: 'white',
      color: 'black',
      marginLeft: 15,
      marginRight: 15,
      padding: 15,
      marginBottom: 0,
      
    },
    textLabel: {
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 15,
      marginRight: 15,    
      padding: 15,
    },
    button: {
      textColor: 'gray',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 20,
      padding: 15,
      marginTop: 8,
      marginBottom: 10,
    },
    imageB: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: '100%',
      position: 'absolute', 
      top: 0,
      left: 0,
      opacity: '0.5'
    },
    error: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'red',
    },
  })

