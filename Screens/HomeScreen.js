import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import LivingRoomsTab from "../Components/LivingRoomsTab";
import BedRoomsTab from "../Components/BedRoomTab";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AcIcons from "../Components/AcIcons";
import { useColorScheme } from "nativewind";

const HomeScreen = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{}}>
        <View
          style={{
            height: 380,
            width: "100%",
            padding: 8,
            backgroundColor: "#070945",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 70,
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
            }}
          >
            {/* Lights Icon (Navigates to the Lights page) */}
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Lights")}
                style={{
                  padding: 5,
                  backgroundColor: "#536493",
                  borderRadius: 50,
                }}
              >
                <MaterialCommunityIcons
                  name="outdoor-lamp"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={{ alignSelf: "center", color: "#e9cdb3" }}>
                Lights
              </Text>
            </View>

            <Text style={{ flex: 1 }}></Text>

            {/* Icon for toggling theme and Search Icon */}
            <View className="space-x-4 rounded-full ">
              <TouchableOpacity
                onPress={toggleColorScheme}
                className="bg-white dark:bg-green-800 rounded-full p-2"
              >
                {colorScheme == "dark" ? (
                  <Feather
                    style={{ marginHorizontal: 4 }}
                    name="sun"
                    size={35}
                    color="white"
                  />
                ) : (
                  <Feather
                    style={{ marginHorizontal: 4 }}
                    name="moon"
                    size={35}
                    color="#e9cdb3"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              height: 160,
              alignItems: "center",
              padding: 10,
            }}
          >
            {/* User Name saved on Registration */}
            <Text style={{ fontSize: 20, color: "#7D8ABC" }}>
              HELLO , USER NAME
            </Text>

            <Text
              style={{ fontSize: 30, color: "#e9cdb3", marginVertical: 15 }}
            >
              CONNECTED {"\n"} {"  "}DEVICES
            </Text>
          </View>

          <View
            style={{
              height: 100,
              width: "100%",
              flexDirection: "row",
              padding: 10,
            }}
          >
            {/* Icons of Connected Devices */}
            <ScrollView horizontal>
              <AcIcons num={1} />
              <AcIcons num={2} />
              <AcIcons num={3} />
              <AcIcons num={4} />
              <AcIcons num={5} />
              <AcIcons num={6} />
              <AcIcons num={7} />
            </ScrollView>
          </View>

          <View
            style={{
              top: 5,
              alignSelf: "center",
              backgroundColor: "whitesmoke",
              padding: 5,
              borderRadius: 50,
            }}
          >
            {/* Icon for adding tabs of rooms if necessary */}
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={50} color="#17153B" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",

            flexDirection: "row",
            padding: 10,

            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              color: "#17153B",
              top: 20,
              marginVertical: 20,
            }}
          >
            Your Rooms
          </Text>
        </View>

        <LivingRoomsTab navigating={() => navigation.navigate("Living Room")} />
        <BedRoomsTab navigating={() => navigation.navigate("Bed Room")} />
        <View style={{ height: 70, width: "100%" }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
