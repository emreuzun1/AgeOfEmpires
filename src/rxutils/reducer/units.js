import produce from "immer";

const initialState = {
  loading: false,
  units: [],
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "UNITS_GET_REQUEST": {
        draft.loading = true;
        break;
      }
      case "UNITS_GET_SUCCESS": {
        draft.loading = false;
        draft.units = action.payload;
        break;
      }
    }
  });
