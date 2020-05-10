import { Action } from '@ngrx/store';
import { User } from '../../../models/user';

export enum UserActionsTypes {
  LOAD_USERS = '[Users] Load users',
  LOAD_USERS_SUCCESS = '[Users] Load user success'
}

export class LoadUsers implements Action {
  readonly type = UserActionsTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionsTypes.LOAD_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}

export type UserActions = LoadUsers | LoadUsersSuccess;
