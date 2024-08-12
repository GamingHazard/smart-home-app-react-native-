import { StyleSheet, Text, View, Switch, Alert } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import SliderBar from "./Slider";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { ScrollView } from "react-native";

const LivingRoomPage = () => {
  const [temperature, setTemperature] = useState(10);
  const [PowerSwitch, setPowerSwitch] = useState(false);
  const [AutoSwictch, setAutoSwictch] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  // function for power button
  const togglePowerSwitch = () =>
    setPowerSwitch((previousState) => !previousState);

  // function for automatic mode
  const toggleAutoSwitch = () =>
    setAutoSwictch((previousState) => !previousState);

  const handleSetTemperature = (value) => {
    setTemperature(value);
    Alert.alert("Temperature Set", `The temperature is set to ${value}°C`);
  };

  const buttons = [
    {
      label: "Cool",
      icon: "snowflake",
      threshold: 10,
      iconSet: "FontAwesome5",
    }, // Cool mode
    {
      label: "Heat",
      icon: "sun-o",
      threshold: 20,
      iconSet: "FontAwesome",
    }, // Heat mode
    {
      label: "WindPowerOutlined",
      icon: "air",
      threshold: 30,
      iconSet: "MaterialIcons",
    }, // Fan mode
    {
      label: "Auto",
      icon: "repeat",
      threshold: 40,
      iconSet: "MaterialIcons",
    }, // Auto mode
  ];

  // these functions are for the different modes of the conditioner

  const handlePress = (index) => {
    setActiveButton(index);
    // Perform task 1
    const threshold = buttons[index].threshold;
    console.log(`Button ${index + 1} pressed with threshold ${threshold}`);
    // Example of performing different tasks:
    performTask(threshold);
  };

  const performTask = (threshold) => {
    // Perform task 2
    console.log(`Performing task for threshold ${threshold}`);
    // Add your task logic here
  };
  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
      {/* Slider to control Temperature */}
      <SliderBar
        initialTemperature={22}
        onSetTemperature={handleSetTemperature}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          flex: 1,
          marginTop: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        {/* Button container */}
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            width: "100%",
            height: 80,
            justifyContent: "space-evenly",
            marginVertical: 20,
          }}
        >
          {/* Name of Device Connected */}
          <View
            style={{
              width: "40%",
              height: 50,
              borderRadius: 30,
              backgroundColor: "whitesmoke",
              justifyContent: "center",
              padding: 10,
              elevation: 10,
              alignItems: "center",
              marginHorizontal: 10,
            }}
          >
            <Text>AC 1</Text>
          </View>

          {/* Switch to Turn On The Devices */}
          <View
            style={{
              height: 50,
              borderRadius: 30,
              backgroundColor: "whitesmoke",
              justifyContent: "space-evenly",
              padding: 15,
              elevation: 10,
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Text style={{ flex: 1, fontWeight: "bold", fontSize: 16 }}>
              Power: {PowerSwitch ? "On" : "Off"}
            </Text>
            <Switch
              trackColor={{ false: "lightgrey", true: "#17153B" }}
              thumbColor={PowerSwitch ? "#e9cdb3" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePowerSwitch}
              value={PowerSwitch}
            />
          </View>
        </View>
        <Text
          style={{
            color: "black",
            marginHorizontal: 20,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Conditioner Mode
        </Text>

        {/* Mode  Buttons */}
        <View
          style={{
            width: "100%",
            height: 80,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttons.map((button, index) => {
            const IconComponent =
              button.iconSet === "FontAwesome"
                ? Icon
                : button.iconSet === "FontAwesome5"
                ? FontAwesome5Icon
                : MaterialIcon;
            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.button,
                  activeButton === index && styles.activeButton,
                ]}
                onPress={() => handlePress(index)}
              >
                <IconComponent
                  name={button.icon}
                  size={20}
                  color={activeButton === index ? "#fff" : "#000"}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <View
          style={{
            width: "96%",
            height: 130,
            padding: 10,
            borderRadius: 15,
            backgroundColor: "whitesmoke",
            alignSelf: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ flex: 1, top: 10, fontWeight: "bold", fontSize: 20 }}
            >
              Auto Adjustment : {AutoSwictch ? "On" : "Off"}
            </Text>

            {/* Auto Switch used for activating automatic mode */}
            <Switch
              trackColor={{ false: "lightgrey", true: "#070945" }}
              thumbColor={AutoSwictch ? "#e9cdb3" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleAutoSwitch}
              value={AutoSwictch}
            />
          </View>

          <View>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>
              it will save energy and money
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LivingRoomPage;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    padding: 10,

    borderRadius: 50,
    width: "60%",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 10,
  },
  activeButton: {
    backgroundColor: "#17153B",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 10,
  },
  activeButtonText: {
    color: "#fff",
  },
});
