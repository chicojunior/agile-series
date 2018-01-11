import { AcShowsPage } from './app.po';

describe('ac-shows App', () => {
  let page: AcShowsPage;

  beforeEach(() => {
    page = new AcShowsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
