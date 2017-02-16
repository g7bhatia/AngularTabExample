import { ExamplengPage } from './app.po';

describe('exampleng App', function() {
  let page: ExamplengPage;

  beforeEach(() => {
    page = new ExamplengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
