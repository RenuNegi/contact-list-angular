import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './contacts';
import { contactListInfo } from './contact-data';

@Injectable({
  providedIn: 'root'
})

export class ContactDetailListServiceService {
  dataList: Contact[];
  constructor() {
    this.dataList = contactListInfo;
  }

  getContactList(): Observable<Contact[]> {
    return of(this.dataList);
  }

  getContactDetail(firstName: string): Observable<Contact | undefined> {
    return of(this.dataList.find(contact => contact.firstName === firstName));
  }

  updateContact(contact: Contact): void {
    const objIndex = this.dataList.findIndex((obj => obj.id === contact.id));
    if (objIndex > -1) {
      this.dataList[objIndex] = contact;
    }
  }

  getUniqueId(): number {
    return this.dataList.length;
  }

  addContact(contact: Contact): void {
    this.dataList.push(contact);
  }

  deleteContact(id: number): void {
    const objIndex = this.dataList.findIndex((obj => obj.id === id));
    if (objIndex > -1) {
      this.dataList.splice(objIndex, 1);
    }

  }


}
