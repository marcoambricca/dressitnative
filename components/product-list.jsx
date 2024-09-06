import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Producto from './product-card.jsx';

export default function ProductList({ navigation, array }){
    if (array.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text>No products found</Text>
            </View>
        );
    }
    
    const { width } = useWindowDimensions(); // Get screen width
    const baseItemWidth = 160; // Adjust the base width to allow more columns
    const numColumns = Math.floor(width / baseItemWidth); // Dynamically calculate the number of columns
    const itemWidth = width / numColumns - 16; // Calculate item width with some margin
    const itemHeight = numColumns > 1 ? 290 : 400; // Set item height based on the number of columns

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.grid}>
                {array.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() =>
                            navigation.navigate('WearDetail', {
                                id: item.id,
                                titulo: item.name,
                                backgroundImageUrl: item.imgPath,
                                precio: item.price,
                            })
                        }
                        style={{ width: itemWidth, marginBottom: 16 }} // Adjust margin between items
                    >
                        <Producto
                            backgroundImageUrl={item.imgPath}
                            precio={item.price}
                            titulo={item.name}
                            itemWidth={itemWidth}
                            itemHeight={itemHeight}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        alignItems: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginRight: 12,
        marginTop: 8
    },
});

