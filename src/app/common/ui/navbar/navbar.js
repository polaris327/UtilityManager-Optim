import { app } from '../../../bootstrap/core';
import { navbarComponent } from './navbar.component';
import { navbarTabs } from './navbar.values';
import { NavbarService } from './navbar.service';

app.component('navbar', navbarComponent);
app.value('navbarTabs', navbarTabs);
app.service('navbarService', NavbarService);