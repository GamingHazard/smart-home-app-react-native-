import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-green-700">
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
        }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <View className="flex-1 items-center justify-end max-w-[85%] space-y-4">
        <Text
          className="font-bold text-4xl shadow-2xl text-white text-center tracking-wider"
          style={{}}
        >
          Stay Informed from Day One
        </Text>
        <Text
          className="font-bold text-white text-center max-w-[85%] leading-12 tracking-wider"
          style={{}}
        >
          Discover the Latest News with our Seamless Onboarding Experience.
        </Text>
      </View>
      <TouchableOpacity
        className="bg-white rounded-full p-4 justify-center items-center w-[90%] mt-8"
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text className="text-base text-green-900">Getting Started</Text>
      </TouchableOpacity>
    </View>
  );
}

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { TouchableOpacity } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Image } from "react-native";

// const Welcome = ({ navigation }) => {
//   return (
//     <View style={{ backgroundColor: "#070945", flex: 1, padding: 20 }}>
//       <Text style={{ color: "#e9cdb3", fontSize: 60, alignSelf: "center" }}>
//         Welcome
//       </Text>
//       <View
//         style={{
//           flex: 1,

//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Image
//           style={{ width: 200, height: 200, alignSelf: "center" }}
//           source={require("../assets/icon2.png")}
//         />
//       </View>

//       <TouchableOpacity
//         onPress={() => navigation.navigate("Register")}
//         style={{
//           width: "100%",
//           height: 70,
//           padding: 10,
//           borderRadius: 10,
//           backgroundColor: "#e9cdb3",
//           alignSelf: "center",
//           justifyContent: "center",
//           alignItems: "center",

//           flexDirection: "row",
//           position: "relative",
//         }}
//       >
//         <Text style={{ flex: 1, fontSize: 20, color: "#070945" }}>
//           Get Started
//         </Text>
//         <MaterialCommunityIcons name="arrow-right" size={30} color="#070945" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Welcome;

// const styles = StyleSheet.create({});
