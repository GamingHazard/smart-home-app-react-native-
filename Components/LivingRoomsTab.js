import { StyleSheet, Text, View, Switch, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const LivingRooms = ({ navigating }) => {
  const [PowerSwitch, setPowerSwitch] = useState(false);

  // for toggling the switch of the living room
  const toggleSwitch = () => setPowerSwitch((previousState) => !previousState);
  return (
    <View
      style={{
        borderRadius: 10,
        width: "100%",

        flexDirection: "row",
        padding: 15,
        backgroundColor: "#F7E7DC",
        justifyContent: "space-evenly",
        top: 10,
      }}
    >
      {/* Navigates to the living room page */}
      <TouchableOpacity
        onPress={navigating}
        style={{
          padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <FontAwesome6 name="couch" size={24} color="#17153B" />
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Living Room</Text>

        {/* Status of the devices in the living Room */}
        <Text style={{ fontSize: 12 }}>
          <Text>Status : {PowerSwitch ? "  ON" : "  OFF"}</Text>
        </Text>
      </View>

      {/* this switch Controlls all the LivingRooms Devices(on and off ) */}
      <Switch
        trackColor={{ false: "lightgrey", true: "lightblue" }}
        thumbColor={PowerSwitch ? "royalblue" : "whitesmoke"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={PowerSwitch}
        style={styles.switch}
      />
    </View>
  );
};

export default LivingRooms;

const styles = StyleSheet.create({
  switch: { width: 50, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] },
});
