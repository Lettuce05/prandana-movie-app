import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    Dimensions, 
    TouchableOpacity,
    Image
} from 'react-native';
import colors from '../assets/colors/colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = ({navigation, route}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.statusBar}></View>
            <ImageBackground
                source={require('../assets/images/signin_cover.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <TouchableOpacity style={styles.guestButtonWrapper}>
                        <Text style={styles.guestButtonText}>As Guest</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={styles.signinWrapper}>
                <Image 
                    source={require('../assets/images/signin_logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.signinPromptText}>By creating an account you get access to an unlimited number of movies</Text>
                <TouchableOpacity style={styles.signinButtonWrapper}>
                    <Text style={styles.signinButtonText}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButtonWrapper} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.signupButtonText}>Sign up</Text>
                </TouchableOpacity>
                <View style={styles.buttonSpacer}></View>
                <TouchableOpacity style={styles.signupFBButtonWrapper}>
                    <Text style={styles.signupFBButtonText}>Sign in with Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    statusBar: {
        backgroundColor: colors.white,
        width: '100%',
        height: 44
    },
    overlay: {
        backgroundColor: 'rgba(255,255,255, 0.8)',
        width: '100%',
        height: '100%',
        alignItems: 'flex-end'
    },
    backgroundImage: {
        width: windowWidth,
        height: windowHeight * 0.4,
    },
    guestButtonWrapper: {
        backgroundColor: colors.white,
        width: 125,
        height: 45,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginRight: 20,
        borderColor: colors.gray,
        borderWidth: 1
    },
    guestButtonText: {
        color: colors.black,
        fontSize: 16,
        fontFamily: 'SF-Pro-Text-Regular'
    },
    signinWrapper: {
        marginTop: -10,
        alignItems: 'center',
        marginHorizontal: 20
    },
    logo: {
        height: 24,
        width: 141
    },
    signinPromptText: {
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: 'rgba(28,34,56, 0.37)'
    },
    signinButtonWrapper: {
        height: 55,
        width: 316,
        backgroundColor: colors.red,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    signinButtonText: {
        color: colors.white,
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 16,
    },
    signupButtonWrapper: {
        height: 55,
        width: 316,
        backgroundColor: colors.porcelain,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    signupButtonText: {
        color: colors.blue,
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 16
    },
    signupFBButtonWrapper: {
        height: 55,
        width: 316,
        backgroundColor: colors.fbBlue,
        borderRadius: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupFBButtonText: {
        color: colors.white,
        fontFamily: 'SF-Pro-Text-Semibold',
        fontSize: 16
    },
    buttonSpacer: {
        width: 315,
        height: 1,
        backgroundColor: colors.gray,
        marginBottom: 20
    }
})

export default SignIn;