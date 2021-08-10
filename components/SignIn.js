import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = () => {

    

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/signin_cover.png')}
                style={styles.backgroundImage}
            >
            <TouchableOpacity style={styles.guestButtonWrapper}>
                <Text style={styles.guestButtonText}>As Guest</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: windowWidth,
        height: windowHeight * 0.6,
        alignItems: 'flex-end'
    },
    guestButtonWrapper: {
        backgroundColor: colors.white,
        width: 125,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 20
    },
    guestButtonText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'SF-Pro-Text-Regular'
    },
})

export default SignIn;