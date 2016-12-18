import { Routes } from '@angular/router';
import { RegisterComponent, LoginComponent } from './auth';
import { HomeComponent } from './home/home.component';
import { ProfileComponent, AdditionalInfoComponent, FriendsComponent, WorksComponent } from './profile';
import { GuardIsLoggedUser } from './route-guards';
import { SearchResultsComponent } from './search';
import { CreatePieceComponent, EditPieceComponent, LiterayPieceDetailedComponent, DetailedPieceComponent } from './literary-pieces';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [GuardIsLoggedUser],
        children: [
            { path: 'additional-info', component: AdditionalInfoComponent },
            { path: 'friends', component: FriendsComponent },
            {
                path: 'works', component: WorksComponent,
                children: [
                    { path: 'create', component: CreatePieceComponent },
                    { path: 'edit/:id', component: EditPieceComponent }
                ]
            }
        ]
    },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'pieces/detailed/:id', component: DetailedPieceComponent }
];
