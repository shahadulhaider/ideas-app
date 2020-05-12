import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Idea } from 'src/app/models/idea';
import { AppState } from '../state';
import { LoadIdeas } from '../state/idea.actions';
import { selectAllIdeas } from '../state/idea.selector';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {
  ideas: Observable<Idea[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadIdeas());
    this.ideas = this.store.select(selectAllIdeas);
  }
}
