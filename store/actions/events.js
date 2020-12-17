import firebase from "firebase";
import moment from "moment";
import Events from "../../models/Events";

export const ADD_TRACKER = "ADD_TRACKER";
export const REMOVE_TRACKER = "REMOVE_TRACKER";
export const FETCH_TRACKER = "FETCH_TRACKER";

export const addTracking = (events) => {
  return async (dispatch, getState) => {
    const nameUser = getState().auth.name;
    const idEvents = events.id;

    firebase
      .database()
      .ref()
      .child("user")
      .child(nameUser)
      .child("events")
      .child(idEvents)
      .once("value")
      .then((snapshot) => {
        if (snapshot.exists()) {
          alert("Sudah di track");
        } else {
          firebase
            .database()
            .ref()
            .child("user")
            .child(nameUser)
            .child("events")
            .child(idEvents)
            .set(events)
            .then(() => {
              alert("Berhasil di track");
              dispatch({
                type: ADD_TRACKER,
                events: events,
              });
            });
        }
      });
  };
};

export const fetchTracking = () => {
  return async (dispatch, getState) => {
    const nameUser = getState().auth.name;
    try {
      firebase
        .database()
        .ref()
        .child("user")
        .child(nameUser)
        .child("events")
        .once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          const loadedTrack = [];
          for (const key in data) {
            loadedTrack.push(
              new Events(
                data[key].id,
                data[key].name,
                data[key].place,
                data[key].paid,
                data[key].images,
                data[key].description
              )
            );
          }
          dispatch({
            type: FETCH_TRACKER,
            events: loadedTrack,
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deleteTracking = (id) => {
  return async (dispatch, getState) => {
    const nameUser = getState().auth.name;
    try {
      firebase
        .database()
        .ref()
        .child("user")
        .child(nameUser)
        .child("events")
        .child(id)
        .remove()
        .then(() => {
          console.log("berhasil di hapus");
          dispatch({
            type: REMOVE_TRACKER,
            trackId: id,
          });
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};
