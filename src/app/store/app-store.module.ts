import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {
  routerReducer,
  RouterReducerState,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './effects/auth.effects';
import { authReducer, AuthState } from './reducers/auth.reducer';
import { errorReducer, ErrorState } from './reducers/errors.reducer';
import { CustomSerializer, RouterStateUrl } from './reducers/router.reducer';

export interface AppState {
  error: ErrorState;
  auth: AuthState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer,
  auth: authReducer,
  router: routerReducer
};

export const effects = [AuthEffects];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    })
  ]
  // providers: [
  //   {
  //     provide: RouterStateSerializer,
  //     useClass: CustomSerializer
  //   }
  // ]
})
export class AppStoreModule {}
