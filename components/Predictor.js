import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {} from "react-native-web";

export default function Predictor() {
  const [day, setDay] = useState(0);
  const [time, setTime] = useState(0);
  const [holiday, setHoliday] = useState(0);
  const [accuracy, setAccuracy] = useState(80);
  const [vacancy, setVacancy] = useState({ low: 20, high: 40 });
  const Predict = () => {
    // To be written
    let classLabel = 2;
    if (classLabel == 0) {
      setVacancy({ low: 80, high: 100 });
    } else if (classLabel == 1) {
      setVacancy({ low: 60, high: 80 });
    } else if (classLabel == 2) {
      setVacancy({ low: 40, high: 60 });
    } else if (classLabel == 3) {
      setVacancy({ low: 20, high: 40 });
    } else {
      setVacancy({ low: 0, high: 20 });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Day</Text>
        <Picker
          selectedValue={day}
          style={{ height: 50, width: 140 }}
          onValueChange={(itemValue, itemIndex) => setDay(itemValue)}
        >
          <Picker.Item label="Sunday" value={0} />
          <Picker.Item label="Monday" value={1} />
          <Picker.Item label="Tuesday" value={2} />
          <Picker.Item label="Wednesday" value={3} />
          <Picker.Item label="Thursday" value={4} />
          <Picker.Item label="Friday" value={5} />
          <Picker.Item label="Saturday" value={6} />
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Time(24hrs)</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTime}
          value={time}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>IsHoliday</Text>
        <Picker
          selectedValue={holiday}
          style={{ height: 50, width: 140 }}
          onValueChange={(itemValue, itemIndex) => setHoliday(itemValue)}
        >
          <Picker.Item label="No" value={0} />
          <Picker.Item label="Yes" value={1} />
        </Picker>
      </View>
      <Button onPress={Predict} title="Predict" color="#021c54" />
      <Text style={{ fontSize: 20, padding: 10 }}>
        The vacancy of the parking lot is {vacancy.low} - {vacancy.high}%. The
        model predicts the vaccancy of the parking lot with an accuracy of{" "}
        {accuracy}%.
      </Text>
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
  row: {
    flexDirection: "row",
    width: 250,
    justifyContent: "space-between",
    // backgroundColor: "red",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#c1d2f7",
    height: 40,
    width: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
