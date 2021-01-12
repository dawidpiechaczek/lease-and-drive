import 'react-native-gesture-handler';
import { AppState } from 'react-native';
import React, { createRef, useRef, useState, useEffect } from 'react';
import HomeScreen from './screens/HomeScreen'
import InitScreen from './screens/InitScreen'
import SplashScreen from './screens/SplashScreen'
import PinScreen from './screens/PinScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [showPinScreen, setPinScreenShown] = useState(true)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === "active") {
      console.log("App has come to the foreground!");
      setPinScreenShown(true)
    } else {
      setPinScreenShown(false)
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };

  if (isLoading) {
    setTimeout(() => { setIsLoading(false) }, 1500);
    return <SplashScreen />;
  } else {
    if (showPinScreen) {
      navigate("Pin")
    }
    return (
      <>
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName="Init">
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home Screen" }} />
              <Stack.Screen name="Init" component={InitScreen} />
              <Stack.Screen name="Pin" component={PinScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </>
    );
  }
};

export const navigationRef = createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function preventBack(){
  navigation.addListener('beforeRemove', (e) => { e.preventDefault(); })
}

export default App;
