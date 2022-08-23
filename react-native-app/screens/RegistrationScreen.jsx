import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  function onSubmit() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }
  return (
    <View>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
        <View
          style={{
            ...styles.form,
            ...Platform.select({
              ios: { marginBottom: isShowKeyboard ? 80 : 0 },
              android: { marginBottom: isShowKeyboard ? 80 : 0 },
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
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 40,
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
