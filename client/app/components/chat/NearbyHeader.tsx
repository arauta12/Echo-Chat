import { UserProfile } from "@app/types/User";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { ChevronLeft } from "react-native-feather";

interface NearbyHeaderProps {
  onClick: () => void;
  nearbyUsers: { [uid: string]: UserProfile };
}

export const NearbyHeader: React.FC<NearbyHeaderProps> = ({ onClick, nearbyUsers }) => {
  return (
    <View style={styles.nearbyContainer}>
      <Text style={styles.nearbyText}>Nearby</Text>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.peopleIcon}
            source={require("../../../assets/icons/misc/nearby_icon.png")}
          />

          <Text style={styles.countText}>{Object.keys(nearbyUsers).length}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nearbyContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#34D1BF",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingVertical: 15,
    paddingRight: "5%",
    paddingLeft: "10%",
    gap: 10,
    zIndex: 1,
  },
  nearbyText: {
    fontFamily: "Quicksand",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginRight: "auto",
  },
  peopleIcon: {
    tintColor: "white",
    height: Dimensions.get("window").height * 0.025,
    width: Dimensions.get("window").height * 0.03,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  countText: {
    fontFamily: "Quicksand",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
});

export default NearbyHeader;
