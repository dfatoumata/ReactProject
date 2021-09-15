
import React from "react";

import React, {useState,useEffect} from "react";
import { Text, View } from "react-native";
import { db } from "../components/firebase";

const Recette = () => {
  const [recettes, setRecettes] = useState([]);
  useEffect(() => {
    const fetchRecettes = async () => {
      const snapshot = await db.collection("cooks").get();




      const receivedRecettes = await snapshot.docs.map((document) => {

        return {
          ...document.data(),
          id: document.id,
        };
      });
      setRecettes(receivedRecettes);

      console.log(receivedRecettes);

    };

    // j'appel la fonction asynchrone
    fetchRecettes();
    console.log(fetchRecettes());
  }, []);

  return (
    <View>
      Recette
      <Text>Recette</Text>
    </View>
  );
};

export default Recette;
