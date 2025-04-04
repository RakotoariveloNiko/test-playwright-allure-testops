import { test, expect } from '@playwright/test';

test.describe('Tests E2E - Application Angular', () => {
  test('Connexion avec un utilisateur valide', async ({ page }) => {
    await page.goto('http://localhost:4200/login');
    await page.fill('input[name="username"]', 'admin');
    await page.fill('input[name="password"]', 'admin');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('http://localhost:4200/home');
  });

  test('Vérification du tableau de bord (Home)', async ({ page }) => {
    await page.goto('http://localhost:4200/home');
    await expect(page.locator('h1')).toContainText(
      'Bienvenue sur votre tableau de bord',
    );
  });
});
