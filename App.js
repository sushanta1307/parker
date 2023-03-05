import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Predictor from "./components/Predictor";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style={{ backgroundColor: "#61dafb" }} /> */}
      <Header />
      {/* <Home /> */}
      {/* <Pricing /> */}
      <Predictor />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 41,
    flex: 1,
    backgroundColor: "#326ef0",
    alignItems: "center",
    justifyContent: "center",
  },
});
