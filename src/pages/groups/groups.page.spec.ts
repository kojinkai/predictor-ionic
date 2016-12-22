import { GroupsPage } from './groups.page';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { NavController } from 'ionic-angular';

describe('Groups Page:', () => {

  let comp: GroupsPage;
  let fixture: ComponentFixture<GroupsPage>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [GroupsPage],
      providers: [
      {provide: NavController, useValue: NavController},
      ],
    });
    fixture = TestBed.createComponent(GroupsPage);
    // #trick
    // If you want to trigger ionViewWillEnter automatically de-comment the following line
    // fixture.componentInstance.ionViewWillEnter();
    fixture.detectChanges();
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

});
