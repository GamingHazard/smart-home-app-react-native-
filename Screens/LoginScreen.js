import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Both fields are required.");
      return;
    }
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    Alert.alert("Success", "Logged in successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <KeyboardAvoidingView>
        <View
          style={{
            width: 300,
            height: 250,
            // backgroundColor: "#536493",
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Navigation to Registration Form */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 20,
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Don't have an account ?
            </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text
                style={{ color: "white", marginHorizontal: 20, fontSize: 16 }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    width: 100,
    alignSelf: "center",
  },
  buttonText: {
    color: "#070945",
    fontSize: 18,
  },
});

export default LoginForm;
