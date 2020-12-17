import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import BottomSheet, {
  BottomSheetScrollView,
  TouchableOpacity as GorhomTouchable,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SharedElement } from "react-navigation-shared-element";
import { useDispatch } from "react-redux";
import * as eventAction from "../store/actions/events";

const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const DetailScreen = (props) => {
  const { route } = props;
  const { item } = route.params;
  const inset = useSafeAreaInsets();

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      await dispatch(eventAction.addTracking(item));
    } catch (err) {}
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
        <SharedElement
          id={`image.${item.name}`}
          style={{ height: ITEM_HEIGHT, overflow: "hidden" }}
        >
          <Animated.FlatList
            bounces={false}
            data={item.images}
            keyExtractor={(item, index) => index.toString()}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate={Platform.OS === "ios" ? "fast" : "normal"}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              {
                useNativeDriver: true,
              }
            )}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Image source={{ uri: item }} style={styles.image} />
                </View>
              );
            }}
          />
        </SharedElement>
        <View style={styles.pagination}>
          <Animated.View
            style={[
              styles.dotIndicator,
              {
                transform: [
                  {
                    translateY: Animated.divide(
                      scrollY,
                      ITEM_HEIGHT
                    ).interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    }),
                  },
                ],
              },
            ]}
          />
          {item.images.map((_, index) => {
            return <View key={index} style={[styles.dot]} />;
          })}
        </View>
        <TouchableOpacity
          style={{ position: "absolute", top: 40, left: 20 }}
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View
            style={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back-outline" size={18} />
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheet
        initialSnapIndex={0}
        snapPoints={[height - ITEM_HEIGHT, height - Math.max(inset.top, 16)]}
      >
        <BottomSheetScrollView style={{ backgroundColor: "white" }}>
          <Text
            style={{
              fontWeight: "800",
              fontSize: 16,
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {item.place}
          </Text>
          <Text
            style={{ fontSize: 13, textAlign: "center", fontStyle: "italic" }}
          >
            {item.paid ? "Paid Entry" : "Free Entry"}
          </Text>
          <View style={{ marginVertical: 20, marginHorizontal: 12 }}>
            <Text style={{ textAlign: "justify" }}>{item.description}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <GorhomTouchable
              style={{
                width: width - 20,
                backgroundColor: "tomato",
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={submitHandler}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "800",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Track
              </Text>
            </GorhomTouchable>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    top: ITEM_HEIGHT / 2,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: "tomato",
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    backgroundColor: "white",
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});

DetailScreen.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
    {
      id: `image.${item.name}`,
    },
  ];
};

export default DetailScreen;
