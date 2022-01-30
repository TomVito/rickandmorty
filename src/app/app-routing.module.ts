import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './components/characters/character-details/character-details.component';
import { EpisodesListComponent} from './components/episodes/episodes-list/episodes-list.component';
import { LocationsListComponent } from './components/locations/locations-list/locations-list.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';
import { EpisodeDetailsComponent } from './components/episodes/episode-details/episode-details.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'episodes/:id', component: EpisodeDetailsComponent },
  { path: 'locations', component: LocationsListComponent },
  { path: 'locations/:id', component: LocationDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
