import { OYOmeNFLPage } from './app.po';

describe('oyome-nfl App', function() {
  let page: OYOmeNFLPage;

  beforeEach(() => {
    page = new OYOmeNFLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
