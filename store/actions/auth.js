import firebase from "firebase";
import moment from "moment";

export const AUTHENTICATION = "AUTHENTICATION";
export const LOGOUT = "LOGOUT";

export const saveDataToStorage = (userId) => {};

export const authenticate = (name) => {
  return async (dispatch) => {
    try {
   

      firebase
        .database()
        .ref()
        .child("user")
        .child(name)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            dispatch({
              type: AUTHENTICATION,
              userId: data.id,
              name: data.name,
            });
          } else {
            const time = moment().format("hmmss");
            firebase
              .database()
              .ref("user")
              .child(name)
              .set({
                id: time,
                name: name,
              })
              .then(() => {
                dispatch({
                  type: AUTHENTICATION,
                  userId: time,
                  name: name,
                });
              });
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  };
};
