import { expect, Page } from "@playwright/test";

export class CommunityPortalPage {
  constructor(private readonly page: Page) {}

  async open() {
    await this.page.goto("https://community.directbooks.com/", { waitUntil: "domcontentloaded" });
  }

  async expectLoginForm() {
    await expect(this.page.getByText(/log in/i)).toBeVisible();
  }

  async expectForgotPasswordOption() {
    await expect(this.page.getByText(/forgot your password/i)).toBeVisible();
  }
}
