import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PasswordModule,
    ToastModule
  ],
  exports: [
    CardModule,
    InputTextModule,
    ButtonModule,
    MenubarModule,
    PasswordModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class UIModule {}
