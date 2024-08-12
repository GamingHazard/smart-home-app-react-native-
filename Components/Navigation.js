import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "../Screens/HomeScreen";
import Settings from "../Screens/Settings";
import LivingRoomPage from "./LivingRoomPage";
import BedRoomPage from "./BedRoomPage";
import Lights from "./Lights";
import RegistrationForm from "../Screens/RegistrationForm";
import LoginForm from "../Screens/LoginScreen";
import WelcomeScreen from "../Screens/Welcome";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#070945",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          padding: 10,
          fontWeight: "bold",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: "Profile",
          headerStyle: {
            backgroundColor: "white",
            height: 40, // Adjust the height of the header
          },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
          },
          headerTitleAlign: "center", // Center the title
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Living Room"
            options={{
              title: "Living Room",
              headerStyle: {
                backgroundColor: "white",
                height: 100, // Adjust the height of the header
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerTitleAlign: "center", // Center the title
            }}
            component={LivingRoomPage}
          />
          <Stack.Screen
            name="Bed Room"
            options={{
              title: "Bed Room",
              headerStyle: {
                backgroundColor: "white",
                height: 100, // Adjust the height of the header
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerTitleAlign: "center", // Center the title
            }}
            component={BedRoomPage}
          />
          <Stack.Screen
            name="Lights"
            options={{
              title: "Lights",
              headerStyle: {
                backgroundColor: "white",
                height: 100, // Adjust the height of the header
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerTitleAlign: "center", // Center the title
            }}
            component={Lights}
          />
          <Stack.Screen
            name="Register"
            options={{
              title: "Lights",
              headerStyle: {
                backgroundColor: "white",
                height: 100, // Adjust the height of the header
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerTitleAlign: "center", // Center the title
            }}
            component={RegistrationForm}
          />
          <Stack.Screen
            name="Login"
            options={{
              title: "Lights",
              headerStyle: {
                backgroundColor: "white",
                height: 100, // Adjust the height of the header
              },
              headerTintColor: "black",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerTitleAlign: "center", // Center the title
            }}
            component={LoginForm}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
