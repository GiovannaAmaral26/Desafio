import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <Text>Meus 10 Filmes + Séries favoritos</Text>
      <Image
        source={require('./assets/image/Breaking.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>

      <Image
        source={require('./assets/image/chiriro.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
        <Image
        source={require('./assets/image/Every-Day.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
        <Image
        source={require('./assets/image/me-before-you.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
        <Image
        source={require('./assets/image/Rapunzel.webp')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
         <Image
        source={require('./assets/image/sherk.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
         <Image
        source={require('./assets/image/tudo.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
         <Image
        source={require('./assets/image/Better.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
         <Image
        source={require('./assets/image/simplismente acontece.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
          <Image
        source={require('./assets/image/Supernatural.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}resizeMode="cover"/>
     
 




        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 300,
    borderRadius:12,
  
    
  },
});

export default App;