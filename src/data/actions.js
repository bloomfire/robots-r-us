import { createAction } from "redux-actions";
import * as Types from "./types";

export const getData = createAction(Types.GET_DATA);
export const getDataSuccess = createAction(Types.GET_DATA_SUCCESS);
export const getDataError = createAction(Types.GET_DATA_ERROR);

