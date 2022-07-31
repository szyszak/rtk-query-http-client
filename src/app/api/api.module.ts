import { NgModule } from '@angular/core';

import { usersApi } from './users-api';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreRtkQueryModule } from 'ngrx-rtk-query';

export type RootState = {
  [usersApi.reducerPath]: ReturnType<typeof usersApi.reducer>;
};

export const reducers: ActionReducerMap<RootState> = {
  [usersApi.reducerPath]: usersApi.reducer,
};

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers: [usersApi.metareducer],
    }),
    StoreRtkQueryModule.forRoot(),
  ],
  providers: [],
  bootstrap: [],
})
export class ApiModule {
  constructor() {
    console.log('api module loaded');
  }
}
