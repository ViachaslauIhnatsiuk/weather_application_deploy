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
    cy.get('[data-test-id=modal]').should('exist');
  });

  it('daily forecast component should have 7 elements', () => {
    cy.get('[data-test-id=daily-forecast-item]').should('have.length', 7);
  });

  it('hourly forecast component should have 24 elements', () => {
    cy.get('[data-test-id=hourly-forecast-item]').should('have.length', 24);
  });
});
