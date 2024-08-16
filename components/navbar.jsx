import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook
import HomeIcon from '../assets/icons/home.png';
import SearchIcon from '../assets/icons/search.png';
import ProfileIcon from '../assets/icons/profile.png';

export default function NavBar() {
    const navigation = useNavigation(); // Get the navigation object

    const handleSearchClick = () => {
        navigation.navigate('Search');
    };

    const handleHomeClick = () => {
        navigation.navigate('Home');
    };

    const handleProfileClick = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.nav}>
            <TouchableOpacity style={styles.home} onPress={handleHomeClick}>
                <Image source={HomeIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.search} onPress={handleSearchClick}>
                <Image source={SearchIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profile} onPress={handleProfileClick}>
                <Image source={ProfileIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        width: '100%',
        position: 'sticky',
        bottom: 0,
        zIndex: 1000,
        flexDirection: 'row',
    },
    search: {
        marginHorizontal: 50,
        backgroundColor: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: 60,
        height: 60,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100000000,
        marginTop: -65,
    },
    home: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        width: 30,
        height: 30,
    }
});
