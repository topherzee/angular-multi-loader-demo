import { SimplePage } from './app.po';

describe('simple App', () => {
  let page: SimplePage;

  beforeEach(() => {
    page = new SimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
