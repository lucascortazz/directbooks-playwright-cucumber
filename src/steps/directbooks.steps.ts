import { Given, Then, Before, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { CommunityPortalPage } from "../pages/community-portal.page";
import { DirectBooksPage } from "../pages/directbooks.page";

let browser: Browser;
let page: Page;
let directBooksPage: DirectBooksPage;
let communityPortalPage: CommunityPortalPage;

setDefaultTimeout(30 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  directBooksPage = new DirectBooksPage(page);
  communityPortalPage = new CommunityPortalPage(page);
});

After(async () => {
  await browser.close();
});

Given("I open the DirectBooks homepage", async () => {
  await directBooksPage.openHomePage();
});

Given("I open the DirectBooks FAQ page", async () => {
  await directBooksPage.openFaqPage();
});

Given("I open the DirectBooks Contact page", async () => {
  await directBooksPage.openContactPage();
});

Given("I open the DirectBooks Community Portal", async () => {
  await communityPortalPage.open();
});

Then("I should see the main DirectBooks messaging", async () => {
  await directBooksPage.expectMainMessaging();
});

Then("I should see the Join the Platform call to action", async () => {
  await directBooksPage.expectJoinPlatformCallToAction();
});

Then("I should see frequently asked questions", async () => {
  await directBooksPage.expectFrequentlyAskedQuestions();
});

Then("I should see information about who can use DirectBooks", async () => {
  await directBooksPage.expectWhoCanUseDirectBooksInformation();
});

Then("I should see contact information", async () => {
  await directBooksPage.expectContactInformation();
});

Then("I should see client services information", async () => {
  await directBooksPage.expectClientServicesInformation();
});

Then("I should see the login form", async () => {
  await communityPortalPage.expectLoginForm();
});

Then("I should see the forgot password option", async () => {
  await communityPortalPage.expectForgotPasswordOption();
});
