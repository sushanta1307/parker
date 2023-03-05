import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.footer}>
      <Text style={styles.headerPrimary}>Parker</Text>
      <Text style={styles.headerSecondary}>A Parking Space Prediction App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#326ef0",
    alignItems: "center",
    justifyContent: "center",
  },
  headerPrimary: {
    fontSize: 40,
  },
  headerSecondary: {
    fontSize: 25,
  },
});
