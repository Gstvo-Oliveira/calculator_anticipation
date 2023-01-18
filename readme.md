
# Calculadora de antecipação

O projeto visa calcular quanto custa antecipar uma transação. O usuário precisa informar o valor da venda, quantidade de parcelas e o percentual de MDR(taxa cobrada pelas adquirentes sobre cada transação de cartão de crédito ou débito)

Para realizar o cálculo foi realizado o consumo de uma API já existente:
https://frontend-challenge-7bu3nxh76a-uc.a.run.app



## Tecnologias utilizadas

As seguintes ferramentas foram utilizadas na construção do projeto:

- React - UI framework requerido pelo teste
- JavaScript
- Styled Components - CSS in JS
- Cypress - Ferramenta para testes end-to-end

## Features do projeto


- [x] Simulação de antecipação
- [x] Simulação de erros da API 

## Demo

Você pode ver a demonstração do projeto aqui:
https://calculator-anticipation.vercel.app/

## Roadmap para rodar a aplicação em modo de desenvolvimento

### Pré requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js. Além disto é bom ter um editor para trabalhar com o código como VSCode

```bash
# Clone este repositório
$ git clone <git@github.com:Gstvo-Oliveira/calculator_anticipation.git>
```

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd calculator_anticipation
```

### Rodando o projeto
```bash
# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento com o comando
$ yarn start
```

### Rodando os testes: End-to-End
```bash
$ yarn cypress run 
```
obs.: Para rodar os testes o server localhost deve está no ar!
