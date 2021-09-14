import React, { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import auth from "../components/firebase";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);

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

  return (
    <View style={styles.container}>
      <Text>Connexion</Text>
      <View>
        <Text>Email :</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.textInput}
        />
      </View>
      <View>
        <Text>Mot de passe :</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

export default Connexion;
const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 349,
    left: 0,
    top: 159,

    backdropFilter: blur(4),
  },
  Image: {
    flex: 1,
    justifyContent: "center",
    opacity: "0,15",
  },

  textInput: {
    backgroundColor: "white",
    color: "black",
    margin: 5,
    padding: 15,
  },
  button: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    marginTop: 8,
    marginBottom: 10,
  },

  success: {
    textAlign: "center",
    color: "green",
    fontSize: 15,
    fontWeight: "bold",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
});
