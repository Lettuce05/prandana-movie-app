import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from './assets/colors/colors';
import SignIn from './components/SignIn';
import Main from './components/Main';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import SignUp from './components/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const handleSignIn = () => {
    setIsSignedIn(true);
  }

  let [fontsLoaded] = useFonts({
    'SF-Pro-Text-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
    'SF-Pro-Text-BoldItalic': require('./assets/fonts/SF-Pro-Text-BoldItalic.otf'),
    'SF-Pro-Text-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF-Pro-Text-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  });



  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
          >
            {isSignedIn ? (
              <>
                <Stack.Screen name="Main" component={Main}/>
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} options={({navigation, route}) => ({
                  handleSignIn: () => handleSignIn()
                })} />
                <Stack.Screen name="SignUp" component={SignUp} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
});
