import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    FieldsetModule
  ]
})
export class PrimengModule { }
