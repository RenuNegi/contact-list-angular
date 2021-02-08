import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListDetailComponent } from './contact-list-detail/contact-list-detail.component';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { CardComponent } from './card/card.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { InitialsPipe } from './card/initials.pipe';
import { FormContactComponent } from './form-contact/form-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListDetailComponent,
    ContactDashboardComponent,
    CardComponent,
    AddContactComponent,
    InitialsPipe,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
