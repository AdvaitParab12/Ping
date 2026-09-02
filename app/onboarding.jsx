import { StyleSheet, View, Image, Pressable } from "react-native";
import Text from "../components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();
  const handleRegister = (register) => {
    router.push({
      pathname: "/register",
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/images/bg-wave.png")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 400,
            alignContent: "center",
          }}
        ></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>
          Get their{" "}
          <Text style={{ fontFamily: "InterBold", color: "#22C55E" }}>
            attention
          </Text>
          .
        </Text>
        <Text style={styles.header1}>Even when they can't hear you.</Text>
        <Text style={styles.description}>
          <Text style={{ color: "#22C55E", fontFamily: "InterSemiBold" }}>
            Ping
          </Text>{" "}
          lets you reach trusted contacts with a {"\n"}simple attention alert —
          even when their phone is silent.
        </Text>
        <View>
          <Pressable style={styles.button} onPress={() => handleRegister()}>
            <Text style={{ fontFamily: "InterSemiBold", color: "white" }}>
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 30,
  },
  header1: {
    fontSize: 22,
    marginBottom: 20,
  },
  description: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#22C55E",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "100%",
    borderRadius: 60,
  },
});
