import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeasComponent } from './ideas/ideas.component';
import { RouterModule, Routes } from '@angular/router';
import { UIModule } from 'src/app/ui/ui.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ideaReducer } from './state/idea.reducer';
import { IdeaEffets } from './state/idea.effects';
import { IdeaComponent } from './ideas/idea/idea.component';

const routes: Routes = [
  {
    path: '',
    component: IdeasComponent
  }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffets])
  ]
})
export class IdeaModule {}
