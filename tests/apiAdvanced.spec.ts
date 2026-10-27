
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('Advanced API Testing', { tag: '@api' }, () => {

  test('GET - filter posts using query parameters', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`, {
      params: {
        userId: 1
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.length).toBeGreaterThan(0);
    expect(body.every((post: { userId: number }) => post.userId === 1))
      .toBeTruthy();
  });

  test('GET - validate response headers', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');
  });

  test('GET - verify nonexistent post response', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/999999`);

    expect(response.status()).toBe(404);

    const body = await response.json();
    expect(body).toEqual({});
  });

  test('POST - verify request content type', async ({ request }) => {
    const response = await request.post(`${baseURL}/posts`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        title: 'Header validation',
        body: 'Testing JSON request headers',
        userId: 1
      }
    });

    expect(response.status()).toBe(201);
    expect(response.headers()['content-type']).toContain('application/json');
  });

});
