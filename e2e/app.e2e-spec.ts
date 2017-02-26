import { Ng2DribbbleCliPage } from './app.po';

describe('ng2-dribbble-cli App', function() {
  let page: Ng2DribbbleCliPage;

  beforeEach(() => {
    page = new Ng2DribbbleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
