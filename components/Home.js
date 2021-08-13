import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import colors from '../assets/colors/colors';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Home
