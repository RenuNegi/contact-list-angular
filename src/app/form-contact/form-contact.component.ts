import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contacts';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ContactDetailListServiceService } from '../contact-detail-list-service.service';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  contactForm: FormGroup;
  @Input() contact: Contact;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Input() resetOnFormSubmit = false;

  constructor(private fb: FormBuilder, private contactDetailListService: ContactDetailListServiceService) { }

  ngOnInit(): void {
    if (this.contact) {
      this.contactForm = this.fb.group({
        firstName: [this.contact.firstName, Validators.required],
        lastName: [this.contact.lastName],
        email: [this.contact.email, [Validators.required, Validators.email]],
        phone: [this.contact.phone, [Validators.required, Validators.minLength(10)]],
        id: [this.contact.id]
        //  id: [this.contactDetailListService.getUniqueId()]
      });
    }
    else {
      this.contactForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: [''],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        id: [this.contactDetailListService.getUniqueId()]
      });
    }

  }


  // this.contactForm = this.fb.group({
  //   firstName: [this.contact.firstName, Validators.required],
  //   lastName: [this.contact.lastName],
  //   emailId: [this.contact.email],
  //   phone: [this.contact.phone],
  //   id: [this.contact.id]
  // });

  onSubmitclick(): void {
    this.formSubmit.emit(this.contactForm.value);
    if (this.resetOnFormSubmit) {
      this.contactForm.reset();
    }
  }

  get firstName(): AbstractControl | null {
    console.log(this.contactForm);
    return this.contactForm.get('firstName');

  }

  get phoneNumber(): AbstractControl | null {
    return this.contactForm.get('phone');
  }
  get email(): AbstractControl | null {
    return this.contactForm.get('email');
  }

}
