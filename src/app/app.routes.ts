import { Routes } from '@angular/router';
import { RegisterComponent, LoginComponent } from './auth';
import { LibraryMainComponent } from './library';
import { HomeComponent } from './home';
import { ProfileComponent, AdditionalInfoComponent, FriendsComponent, WorksComponent, OtherUserProfileComponent } from './profile';
import { GuardIsLoggedUser } from './route-guards';
import { LoggedInUserWorksComponent } from './profile/works/logged-in-user-works.component';
import {
    CreatePieceComponent,
    EditPieceComponent,
    LiterayPieceDetailedComponent,
    DetailedPieceComponent,
    PiecePreviewComponent
} from './literary-pieces';
import { SearchResultsComponent } from './search';
import { ForumComponent, CreateThreadComponent, ThreadsListComponent, SingleThreadComponent } from './forum';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'library', component: LibraryMainComponent },
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
                    { path: 'edit/:id', component: EditPieceComponent },
                    { path: 'my-works/:page/:pageSize', component: LoggedInUserWorksComponent },
                    { path: 'preview/:id', component: PiecePreviewComponent }
                ]
            }
        ]
    },
    { path: 'pieces/detailed/:id', component: DetailedPieceComponent },
    { path: 'search-results', component: SearchResultsComponent },
    { path: 'user/:id', component: OtherUserProfileComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'forum/threads/create', component: CreateThreadComponent },
    { path: 'forum/threads/:categoryName', component: ThreadsListComponent },
    { path: 'forum/thread/:threadTitle', component: SingleThreadComponent }
];
