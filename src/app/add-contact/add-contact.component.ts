import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { FormArray, FormGroup } from '@angular/forms';
import { Contact } from '../contacts';
import { ContactDetailListServiceService } from '../contact-detail-list-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  title = 'Add new contact to list';
  showSuccess = false;
  contactDataFromEvent: Contact;
  constructor(private fb: FormBuilder, private contactDetailListService: ContactDetailListServiceService, private location: Location) { }

  ngOnInit(): void {
    // this.contactForm = this.fb.group({
    //   firstName: ['', Validators.required],
    //   lastName: [''],
    //   email: [null, [Validators.required, Validators.email]],
    //   phone: [null, [Validators.required, Validators.minLength(10)]],
    //   id: [this.contactDetailListService.getUniqueId()]
    // });
  }

  onAddClick(contactData: Contact): void {
    this.contactDataFromEvent = contactData;
    this.contactDetailListService.addContact(contactData);
    this.showSuccess = true;
    // this.contactForm.reset();


  }


  backButton(): void {
    this.location.back();
  }
}
