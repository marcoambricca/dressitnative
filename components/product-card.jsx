import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Producto({ backgroundImageUrl, precio, titulo, itemWidth, itemHeight }) {
  const imageHeight = itemHeight === 250 ? '78%' : '85%';
  
  return (
    <View style={[styles.producto, { width: itemWidth, height: itemHeight }]}>
      <View style={[styles.productoImg, {height: imageHeight}]}>
        <Image source={{ uri: backgroundImageUrl }} style={styles.imagen} />
        <Text style={styles.precio}>${precio}</Text>
      </View>
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  producto: {
    margin: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 3, // Add some shadow for better visibility
  },
  productoImg: {
    width: '100%',
    position: 'relative',
  },
  imagen: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Cover ensures the image fully covers the container
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
    fontSize: 14,
    marginTop: 8,
    paddingHorizontal: 8,
    color: '#333', // Darker color for better contrast
  },
});