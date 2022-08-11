import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import * as SplashScreen from 'expo-splash-screen';
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

const initialState = {
  email: "",
  password: "",
};

// SplashScreen.preventAutoHideAsync();

async function loadApplication() {
  await Font.loadAsync({
    Oswald: require("./src/fonts/Oswald/Oswald-VariableFont_wght.ttf"),
  });
}

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  // const [demensions, setDemensions] = useState(Dimensions.get('window').width - 20 * 2)

  // useEffect(() => {
  //   onChange = () => {
  //     const width = Dimensions.get('window').width - 20 * 2;
  //     console.log('width', width);
  //     setDemensions(width)
  //   }
  //   Dimensions.addEventListener('change', onChange)
  //   return () => {EventSubscription.remove('change', onChange)}
  // }, [Dimensions]);

  function onSubmit() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

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
          source={require("./src/images/pexels-lukas-669576.jpg")}
        >
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome to "My progress"!</Text>
            <Text style={styles.headerText}>Please sign in or register</Text>
          </View>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            <View
              style={{
                ...styles.form,
                ...Platform.select({
                  ios: { marginBottom: isShowKeyboard ? 80 : 0 },
                  android: { marginBottom: isShowKeyboard ? 80 : 0 },
                  // width: demensions,
                }),
              }}
            >
              <View>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.password}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.7}
                  onPress={() => onSubmit()}
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
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
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 100,
  },
  headerText: {
    fontSize: 30,
    fontFamily: "Oswald",
    fontSize: 30,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    fontSize: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
  input: {
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
    height: 40,
    borderRadius: 6,
    fontSize: 20,
    color: "#fff",
  },
  button: {
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 60,
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
  },
});
