import { Component } from '@angular/core';
import { Contact } from './models/contact';
//import { CONTACT_DATA } from './data/contact-data';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent {
  //title = 'Angular 2 Master Class setup works!';

  //contacts: Contact[] = CONTACT_DATA;
  contacts: Contact[];


}
