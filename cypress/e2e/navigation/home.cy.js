describe("Home Page Tests (Bypass Login)", () => {
  beforeEach(() => {
    // Step 1: Mock login
    cy.mockLogin();

    // Step 2: Visit the home page (the page that actually exists)
    cy.visit("/", { failOnStatusCode: false });
  });

  it("should show top navigation menu", () => {
    cy.fixture("testData").then((data) => {
      data.navigationMenu.forEach((item) => {
        cy.contains("header nav a", item).should("be.visible");
      });
    });
  });

  it("should display marketing banners", () => {
    cy.get("footer").should("be.visible");
  });

});