import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function IncomingPing() {
  const router = useRouter();

  const { userName } = useLocalSearchParams();

  const name = userName || "Sneha Gupta";

  const handleStopRing = () => {
    router.replace("/(tabs)/activity");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.incoming}>Incoming Ping</Text>

      <View style={styles.content}>
        {/* User Avatar */}
        <View style={styles.avatarOuter}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>SG</Text>
          </View>
        </View>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.attention}>wants your attention</Text>

        <Text style={styles.description}>
          This will alert you{"\n"}
          even if your phone is silent.
        </Text>
      </View>

      <Pressable style={styles.stopButton} onPress={handleStopRing}>
        <Text style={styles.stopText}>🔔 Stop Ring</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002E1C",
    paddingHorizontal: 25,
  },

  incoming: {
    textAlign: "center",
    color: "#16D66C",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 25,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarOuter: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
  },

  initials: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "800",
  },

  name: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "800",
    marginTop: 30,
  },

  attention: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 8,
  },

  description: {
    color: "#E5F7ED",
    textAlign: "center",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 25,
  },

  stopButton: {
    height: 58,
    borderRadius: 16,
    backgroundColor: "#EF2929",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  stopText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },
});
