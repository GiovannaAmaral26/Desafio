import React from "react";
import { View, Text, Image } from "react-native";


export default function Lista(){



return(
  <View>
    <Text>Meus Filmes e Séries Favoritos</Text>
        <View>
          <Image source={require('../assets/image/Breaking.jpg')}/>
        </View>
  </View>
  )
}
