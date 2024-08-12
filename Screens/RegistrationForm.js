import React, { useState } from "react";
import { Pressable } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const RegistrationForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Success", "Form submitted successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Create Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Navigation to Login Page */}
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Already have an account ?
        </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "white", marginHorizontal: 20, fontSize: 16 }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#070945",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#e9cdb3",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: 250,
    alignSelf: "center",
    backgroundColor: "whitesmoke",
  },
  button: {
    backgroundColor: "#e9cdb3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    alignSelf: "center",
    width: 100,
  },
  buttonText: {
    color: "#070945",
    fontSize: 18,
  },
});

export default RegistrationForm;
