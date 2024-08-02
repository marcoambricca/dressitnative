import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Producto = ({ idcCreator, id, backgroundImageUrl, precio, titulo }) => {
    return (
        <View style={styles.producto}>
            <View style={styles.productoImg}>
                <Image source={{ uri: backgroundImageUrl }} style={styles.imagen} />
                <Text style={styles.imagenTitulo}>${precio}</Text>
            </View>
            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    producto: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 20
    },
    productoImg: {
        position: 'relative'
    },
    imagen: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        resizeMode: 'cover'
    },
    imagenTitulo: {
        position: 'absolute',
        bottom: 8,
        left: 4,
        paddingVertical: 2,
        paddingHorizontal: 10,
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#EDE8D0',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    titulo: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 16
    },
});

export default Producto;
