import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AppStoreModule } from './store/app-store.module';
import { UIModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule
  ],
  providers: [AuthService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
