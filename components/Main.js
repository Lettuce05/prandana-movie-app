import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import colors from '../assets/colors/colors';

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
      <Tab.Navigator
        style={styles.container}
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  tabBarStyle: {
    height: 63,
    borderRadius: 63,
    marginHorizontal: 20,
    marginBottom: 40,
    backgroundColor: colors.porcelain
  }
})

export default Main;
