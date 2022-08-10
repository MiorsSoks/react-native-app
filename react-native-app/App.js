import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  function keyboardHide() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=> keyboardHide()}>
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
                  ios: { marginBottom: isShowKeyboard ? 100 : 0 },
                  android: { marginBottom: isShowKeyboard ? 100 : 0 },
                }),
              }}
            >
              <View>
                <Text style={styles.inputTitle}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.7}
                  onPress={() => keyboardHide()}
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
