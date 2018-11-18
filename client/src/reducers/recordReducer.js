import {
  GET_RECORDS,
  ADD_RECORD,
  DELETE_RECORD,
  RECORDS_LOADING
} from "../actions/types";

const initialState = {
  records: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
        loading: false
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records.filter(record => record._id !== action.payload)
      };
    case ADD_RECORD:
      return {
        ...state,
        records: [action.payload, ...state.records]
      };
    case RECORDS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
