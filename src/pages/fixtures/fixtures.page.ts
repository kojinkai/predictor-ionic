import { Component } from '@angular/core';
import { ItemSliding } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2';
import { DBService, ToastService, AuthService } from '../../providers';

import _ from 'lodash';

interface Gameweek {
  name: string;
  fixtures: Array<Fixture>;
}

interface Fixture {
  home: string;
  away: string;
  prediction?: string;
}

@Component({
  selector: 'pr-fixtures-page',
  templateUrl: 'fixtures.page.html',
})
export class FixturesPage {

  gameweeks: FirebaseListObservable<Gameweek[]>;
  photoURL: string;
  isAuthenticated: boolean;
  title: string;

  constructor(private _dbService: DBService, private _toastService: ToastService, private _authService: AuthService) {
    this.gameweeks = _dbService.getFixtures();
    this.photoURL = _authService.getUserAvatarUrl();
    this.isAuthenticated = _authService.authenticated;
    this.title = 'Fixtures';
  }

  public pickTeamToWin(key: string, fixtures: Array<Fixture>, prediction: string, slidingItem: ItemSliding): void {

    // close the slide menu
    slidingItem.close();

    // we receive the Gameweek's key, fixtures and a prediction from the view
    // but we want to find the specific match in that gameweek to add a prediction to
    // first, grab the index of that fixture from the gameweek's, fixtures...
    const index = this.getFixturesIndexFromGameweek(fixtures, prediction);

    // set the prediction property of the fixtures to the team backed to win...
    fixtures[index].prediction = prediction;

    // patch all fixtures in that gameweek and toast the result
    this.gameweeks.update(key, {fixtures})
      .then(_ => this._toastService
        .displayToast(`Gameweek ${parseInt(key, 10) + 1}, match ${index + 1}: ${prediction} to win`));
  }

  public resetSelection(key: string, fixtures: Array<Fixture>, prediction: string, slidingItem: ItemSliding): void {

    // close the slide menu
    slidingItem.close();

    // we receive the Gameweek's key, and fixtures from the view
    // but we want to find the specific match in that gameweek to remove the prediction from
    // first, grab the index of that fixture from the gameweek's, fixtures...
    const index = this.getFixturesIndexFromGameweek(fixtures, prediction);

    // set the prediction property of the fixtures to the team backed to win...
    fixtures[index].prediction = null;

    // patch all fixtures in that gameweek and toast the result
    this.gameweeks.update(key, {fixtures})
      .then(_ => this._toastService
        .displayToast(`Gameweek ${parseInt(key, 10) + 1}, match ${index + 1}: Selection reset`));
  }

  private getFixturesIndexFromGameweek(fixtures: Array<Fixture>, prediction: string): number {
    const index = _.findIndex(fixtures, fixture => fixture.home === prediction || fixture.away === prediction);
    return index;
  }
}
