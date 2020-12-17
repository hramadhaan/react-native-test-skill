import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const WIDTH_CARD = width / 2;
const HEIGHT_CARD = height * 0.3;

const GridItem = ({
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
      <View>
        <SharedElement
          id={`image.${title}`}
          style={{ width: WIDTH_CARD, height: HEIGHT_CARD }}
        >
          <ImageBackground
            source={{ uri: image }}
            style={{
              width: WIDTH_CARD,
              height: HEIGHT_CARD,
              resizeMode: "cover",
            }}
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              locations={[0, 0.7]}
              style={{
                width: WIDTH_CARD,
                height: HEIGHT_CARD,
              }}
            ></LinearGradient>
          </ImageBackground>
          <View style={{ position: "absolute", bottom: 8, left: 8 }}>
            <Text
              style={{ fontSize: 18, color: "white", fontWeight: "800" }}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text style={{ fontSize: 14, color: "white" }}>{place}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              left: 8,
              top: 8,
              backgroundColor: "tomato",
              padding: 8,
              borderRadius: 18,
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "800", color: "white" }}>
              {paid ? "Paid Entry" : "Free Entry"}
            </Text>
          </View>
          {visibleIcon && (
            <TouchableOpacity
              onPress={onRemove}
              style={{ position: "absolute", right: 8, top: 8 }}
            >
              <Ionicons name="trash-outline" size={26} color="white" />
            </TouchableOpacity>
          )}
        </SharedElement>
      </View>
    </TouchableOpacity>
  );
};

export default GridItem;
