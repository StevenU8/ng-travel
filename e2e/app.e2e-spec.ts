import { TrvlanchePage } from './app.po';

describe('trvlanche App', function() {
  let page: TrvlanchePage;

  beforeEach(() => {
    page = new TrvlanchePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
