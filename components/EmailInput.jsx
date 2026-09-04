import { View, TextInput } from "react-native";
import { useState } from "react";

export default function EmailInput() {
  const [text, setText] = useState("Enter your password");
  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={{
          height: 60,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 40,
          paddingHorizontal: 24,
          fontSize: 16,
          backgroundColor: "#eee",
          paddingHorizontal: 24,
        }}
        keyboardType="email-address"
        inputMode="email"
        placeholder="Enter your email"
        onChangeText={setText}
      ></TextInput>
    </View>
  );
}
