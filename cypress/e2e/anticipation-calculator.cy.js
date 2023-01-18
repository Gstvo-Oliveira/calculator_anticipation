/* eslint-disable no-undef */
/// <reference types="cypress"/>

context('Anticipation calculator', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    }); 
  
    it('verificando se os rótulos estão corretos', () => {
      cy.get('span').should('contain', 'Simule sua Antecipação');
      cy.get('span').should('contain', 'VOCÊ RECEBERÁ:');
      cy.get('section').should('contain', 'Informe o valor da venda');
      cy.get('section').should('contain', 'Em quantas parcelas');
      cy.get('section').should('contain', 'Máximo de 12 parcelas');
      cy.get('section').should('contain', 'Informe o percentual de MDR');
    });
  
    it('Deve mostrar o resultado da antecipação após 3 entradas terem valor', () => {
  
      cy.intercept('POST', 'https://frontend-challenge-7bu3nxh76a-uc.a.run.app', {
        fixture: 'result'
      }).as('fetchCalculator');
  
      cy.get('input[name="amount"]').type('3000');
      cy.get('input[name="installments"]').type('2');
      cy.get('input[name="mdr"]').type('2');
  
      cy.wait('@fetchCalculator');
  
      cy.fixture('result.json').then((json) => {
        cy.get('[data-testid="box-info"]').contains(`Amanhã: R$ ${json['1']}`);
        cy.get('[data-testid="box-info"]').contains(`Em 15 dias: R$ ${json['15']}`);
        cy.get('[data-testid="box-info"]').contains(`Em 30 dias: R$ ${json['30']}`);
        cy.get('[data-testid="box-info"]').contains(`Em 90 dias: R$ ${json['90']}`);
      });

    });
  });