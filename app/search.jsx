import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import apiCall from '../api/api-controller.js';
import ProductList from '../components/product-list.jsx';
import Header from '../components/header.jsx';
import NavBar from '../components/navbar.jsx';

const Search = ({ navigation }) => {
    const [busqueda, setBusqueda] = useState({ prendas: [], marcas: [] });
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const fetchResults = useCallback(async () => {
        if (!query) return;
        
        setLoading(true);
        try {
            const response = await apiCall(`wear/search/${query}/${offset}/12`);
            const data = response;
            console.log('search response length', response.prendas.length)
            
            if (data && data.prendas && data.marcas) {
                setBusqueda(prev => ({
                    prendas: offset === 0 ? data.prendas : [...prev.prendas, ...data.prendas],
                    marcas: data.marcas
                }));
                setOffset(prev => prev + 6);
            }
        } catch (error) {
            console.error('Error en la búsqueda:', error);
        } finally {
            setLoading(false);
        }
    }, [query, offset]);

    const handleChange = (text) => {
        setQuery(text);
        if (text === '') {
            setBusqueda({ prendas: [], marcas: [] });
            setOffset(0);
        } else {
            setOffset(0);
            fetchResults();
        }
    };

    const deleteSearch = () => {
        setQuery('')
    }
    
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.input}
                        placeholder='Buscar'
                        onChangeText={handleChange}
                        value={query}
                    />
                    <Text style={styles.cancelText} onPress={deleteSearch}>Cancelar</Text>
                </View>

                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <View style={styles.marcas}>
                        <Text style={styles.sectionTitle}>Marcas</Text>
                        {/*busqueda.marcas*/}
                    </View>

                    <View style={styles.prendas}>
                        <Text style={styles.sectionTitle}>Prendas</Text>
                        <ProductList navigation={navigation} array={busqueda.prendas} />
                    </View>

                    {loading && (
                        <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    )}
                </ScrollView>
            </View>
            <NavBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        paddingHorizontal: 12
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontWeight: '700',
        color: 'black',
        backgroundColor: 'rgba(228, 228, 228, 0.5)',
        borderRadius: 50,
    },
    cancelText: {
        marginLeft: 16,
        color: 'blue',
    },
    marcas: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        paddingHorizontal: 10,
        marginLeft: 10
    },
    prendas: {
        marginBottom: 16,
        marginRight: 10,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    loading: {
        alignItems: 'center',
        marginTop: 16,
    },
});

export default Search;
