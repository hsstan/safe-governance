export class SafeGovernancePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('safe-governance-app h1')).getText();
  }
}
