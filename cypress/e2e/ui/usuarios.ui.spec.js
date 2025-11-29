import UsersPage from "../../pages/ui/UsersPage";
import UserFormPage from "../../pages/ui/UserFormPage";

describe("Testes de usuários", () => {

    beforeEach(() => {
        cy.loginUI();
    });

    it("Criar, validar, editar e deletar usuário", () => {
        const nome = "UI User " + Date.now();
        const email = `ui${Date.now()}@test.com`;

        UserFormPage.navigate();
        UserFormPage.fillForm({
            nome,
            email,
            password: "123456",
            admin: true
        });

        UserFormPage.submit();
        UserFormPage.expectSuccess();

        UsersPage.navigate();
        UsersPage.expectUserInList(email);

        UsersPage.navigate();
        UsersPage.clickDelete(email);

        UsersPage.navigate();
        UsersPage.expectUserNotInList(email);
    });
});
