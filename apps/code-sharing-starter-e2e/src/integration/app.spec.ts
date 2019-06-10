import { getGreeting } from '../support/app.po';

describe('code-sharing-starter', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to code-sharing-starter!');
  });
});
