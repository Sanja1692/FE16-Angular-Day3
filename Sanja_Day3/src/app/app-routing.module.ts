import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "pets/:petId", component: PetDetailsComponent
    // :petId - is not a string it is a parameter-0,1,2... dipends on array index?
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
