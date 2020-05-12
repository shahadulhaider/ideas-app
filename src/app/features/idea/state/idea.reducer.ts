import { IdeaState } from '.';
import { IdeaAction, IdeaActionTypes } from './idea.actions';

const initialState: IdeaState = {
  ideas: {},
  loading: false,
  loaded: false,
  selectedIdea: null
};

export const ideaReducer: (
  state: IdeaState,
  action: IdeaAction
) => IdeaState = (state = initialState, action) => {
  switch (action.type) {
    case IdeaActionTypes.LOAD_IDEAS:
      return { ...state, loading: true, loaded: false };

    case IdeaActionTypes.LOAD_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload.reduce(
          (acc, idea) => ({ ...acc, [idea.id]: idea }),
          state.ideas
        ),
        loading: false,
        loaded: true
      };

    case IdeaActionTypes.LOAD_IDEA:
      return {
        ...state,
        selectedIdea: action.payload,
        loading: true,
        loaded: false
      };

    case IdeaActionTypes.LOAD_IDEA_SUCCESS:
      return {
        ...state,
        ideas: action.payload
          ? { ...state.ideas, [action.payload.id]: action.payload }
          : state.ideas,
        loading: false,
        loaded: true
      };

    case IdeaActionTypes.CREATE_IDEA:
      return { ...state, loading: true, loader: false };

    case IdeaActionTypes.CREATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        loaded: true,
        loading: false
      };

    case IdeaActionTypes.UPDATE_IDEA:
      return { ...state, loading: true, loader: false };

    case IdeaActionTypes.UPDATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: { ...state.ideas, [action.payload.id]: action.payload },
        loaded: true,
        loading: false
      };

    case IdeaActionTypes.DELETE_IDEA:
      return { ...state, loading: true, loader: false };

    case IdeaActionTypes.DELETE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: Object.keys(state.ideas)
          .filter(key => key !== action.payload)
          .reduce((acc, key) => ({ ...acc, key: state[key] }), {}),
        loaded: true,
        loading: false
      };

    case IdeaActionTypes.UPVOTE_IDEA:
      return { ...state, loading: true, loaded: false };

    case IdeaActionTypes.DOWNVOTE_IDEA:
      return { ...state, loading: true, loaded: false };

    default:
      return state;
  }
};
