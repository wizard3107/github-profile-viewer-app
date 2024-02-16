import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { RepositoryListPageComponent } from './components/repository-list-page/repository-list-page.component';
import { ErrorComponent } from './components/error-page/error-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

const routes: Routes = [{
  path: '',
  component: SearchPageComponent
},
{
  path: 'profile',
  component: ProfilePageComponent
},
{
  path: 'repos',
  component: RepositoryListPageComponent
},
{
  path: 'error',
  component: ErrorComponent
},
// Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
