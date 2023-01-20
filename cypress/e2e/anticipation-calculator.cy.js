/* eslint-disable no-undef */
/// <reference types="cypress"/>

context('Anticipation calculator', () => {
  
  it("Teste de acesso ao aplicativo", () => {
    cy.visit("http://localhost:3000");
  });
  
  it("Teste de cálculo de antecipação sem especificar os dias", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("R$ 13.267,00");
    cy.contains("R$ 13.536,00");
    cy.contains("R$ 13.824,00");
    cy.contains("R$ 14.400,00");
  });
  
  it("Teste de cálculo de antecipação especificando os dias", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 4,
        days: [30, 60, 90],
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("4");
    cy.get('input[name="days"]').type("[30, 60, 90]");
    cy.get('.calcular').click()
  
    cy.contains("R$ 13.824,00");
    cy.contains("R$ 14.208,00");
    cy.contains("R$ 14.400,00");
  });
  
  it("Teste de cálculo com valor de vendo menor que R$ 1000,00", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 10,
        installments: 3,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("10");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Valor precisa ser maior ou igual a R$ 1.000,00");
  });
  
  it("Teste de cálculo de antecipação com valor de venda maior que R$ 10000000,00", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 10000000000000,
        installments: 3,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("10000000000000");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Valor precisa ser menor ou igual a R$ 100.000.000,00");
  });
  
  it("Teste de cálculo com número de parcelas menor que 1", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 0,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("0");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Mínimo de 1 parcela");
  });
  
  it("Teste de cálculo de antecipação com valor de parcelas maior que 12", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 13,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("13");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Máximo de 12 parcelas");
  });
  
  it("Teste de cálculo de antecipação com valor de taxa menor que 1%", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 0,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("0");
    cy.get('.calcular').click()
  
    cy.contains("Percentual precisa ser maior que 0%");
  });
  
  it("Teste de cálculo de antecipação com valor de taxa maior que 100%", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
        mdr: 150,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("150");
    cy.get('.calcular').click()
  
    cy.contains("Percentual precisa ser menor ou igual a 100%");
  });
  
  it("Teste de cálculo de antecipação sem o valor da venda", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        installments: 3,
        mdr: 4,
      },
    });
  
    cy.get('input[name="installments"]').type("3");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Campo obrigatório");
  });
  
  it("Teste de cálculo de antecipação sem o número das parcelas", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        mdr: 4,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="mdr"]').type("4");
    cy.get('.calcular').click()
  
    cy.contains("Campo obrigatório");
  });
  
  it("Teste de cálculo de antecipação sem o valor da taxa", () => {
    cy.visit("http://localhost:3000");
  
    cy.intercept("POST", "http://localhost:3000", {
      statusCode: 200,
      body: {
        amount: 15000,
        installments: 3,
      },
    });
  
    cy.get('input[name="amount"]').type("15000");
    cy.get('input[name="installments"]').type("3");
    cy.get('.calcular').click()
  
    cy.contains("Campo obrigatório");
  });
})