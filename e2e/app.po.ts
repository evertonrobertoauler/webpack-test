export class WebpackTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('webpack-test-app h1')).getText();
  }
}
