import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UUIDGuard } from 'src/app/services/uuid.guard';
import { UIModule } from 'src/app/ui/ui.module';
import { IdeaResolver } from './idea.resolver';
import { IdeaComponent } from './ideas/idea/idea.component';
import { IdeasComponent } from './ideas/ideas.component';
import { SelectedIdeaComponent } from './ideas/selected-idea/selected-idea.component';
import { IdeaEffets } from './state/idea.effects';
import { ideaReducer } from './state/idea.reducer';

const routes: Routes = [
  {
    path: '',
    component: IdeasComponent
  },
  {
    path: ':id',
    component: SelectedIdeaComponent,
    canActivate: [UUIDGuard],
    resolve: { data: IdeaResolver }
  }
];

@NgModule({
  declarations: [IdeasComponent, IdeaComponent, SelectedIdeaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UIModule,
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffets])
  ],
  providers: [IdeaResolver]
})
export class IdeaModule {}
