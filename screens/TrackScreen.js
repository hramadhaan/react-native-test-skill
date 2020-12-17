import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Button,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";

import ListItem from "../components/ListItem";
import * as eventsAction from "../store/actions/events";
import GridItem from "../components/GridItem";

const TrackScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [isGrid, setIsGrid] = useState(false);

  const dispatch = useDispatch();
  const track = useSelector((state) => state.events.userTrackers);

  const loadTrack = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(eventsAction.fetchTracking());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsRefreshing, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadTrack().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadTrack]);

  const deleteTrack = async (id) => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(eventsAction.deleteTracking(id));
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  };

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={{ color: isEnabled ? "white" : "black" }}>
          An error occurred!
        </Text>
        <Button title="Try again" onPress={loadArtikel} />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (track.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>Tidak ada event dalam track ini</Text>
        <Button title="Refresh" onPress={loadTrack} />
      </View>
    );
  }

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
        <Text style={{ fontSize: 26, fontWeight: "800" }}>Your Tracks</Text>
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
    <View>
      <Header />
      <FlatList
        key={isGrid ? "GRID" : "SINGLE"}
        data={track}
        onRefresh={loadTrack}
        refreshing={isRefreshing}
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        decelerationRate={Platform.OS === "ios" ? "fast" : "normal"}
        bounces={true}
        numColumns={isGrid ? 2 : 1}
        renderItem={({ item, index }) => {
          return isGrid ? (
            <GridItem
              image={item.images[0]}
              title={item.name}
              place={item.place}
              paid={item.paid}
              visibleIcon={true}
              onRemove={() => {
                Alert.alert("Hapus", "Anda ingin menghapus event ini ?", [
                  {
                    text: "Tidak",
                    style: "cancel",
                  },
                  {
                    text: "Iya",
                    style: "destructive",
                    onPress: () => {
                      deleteTrack(item.id);
                    },
                  },
                ]);
              }}
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
              visibleIcon={true}
              onRemove={() => {
                Alert.alert("Hapus", "Anda ingin menghapus event ini ?", [
                  {
                    text: "Tidak",
                    style: "cancel",
                  },
                  {
                    text: "Iya",
                    style: "destructive",
                    onPress: () => {
                      deleteTrack(item.id);
                    },
                  },
                ]);
              }}
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

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
  },
});

export default TrackScreen;
