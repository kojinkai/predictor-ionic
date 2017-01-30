import { TabsPage } from './tabs.page';
import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mockNavController } from 'ionic-angular/util/mock-providers';
import { NavController } from 'ionic-angular';
import { DBService } from '../../services/db/db.service';
import { ToastService } from '../../services/toast/toast.service';
import { MockDBService } from '../../services/db/db.service.mock';
import { MockToastService } from '../../services/toast/toast.service.mock';

describe('Tabs Page:', () => {

  beforeEach(() => TestBed.configureTestingModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {provide: NavController, useClass: mockNavController},
      {provide: DBService, useClass: MockDBService},
      {provide: ToastService, useClass: MockToastService},
      TabsPage,
    ],
  }));

  describe('bootstrapping the component', () => {
    it('should define a tabs page controller',
      inject([TabsPage], (tabs: TabsPage) => {
        expect(tabs).toBeDefined();
      }));

    it('should fetch the logged in state from the DB Service',
      inject([TabsPage], (tabs: TabsPage) => {
        expect(tabs.isLoggedIn).toBe(true);
      }));
  });

  describe('displaying a toast message', () => {
    it('should call the toast service with a message',
      inject([TabsPage, ToastService], (tabsComponent: TabsPage, mockToastService: ToastService) => {
        spyOn(mockToastService, 'displayToast');
        tabsComponent.showLoginToast('foo');
        expect(mockToastService.displayToast).toHaveBeenCalledWith('foo');
      }));
  });
});
