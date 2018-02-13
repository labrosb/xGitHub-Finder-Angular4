import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { UserDataService } from './data-services/user-data.service';

const appRoutes: Routes = [
  { path: '',         component: SearchPageComponent,   data: { depth: 1 } },
  { path: 'profile',  component: UserDetailsComponent,  data: { depth: 2 } }
];

const rootRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    rootRouting,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
