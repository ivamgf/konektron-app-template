import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ServicesComponent } from "./pages/services/services.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { TermsComponent } from "./pages/terms/terms.component";
import { SigninComponent } from "./sign/signin/signin.component";
import { SignupComponent } from "./sign/signup/signup.component";
import { DashComponent } from "./dashboard/dash/dash.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { SecurityComponent } from "./dashboard/security/security.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages/home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'recovery',
    component: RecoveryComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'sign/signin',
    component: SigninComponent
  },
  {
    path: 'sign/signup',
    component: SignupComponent
  },
  {
    path: 'dashboard/dash',
    component: DashComponent
  },
  {
    path: 'dashboard/profile',
    component: ProfileComponent
  },
  {
    path: 'dashboard/security',
    component: SecurityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
