// App.js

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Producto from '../components/product-card.jsx';
import apiCall from '../api/api-fetch.js';
import WearDetail from './wear/[id].jsx';

const Stack = createStackNavigator();

export default function App() {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
      'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
    });
  };

  useEffect(() => {
    async function fetchWear() {
      const wear = await apiCall('wear');
      await fetchFonts();
      setPrendas(wear);
      setLoading(false);
    }
    fetchWear();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('WearDetail', { id: item.id, titulo: item.name, backgroundImageUrl: item.imgPath, precio: item.price })}>
        <Producto
          id={item.id}
          backgroundImageUrl={item.imgPath}
          precio={item.price}
          titulo={item.name}
        />
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={prendas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'DressIt',
            headerTitleAlign: 'center',
            headerStyle: styles.header
          }}
        />
        <Stack.Screen
          name="WearDetail"
          component={WearDetail}
          options={({ route }) => ({
            title: 'DressIt',
            headerStyle: styles.header,
            headerTitleAlign: 'center'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    fontFamily: 'roboto-regular',
    padding: 0
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginBottom: 0
  }
});