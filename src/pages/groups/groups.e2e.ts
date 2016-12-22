import { browser, by, element } from 'protractor';

class GroupsObj {
  public title;
  constructor() {
    this.title = element(by.id('title'));
  }
}

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  const home: GroupsObj = new GroupsObj();

  it('should have a title', () => {
    expect((home.title).isDisplayed()).toBeTruthy();
  });
});
