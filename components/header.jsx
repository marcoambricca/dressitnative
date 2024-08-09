import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
export default function Navbar({ isHome }){
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>DressIt</Text>
        {!isHome && (
          <TouchableOpacity onPress={navigation.goBack}>
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    margin: 0,
    padding: 0
  }
});