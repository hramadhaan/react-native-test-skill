import DUMMY_DATA from "../../data/dummy-data";
import { ADD_TRACKER, FETCH_TRACKER, REMOVE_TRACKER } from "../actions/events";

const initialState = {
  userTrackers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return {
        ...state,
        userTrackers: state.userTrackers.concat(action.events),
      };
    case FETCH_TRACKER:
      return {
        userTrackers: action.events,
      };
    case REMOVE_TRACKER:
      return {
        ...state,
        userTrackers: state.userTrackers.filter(
          (tracker) => tracker.id !== action.trackId
        ),
      };
    default:
      return state;
  }
};
