import { StyleSheet, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/AppText";
import { useState } from "react";
export default function Register() {
  const [Option, setOption] = useState("Email");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 24, fontFamily: "InterSemiBold" }}>
            Register
          </Text>
          <Text style={{ color: "gray" }}>
            Hello, Create Your Account Here.
          </Text>
        </View>
        <Image
          source={require("../assets/images/bg.jpg")}
          style={{ height: 48, width: 48, borderRadius: 50 }}
        ></Image>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#eee",
          padding: 5,
          borderRadius: 40,
          justifyContent: "space-between",
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        }}
      >
        <Pressable
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#22C55E",
          }}
        >
          <Text style={{ color: "white" }}>Phone No.</Text>
        </Pressable>

        <Pressable
          style={{
            flex: 1,
            paddingVertical: 10,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Email</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
