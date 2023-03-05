import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button } from "react-native";

export default function Pricing() {
  const [price, setPrice] = useState(100);
  const [demand, setDemand] = useState(1);
  const [hours, setHours] = useState(1);
  const [priceRange, setPriceRange] = useState({a: 0, b: 0})
  const calculatePrice = () => {
    let a = 80*hours;
    let b = a + demand*20;
    if(hours>4){
      a = 0.85*a;
      b = 0.85*b;
    }
    else if(hours>2){
      a = 0.9*a;
      b = 0.9*b;
    }
    setPriceRange({a, b});

  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20 }}>
        The normal price is 100 rupees per hour. 10% discount on parking for more than 2 hrs and 15% discount on parking ofr more than 4 hrs.
      </Text>
      <Text style={{ fontSize: 20 }}>Normal Price: </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={price}
        onChangeText={setPrice}
        placeholder="price"
      />
      <Text style={{ fontSize: 20 }}>Demand Class of Parking: </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={demand}
        onChangeText={setDemand}
        placeholder="demandClass i.e. 0, 1, 2, 3, 4"
      />
      <Text style={{ fontSize: 20 }}>Hours for which Parking Required: </Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={hours}
        onChangeText={setHours}
        placeholder="hours"
      />
      <Button onPress={calculatePrice} title="Calculate" color="#021c54" />
      <Text style={{ fontSize: 20 }}>
        So, the price range will be between {priceRange.a} to {priceRange.b} rupees only.
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
  normal: {
    fontSize: 20,
  },
  input: {
    backgroundColor: "#c1d2f7",
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
