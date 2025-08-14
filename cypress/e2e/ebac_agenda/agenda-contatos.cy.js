/// <reference types='cypress' />

describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('Deve realizar o ciclo completo: adicionar, editar e remover um contato', () => {
    // --- 1. ADICIONAR CONTATO ---
    const nomeOriginal = 'Clark Kent';
    const emailOriginal = 'clark.kent@dailyplanet.com';
    const telefoneOriginal = '99999999999';
    
    cy.get('input[type="text"]').type(nomeOriginal);
    cy.get('input[type="email"]').type(emailOriginal);
    cy.get('input[type="tel"]').type(telefoneOriginal);
    cy.contains('Adicionar').click();
    
    // Verificação da adição
    cy.contains(nomeOriginal).should('be.visible');
    cy.screenshot('contato-adicionado');
    
    // --- 2. EDITAR O CONTATO ADICIONADO ---
    // Ação: Encontra o contato recém-criado e clica em editar
    cy.contains(nomeOriginal)
      .closest('.contato')
      .find('.edit')
      .click();
      
    const nomeEditado = 'Superman';
    const emailEditado = 'superman@justiceleague.com';
    const telefoneEditado = '11111111111';
    
    cy.get('input[type="text"]').clear().type(nomeEditado);
    cy.get('input[type="email"]').clear().type(emailEditado);
    cy.get('input[type="tel"]').clear().type(telefoneEditado);
    cy.get('.alterar').click();
    
    // Verificação da edição: o nome antigo não existe mais e o novo está visível
    cy.contains(nomeOriginal).should('not.exist');
    cy.contains(nomeEditado).should('be.visible');
    cy.screenshot('contato-editado');
    
    // --- 3. REMOVER O CONTATO EDITADO ---
    // Ação: Encontra o contato editado e clica em remover
    cy.contains(nomeEditado).closest('.contato').find('.delete').click();
    
    // Verificação da remoção
    cy.contains(nomeEditado).should('not.exist');
    cy.screenshot('contato-removido');
  });
});
