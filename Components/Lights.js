import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Lights = () => {
  const [lightNumber, setLightNumber] = useState("");
  const [description, setDescription] = useState("");
  const [lights, setLights] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [AllSwitch, setAllSwitch] = useState(false);
  const [Automation, setAutomation] = useState(false);

  // Function for toggling the switch tha controlls all switches
  const toggleAllSwitch = () => setAllSwitch((previousState) => !previousState);

  // Function that toogles the automation switch
  const toggleAutomation = () =>
    setAutomation((previousState) => !previousState);

  // Function to save the added light
  const handleSave = () => {
    if (lightNumber && description) {
      setLights([
        ...lights,
        {
          id: Math.random().toString(),
          lightNumber,
          description,
          isActive: false,
        },
      ]);
      setLightNumber("");
      setDescription("");
      setIsFormVisible(false);
    }
  };

  // deleting the individual created light view
  const handleDelete = (id) => {
    setLights(lights.filter((light) => light.id !== id));
  };
  // Function to toggle the form for creating light inofrmation
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  // Funtion that independently toggles a switch on each created light
  const toggleSwitch = (id) => {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isActive: !light.isActive } : light
      )
    );
  };

  // funtion to trigger actions for each light switch using their number
  const performAction = (isActive, lightNumber) => {
    if (isActive) {
      console.log(`Action performed for light ${lightNumber}`);
      // Add your action code here
    }
  };

  return (
    <View style={styles.container}>
      {/* Switch to controll all lights at once */}
      <View
        style={{
          width: "100%",
          height: 80,
          padding: 20,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
          elevation: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontSize: 26,
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          All Lights
        </Text>
        <Switch
          trackColor={{ false: "lightgrey", true: "lightblue" }}
          thumbColor={AllSwitch ? "royalblue" : "whitesmoke"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleAllSwitch}
          value={AllSwitch}
          style={styles.switch}
        />
      </View>

      {/* Icon for adding switches */}
      <MaterialCommunityIcons
        style={styles.icon}
        name="plus-circle"
        size={60}
        color="#17153B"
        onPress={toggleFormVisibility}
      />

      {/* toggling form for creating switches */}
      {isFormVisible && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Light Number"
            value={lightNumber}
            onChangeText={setLightNumber}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Light Location"
            value={description}
            onChangeText={setDescription}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 10,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleFormVisibility}
            >
              <Text style={styles.buttonText}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Flat list to render created switches */}
      <FlatList
        data={lights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.lightItem}>
            <View style={{ width: "50%" }}>
              <Text style={styles.lightText}>
                Light {item.lightNumber}:{"\n"}
              </Text>
              <Text style={{ top: -20 }}> {item.description}</Text>
            </View>
            <View
              style={{
                padding: 2,
                width: "40%",

                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              {/* Swicth to turn on each light individually */}
              <Switch
                value={item.isActive}
                onValueChange={() => {
                  toggleSwitch(item.id);
                  performAction(!item.isActive, item.lightNumber);
                }}
                style={styles.switchStyle}
              />

              {/* Wifi button  to connect the light */}
              <MaterialCommunityIcons name="wifi" size={25} color="#17153B" />
            </View>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <MaterialCommunityIcons name="delete" size={24} color="#17153B" />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Automatic Set up */}
      <View
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "white",
          elevation: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            alignItems: "center",
            top: -20,
          }}
        >
          <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
            Automation
          </Text>
          <Switch
            trackColor={{ false: "lightgrey", true: "lightblue" }}
            thumbColor={Automation ? "royalblue" : "whitesmoke"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleAutomation}
            value={Automation}
            style={styles.switch}
          />
        </View>
        <Text style={{ top: -30, fontSize: 16, left: 10 }}>
          Automatically turns on and off the lights. {"\n"}
          It saves energy and money
        </Text>
      </View>
    </View>
  );
};

export default Lights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#536493",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "45%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  lightItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  lightText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  switch: { width: 50, transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] },
});
