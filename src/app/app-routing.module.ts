import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { ContactListDetailComponent } from './contact-list-detail/contact-list-detail.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [{
  path: 'dashboard', component: ContactDashboardComponent
},
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'detail/:firstName', component: ContactListDetailComponent },
{ path: 'add-contact', component: AddContactComponent },
{ path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
