import { handleActions } from "redux-actions";
import * as Types from "./types";

const initialState = {
  data: {},
  isLoading: false,
  isError: false,
};

export const loadingReducer = state => ({
  ...state,
  isLoading: true,
  isError: false,
});

export const successReducer = (state, action) => ({
  data: action.payload,
  isLoading: false,
  isError: false,
});

export const errorReducer = (state, action) => ({
  data: action.payload,
  isLoading: false,
  isError: true,
});

export default handleActions(
  {
    [Types.GET_DATA]: loadingReducer,
    [Types.GET_DATA_SUCCESS]: successReducer,
    [Types.GET_DATA_ERROR]: errorReducer,
  },
  initialState
);
