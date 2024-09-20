import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { storeData } from '../local/storage-module.js';
import { apiCall, apiPost } from '../api/api-controller.js';

GoogleSignin.configure({
    webClientId: '612029047571-54dp6o7o757atf598qjj7il1mt030nan.apps.googleusercontent.com'
});

export default function LoginScreen({ navigation }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            await storeData('user', userInfo);
            navigation.navigate('HomeScreen');
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login');
            } else {
                console.log('Error logging in', error);
            }
        }
    };

    const handleSubmit = async () => {
        const user = { username, password };
        // Assume your API call here to authenticate user
        let response = await apiPost('users/login', JSON.stringify(user))

        response = await response.json();
        if (response.user) {
            await storeData('user', response.user);
            navigation.navigate('HomeScreen');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>DressIt</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.link}>Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <Button title="Iniciar sesión" onPress={handleSubmit} />
            <View style={styles.divider}>
                <Text>o</Text>
            </View>
            <TouchableOpacity style={styles.googleLogin} onPress={handleGoogleLogin}>
                <Image source={{ uri: 'https://path-to-google-icon.png' }} style={styles.googleIcon} />
                <Text>Usar Google</Text>
            </TouchableOpacity>
            <Text>¿No tienes cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    loginContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        marginTop: 40,
        fontFamily: 'Montserrat',
        letterSpacing: -8,
        fontSize: 48, // 4em in web approx.
        color: '#000000',
        animation: 'slideIn 1s ease-out', // For the slide-in animation, you'll need to handle this with `Animated` in React Native
    },
    form: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        width: '60%',
        height: 30,
        marginTop: 20,
        fontSize: 14, // 0.8em in web approx.
        paddingLeft: 5,
    },
    placeholder: {
        fontWeight: '600',
    },
    button: {
        fontFamily: 'Montserrat',
        width: '60%',
        letterSpacing: -2,
        height: 40,
        fontWeight: '600',
        backgroundColor: '#000000',
        color: 'white',
        fontSize: 24, // 1.5em in web approx.
        marginTop: 20,
        paddingLeft: 5,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    link: {
        cursor: 'pointer',
        textAlign: 'right',
        textDecorationLine: 'none',
        color: '#2170E8',
        marginTop: 3,
        fontSize: 16, // 0.9em in web approx.
        fontFamily: 'Roboto',
    },
    divider: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 40,
        marginTop: 50,
    },
    dividerLine: {
        height: 1,
        width: '45%',
        backgroundColor: '#000000',
    },
    logExtern: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 40,
        cursor: 'pointer',
        marginBottom: 20,
        padding: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000',
    },
    logExternText: {
        marginLeft: 20,
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    logExternImage: {
        marginLeft: 5,
        position: 'absolute',
        width: 30,
        height: 30,
        left: 0,
    },
    h2: {
        fontSize: 18, // 1.3em in web approx.
        fontFamily: 'Roboto',
        fontWeight: '500',
    },
    buttonLink: {
        fontFamily: 'Montserrat',
        width: '40%',
        letterSpacing: -2,
        height: 40,
        fontWeight: '600',
        textDecorationLine: 'none',
        backgroundColor: '#000000',
        color: 'white',
        fontSize: 24, // 1.5em in web approx.
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginGoogle: {
        width: '40%',
        height: 40,
        opacity: 0, // Hide the Google button as in web with z-index
        position: 'absolute',
        zIndex: 1000,
    },
    // To mimic the keyframes slide-in animation, you can use React Native's `Animated` API
});