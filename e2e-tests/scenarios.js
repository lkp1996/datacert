'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /organizations when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/organizations");
  });


  describe('organizations', function() {

    beforeEach(function() {
      browser.get('index.html#!/organizations');
    });


    it('should render organizations when user navigates to /organizations', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('auditors', function() {

    beforeEach(function() {
      browser.get('index.html#!/auditors');
    });


    it('should render auditors when user navigates to /auditors', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
