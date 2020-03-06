import * as Types from "../actions";

const initialState = {
  ailments: []
};

export const ailmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_AILMENT:
      const { ailmentName, severity, pharmaUse, description } = action.payload;
      const newAilment = {
        ailmentName: ailmentName,
        pharmaUse: pharmaUse,
        severity: severity,
        description: description,
        id: Date.now()
      };
      return {
        ...state,
        ailments: [...state.ailments, newAilment]
      };
    case Types.REMOVE_AILMENT:
      return {
        ...state,
        ailments: [
          ...state.ailments.filter(obj => obj.id !== action.payload.id)
        ]
      };
    default:
      return state;
  }
};