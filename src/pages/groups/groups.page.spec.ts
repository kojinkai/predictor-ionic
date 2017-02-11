import { GroupsPage } from './groups.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Testing the Groups page component', () => {

  this.componentName = 'groupsPage component';

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
    {provide: NavController, useValue: mockNavController},
    GroupsPage,
    ],
  }));

  describe(`when boostrapping the ${this.componentName}`, () => {
    it('a groups page controller should be defined',
      inject([GroupsPage], (groups: GroupsPage) => {
        expect(groups).toBeDefined();
    }));
  });
});
