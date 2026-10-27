
import { test, expect } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient';
import { type PostResponse } from '../types/Posts';

const baseURL = 'https://jsonplaceholder.typicode.com';

test('create a post using typed API data', async ({ request }) => {
  const apiClient = new ApiClient(request);

  const newPost = {
    userId: 1,
    title: 'Playwright TypeScript API',
    body: 'Practising typed request and response models'
  };

  const response = await apiClient.post(`${baseURL}/posts`, newPost);

  expect(response.status()).toBe(201);

  // The interface provides compile-time typing, not runtime validation.
  const body = (await response.json()) as PostResponse;

  expect(body.id).toBeTruthy();
  expect(body.userId).toBe(newPost.userId);
  expect(body.title).toBe(newPost.title);
  expect(body.body).toBe(newPost.body);
});
