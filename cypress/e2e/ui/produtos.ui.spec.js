import ProductsPage from "../../pages/ui/ProductsPage";
import ProductFormPage from "../../pages/ui/ProductFormPage";

describe("Testes de produtos", () => {

    beforeEach(() => {
        cy.loginUI();
    });

    it("Criar e validar produto", () => {
        const product = {
            nome: "UI Prod " + Date.now(),
            preco: "150",
            descricao: "Produto testado via UI POM",
            quantidade: "12"
        };

        ProductFormPage.navigate();
        ProductFormPage.fillForm(product);
        ProductFormPage.submit();
        ProductFormPage.expectSuccess();

        ProductsPage.navigate();
        ProductsPage.expectProductInList(product.nome);
    });
});
