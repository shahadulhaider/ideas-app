import { Entity } from 'src/app/models/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdeaState } from '.';
import { Idea } from 'src/app/models/idea';

export const selectIdeaState = createFeatureSelector<IdeaState>('ideas');

export const selectAllIdeas = createSelector(
  selectIdeaState,
  (ideaState: IdeaState) => {
    const { ideas }: { ideas: Entity<Idea> } = ideaState;
    return Object.keys(ideas).map(id => ideas[id]);
  }
);
