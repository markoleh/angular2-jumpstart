import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACT_DATA } from './data/contact-data';

@Injectable()
export class ContactsService {

  constructor() { }

  private contacts: Contact[] = CONTACT_DATA;

  getContacts() {
    return this.contacts;
  }

  getContact(id: number | string) {
    return this.contacts.find(contact => contact.id == id);
  }

}
