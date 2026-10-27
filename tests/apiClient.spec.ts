
import { type APIRequestContext } from '@playwright/test';
import { type Post } from '../types/Posts';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string, params?: Record<string, string | number>) {
    return this.request.get(endpoint, { params });
  }

  async post(endpoint: string, data: Post) {
    return this.request.post(endpoint, { data });
  }

  async put(endpoint: string, data: Post) {
    return this.request.put(endpoint, { data });
  }

  async delete(endpoint: string) {
    return this.request.delete(endpoint);
  }
}
