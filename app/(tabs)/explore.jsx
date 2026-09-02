import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Radio } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import { useRouter } from "expo-router";

const contacts = [
  {
    id: "1",
    name: "Rahul Sharma",
    relation: "Friend",
    phone: "+91 98765 43210",
    online: true,
  },
  {
    id: "2",
    name: "Priya Shah",
    relation: "Family",
    phone: "+91 98765 43211",
    online: true,
  },
  {
    id: "3",
    name: "Amit Patel",
    relation: "Friend",
    phone: "+91 98765 43212",
    online: false,
  },
  {
    id: "4",
    name: "Neha Gupta",
    relation: "Family",
    phone: "+91 98765 43213",
    online: true,
  },
];

export default function Contacts() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handlePing = (contact) => {
    router.push({
      pathname: "/ring",
      params: {
        userId: contact.id,
        userName: contact.name,
      },
    });
  };

  const handleAddContact = () => {
    // Later we will open Add Contact screen
    console.log("Add trusted contact");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const renderContact = ({ item }) => {
    return (
      <View style={styles.contactCard}>
        {/* Avatar */}

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(item.name)}</Text>

          <View
            style={[
              styles.avatarStatus,
              item.online ? styles.avatarOnline : styles.avatarOffline,
            ]}
          />
        </View>

        {/* Contact Information */}

        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{item.name}</Text>

          <View style={styles.detailsRow}>
            <Text style={styles.relation}>{item.relation}</Text>

            <Text style={styles.separator}>•</Text>

            <View
              style={[
                styles.statusDot,
                item.online ? styles.onlineDot : styles.offlineDot,
              ]}
            />

            <Text
              style={[
                styles.statusText,
                item.online ? styles.onlineText : styles.offlineText,
              ]}
            >
              {item.online ? "Available" : "Offline"}
            </Text>
          </View>

          {/* <Text style={styles.phone}>{item.phone}</Text> */}
        </View>

        {/* Ping Button */}

        <Pressable
          style={({ pressed }) => [
            styles.pingButton,
            pressed && styles.pingButtonPressed,
          ]}
          onPress={() => handlePing(item)}
        >
          <Radio style={styles.pingIcon} />
          <Text style={styles.pingText}>Ping</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* ================= HEADER ================= */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Contacts</Text>

          <Text style={styles.subtitle}>Your trusted people</Text>
        </View>

        <Pressable style={styles.topAddButton} onPress={handleAddContact}>
          <Text style={styles.topAddIcon}>+</Text>
        </Pressable>
      </View>

      {/* ================= INFO CARD ================= */}

      <View style={styles.infoCard}>
        <View style={styles.infoIconContainer}>
          <Text style={styles.infoIcon}>🔔</Text>
        </View>

        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>Quick Ping</Text>

          <Text style={styles.infoText}>
            Ping a trusted contact when you need their attention.
          </Text>
        </View>
      </View>

      {/* ================= SEARCH ================= */}

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search trusted contacts"
          placeholderTextColor="#9CA3AF"
          style={styles.searchInput}
        />

        {search.length > 0 && (
          <Pressable onPress={() => setSearch("")}>
            <Text style={styles.clearSearch}>×</Text>
          </Pressable>
        )}
      </View>

      {/* ================= SECTION HEADER ================= */}

      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>Trusted Contacts</Text>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>{filteredContacts.length}</Text>
          </View>
        </View>

        <Text style={styles.onlineCount}>
          {contacts.filter((contact) => contact.online).length} online
        </Text>
      </View>

      {/* ================= CONTACT LIST ================= */}

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔍</Text>

            <Text style={styles.emptyTitle}>No contacts found</Text>

            <Text style={styles.emptyText}>
              Try searching with another name.
            </Text>
          </View>
        }
      />

      {/* ================= ADD CONTACT CTA ================= */}

      <Pressable
        style={({ pressed }) => [
          styles.addContactCard,
          pressed && styles.addContactPressed,
        ]}
        onPress={handleAddContact}
      >
        <View style={styles.addContactIcon}>
          <Text style={styles.addContactIconText}>+</Text>
        </View>

        <View style={styles.addContactContent}>
          <Text style={styles.addContactTitle}>Add Trusted Contact</Text>

          <Text style={styles.addContactSubtitle}>
            Add someone you trust to Ping you
          </Text>
        </View>

        <Text style={styles.arrow}>→</Text>
      </Pressable>

      {/* ================= FLOATING BUTTON ================= */}

      <Pressable style={styles.floatingButton} onPress={handleAddContact}>
        <Text style={styles.floatingButtonText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: "#F7F8FC",
    paddingHorizontal: 20,
  },

  /* ================= HEADER ================= */

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 8,
    marginBottom: 18,
  },

  headerLeft: {
    flex: 1,
  },

  title: {
    fontSize: 29,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    fontSize: 13,
    color: "#7B8494",
    marginTop: 4,
  },

  topAddButton: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: "#FFFFFF",

    alignItems: "center",
    justifyContent: "center",

    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  topAddIcon: {
    fontSize: 29,
    fontWeight: "300",
    color: "#5368F2",
    lineHeight: 32,
  },

  /* ================= INFO CARD ================= */

  infoCard: {
    width: "100%",
    backgroundColor: "#EEF1FF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  infoIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  infoIcon: {
    fontSize: 18,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#3446B8",
  },

  infoText: {
    fontSize: 11,
    lineHeight: 16,
    color: "#667085",
    marginTop: 2,
  },

  /* ================= SEARCH ================= */

  searchContainer: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ECEEF4",
    marginBottom: 22,
  },

  searchIcon: {
    fontSize: 17,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: "#111827",
  },

  clearSearch: {
    fontSize: 25,
    color: "#9CA3AF",
    paddingHorizontal: 5,
  },

  /* ================= SECTION ================= */

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: "#111827",
  },

  countBadge: {
    minWidth: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E9ECFF",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },

  countText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#5368F2",
  },

  onlineCount: {
    fontSize: 11,
    fontWeight: "600",
    color: "#22A85A",
  },

  /* ================= LIST ================= */

  listContent: {
    paddingBottom: 155,
  },

  /* ================= CONTACT CARD ================= */

  contactCard: {
    width: "100%",
    minHeight: 92,
    backgroundColor: "#FFFFFF",
    borderRadius: 19,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },

  /* ================= AVATAR ================= */

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#5368F2",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  avatarText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  avatarStatus: {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: "absolute",
    right: -1,
    bottom: 0,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  avatarOnline: {
    backgroundColor: "#22C55E",
  },

  avatarOffline: {
    backgroundColor: "#AEB4BE",
  },

  /* ================= CONTACT INFO ================= */

  contactInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  contactName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  relation: {
    fontSize: 11,
    color: "#687386",
  },

  separator: {
    fontSize: 12,
    color: "#AEB4BE",

    marginHorizontal: 5,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 5,
  },

  onlineDot: {
    backgroundColor: "#22C55E",
  },

  offlineDot: {
    backgroundColor: "#AEB4BE",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "600",
  },

  onlineText: {
    color: "#22A85A",
  },

  offlineText: {
    color: "#89919E",
  },

  phone: {
    fontSize: 10,
    color: "#A0A6B1",
    marginTop: 4,
  },

  /* ================= PING BUTTON ================= */

  pingButton: {
    width: 78,
    height: 46,
    borderRadius: 14,
    backgroundColor: "#5368F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  pingButtonPressed: {
    opacity: 0.75,
    transform: [
      {
        scale: 0.96,
      },
    ],
  },

  pingIcon: {
    fontSize: 9,
    fontWeight: "700",
    color: "#FFFFFF",
    marginRight: 5,
  },

  pingText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  /* ================= EMPTY STATE ================= */

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },

  emptyIcon: {
    fontSize: 35,
  },

  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginTop: 12,
  },

  emptyText: {
    fontSize: 12,
    color: "#89919E",
    marginTop: 5,
  },

  /* ================= ADD CONTACT ================= */

  addContactCard: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 25,
    height: 68,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 7,
  },

  addContactPressed: {
    opacity: 0.85,
  },

  addContactIcon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#EEF1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  addContactIconText: {
    fontSize: 25,
    fontWeight: "300",
    color: "#5368F2",
  },

  addContactContent: {
    flex: 1,
    marginLeft: 11,
  },

  addContactTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },

  addContactSubtitle: {
    fontSize: 10,
    color: "#89919E",
    marginTop: 3,
  },

  arrow: {
    fontSize: 22,
    color: "#5368F2",
    marginRight: 5,
  },

  /* ================= FLOATING BUTTON ================= */

  floatingButton: {
    position: "absolute",
    right: 28,
    bottom: 108,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#5368F2",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,
  },

  floatingButtonText: {
    fontSize: 30,
    fontWeight: "300",
    color: "#FFFFFF",
    lineHeight: 34,
  },
});
