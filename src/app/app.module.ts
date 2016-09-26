import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [ContactsAppComponent, ContactsHeaderComponent],
  imports: [BrowserModule],
  bootstrap: [ContactsAppComponent],
  providers: [
    ContactsService
    //OR { provide: ContactsService, useClass: ContactsService }
  ]
})
export class ContactsModule {

}
