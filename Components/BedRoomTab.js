import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const BedRooms = ({ navigating }) => {
  const [BedRoomPowerSwitch, setBedRoomPowerSwitch] = useState(false);

  // Function for the switch
  const toggleSwitch = () =>
    setBedRoomPowerSwitch((previousState) => !previousState);
  return (
    <View
      style={{
        borderRadius: 10,
        width: "100%",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#BBE9FF",
        justifyContent: "space-evenly",
        top: 20,
        marginVertical: 10,
      }}
    >
      {/* Navigates to the BedRoomPage  */}
      <TouchableOpacity
        onPress={navigating}
        style={{
          padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <FontAwesome6 name="bed" size={24} color="#17153B" />
      </TouchableOpacity>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Bed Room</Text>

        {/* stores the state(on/off) of devices in the Bedroom */}
        <Text style={{ fontSize: 12 }}>
          <Text>Status : {BedRoomPowerSwitch ? "  ON" : "  OFF"}</Text>
        </Text>
      </View>

      {/* swich to power off devices in the Bedroom  */}
      <Switch
        trackColor={{ false: "lightgrey", true: "lightblue" }}
        thumbColor={BedRoomPowerSwitch ? "royalblue" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={BedRoomPowerSwitch}
        style={styles.switch}
      />
    </View>
  );
};

export default BedRooms;

const styles = StyleSheet.create({
  switch: { width: 50, transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] },
});
