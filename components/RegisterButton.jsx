import { View, Pressable } from "react-native";
import Text from "../components/AppText";

export default function Register() {
  return (
    <View style={{ width: "100%" }}>
      <Pressable
        style={{
          backgroundColor: "#22C55E",
          width: "100%",
          marginTop: 30,
          height: "fit",
          borderRadius: 30,
          padding: 18,
          elevation: 5,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontFamily: "InterSemiBold",
            fontSize: 18,
          }}
        >
          Register
        </Text>
      </Pressable>
    </View>
  );
}
