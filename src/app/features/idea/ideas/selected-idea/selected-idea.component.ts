import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from '../../state';
import { Store } from '@ngrx/store';
import { selectCurrentIdea } from '../../state/idea.selector';
import { Subscription } from 'rxjs';
import { Idea } from 'src/app/models/idea';

@Component({
  selector: 'app-selected-idea',
  templateUrl: './selected-idea.component.html',
  styleUrls: ['./selected-idea.component.scss']
})
export class SelectedIdeaComponent implements OnInit, OnDestroy {
  private subscription$: Subscription;
  idea: Idea;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription$ = this.store
      .select(selectCurrentIdea)
      .subscribe(idea => (this.idea = idea));
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
