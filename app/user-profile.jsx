import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import Header from '../components/header.jsx';
import NavBar from '../components/navbar.jsx';

export default function UserProfileScreen({ navigation }){
    return(
        <View>
            <Header />
            <Text>User Profile</Text>
            <NavBar />
        </View>
    )
}