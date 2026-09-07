import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";


const activities = [
  {
    id: "1",
    name: "Priya Shah",
    initials: "PS",
    type: "sent",
    time: "2 min ago",
  },
  {
    id: "2",
    name: "Rahul Sharma",
    initials: "RS",
    type: "sent",
    time: "10 min ago",
  },
  {
    id: "3",
    name: "Neha Gupta",
    initials: "NG",
    type: "sent",
    time: "1 hour ago",
  },
  {
    id: "4",
    name: "Amit Patel",
    initials: "AP",
    type: "received",
    time: "Yesterday, 7:45 PM",
  },
  {
    id: "5",
    name: "Rahul Sharma",
    initials: "RS",
    type: "received",
    time: "Yesterday, 5:30 PM",
  },
];

export default function Activity() {
  const router = useRouter();

  const [filter, setFilter] = useState("All");

  const filteredActivities = activities.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Sent") return item.type === "sent";
    return item.type === "received";
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>

        <Pressable>
          <Text style={styles.filterIcon}>☰</Text>
        </Pressable>
      </View>

      {/* FILTER */}

      <View style={styles.filterContainer}>
        {(["All", "Sent", "Received"] ).map((item) => (
          <Pressable
            key={item}
            onPress={() => setFilter(item)}
            style={[
              styles.filterButton,
              filter === item && styles.activeFilter,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                filter === item && styles.activeFilterText,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.dateTitle}>Today</Text>

        {filteredActivities
          .filter(
            (item) => item.time.includes("min") || item.time.includes("hour"),
          )
          .map((item) => (
            <View key={item.id} style={styles.activityCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.initials}</Text>
              </View>

              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>
                  {item.type === "sent"
                    ? `Ping to ${item.name}`
                    : `Ping from ${item.name}`}
                </Text>

                <Text
                  style={[
                    styles.activityStatus,
                    item.type === "sent"
                      ? styles.sentText
                      : styles.receivedText,
                  ]}
                >
                  {item.type === "sent" ? "Sent" : "Received"}
                </Text>
              </View>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          ))}

        <Text style={styles.dateTitle}>Yesterday</Text>

        {filteredActivities
          .filter((item) => item.time.includes("Yesterday"))
          .map((item) => (
            <View key={item.id} style={styles.activityCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{item.initials}</Text>
              </View>

              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>
                  {item.type === "sent"
                    ? `Ping to ${item.name}`
                    : `Ping from ${item.name}`}
                </Text>

                <Text
                  style={[
                    styles.activityStatus,
                    item.type === "sent"
                      ? styles.sentText
                      : styles.receivedText,
                  ]}
                >
                  {item.type === "sent" ? "Sent" : "Received"}
                </Text>
              </View>

              <Text style={styles.time}>{item.time}</Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#111827",
  },

  filterIcon: {
    fontSize: 22,
    color: "#111827",
  },

  filterContainer: {
    height: 44,
    backgroundColor: "#ECEEF3",
    borderRadius: 13,
    flexDirection: "row",
    padding: 4,
    marginBottom: 20,
  },

  filterButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  activeFilter: {
    backgroundColor: "#20C45A",
  },

  filterText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#6B7280",
  },

  activeFilterText: {
    color: "#FFFFFF",
  },

  content: {
    paddingBottom: 30,
  },

  dateTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 10,
    marginTop: 5,
  },

  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 13,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#5368F2",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "800",
  },

  activityInfo: {
    flex: 1,
    marginLeft: 11,
  },

  activityName: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
  },

  activityStatus: {
    fontSize: 10,
    marginTop: 3,
  },

  sentText: {
    color: "#20B858",
  },

  receivedText: {
    color: "#20B858",
  },

  time: {
    fontSize: 9,
    color: "#8A919D",
  },
});
