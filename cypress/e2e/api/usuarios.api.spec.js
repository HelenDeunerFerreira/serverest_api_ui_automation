describe("API: Usuários", () => {
    let userId;

    it("POST /usuarios - create user", () => {
        cy.createUser().then((user) => {
            userId = user._id;
        });
    });

    it("GET /usuarios/{id}", () => {
        cy.request(`/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body._id).to.eq(userId);
        });
    });

    it("PUT /usuarios/{id}", () => {
        cy.request({
            method: "PUT",
            url: `/usuarios/${userId}`,
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
        cy.request("DELETE", `/usuarios/${userId}`).then((res) => {
            expect(res.status).to.eq(200);
        });
    });
});