import { GroupsPage } from './groups.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Groups Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
    {provide: NavController, useValue: mockNavController},
    GroupsPage,
    ],
  }));

  it('should define a groups page controller', inject([GroupsPage], (groups: GroupsPage) => {
    expect(groups).toBeDefined();
  }));
});
