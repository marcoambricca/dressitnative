import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../../components/header.jsx';
import NavBar from '../../components/navbar.jsx';

export default function PrendaDetail({ route }) {
  const { id, titulo, backgroundImageUrl, precio } = route.params;  
  
  const irALink = () => {
    console.log('ir a link');
  }

  const irAProbar = () => {
    console.log('ir a probar');
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <ImageBackground
          source={{ uri: backgroundImageUrl }}
          style={styles.prendaImage}
          resizeMode="cover"
        />
        <Text style={styles.name}>{titulo}</Text>
        <Text style={styles.price}>${precio}</Text>
        <TouchableOpacity
          style={styles.buttonCeleste}
          onPress={() => irALink()}
        >
          <Text style={[styles.buttonText, {color: 'black'}]}>Pagina del producto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNegro}
          onPress={() => irAProbar()}
        >
          <Text style={styles.buttonText}>Probar</Text>
        </TouchableOpacity>
      </ScrollView>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 60, // Extra space for the NavBar
  },
  prendaImage: {
    width: '90%', // Adjust width to fit within the container
    aspectRatio: 3 / 4, // Maintains a vertical rectangle aspect ratio
    resizeMode: 'contain', // Ensures the image scales properly
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  price: {
    fontSize: 20,
    color: 'gray',
    fontFamily: 'Montserrat',
    marginBottom: 15,
  },
  buttonCeleste: {
    backgroundColor: 'white',
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonNegro: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
