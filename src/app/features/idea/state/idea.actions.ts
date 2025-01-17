import { Action } from '@ngrx/store';
import { Idea, IdeaDTO } from 'src/app/models/idea';

export enum IdeaActionTypes {
  LOAD_IDEAS = '[Idea] Load ideas',
  LOAD_IDEAS_SUCCESS = '[Idea] Load ideas success',

  LOAD_IDEA = '[Idea] Load idea',
  LOAD_IDEA_SUCCESS = '[Idea] Load idea success',

  CREATE_IDEA = '[Idea] Create idea',
  CREATE_IDEA_SUCCESS = '[Idea] Create idea success',

  UPDATE_IDEA = '[Idea] Update idea',
  UPDATE_IDEA_SUCCESS = '[Idea] Update idea success',

  DELETE_IDEA = '[Idea] Delete idea',
  DELETE_IDEA_SUCCESS = '[Idea] Delete idea success',

  UPVOTE_IDEA = '[Idea] Upvote idea',
  DOWNVOTE_IDEA = '[Idea] Downvote idea'
}

export class LoadIdeas implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export class LoadIdea implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEA;
  constructor(public payload: string) {}
}

export class LoadIdeaSuccess implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEA_SUCCESS;
  constructor(public payload?: Idea) {}
}

export class CreateIdea implements Action {
  readonly type = IdeaActionTypes.CREATE_IDEA;
  constructor(public payload: IdeaDTO) {}
}

export class CreateIdeaSuccess implements Action {
  readonly type = IdeaActionTypes.CREATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class UpdateIdea implements Action {
  readonly type = IdeaActionTypes.UPDATE_IDEA;
  constructor(public payload: Partial<IdeaDTO>) {}
}

export class UpdateIdeaSuccess implements Action {
  readonly type = IdeaActionTypes.UPDATE_IDEA_SUCCESS;
  constructor(public payload: Idea) {}
}

export class DeleteIdea implements Action {
  readonly type = IdeaActionTypes.DELETE_IDEA;
  constructor(public payload: string) {}
}

export class DeleteIdeaSuccess implements Action {
  readonly type = IdeaActionTypes.DELETE_IDEA_SUCCESS;
  constructor(public payload: string) {}
}

export class UpvoteIdea implements Action {
  readonly type = IdeaActionTypes.UPVOTE_IDEA;
  constructor(public payload: string) {}
}

export class DownvoteIdea implements Action {
  readonly type = IdeaActionTypes.DOWNVOTE_IDEA;
  constructor(public payload: string) {}
}

export type IdeaAction =
  | LoadIdeas
  | LoadIdeasSuccess
  | LoadIdea
  | LoadIdeaSuccess
  | CreateIdea
  | CreateIdeaSuccess
  | UpdateIdea
  | UpdateIdeaSuccess
  | DeleteIdea
  | DeleteIdeaSuccess
  | UpvoteIdea
  | DownvoteIdea;
