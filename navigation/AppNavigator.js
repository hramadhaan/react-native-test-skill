import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack, AuthNavigator } from "./RouteNavigation";
import { useSelector } from "react-redux";

const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.userId);
  const login = useSelector((state) => state.auth.login);
  console.log(login);
  return (
    <NavigationContainer>
      {isAuth && <HomeStack />}
      {!isAuth && <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
