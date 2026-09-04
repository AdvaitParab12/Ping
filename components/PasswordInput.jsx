import { StyleSheet, View, TextInput } from "react-native";
import { useState } from "react";

export default function PasswordInput() {
  const [text, setText] = useState("Enter your password");
  return (
    <View style={{ width: "100%", marginTop: 30 }}>
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
        secureTextEntry
        textContentType="password"
        placeholder="Enter your password"
        onChangeText={setText}
      ></TextInput>
    </View>
  );
}
