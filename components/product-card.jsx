import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producto({ backgroundImageUrl, precio, titulo }) {
  return (
    <View style={styles.producto}>
      <View style={styles.productoImg}>
        <Image source={{ uri: backgroundImageUrl }} style={styles.imagen} />
        <Text style={styles.precio}>${precio}</Text>
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  producto: {
    width: '50%',
    height: 400,
    margin: 5,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 2,
  },
  productoImg: {
    width: '100%',
    height: '80%',
    position: 'relative',
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 16 / 9,
  },
  precio: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#EDE8D0',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  titulo: {
    textAlign: 'center',
    fontFamily: 'roboto-regular',
    fontSize: 16,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
