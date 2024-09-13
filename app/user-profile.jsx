import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/header.jsx';
import NavBar from '../components/navbar.jsx';

export default function UserProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.profileContent}>
                    <Text style={styles.profileText}>User Profile</Text>
                </View>
            </ScrollView>
            <NavBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    profileContent: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});