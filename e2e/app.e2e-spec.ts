import { EcontainersPage } from './app.po';

describe('econtainers App', () => {
  let page: EcontainersPage;

  beforeEach(() => {
    page = new EcontainersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
