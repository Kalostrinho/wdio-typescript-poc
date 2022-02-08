import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
abstract class LoginPage extends Page {
  /**
     * define selectors using getter methods
     */
  public static get inputUsername(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#username');
  }

  public static get inputPassword(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#password');
  }

  public static get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('button[type="submit"]');
  }

  /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  public static async loginAsync(username: string, password: string): Promise<void> {
    await LoginPage.inputUsername.setValue(username);
    await LoginPage.inputPassword.setValue(password);
    await LoginPage.btnSubmit.click();
  }

  /**
     * overwrite specific options to adapt it to page object
     */
  public static open(): Promise<string> {
    return super.open('login');
  }
}

export default LoginPage;
