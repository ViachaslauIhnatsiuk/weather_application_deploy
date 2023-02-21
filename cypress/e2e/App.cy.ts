/// <reference types="cypress" />

describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('search input should have initial value', () => {
    cy.get('[data-testid=search-input]').should('not.be.empty');
  });

  it('calendar button renders with right value', () => {
    cy.get('[data-testid=calendar-button]').contains('Sign In');
  });

  it('confimational modal loads', () => {
    cy.get('#modal').should('exist');
  });

  it('current forecast component renders with elements', () => {
    cy.get('[data-testid=current-forecast]').children();
  });

  it('autocomplete component works correctly', () => {
    cy.get('[data-testid=search-bar]').click({ force: true });
    cy.focused().type('Minsk');
    cy.should('not.be.empty');
  });
});
