import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ContactDetailListServiceService } from '../contact-detail-list-service.service';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.css']
})
export class ContactDashboardComponent implements OnInit {
  title = 'Contact List';
  contacts: Contact[] = [];

  constructor(private contactDetailListService: ContactDetailListServiceService) { }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList(): void {
    this.contactDetailListService.getContactList().subscribe(contact => this.contacts = contact);
  }

}
