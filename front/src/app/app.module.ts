import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HttpClientModule } from '@angular/common/http';
// import { AccueilComponent } from './demo/accueil/accueil/accueil.component';
// import { CardModule } from 'primeng/card';
// import { ButtonModule } from 'primeng/button';
import { DragDropModule } from 'primeng/dragdrop';
import { TableModule } from 'primeng/table'; 
import {PanelModule} from 'primeng/panel';
import { ProgressSpinnerModule } 
    from 'primeng/progressspinner';


import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    ConfigurationComponent,
    GuestComponent,
    // AccueilComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    SharedModule, 
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    ProgressSpinnerModule,
    FormsModule,
    TableModule,
    PanelModule,
    RouterModule,
    DialogModule,
    ConfirmDialogModule
    // CardModule,
    // ButtonModule
  ],
  providers: [NavigationItem,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
