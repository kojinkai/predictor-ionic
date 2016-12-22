import { FixturesPage } from './fixtures.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Fixtures Page', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
    {provide: NavController, useValue: mockNavController},
    FixturesPage,
    ],
  }));

  it('should define a fixtures page controller', inject([FixturesPage], (fixtures: FixturesPage) => {
    expect(fixtures).toBeDefined();
  }));
});
