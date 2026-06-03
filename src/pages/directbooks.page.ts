import { expect, Page } from "@playwright/test";

export class DirectBooksPage {
  constructor(private readonly page: Page) {}

  async openHomePage() {
    await this.page.goto("https://www.directbooks.com/", { waitUntil: "domcontentloaded" });
  }

  async openFaqPage() {
    await this.page.goto("https://www.directbooks.com/faq", { waitUntil: "domcontentloaded" });
  }

  async openContactPage() {
    await this.page.goto("https://www.directbooks.com/contact", { waitUntil: "domcontentloaded" });
  }

  async expectMainMessaging() {
    await expect(this.page.getByText(/streamlining primary issuance/i)).toBeVisible();
  }

  async expectJoinPlatformCallToAction() {
    await expect(this.page.getByText(/join the platform/i).first()).toBeVisible();
  }

  async expectFrequentlyAskedQuestions() {
    await expect(this.page.getByText(/frequently asked questions/i)).toBeVisible();
  }

  async expectWhoCanUseDirectBooksInformation() {
    await expect(
      this.page.getByText(/institutional investors and underwriters involved in the primary issuance/i),
    ).toBeVisible();
  }

  async expectContactInformation() {
    await expect(this.page.getByText(/contact us/i)).toBeVisible();
  }

  async expectClientServicesInformation() {
    await expect(this.page.getByText(/clientservices@directbooks.com/i)).toBeVisible();
  }
}
