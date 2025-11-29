let token;
let productId;

before(() => {
    cy.login().then(t => {
        token = t;
    });
});

describe("API: Usuários", () => {
    let userId;

    it("POST /usuarios - criar usuário", () => {
        cy.createUser().then((user) => {
            userId = user._id;
        });
    });

    it("GET /usuarios/{id} - buscar informações de um usuário", () => {
        cy.request(`${Cypress.env("apiUrl")}/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body._id).to.eq(userId);
        });
    });

    it("PUT /usuarios/{id} - atualizar informações de um usuário", () => {
        cy.request({
            method: "PUT",
            url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
            body: {
                nome: "Usuário Editado",
                email: `editado${Date.now()}@test.com`,
                password: "1234",
                administrador: "true"
            },
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });

    it("DELETE /usuarios/{id} - deletar um usuário", () => {
        cy.request("DELETE", `${Cypress.env("apiUrl")}/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});