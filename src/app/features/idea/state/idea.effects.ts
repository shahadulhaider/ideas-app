import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppState } from '.';
import { ApiService } from 'src/app/services/api.service';
import { Observable, of } from 'rxjs';
import { LoadIdeas, IdeaActionTypes, LoadIdeasSuccess } from './idea.actions';
import { tap, mergeMap, catchError, map } from 'rxjs/operators';
import { RemoveError, AddError } from 'src/app/store/actions/errors.action';

@Injectable()
export class IdeaEffets {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private api: ApiService
  ) {}

  @Effect()
  loadIdeas$: Observable<Action> = this.action$.pipe(
    ofType<LoadIdeas>(IdeaActionTypes.LOAD_IDEAS),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(action =>
      this.api.getIdeas().pipe(
        map(ideas => new LoadIdeasSuccess(ideas)),
        catchError(err => of(new AddError(err.error)))
      )
    )
  );
}
