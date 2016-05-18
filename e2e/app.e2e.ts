import { SafeGovernancePage } from './app.po';

describe('safe-governance App', function() {
  let page: SafeGovernancePage;

  beforeEach(() => {
    page = new SafeGovernancePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('safe-governance works!');
  });
});
