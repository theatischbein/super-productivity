'use strict';

describe('Directive: textToFileDownload', function () {

  // load the directive's module
  beforeEach(module('superProductivity'));
  beforeEach(module('templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should do something', inject(function ($compile) {
    element = $compile('<text-to-file-download></text-to-file-download>')(scope);
    scope.$digest();
    expect(true).toBe(true);
  }));
});