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
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./src/images/pexels-lukas-669576.jpg")}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <View
            style={{
              ...styles.form,
              ...Platform.select({
                ios: { marginBottom: isShowKeyboard ? 100 : 0},
                android: {},
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
              <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>

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
  form: {
    marginHorizontal: 40,
    // ...Platform.select({
    //   ios: { marginBottom: 100 },
    //   android: {},
    // }),
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
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 60,
    backgroundColor: "#000",
  },
  buttonText: {
    color: "#fff",
  },
});
