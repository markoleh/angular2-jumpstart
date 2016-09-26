import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsListComponent } from './contacts-list/contacts-list.component';

export const ContactsAppRoutes = [
  { path: '', component: ContactsListComponent }
]
