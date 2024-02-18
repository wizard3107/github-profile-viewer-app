import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RepositoryListPageComponent } from './components/repository-list-page/repository-list-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { GithubService } from './services/github.service';
import { ErrorComponent } from './components/error-page/error-page.component';
import { SearchBoxComponent } from "./atoms/search-box/search-box.component";
import { UserStatsComponent } from './components/user-stats/user-stats.component';
import { StatCardComponent } from './components/stat-card/stat-card.component';
import { PaginationComponentComponent } from './atoms/pagination-component/pagination-component.component';
import { RepoCardComponent } from './atoms/repo-card/repo-card.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './atoms/loader/loader.component';
@NgModule({
    declarations: [
        AppComponent,
        ProfilePageComponent,
        RepositoryListPageComponent,
        SearchPageComponent,
        ErrorComponent,
        UserStatsComponent,
        StatCardComponent
    ],
    providers: [GithubService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        SearchBoxComponent,
        HttpClientModule,
        PaginationComponentComponent,
        RepoCardComponent,
        LoaderComponent
    ]
})
export class AppModule { }
