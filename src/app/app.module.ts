import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { UUIDGuard } from './services/uuid.guard';
import { AppStoreModule } from './store/app-store.module';
import { UIModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule
  ],
  providers: [AuthService, ApiService, UUIDGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
