import { Action } from '@ngrx/store';
import { Idea } from 'src/app/models/idea';

export enum IdeaActionTypes {
  LOAD_IDEAS = '[Idea] Load ideas',
  LOAD_IDEAS_SUCCESS = '[Idea] Load ideas success'
}

export class LoadIdeas implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEAS;
}

export class LoadIdeasSuccess implements Action {
  readonly type = IdeaActionTypes.LOAD_IDEAS_SUCCESS;
  constructor(public payload: Idea[]) {}
}

export type IdeaAction = LoadIdeas | LoadIdeasSuccess;
