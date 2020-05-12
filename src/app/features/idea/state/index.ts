import * as Store from '../../../store/app-store.module';
import { Idea } from 'src/app/models/idea';
import { Entity } from 'src/app/models/entity';

export interface IdeaState {
  ideas: Entity<Idea>;
  loading: boolean;
  loaded: boolean;
  selectedIdea?: string;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}
