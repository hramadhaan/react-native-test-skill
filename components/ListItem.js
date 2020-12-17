import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const ListItem = ({
  title,
  image,
  paid,
  place,
  onPress,
  visibleIcon,
  onRemove,
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.rowContainer}>
        <SharedElement id={`image.${title}`} style={styles.image}>
          <Image source={{ uri: image }} style={styles.image} />
        </SharedElement>
        <View
          style={{
            flexDirection: "column",
            marginLeft: 4,
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              width: width * 0.7,
            }}
          >
            {title}
          </Text>
          <Text>{place}</Text>
          <Text
            style={{
              marginTop: 5,
              textTransform: "capitalize",
              fontStyle: "italic",
            }}
          >
            {paid === true ? "Paid Entry" : "Free Entry"}
          </Text>
        </View>
        {visibleIcon && (
          <TouchableOpacity style={{ position: "absolute", right: 8, top: 0 }} onPress={onRemove}>
            <Ionicons name="trash-outline" size={22} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default ListItem;
