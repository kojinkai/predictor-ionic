import { TabsPage } from './tabs.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';

describe('Tabs Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
    {provide: NavController, useValue: mockNavController},
    TabsPage,
    ],
  }));

  it('should define a tabs page controller', inject([TabsPage], (tabs: TabsPage) => {
    expect(tabs).toBeDefined();
  }));
});
