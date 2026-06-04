import { test as base } from "@playwright/test";
import { DirectBooksPage } from "../pages/DirectBooksPage";
import { CommunityPortalPage } from "../pages/CommunityPortalPage";
import { WhyPage } from "../pages/WhyPage";
import { WhoPage } from "../pages/WhoPage";
import { HowPage } from "../pages/HowPage";
import { WhatPage } from "../pages/WhatPage";
import { SeniorTeamPage } from "../pages/SeniorTeamPage";
import { HistoryPage } from "../pages/HistoryPage";
import { CareersPage } from "../pages/CareersPage";
import { NewsroomPage } from "../pages/NewsroomPage";
import { DemoRequestPage } from "../pages/DemoRequestPage";
import { LegalPage } from "../pages/LegalPage";

type Fixtures = {
  directBooksPage: DirectBooksPage;
  communityPortalPage: CommunityPortalPage;
  whyPage: WhyPage;
  whoPage: WhoPage;
  howPage: HowPage;
  whatPage: WhatPage;
  seniorTeamPage: SeniorTeamPage;
  historyPage: HistoryPage;
  careersPage: CareersPage;
  newsroomPage: NewsroomPage;
  demoRequestPage: DemoRequestPage;
  legalPage: LegalPage;
};

export const test = base.extend<Fixtures>({
  directBooksPage: async ({ page }, use) => use(new DirectBooksPage(page)),
  communityPortalPage: async ({ page }, use) => use(new CommunityPortalPage(page)),
  whyPage: async ({ page }, use) => use(new WhyPage(page)),
  whoPage: async ({ page }, use) => use(new WhoPage(page)),
  howPage: async ({ page }, use) => use(new HowPage(page)),
  whatPage: async ({ page }, use) => use(new WhatPage(page)),
  seniorTeamPage: async ({ page }, use) => use(new SeniorTeamPage(page)),
  historyPage: async ({ page }, use) => use(new HistoryPage(page)),
  careersPage: async ({ page }, use) => use(new CareersPage(page)),
  newsroomPage: async ({ page }, use) => use(new NewsroomPage(page)),
  demoRequestPage: async ({ page }, use) => use(new DemoRequestPage(page)),
  legalPage: async ({ page }, use) => use(new LegalPage(page)),
});

export { expect } from "@playwright/test";
