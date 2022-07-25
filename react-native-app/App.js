import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./src/images/background-6556393_1280.jpg")}
      >
        <Text style={styles.title}>your aapp!</Text>
        <TextInput style={styles.input} />
      </ImageBackground>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    color: "#fff",
    borderRadius: 10,
    fontSize: 25,
  },
});
