import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  Switch,
  Image,
} from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import TimeSet from "./TimeSet";

const Profile = () => {
  const [selected, setSelected] = useState(null);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [MainSwitch, setMainSwitch] = useState(false);

  // function for the main switch
  const toggleMainSwitch = () =>
    setMainSwitch((previousState) => !previousState);

  const handleEdit = () => {
    setIsEditFormVisible(true);
  };

  const handleClose = () => {
    setIsEditFormVisible(false);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);
    // Close the form after submission
    setIsEditFormVisible(false);
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 450,
            backgroundColor: "#070945",
            padding: 10,
            alignItems: "center",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          {/* Profile Image container */}
          <View>
            <Image
              style={{
                width: 100,
                height: 100,
                backgroundColor: "white",
                borderRadius: 100,

                alignItems: "center",
                justifyContent: "center",
                marginVertical: 5,
              }}
              source={require("../assets/profile.jpg")}
            />
          </View>
          <Text style={{ color: "#7D8ABC", fontSize: 30, marginVertical: 15 }}>
            Users Name
          </Text>

          {/* Profile Edit and Logout Buttons */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <Text style={{ color: "#070945" }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "#070945" }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Container */}
        <View style={styles.tabContainer}>
          {/* Device Tab */}
          <View style={styles.tab}>
            <Text style={{ fontWeight: "bold", fontSize: 18, top: -28 }}>
              Devices
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Text>Air Conditiners : 2</Text>
              <Text>Lights : 7</Text>
            </View>
          </View>

          {/* Temperature Scale Tab (check buttons for setting temperature scale to use) */}
          <View style={styles.tab}>
            <Text style={styles.tabTitle}>Temperature Scale</Text>
            <View style={{ flexDirection: "row" }}>
              {/* Celicious scale */}
              <CheckBox
                title="Celicious"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="green"
                checked={selected === "option1"}
                onPress={() => setSelected("option1")}
                textStyle={styles.checkboxText}
                containerStyle={styles.checkboxContainer}
              />
              {/* Fahrenheit */}
              <CheckBox
                title="Fahrenheit"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="green"
                checked={selected === "option2"}
                onPress={() => setSelected("option2")}
                textStyle={styles.checkboxText}
                containerStyle={styles.checkboxContainer}
              />
            </View>
          </View>

          {/* Automation Time Settings for setting automation for the lights mostly */}
          <View style={styles.tab}>
            <Text style={styles.tabTitle}>Automation Hour Setting</Text>
            <TimeSet />
          </View>

          {/* Main Swich */}

          <View
            style={{
              width: "100%",
              height: 100,
              padding: 10,
              backgroundColor: "whitesmoke",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <View style={{ flexDirection: "row", padding: 5 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, top: -10, flex: 1 }}
              >
                Main Switch
              </Text>
              <Text style={{ top: -10, fontSize: 16, fontWeight: "bold" }}>
                {MainSwitch ? "On" : "Off"}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <Text style={{ fontSize: 16, flex: 1 }}>
                Turns OFF/ON all devices in the house
              </Text>

              {/* Auto Switch for activating automatic mode */}
              <Switch
                trackColor={{ false: "#767577", true: "lightblue" }}
                thumbColor={MainSwitch ? "royalblue" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleMainSwitch}
                value={MainSwitch}
                style={styles.switch}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/*Modal for displaying Updating Form */}
      <Modal
        visible={isEditFormVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={{ color: "#070945" }}>Change</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleClose}>
                <Text style={{ color: "#070945" }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  checkboxContainer: {
    borderRadius: 10,
  },
  checkedCheckbox: {
    backgroundColor: "black",
  },
  title: {
    fontSize: 18,
  },
  button: {
    width: 80,
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#e9cdb3",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  tabContainer: {
    backgroundColor: "white",
    width: 340,
    height: 470,
    alignSelf: "center",
    top: -100,
    elevation: 10,
    borderRadius: 30,
    padding: 10,
  },
  tab: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
    marginBottom: 16,
    padding: 10,
    justifyContent: "center",
  },
  tabTitle: {
    fontWeight: "bold",
    fontSize: 18,
    top: -10,
  },
  tabContent: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
    marginBottom: 10,
  },
  switch: {
    width: 60,
    transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    top: -10,
    left: -12,
  },
});
