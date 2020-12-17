import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import InputNameScreen from "../screens/InputNameScreen";
import TrackScreen from "../screens/TrackScreen";
import CustomTabBar from "../components/CustomTabBar";

const TabNavigator = createMaterialTopTabNavigator();

export const TabStack = (props) => {
  return (
    <TabNavigator.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <TabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Events" }}
      />
      <TabNavigator.Screen name="Track" component={TrackScreen} />
    </TabNavigator.Navigator>
  );
};

const HomeStackNavigator = createSharedElementStackNavigator();

export const HomeStack = (props) => {
  return (
    <HomeStackNavigator.Navigator headerMode="none" initialRouteName="Home">
      <HomeStackNavigator.Screen name="Tab" component={TabStack} />
      <HomeStackNavigator.Screen
        name="Detail"
        component={DetailScreen}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: {
                duration: 400,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 400,
              },
            },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </HomeStackNavigator.Navigator>
  );
};

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = (props) => {
  return (
    <AuthStackNavigator.Navigator headerMode="none">
      <AuthStackNavigator.Screen name="Login" component={InputNameScreen} />
    </AuthStackNavigator.Navigator>
  );
};
