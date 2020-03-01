
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';





import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatList,
  MatListItem,
  MatToolbar,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatPaginatorModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatCommonModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatToolbarModule,
  MatTabsModule
  // and so on...
} from '@angular/material';
import 'hammerjs';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { ZoneComponent } from './zone/zone.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {TableModule} from 'primeng/table';

const MAT_MODULES  = [
  MatAutocompleteModule,
MatButtonModule,
MatButtonToggleModule,
MatCardModule,
MatChipsModule,
MatCheckboxModule,
MatDatepickerModule,
MatTableModule,
MatDialogModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatPaginatorModule,
MatProgressBarModule,
MatProgressSpinnerModule,
MatRippleModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSlideToggleModule,
MatSnackBarModule,
MatSortModule,
MatStepperModule,
MatTabsModule,
MatToolbarModule,
MatTooltipModule,
OverlayModule,
PortalModule,
BidiModule,
A11yModule,
MatCommonModule,
];
import { HomeComponent } from './home/home.component';
import { BlacklistComponent } from './blacklist/blacklist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

   { path: '', component: LayoutComponent, children: [
    {path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'blacklist', component: BlacklistComponent },
  { path: 'zones', component: ZoneComponent }, ] },

   { path: '', component: LoginComponent },
   ];
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule ,
    CommonModule,
    MAT_MODULES,
    TableModule,
    RouterModule.forRoot(routes) ,
  ],

  exports: [ RouterModule , MAT_MODULES]
})
export class AppRoutingModule { }
