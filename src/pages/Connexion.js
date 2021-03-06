 
import color from "color";

import React, { useEffect, useState, useContext } from "react";

import {
  ImageBackground,
 
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { Redirect } from "react-router-native";
import auth from "../components/firebase";
import { IsConnectedContext } from "../components/IsConnectedContext";


const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const image = {
    uri: "https://images-ext-2.discordapp.net/external/M4LzcSUMkf-LCEG4JW30_2IjFIXpga_ro16h08QT2ns/%3Falt%3Dmedia%26token%3Dd179cdf9-3ea0-4798-8314-96afa54968bb/https/firebasestorage.googleapis.com/v0/b/cookthat-8cd9b.appspot.com/o/PouletSauceMoutarde.jpg",
  };

  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isConnected, setIsConnected] = useContext(IsConnectedContext);

  useEffect(() => {
    if (sending === false) return;
    setSuccessMessage("");
    setErrorMessage("");

    const authenticate = async () => {
      try {
        const userCredential = await auth.signInWithEmailAndPassword(
          email,
          password
        );

        setSuccessMessage(`Bienvenue ${userCredential.user.email} :)`);

        setTimeout(() => {
          setIsConnected(true);
        }, 1000);
      } catch (e) {
        setErrorMessage(e.message);
      }

      setSending(false);
    };

    authenticate();
  }, [sending]);

  // ACTIONS
  const onPress = () => {
    setSending(true);
  };
 if (isConnected) return <Redirect to="/bienvenue" />;
  return (
    <View style={styles.container}>

      <ImageBackground
        style={styles.ImageBackground}
        source={image}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View> 
            <Text style={styles.text}> Connexion </Text>
          
            <View>
              <Text style={styles.Text}>Email :</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.textInput}
              />
            </View>
            <View>
              <Text  style={styles.Text} >Mot de passe :</Text>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={styles.textInput}
              />
            </View>
          </View>
          <View >
            <Button titleStyle={ {color:"green"}} title="Connexion" style={styles.button} />
            <Button titleStyle={ {color:"blue"}}  title="Cr??er un compte" style={styles.button} />
          </View>
      </View>
      </ImageBackground>

    </View>
  );
};

export default Connexion;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    backdropFilter: blur(4),
    marginBottom :'20%'

  },
  
  content: {
   // marginBottom: '50%',
    marginTop: '20%',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.7
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',

    backdropFilter: blur(4),
  },
  Image: {
    flex: 1,
    justifyContent: "center",
    opacity: "0,15",

  },

  text: {
    margin: '5%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
 
  },
  Text: {
    margin: '5%',
  },
  textInput: {

    margin: '5%',
    backgroundColor: 'white',
    color: 'black',
    padding: 15,
  },

  button: {
    margin: '20%',
    flex: 1,
   // backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  
    padding: 15
  },

  success: {
    textAlign: "center",
    color: "green",
    fontSize: 15,

    fontWeight: 'bold'

  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: 15,
    fontWeight: 'bold'
  },

});
