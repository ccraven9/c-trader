import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ChipModule } from 'primeng/chip';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';


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
    FieldsetModule,
    ChipModule,
    DataViewModule,
    MenuModule,
    TagModule,
    ToastModule,
    MenubarModule,
  ],
  providers: [
    DataViewLayoutOptions
  ]
})
export class PrimengModule { }
