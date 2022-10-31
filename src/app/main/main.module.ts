import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainRoutingModule } from './main-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog'



@NgModule({
  declarations: [
    LayoutComponent,
    DialogComponent,
    PaginatorComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule
  ]

})
export class MainModule {}
