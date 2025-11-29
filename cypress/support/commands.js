import LoginPage from "../pages/ui/LoginPage";

Cypress.Commands.add("login", () => {
    return cy.request({
        method: "POST",
        url: "/login",
        body: {
            email: "fulano@qa.com",
            password: "teste"
        }
    }).then((res) => {
        expect(res.status).to.eq(200);
        return res.body.authorization;
    });
});


Cypress.Commands.add("createUser", () => {
    const user = {
        nome: "UI User " + Date.now(),
        email: `uiuser${Date.now()}@test.com`,
        password: "teste123",
        administrador: "true"
    };

    return cy.request("POST", `${Cypress.env("apiUrl")}/usuarios`, user).then((res) => {
        expect(res.status).to.eq(201);
        return res.body;
    });
});

Cypress.Commands.add("createProduct", () => {
    const product = {
        nome: "Auto Product " + Date.now(),
        preco: 100,
        descricao: "Produto criado via teste",
        quantidade: 10
    };

    return cy.request("POST", `${Cypress.env("apiUrl")}/produtos`, product).then((res) => {
        expect(res.status).to.eq(201);
        return res.body;
    });
});

Cypress.Commands.add("loginApi", () => {
    const login = {
        email: "fulano@qa.com",
        password: "teste"
    };

    return cy.request("POST", `${Cypress.env("apiUrl")}/login`, login).then((res) => {
        expect(res.status).to.eq(200);
        return res.body.authorization;
    });
});

Cypress.Commands.add("loginUI", () => {
    const email = "fulano@qa.com";
    const password = "teste";

    LoginPage.login(email, password);
    LoginPage.expectLoggedIn();
});
