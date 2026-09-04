import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/AppText";
import PhoneNumberInput from "../components/PhoneNumberInput";
import PasswordInput from "@/components/PasswordInput";
import EmailInput from "@/components/EmailInput";
import RegisterButton from "@/components/RegisterButton.jsx";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Register() {
  const [options, setOptions] = useState("Phone");
  const tabWidth = useSharedValue(0);
  const progress = useSharedValue(0);
  const selectTab = (tab) => {
    setOptions(tab);
    progress.value = withTiming(tab === "Phone" ? 0 : 1, {
      duration: 300,
    });
  };
  const indicatorStyle = useAnimatedStyle(() => {
    return {
      width: tabWidth.value / 2,
      transform: [
        {
          translateX: progress.value * (tabWidth.value / 2),
        },
      ],
    };
  });
  const phoneTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ["white", "black"]),
    };
  });
  const emailTextStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(progress.value, [0, 1], ["black", "white"]),
    };
  });
  return (
    <ImageBackground
      source={require("../assets/images/green_bg.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Register</Text>
              <Text style={styles.subtitle}>
                Hello, Create Your Account Here.
              </Text>
            </View>
            <Image
              source={require("../assets/images/bg.jpg")}
              style={styles.profileImage}
            />
          </View>
          {/* Tabs */}
          <View
            style={styles.tabContainer}
            onLayout={(event) => {
              const { width } = event.nativeEvent.layout;
              tabWidth.value = width - 10;
            }}
          >
            <Animated.View style={[styles.indicator, indicatorStyle]} />
            {/* Phone */}
            <Pressable style={styles.tab} onPress={() => selectTab("Phone")}>
              <Animated.Text style={[styles.tabText, phoneTextStyle]}>
                Phone No.
              </Animated.Text>
            </Pressable>
            {/* Email */}
            <Pressable style={styles.tab} onPress={() => selectTab("Email")}>
              <Animated.Text style={[styles.tabText, emailTextStyle]}>
                Email
              </Animated.Text>
            </Pressable>
          </View>
          {/* Content */}
          {options === "Phone" ? (
            <>
              <PhoneNumberInput />
              <PasswordInput />
              <RegisterButton />
              <View style={{ width: "100%" }}>
                <Text
                  style={{ color: "white", marginTop: 50, textAlign: "center" }}
                >
                  Sign-Up with Google
                </Text>
                <Pressable
                  style={{
                    backgroundColor: "white",
                    marginTop: 20,
                    width: "100%",
                    borderRadius: 30,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      padding: 10,
                      color: "#22C55E",
                      fontFamily: "InterSemiBold",
                      fontSize: 18,
                    }}
                  >
                    Google
                  </Text>
                </Pressable>
              </View>
            </>
          ) : (
            <>
              <EmailInput />
              <PasswordInput />
              <RegisterButton />
              <View style={{ width: "100%" }}>
                <Text
                  style={{ color: "white", marginTop: 50, textAlign: "center" }}
                >
                  Sign-Up with Google
                </Text>
                <Pressable
                  style={{
                    backgroundColor: "white",
                    marginTop: 20,
                    width: "100%",
                    borderRadius: 30,
                    backgroundColor: "white",
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      padding: 10,
                      color: "#22C55E",
                      fontFamily: "InterSemiBold",
                      fontSize: 18,
                    }}
                  >
                    Google
                  </Text>
                </Pressable>
              </View>
            </>
          )}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontFamily: "InterSemiBold",
    color: "white",
  },

  subtitle: {
    color: "#eee",
  },

  profileImage: {
    height: 48,
    width: 48,
    borderRadius: 50,
  },

  tabContainer: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 40,
    marginBottom: 150,
    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,

    position: "relative",
  },

  indicator: {
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    borderRadius: 30,
    backgroundColor: "#22C55E",
  },

  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    zIndex: 1,
  },

  tabText: {
    fontFamily: "InterSemiBold",
  },
});
