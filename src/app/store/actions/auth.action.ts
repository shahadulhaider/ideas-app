import { Action } from '@ngrx/store';
import { AuthDTO } from 'src/app/models/auth';
import { User } from 'src/app/models/user';

export enum AuthActionTypes {
  'LOGIN_USER' = '[AUTH] Login User',
  'REGISTER_USER' = '[AUTH] Register User',
  'SET_CURRENT_USER' = '[AUTH] Set Current User',
  'SET_INITIAL_USER' = '[AUTH] Set Initial User'
}

export class LoginUser implements Action {
  readonly type = AuthActionTypes.LOGIN_USER;
  constructor(public payload: AuthDTO) {}
}

export class RegisterUser implements Action {
  readonly type = AuthActionTypes.REGISTER_USER;
  constructor(public payload: AuthDTO) {}
}

export class SetInitialUser implements Action {
  readonly type = AuthActionTypes.SET_INITIAL_USER;
  // constructor(public payload: AuthDTO) {}
}

export class SetCurrentUser implements Action {
  readonly type = AuthActionTypes.SET_CURRENT_USER;
  constructor(public payload: User) {}
}

export type AuthAction =
  | LoginUser
  | RegisterUser
  | SetCurrentUser
  | SetInitialUser;
