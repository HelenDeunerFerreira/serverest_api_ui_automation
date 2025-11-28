describe("API: Produtos", () => {
    let productId;

    it("POST /produtos - create product", () => {
        cy.createProduct().then((product) => {
            productId = product._id;
        });
    });

    it("GET /produtos/{id} - retrieve product", () => {
        cy.request(`/produtos/${productId}`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body._id).to.eq(productId);
        });
    });

    it("PUT /produtos/{id} - update product", () => {
        cy.request({
            method: "PUT",
            url: `/produtos/${productId}`,
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

    it("DELETE /produtos/{id}", () => {
        cy.request({
            method: "DELETE",
            url: `/produtos/${productId}`,
        }).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});