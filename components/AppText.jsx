// components/AppText.jsx

import { Text as RNText } from "react-native";

export default function Text({ style, ...props }) {
  return (
    <RNText
      {...props}
      style={[
        {
          fontFamily: "Poppins",
        },
        style,
      ]}
    />
  );
}
