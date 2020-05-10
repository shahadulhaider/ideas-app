import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { AddError, RemoveError } from 'src/app/store/actions/errors.action';
import { AppState } from '.';
import { LoadUsers, LoadUsersSuccess, UserActionsTypes } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private api: ApiService
  ) {}

  @Effect()
  loadUsers$: Observable<Action> = this.action$.pipe(
    ofType<LoadUsers>(UserActionsTypes.LOAD_USERS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getUsers().pipe(
        map(users => new LoadUsersSuccess(users)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );
}
