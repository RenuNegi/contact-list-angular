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
    console.log(this.dataList);
    return of(this.dataList);
  }

  getContactDetail(firstName: string): Observable<Contact | undefined> {
    return of(this.dataList.find(contact => contact.firstName === firstName));
  }

  updateContact(contact: Contact): void {
    console.log(contact);
    const objIndex = this.dataList.findIndex((obj => obj.id === contact.id));
    if (objIndex > 0) {
      this.dataList[objIndex] = contact;
    }

    console.log(this.dataList);
  }

  getUniqueId(): number {
    return this.dataList.length;
  }

  addContact(contact: Contact): void {
    this.dataList.push(contact);
    console.log(this.dataList);
  }

  deleteContact(id: number): void {
    const objIndex = this.dataList.findIndex((obj => obj.id === id));
    if (objIndex > -1) {
      this.dataList.splice(objIndex, 1);
    }

  }


}
