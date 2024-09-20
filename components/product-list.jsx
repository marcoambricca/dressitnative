import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Producto from './product-card.jsx';

export default function ProductList({ navigation, array }) {
    const { width } = useWindowDimensions();
    const baseItemWidth = 160;
    const numColumns = Math.floor(width / baseItemWidth);
    const itemWidth = width / numColumns - 16;
    const itemHeight = numColumns > 1 ? 290 : 400;

    return array.length === 0 ? (
        <View style={styles.emptyContainer}>
            <Text>No products found</Text>
        </View>
    ) : (
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
                        style={{ width: itemWidth, marginBottom: 16 }}
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
    
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        marginBottom: 50
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 8,
    },
    emptyContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});