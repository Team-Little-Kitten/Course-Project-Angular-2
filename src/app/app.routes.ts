import { Routes } from '@angular/router';

import { RegisterComponent, LoginComponent } from './auth';
import {
    LibraryMainComponent,
    LibraryAllComponent,
    LibraryDramaComponent,
    LibraryPoetryComponent,
    LibraryStoriesComponent
} from './library';
import {
    WritersMainComponent,
    WritersAllComponent,
    TopWritersComponent,
    TopCritiquesComponent
} from './writers';
import { HomeComponent } from './home';
import { ProfileComponent, AdditionalInfoComponent, WorksComponent, OtherUserProfileComponent } from './profile';
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
    { path: 'library',
        component: LibraryMainComponent,
        children: [
            { path: 'all', component: LibraryAllComponent },
            { path: 'drama', component: LibraryDramaComponent },
            { path: 'poetry', component: LibraryPoetryComponent },
            { path: 'stories', component: LibraryStoriesComponent }
        ]
    },
    { path: 'writers',
        component: WritersMainComponent,
        children: [
            { path: 'all', component: WritersAllComponent },
            { path: 'writers', component: TopWritersComponent },
            { path: 'critiques', component: TopCritiquesComponent },
        ]
    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [GuardIsLoggedUser],
        children: [
            { path: 'additional-info', component: AdditionalInfoComponent },
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
