import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomTabBar = ({ state, descriptors, navigation, position }) => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop:
          Platform.OS === "android"
            ? Math.max(inset.top, 16)
            : Math.max(inset.top, 16),
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        const backgroundColor = Animated.interpolate(position, {
          inputRange: [0, 1],
          outputRange: ["transparent", "tomato"],
        });

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: "center",
              height: 40,
              justifyContent: "center",
              backgroundColor: isFocused ? "tomato" : "transparent",
            }}
          >
            <Text style={{ color: isFocused ? "white" : "black" }}>
              {label}
            </Text>
            <Animated.View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "black",
                opacity,
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
