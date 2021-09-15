import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { db } from "../components/firebase";

const Accueil = () => {
  const [recettes, setRecettes] = useState([]);
  // let newRecette = {
  //   titre,
  //   notes,
  //   niveau,
  //   favoris,
  //   duree,
  //   tempsRepos,
  //   tempsPreparation,
  //   tempsCuisson,
  //   image,
  //   ingredients: [
  //     {
  //       mesure,
  //       nom,
  //       quantite,
  //     },
  //   ],
  //   commentaires: [
  //     {
  //       noteurNom,
  //       note,
  //       description,
  //       date,
  //     },
  //   ],
  //   preparation: [""]
  // };
  useEffect(() => {
    const fetchRecettes = async () => {
      const snapshot = await db.collection("cooks").get();

      const receivedRecettes = snapshot.docs.map((document) => {
        return {
          ...document.data(),
          id: document.id,
        };
      });
      setRecettes(receivedRecettes);
    };

    // j'appel la fonction asynchrone
    fetchRecettes();
    console.log(fetchRecettes());
  }, []);
  useEffect(() => {
    const addRecettes = async () => {
      db.collection("favoris")
        .add({})
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    };
  }, []);

  return (
    <View>
      <Text>Accueil</Text>
    </View>
  );
};

export default Accueil;
