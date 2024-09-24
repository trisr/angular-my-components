import { Routes } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
<<<<<<< HEAD
import { GroceriesComponent } from './groceries/groceries.component';
=======
import { RxjsComponent } from './rxjs/rxjs.component';
import { SearchComponent } from './search/search.component';
>>>>>>> e305146 (feat(rxjs): rxjs learning)

export const routes: Routes = [
    { path: 'groceries', component: GroceriesComponent },
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    {path: 'crisis-list', component: CrisisListComponent},
    {path: 'heroes-list', component: HeroesListComponent},
    {path: 'todo-list', component: TodoListComponent},
    { path: 'rxjs', component: RxjsComponent },
    { path: 'search', component: SearchComponent },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect main page to `first-component`
    { path: '**', component: PageNotFoundComponent },
  ];
