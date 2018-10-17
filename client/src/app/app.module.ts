import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: NewUserComponent},
  { path: ':id', component: UserComponent },
  { path: ':id/admin', component:AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    NewUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
