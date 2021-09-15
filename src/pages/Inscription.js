import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Redirect } from "react-router-native";
import { auth } from "../components/firebase";

const Inscription = () => {
  const SENDING_STEPS = {
    NONE: "NONE",
    VALIDATION: "VALIDATION",
    SEND_DATA: "SEND_DATA",
  };
  const [emailField, setEmailField] = useState({ value: "", error: "" });
  const [passwordField, setPasswordField] = useState({ value: "", error: "" });
  const [confirmPasswordField, setConfirmPasswordField] = useState({
    value: "",
    error: "",
  });
  const [formError, setFormError] = useState("");
  const [step, setStep] = useState(SENDING_STEPS.NONE);
  useEffect(() => {
    if (step !== SENDING_STEPS.VALIDATION) return;
    const validateEmail = () => {
      let valid = true;
      if (!emailField.value) {
        setEmailField({
          value: emailField.value,
          error: "Vous devez renseigner un email",
        });
        valid = false;
      }
      if (!/^[^@]+@[^.]+\.[a-zA-Z0-9]+/.test(emailField.value)) {
        setEmailField({
          value: emailField.value,
          error: "Vous devez renseigner un email valide",
        });
        valid = false;
      }
      return valid;
    };
    const validatePasswords = () => {
      let valid = true;
      if (!passwordField.value) {
        setPasswordField({
          value: passwordField.value,
          error: "Vous devez renseigner un mot de passe",
        });
        valid = false;
      }
      if (!confirmPasswordField.value) {
        setConfirmPasswordField({
          value: confirmPasswordField.value,
          error: "Vous devez répéter le mot de passe",
        });
        valid = false;
      }
      if (passwordField.value !== confirmPasswordField.value) {
        setFormError("Vos deux mots de passe doivent correspondre");
        valid = false;
      }
      return valid;
    };
    setFormError("");
    let validEmail = validateEmail();
    let validPassword = validatePasswords();
    if (validEmail && validPassword) {
      setStep(SENDING_STEPS.SEND_DATA);
    } else {
      setStep(SENDING_STEPS.NONE);
    }
  }, [step]);

  useEffect(() => {
    if (step !== SENDING_STEPS.SEND_DATA) return;
    const sendToFirebase = async () => {
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
          emailField.value,
          passwordField.value
        );
        console.warn(userCredential);
        setStep(SENDING_STEPS.NONE);
        if (userCredential.user.email) return <Redirect to="/connexion" />;
      } catch (e) {
        setFormError(e.message);
        setStep(SENDING_STEPS.NONE);
      }
    };
    sendToFirebase();
  }, [step]);

  const changeField = (setField) => (value) =>
    setField({
      error: "",
      value,
    });
  return (
    <View>
      Inscription
      <Text>Inscription</Text>
    </View>
  );
};

export default Inscription;
