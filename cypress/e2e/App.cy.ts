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

  it('confirmational modal loads', () => {
    cy.get('#modal').should('exist');
  });

  it('current forecast component renders with elements', () => {
    cy.get('[data-testid=current-forecast]').children();
  });

  it('air quality component should have 8 child elements', () => {
    cy.get('[data-testid=air-quality-item]').should('have.length', 8);
  });

  it('daily forecast component should have 7 child elements', () => {
    cy.get('[data-testid=daily-forecast-item]').should('have.length', 7);
  });

  it('hourly forecast component should have 24 child elements', () => {
    cy.get('[data-testid=hourly-forecast-item]').should('have.length', 24);
  });

  it('autocomplete component works correctly', () => {
    cy.get('[data-testid=search-bar]').click({ force: true });
    cy.focused().type('Minsk');
    cy.should('not.be.empty');
  });
});
