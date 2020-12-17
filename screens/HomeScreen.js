import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

import GridItem from "../components/GridItem";
import ListItem from "../components/ListItem";
import DUMMY_DATA from "../data/dummy-data";

const HomeScreen = (props) => {
  const [isGrid, setIsGrid] = useState(false);
  const inset = useSafeAreaInsets();

  const Header = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 18,
          justifyContent: "space-between",
          marginHorizontal: 12,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "800" }}>Events</Text>
        <Ionicons
          name={isGrid ? "grid-outline" : "list-outline"}
          size={22}
          onPress={() => {
            setIsGrid(!isGrid);
          }}
        />
      </View>
    );
  };

  return (
    <View style={{ paddingBottom: Math.max(inset.bottom, 16), flex: 1 }}>
      <Header />
      <FlatList
        key={isGrid ? "GRID" : "SINGLE"}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        data={DUMMY_DATA}
        decelerationRate={Platform.OS === "ios" ? "fast" : "normal"}
        bounces={false}
        keyExtractor={(item) => item.id}
        numColumns={isGrid ? 2 : 1}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return isGrid ? (
            <GridItem
              image={item.images[0]}
              title={item.name}
              place={item.place}
              paid={item.paid}
              onPress={() => {
                props.navigation.navigate("Detail", { item });
              }}
            />
          ) : (
            <ListItem
              image={item.images[0]}
              title={item.name}
              place={item.place}
              paid={item.paid}
              onPress={() => {
                props.navigation.navigate("Detail", { item });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
