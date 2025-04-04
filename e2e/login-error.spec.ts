import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
test('Test de connexion et gestion des erreurs', async ({ page }) => {
    allure.allureId('10');
    allure.description('Test de connexion et gestion des erreurs');
    await allure.step('Aller sur la page de login', async () => {
      await page.goto('http://localhost:4200/login');
    });
  
    await allure.step('Saisir un mauvais nom d’utilisateur et mot de passe', async () => {
      await page.fill('input[name="username"]', 'wrongUser');
      await page.fill('input[name="password"]', 'wrongPass');
    });
  
    await allure.step('Cliquer sur le bouton de connexion', async () => {
      await page.click('button[type="submit"]');
    });
  
    await allure.step('Vérifier le message d’erreur via le dialog', async () => {
      page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe("Nom d'utilisateur ou mot de passe incorrect");
        await dialog.dismiss();
      });
    });
  
    await allure.step('Vérifier que l’URL reste sur la page de login', async () => {
      await expect(page).toHaveURL('http://localhost:4200/login');
    });
  });
  
