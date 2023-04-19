import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.sima-land.ru/');
  await page.getByTestId('nav-item:cabinet').getByTestId('link').click();
  await page.getByTestId('login-field').getByTestId('text-field:field').click();
  await page.getByTestId('login-field').getByTestId('text-field:field').fill('qa_test@test.ru');
  await page.getByTestId('password-field').getByTestId('text-field:field').click();
  await page.getByTestId('password-field').getByTestId('text-field:field').fill('qa_test');
  await page.getByTestId('button').click();
});