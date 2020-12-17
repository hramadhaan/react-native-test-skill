import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";

import * as authAction from "../store/actions/auth";

const { height, width } = Dimensions.get("screen");
const WIDTH_ROW = width * 0.75;
const HEIGHT_ROW = 40;

const InputNameScreen = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(authAction.authenticate(name));
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [
        {
          text: "Okay",
        },
      ]);
    }
  }, [error]);

  return (
    <ImageBackground
      style={styles.main}
      source={{
        uri:
          "https://images.unsplash.com/photo-1510590256405-ddf6bda038e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80",
      }}
    >
      <View style={styles.rowContainer}>
        <TextInput
          onChangeText={(text) => setName(text)}
          placeholder="Input your name"
          placeholderTextColor="white"
          style={{ width: WIDTH_ROW, paddingHorizontal: 10, color: "white" }}
        />
      </View>
      <TouchableOpacity onPress={() => submitHandler()} disabled={isLoading}>
        <View style={styles.button}>
          <Text style={{ color: "white" }}>Go</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rowContainer: {
    marginTop: 16,
    borderColor: "#aaa",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 8,
    width: WIDTH_ROW,
    height: HEIGHT_ROW,
  },
  button: {
    marginTop: 8,
    width: WIDTH_ROW,
    height: HEIGHT_ROW - 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    borderRadius: 8,
  },
});

export default InputNameScreen;
