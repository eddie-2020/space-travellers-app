// import * as Actions from '../Action/rocketAction';

// // declare the initial state
// const initialState = { rocket: [] };

// const initialLoading = { loading: false };

// // the reducer function for the rocket
// export const rocketReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case Actions.ROCKETS_ADDED:
//       return { rocket: [...state.rocket, payload] };
//     case Actions.ROCKETS_REMOVED:
//       return { rocket: (state.rocket.filter(({ id }) => id !== payload.id)) };
//     case Actions.ROCKETS_DISPLAYED:
//       return { rocket: [...payload] };
//     default:
//       return state;
//   }
// };

// // the reducer function for the loaders
// export const loadingReducer = (state = initialLoading, { type, payload }) => {
//   switch (type) {
//     case Actions.LOADING_STARTED:
//       return { ...state, loading: payload };
//     case Actions.LOADING_FINISHED:
//       return { ...state, loading: payload };
//     default:
//       return state;
//   }
// };
