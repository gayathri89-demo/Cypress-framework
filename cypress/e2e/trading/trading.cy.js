describe("Home Page Tests (Bypass Login)", () => {
  beforeEach(() => {
    cy.mockLogin();
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should show top navigation menu", () => {
    cy.get("header nav a").should("be.visible");
  });

  it("should display marketing banners", () => {
    cy.get("footer").should("be.visible");
  });
});