import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  // Dimensions,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";

// SplashScreen.preventAutoHideAsync();

async function loadApplication() {
  await Font.loadAsync({
    Oswald: require("./src/fonts/Oswald/Oswald-VariableFont_wght.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  function keyboardHide() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => keyboardHide()}>
        <ImageBackground
          style={styles.image}
          source={require("./src/images/background.png")}
        >
          <RegistrationScreen
          ></RegistrationScreen>
        </ImageBackground>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
