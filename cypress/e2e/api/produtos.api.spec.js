let token;
let productId;

before(() => {
    cy.login().then(t => {
        token = t;
    });
});

describe("API: Produtos", () => {
    let productId;

    it("POST /produtos - postar um novo produto", () => {
        cy.request({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/produtos`,
            headers: { Authorization: token },
            body: {
                nome: "Auto Product " + Date.now(),
                preco: 100,
                descricao: "Produto criado via teste",
                quantidade: 10
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            productId = res.body._id;
        });
    });

    it("GET /produtos/{id} - buscar informações de um produto pelo id", () => {
        cy.request({
            method: "GET",
            url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
            headers: { Authorization: token },
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body._id).to.eq(productId);
        });
    });

    it("PUT /produtos/{id} - atualizar informações do produto", () => {
        cy.request({
            method: "PUT",
            url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
            headers: { Authorization: token },
            body: {
                nome: "Produto Editado",
                preco: 150,
                descricao: "Produto atualizado via teste",
                quantidade: 20
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.message).to.eq("Registro alterado com sucesso");
        });
    });

    it("DELETE /produtos/{id} - deletar produto", () => {
        cy.request({
            method: "DELETE",
            url: `${Cypress.env("apiUrl")}/produtos/${productId}`,
            headers: { Authorization: token },
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});