import { StyleSheet, View } from "react-native";
import { useState } from "react";
import PhoneInput from "rn-phone-input-field";
import { ChevronDown } from "lucide-react-native";

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <View>
      <PhoneInput
        placeholder="8879887489"
        defaultCountry="IN"
        downArrowIcon={<ChevronDown size={16} style={{ marginRight: 9 }} />}
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.container}
        textContainerStyle={styles.textContainer}
        textInputStyle={styles.input}
        codeTextStyle={styles.codeText}
        iconContainerStyle={styles.iconContainer}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#eee",
    borderRadius: 40,
  },

  textContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },

  input: {
    color: "black",
    fontSize: 16,
    borderLeftWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 12,
  },

  codeText: {
    color: "black ",
    fontSize: 16,
    marginLeft: 5,
  },
});
