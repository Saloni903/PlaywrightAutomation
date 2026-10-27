
import { type APIRequestContext } from '@playwright/test';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string, params?: Record<string, string | number>) {
    return this.request.get(endpoint, { params });
  }

  async post(endpoint: string, data: object) {
    return this.request.post(endpoint, { data });
  }

  async put(endpoint: string, data: object) {
    return this.request.put(endpoint, { data });
  }

  async delete(endpoint: string) {
    return this.request.delete(endpoint);
  }
}
