import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function RecordSound() {
  const router = useRouter();

  const { userId, userName } = useLocalSearchParams();

  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const handleRecord = () => {
    if (!recording) {
      setRecording(true);
      setSeconds(0);
    } else {
      setRecording(false);
    }
  };

  const handleContinue = () => {
    router.push({
      pathname: "/PingSent",
      params: {
        userId,
        userName,
        soundType: "record",
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.back}>‹</Text>
        </Pressable>

        <Text style={styles.headerTitle}>Record Sound</Text>

        <View style={styles.headerSpace} />
      </View>

      {/* Main */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Record a custom sound{"\n"}
          for your Ping
        </Text>

        {/* Recording Circle */}
        <View style={styles.recordArea}>
          <View style={styles.outerCircle}>
            <View style={styles.middleCircle}>
              <View style={styles.recordCircle}>
                <Text style={styles.mic}>🎙</Text>
              </View>
            </View>
          </View>

          <Text style={styles.timer}>
            00:{seconds.toString().padStart(2, "0")}
          </Text>
        </View>

        {/* Record Button */}
        <Pressable
          style={[styles.recordButton, recording && styles.stopButton]}
          onPress={handleRecord}
        >
          <Text style={styles.recordButtonText}>
            {recording ? "Stop Recording" : "Start Recording"}
          </Text>
        </Pressable>

        {/* Message */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            {recording
              ? "Recording your custom Ping sound..."
              : "Tap the button to start recording"}
          </Text>
        </View>

        {/* Continue */}
        <Pressable
          style={[styles.continueButton, !recording && styles.continueDisabled]}
          onPress={handleContinue}
        >
          <Text style={styles.continueText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
  },

  header: {
    height: 65,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  back: {
    fontSize: 38,
    color: "#111827",
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  headerSpace: {
    width: 30,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  description: {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 23,
    color: "#4B5563",
  },

  recordArea: {
    marginTop: 50,
    alignItems: "center",
  },

  outerCircle: {
    width: 230,
    height: 230,
    borderRadius: 115,
    borderWidth: 1,
    borderColor: "#D7EBDD",
    justifyContent: "center",
    alignItems: "center",
  },

  middleCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "#E1F0E6",
    justifyContent: "center",
    alignItems: "center",
  },

  recordCircle: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
  },

  mic: {
    fontSize: 50,
  },

  timer: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: "700",
    color: "#6B7280",
  },

  recordButton: {
    width: "90%",
    height: 55,
    borderRadius: 15,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 35,
  },

  stopButton: {
    backgroundColor: "#EF4444",
  },

  recordButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  infoBox: {
    width: "90%",
    backgroundColor: "#E2F8E9",
    borderRadius: 15,
    padding: 16,
    marginTop: 15,
  },

  infoText: {
    textAlign: "center",
    color: "#166534",
    fontSize: 13,
  },

  continueButton: {
    width: "90%",
    height: 55,
    borderRadius: 15,
    backgroundColor: "#16C765",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  continueDisabled: {
    opacity: 0.5,
  },

  continueText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
