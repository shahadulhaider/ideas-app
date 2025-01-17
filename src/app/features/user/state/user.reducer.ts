import { UserState } from '.';
import { UserAction, UserActionsTypes } from './user.actions';

const initialState: UserState = {
  loaded: false,
  loading: false,
  users: []
};

export const userReducer: (
  state: UserState,
  action: UserAction
) => UserState = (state = initialState, action) => {
  switch (action.type) {
    case UserActionsTypes.LOAD_USERS:
      return { ...state, loaded: false, loading: true };

    case UserActionsTypes.LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload, loaded: true, loading: false };

    default:
      return state;
  }
};
