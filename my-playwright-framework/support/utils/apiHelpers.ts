import { APIRequestContext } from "@playwright/test";

/**
 * Reusable API orchestration utilities.
 * Extend with project-specific API calls as needed.
 */
export class ApiHelpers {
  constructor(private readonly request: APIRequestContext) {}

  async get(url: string) {
    const response = await this.request.get(url);
    return response;
  }

  async post(url: string, data: Record<string, unknown>) {
    const response = await this.request.post(url, { data });
    return response;
  }
}
