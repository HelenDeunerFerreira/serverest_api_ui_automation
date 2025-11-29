let token;
let productId;

before(() => {
    cy.login().then(t => {
        token = t;
    });
});

it("POST /produtos - create product", () => {
    cy.request({
        method: "POST",
        url: `${Cypress.env("apiUrl")}/produtos`,
        headers: {
            Authorization: token
        },
        body: {
            nome: "Produto Teste " + Date.now(),
            preco: 100,
            descricao: "Produto criado via teste",
            quantidade: 20
        }
    }).then((res) => {
        expect(res.status).to.eq(201);
        productId = res.body._id;
    });
});

describe("API: Usuários", () => {
    let userId;

    it("POST /usuarios - create user", () => {
        cy.createUser().then((user) => {
            userId = user._id;
        });
    });

    it("GET /usuarios/{id}", () => {
        cy.request(`${Cypress.env("apiUrl")}/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body._id).to.eq(userId);
        });
    });

    it("PUT /usuarios/{id}", () => {
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

    it("DELETE /usuarios/{id}", () => {
        cy.request("DELETE", `${Cypress.env("apiUrl")}/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});