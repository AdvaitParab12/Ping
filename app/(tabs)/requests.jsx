import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";



const initialRequests= [
  {
    id: "1",
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    relation: "Friend",
    time: "5 min ago",
  },
  {
    id: "2",
    name: "Priya Shah",
    phone: "+91 98765 43211",
    relation: "Family",
    time: "20 min ago",
  },
  {
    id: "3",
    name: "Amit Patel",
    phone: "+91 98765 43212",
    relation: "Friend",
    time: "1 hour ago",
  },
];

export default function Requests() {
  const router = useRouter();

  const [requests, setRequests] = useState(initialRequests);

  const handleAccept = () => {
    setRequests((currentRequests) =>
      currentRequests.filter((request) => request.id !== id),
    );
  };

  const handleDecline = () => {
    setRequests((currentRequests) =>
      currentRequests.filter((request) => request.id !== id),
    );
  };

  const getInitials = () => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const renderRequest = ({ item } ) => {
    return (
      <View style={styles.requestCard}>
        {/* Avatar */}

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
        </View>

        {/* User Information */}

        <View style={styles.requestInfo}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.time}>{item.time}</Text>
          </View>

          <Text style={styles.relation}>{item.relation}</Text>

          <Text style={styles.phone}>{item.phone}</Text>

          <Text style={styles.message}>
            Wants to add you as a trusted contact.
          </Text>

          {/* Actions */}

          <View style={styles.actionRow}>
            <Pressable
              style={({ pressed }) => [
                styles.acceptButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => handleAccept(item.id)}
            >
              <Text style={styles.acceptText}>✓ Accept</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.declineButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => handleDecline(item.id)}
            >
              <Text style={styles.declineText}>Decline</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </Pressable>

        <View style={styles.headerContent}>
          <Text style={styles.title}>Contact Requests</Text>

          <Text style={styles.subtitle}>Manage people who want to connect</Text>
        </View>
      </View>

      {/* SUMMARY CARD */}

      <View style={styles.summaryCard}>
        <View style={styles.summaryIcon}>
          <Text style={styles.summaryIconText}>👥</Text>
        </View>

        <View style={styles.summaryContent}>
          <Text style={styles.summaryTitle}>Pending Requests</Text>

          <Text style={styles.summaryText}>
            Review requests before adding someone to your trusted contacts.
          </Text>
        </View>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>{requests.length}</Text>
        </View>
      </View>

      {/* SECTION */}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Requests</Text>

        <Text style={styles.sectionCount}>{requests.length} pending</Text>
      </View>

      {/* REQUEST LIST */}

      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={renderRequest}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconContainer}>
              <Text style={styles.emptyIcon}>✓</Text>
            </View>

            <Text style={styles.emptyTitle}>No pending requests</Text>

            <Text style={styles.emptyText}>You're all caught up!</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* CONTAINER */

  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    paddingHorizontal: 20,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
    marginBottom: 22,
  },

  backButton: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    elevation: 2,
  },

  backText: {
    fontSize: 24,
    color: "#111827",
  },

  headerContent: {
    marginLeft: 12,
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 12,
    color: "#7B8494",
    marginTop: 3,
  },

  /* SUMMARY CARD */

  summaryCard: {
    width: "100%",

    minHeight: 88,

    backgroundColor: "#EEF1FF",

    borderRadius: 18,

    padding: 14,

    flexDirection: "row",
    alignItems: "center",

    marginBottom: 25,
  },

  summaryIcon: {
    width: 44,
    height: 44,

    borderRadius: 14,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 12,
  },

  summaryIconText: {
    fontSize: 19,
  },

  summaryContent: {
    flex: 1,
  },

  summaryTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3446B8",
  },

  summaryText: {
    fontSize: 10,
    lineHeight: 15,
    color: "#667085",
    marginTop: 3,
  },

  countBadge: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: "#5368F2",

    alignItems: "center",
    justifyContent: "center",

    marginLeft: 8,
  },

  countText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111827",
  },

  sectionCount: {
    fontSize: 11,
    fontWeight: "600",
    color: "#5368F2",
  },

  /* LIST */

  listContent: {
    paddingBottom: 30,
  },

  /* REQUEST CARD */

  requestCard: {
    width: "100%",

    backgroundColor: "#FFFFFF",

    borderRadius: 19,

    padding: 14,

    flexDirection: "row",

    marginBottom: 13,

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  /* AVATAR */

  avatar: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: "#5368F2",

    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  /* INFORMATION */

  requestInfo: {
    flex: 1,
    marginLeft: 12,
  },

  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },

  time: {
    fontSize: 9,
    color: "#9CA3AF",
  },

  relation: {
    fontSize: 11,
    color: "#5368F2",
    marginTop: 3,
  },

  phone: {
    fontSize: 10,
    color: "#9CA3AF",
    marginTop: 3,
  },

  message: {
    fontSize: 11,
    color: "#687386",
    marginTop: 8,
    lineHeight: 16,
  },

  /* ACTIONS */

  actionRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  acceptButton: {
    height: 36,

    paddingHorizontal: 15,

    borderRadius: 11,

    backgroundColor: "#5368F2",

    alignItems: "center",
    justifyContent: "center",

    marginRight: 8,
  },

  acceptText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  declineButton: {
    height: 36,

    paddingHorizontal: 15,

    borderRadius: 11,

    backgroundColor: "#F3F4F6",

    alignItems: "center",
    justifyContent: "center",
  },

  declineText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#6B7280",
  },

  buttonPressed: {
    opacity: 0.7,
  },

  /* EMPTY STATE */

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",

    paddingTop: 70,
  },

  emptyIconContainer: {
    width: 65,
    height: 65,

    borderRadius: 33,

    backgroundColor: "#E8F8EF",

    alignItems: "center",
    justifyContent: "center",
  },

  emptyIcon: {
    fontSize: 27,
    color: "#22A85A",
  },

  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",

    marginTop: 15,
  },

  emptyText: {
    fontSize: 12,
    color: "#89919E",

    marginTop: 5,
  },
});
