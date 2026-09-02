import { StyleSheet, View, Image, Switch } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../components/AppText";

export default function Home() {
  const [available, setAvailable] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Good Morning, User</Text>
          <Text style={styles.subtitle}>Who do you want to reach?</Text>
        </View>
        <Image
          source={require("../../assets/images/profile.png")}
          style={{ width: 34, height: 34 }}
        ></Image>
      </View>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.label}>YOUR PING STATUS</Text>

          <View style={styles.statusRow}>
            <View style={available ? styles.dot : styles.dot1} />

            <Text style={styles.statusText}>
              {available ? "Ready to receive" : "Unavailable"}
            </Text>
          </View>

          <Text style={styles.description}>
            {available
              ? "Trusted contacts can Ping you."
              : "You won't receive Pings right now"}
          </Text>
        </View>
        <View style={styles.toggleContainer}>
          <Switch
            value={available}
            onValueChange={setAvailable}
            trackColor={{
              false: "#D1D5DB",
              true: "#22C55E",
            }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="#D1D5DB"
          />

          <Text style={styles.availableText}>
            {available ? "Available" : "Unavailable"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontFamily: "InterBold",
    color: "black",
  },
  subtitle: {
    color: "gray",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    minHeight: 135,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  info: {
    flex: 1,
  },

  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#52677D",
    marginBottom: 10,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#22C55E",
    marginRight: 12,
  },
  dot1: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#555655",
    marginRight: 12,
  },

  statusText: {
    fontSize: 20,
    fontFamily: "InterSemiBold",
    color: "#111827",
  },

  description: {
    fontSize: 13,
    color: "#52677D",
  },

  toggleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },

  availableText: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "600",
    color: "#16A34A",
  },
  contacts: {},
});
