import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Components/Navigation";
import RegistrationForm from "./Screens/RegistrationForm";
import LoginForm from "./Screens/LoginScreen";
import Welcome from "./Screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Navigation />
      {/* <Welcome /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
