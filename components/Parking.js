import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Parking() {
  return (
    <View style={styles.container}>
      <Text> Find the Nearest Parking Lot</Text>
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
});
