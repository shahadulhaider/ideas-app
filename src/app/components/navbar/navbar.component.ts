import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng/api/menuitem';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app-store.module';
import { Router } from '@angular/router';
import { SetCurrentUser } from 'src/app/store/actions/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Home',
      routerLink: ['/'],
      icon: 'fa fa-home'
    },
    {
      label: 'Ideas',
      routerLink: ['/ideas']
    },
    {
      label: 'Users',
      routerLink: ['/users']
    }
  ];
  constructor(
    public authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  onClick() {
    if (this.authService.token) {
      this.authService.token = null;
      this.store.dispatch(new SetCurrentUser(null));
    }
    this.router.navigate(['/auth']);
  }

  ngOnInit(): void {}
}
