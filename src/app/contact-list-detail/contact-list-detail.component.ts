
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray, FormGroup } from '@angular/forms';
import { ContactDetailListServiceService } from '../contact-detail-list-service.service';
import { Contact } from '../contacts';

@Component({
  selector: 'app-contact-list-detail',
  templateUrl: './contact-list-detail.component.html',
  styleUrls: ['./contact-list-detail.component.css']
})
export class ContactListDetailComponent implements OnInit {
  title = 'Update contact';

  contactData: Contact;
  contactDataFromEvent: Contact;
  showSuccess = false;
  @Input() contactInfo: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactDetailListServiceService,
    private location: Location,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.getContact(); // async
  }

  getContact(): void {
    const name = this.route.snapshot.paramMap.get('firstName');
    if (name) {
      this.contactService.getContactDetail(name).subscribe(contact => {
        if (contact) {
          this.contactData = contact;
        }
      });
    }

  }


  onUpdateClick(contactFromEvent: Contact): void {
    this.contactDataFromEvent = contactFromEvent;
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.updateContact(contactFromEvent);
    this.showSuccess = true;
  }


  backButton(): void {
    this.location.back();
  }

}
