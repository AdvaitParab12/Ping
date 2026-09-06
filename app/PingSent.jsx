import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function PingSent() {
  const router = useRouter();

  const { userName } = useLocalSearchParams();

  const name = userName || "Rahul Sharma";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Ping Icon */}
        <View style={styles.iconOuter}>
          <View style={styles.iconCircle}>
            <Text style={styles.icon}>➤</Text>
          </View>
        </View>

        <Text style={styles.title}>Ping Sent!</Text>

        <Text style={styles.subtitle}>Alert is on the way to</Text>

        <Text style={styles.name}>{name}</Text>
      </View>

      {/* Waiting Card */}
      <View style={styles.waitingCard}>
        <Text style={styles.waitingTitle}>Waiting for response...</Text>

        <Text style={styles.waitingText}>
          They will be alerted even if their{"\n"}
          phone is silent.
        </Text>

        <View style={styles.loader}>
          <Text>◌</Text>
        </View>
      </View>

      {/* Done */}
      <Pressable
        style={styles.doneButton}
        onPress={() => router.replace("/(tabs)/activity")}
      >
        <Text style={styles.doneText}>View Activity</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003D24",
    paddingHorizontal: 20,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconOuter: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 1,
    borderColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "#FFFFFF",
    fontSize: 55,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 30,
  },

  subtitle: {
    color: "#FFFFFF",
    fontSize: 17,
    marginTop: 10,
  },

  name: {
    color: "#16D66C",
    fontSize: 20,
    fontWeight: "800",
    marginTop: 5,
  },

  waitingCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 20,
    marginBottom: 15,
  },

  waitingTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
  },

  waitingText: {
    color: "#4B5563",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  loader: {
    position: "absolute",
    right: 20,
    top: 25,
  },

  doneButton: {
    height: 55,
    borderRadius: 15,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
