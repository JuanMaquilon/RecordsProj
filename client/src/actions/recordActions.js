import axios from "axios";
import { GET_RECORDS, ADD_RECORD, DELETE_RECORD, RECORDS_LOADING } from "./types";

export const getRecords = () => dispatch => {
  dispatch(setRecordsLoading());
  axios.get("/api/records")
  .then(res =>
    dispatch({
      type: GET_RECORDS,
      payload: res.data
    })
  );
};

export const addRecord = record => dispatch => {
  axios.post("/api/records", record)
  .then(res =>
    dispatch({
      type: ADD_RECORD,
      payload: res.data
    })
  );
};

export const deleteRecord = id => dispatch => {
  console.log()
  axios.delete(`/api/records/${id}`).then(res =>
    dispatch({
      type: DELETE_RECORD,
      payload: id
    })
  );
};

export const setRecordsLoading = () => {
  return {
    type: RECORDS_LOADING
  };
};
