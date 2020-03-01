import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SDKBrowserModule } from './shared/sdk/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
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
import { DataGridModule } from 'primeng/datagrid';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { HomeComponent } from './home/home.component';

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
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EmployeeComponent,
    BlacklistComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ZoneComponent,
    LayoutComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    SDKBrowserModule.forRoot(),
    AppRoutingModule,
    FormsModule ,
    HttpModule,
    MAT_MODULES,
    FlexLayoutModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataGridModule,
    DialogModule,
    PanelModule,
  ],
  exports: MAT_MODULES,

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
