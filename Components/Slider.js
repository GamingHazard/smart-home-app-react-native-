import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";

const SliderBar = ({ initialTemperature, onSetTemperature }) => {
  const [temperature, setTemperature] = useState(initialTemperature);

  //  thresholds placeholder actions
  const thresholds = {
    cooling: { min: 10, max: 18 },
    comfortable: { min: 19, max: 25 },
    heating: { min: 26, max: 30 },
  };

  // used for storing the set temp
  const getMode = (temp) => {
    if (temp >= thresholds.cooling.min && temp <= thresholds.cooling.max) {
      return "Cooling";
    } else if (
      temp >= thresholds.comfortable.min &&
      temp <= thresholds.comfortable.max
    ) {
      return "Comfortable";
    } else if (
      temp >= thresholds.heating.min &&
      temp <= thresholds.heating.max
    ) {
      return "Heating";
    }
    return "Unknown";
  };

  const handleSetTemperature = (temperature, mode) => {
    console.log(`Temperature set to ${temperature}°C, Mode: ${mode}`);
    // put  logic to control the device  here
  };

  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 40 }}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text
            style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}
          >
            Mode:
          </Text>
          <Text style={{ alignSelf: "center" }}> {getMode(temperature)}</Text>
        </View>
        <Text style={styles.text}>{temperature}°C</Text>
        <Text style={{ alignSelf: "center", fontSize: 20 }}>Celcius</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={10}
        maximumValue={30}
        minimumTrackTintColor="#070945"
        maximumTrackTintColor="#070945"
        thumbTintColor="#070945"
        value={temperature}
        onValueChange={(value) => setTemperature(value)}
      />

      <TouchableOpacity
        style={{
          width: 200,
          height: 40,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#070945",
          alignSelf: "center",
          borderRadius: 10,
        }}
        onPress={handleSetTemperature}
      >
        <Text style={{ color: "white" }}>Set Temperature</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SliderBar;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },
  slider: {
    width: "90%",
    height: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
