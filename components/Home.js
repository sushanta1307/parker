import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  Alert,
  View,
} from "react-native";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = () => {
    Alert.alert("Signed Up Successfully");
  };
  const Login = () => {
    Alert.alert("Logged in Successfully");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.normal}>
        The app is made to help people to get the parking space availability at
        a particular point of time of the day. The accuracy of the prediction is
        more than 80%. You can also get the estimated parking ticket price using
        our app. All you need is to register or sign in and start availing the
        services smoothly.
      </Text>
      <Text style={styles.normal}>Enter Your email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      <Text style={styles.normal}>Enter Your Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
      />
      <View style={styles.fixToText}>
        <Button onPress={SignUp} title="SignUp" color="#021c54" />
        <Button onPress={Login} title="Login" color="#021c54" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#326ef0",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "#c1d2f7",
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  normal: {
    fontSize: 20,
  },
  fixToText: {
    flexDirection: "row",
    width: 250,
    justifyContent: "space-between",
  },
});
