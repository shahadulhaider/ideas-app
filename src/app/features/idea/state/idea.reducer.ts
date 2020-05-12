import { IdeaState } from '.';
import { IdeaAction, IdeaActionTypes } from './idea.actions';

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false
};

export const ideaReducer: (
  state: IdeaState,
  action: IdeaAction
) => IdeaState = (state = initialState, action) => {
  switch (action.type) {
    case IdeaActionTypes.LOAD_IDEAS:
      return { ...state, loading: true, loaded: false };

    case IdeaActionTypes.LOAD_IDEAS_SUCCESS:
      const ideas = action.payload.reduce(
        (acc, idea) => ({ ...acc, [idea.id]: idea }),
        state.ideas
      );

      return { ...state, ideas, loading: true, loaded: true };

    default:
      return state;
  }
};
