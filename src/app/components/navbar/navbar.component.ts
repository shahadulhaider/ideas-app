import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng/api/menuitem';

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
    }
  ];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
