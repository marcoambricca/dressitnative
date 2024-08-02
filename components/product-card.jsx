import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const itemWidth = (width - 30) / 2; // Adjusted for margins
const itemHeight = height * 0.45; // 85% of the window height

const Producto = ({ idCreator, id, backgroundImageUrl, precio, titulo }) => {
    return (
        <View style={styles.producto}>
            <View style={styles.productoImg}>
                <Image source={{ uri: backgroundImageUrl }} style={styles.imagen} />
                <Text style={styles.precio}>${precio}</Text>
            </View>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    producto: {
      width: itemWidth,
      height: itemHeight,
      margin: 5,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    productoImg: {
      width: '100%',
      height: '80%', // Take up most of the container height
      position: 'relative',
    },
    imagen: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Ensure image fits within the container
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
      fontFamily: 'Roboto',
      fontSize: 16,
      marginTop: 20,
      paddingHorizontal: 7,
    },
});

export default Producto;
