
import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('API Testing - JSONPlaceholder', {
  tag: '@api'
}, () => {

  test('GET - verify a post', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
    expect(body.title).toBeTruthy();
    expect(body.body).toBeTruthy();
  });

  test('POST - create a post', async ({ request }) => {
    const requestBody = {
      title: 'Playwright API Testing',
      body: 'Learning POST requests with TypeScript',
      userId: 1
    };

    const response = await request.post(`${baseURL}/posts`, {
      data: requestBody
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.title).toBe(requestBody.title);
    expect(body.body).toBe(requestBody.body);
    expect(body.userId).toBe(requestBody.userId);
    expect(body.id).toBeTruthy();
  });

  test('PUT - update a post', async ({ request }) => {
    const requestBody = {
      id: 1,
      title: 'Updated Playwright Title',
      body: 'Updated post content',
      userId: 1
    };

    const response = await request.put(`${baseURL}/posts/1`, {
      data: requestBody
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
    expect(body.title).toBe(requestBody.title);
    expect(body.body).toBe(requestBody.body);
  });

  test('DELETE - delete a post', async ({ request }) => {
    const response = await request.delete(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);
  });

});
