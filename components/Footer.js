import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Home from "./Home";
import Parking from "./Parking";
import Predictor from "./Predictor";
import Pricing from "./Pricing";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={()=><Home />}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/homeIcon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=><Parking />}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/parkingLot.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=><Predictor />}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/predictor.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=><Pricing />}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/price.png")}
        />
      </TouchableOpacity>
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
  footer: {
    backgroundColor: "#6e99f5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 45,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});
