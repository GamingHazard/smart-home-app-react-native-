import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AcIcons = ({ num }) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity
        style={{
          padding: 8,
          backgroundColor: "#536493",
          borderRadius: 50,
        }}
      >
        <MaterialCommunityIcons
          name="coolant-temperature"
          size={24}
          color="white"
        />
      </TouchableOpacity>
      <Text style={{ alignSelf: "center", color: "#e9cdb3" }}>AC {num}</Text>
    </View>
  );
};

export default AcIcons;

const styles = StyleSheet.create({});
