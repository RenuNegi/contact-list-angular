import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, FormGroup } from '@angular/forms';
import { Contact } from '../contacts';
import { ContactDetailListServiceService } from '../contact-detail-list-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  showMyContainer = false;
  contact: Contact;
  constructor(private contactService: ContactDetailListServiceService) { }
  @Input() cardDetails: Contact;

  ngOnInit(): void {
  }

  onDeleteClick(): void {
    if (window.confirm(`Do you really want to delete ${this.cardDetails.firstName}'s contact?`)) {
      this.contactService.deleteContact(this.cardDetails.id);
    }

  }

}
