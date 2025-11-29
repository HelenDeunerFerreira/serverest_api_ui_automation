class LoginPage {

    navigate() {
        cy.visit(`${Cypress.env("uiUrl")}/login`);
    }

    fillEmail(email) {
        cy.get('input[name="email"]').clear().type(email);
    }

    fillPassword(password) {
        cy.get('input[name="password"]').clear().type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    login(email, password) {
        this.navigate();
        this.fillEmail(email);
        this.fillPassword(password);
        this.submit();
    }

    expectLoggedIn() {
        cy.url().should("include", "/home");
        cy.contains("Bem Vindo").should("be.visible");
    }
}

export default new LoginPage();