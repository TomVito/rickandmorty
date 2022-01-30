import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { CharacterService } from './services/character.service';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { EpisodeCardComponent } from './components/episodes/episode-card/episode-card.component';
import { CharacterEpisodesListComponent } from './components/characters/character-episodes-list/character-episodes-list.component';
import { EpisodesListComponent } from './components/episodes/episodes-list/episodes-list.component';
import { EpisodeService } from './services/episode.service';
import { LocationsListComponent } from './components/locations/locations-list/locations-list.component';
import { LocationService } from './services/location.service';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';
import { LocationCardComponent } from './components/locations/location-card/location-card.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';
import { SearchFormComponent } from './components/header/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { PaginationComponent } from './components/general/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailsComponent,
    HeaderComponent,
    EpisodeCardComponent,
    CharacterEpisodesListComponent,
    EpisodesListComponent,
    LocationsListComponent,
    EpisodeDetailsComponent,
    LocationCardComponent,
    CharacterCardComponent,
    SearchFormComponent,
    LocationDetailsComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CharacterService,
    EpisodeService,
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
