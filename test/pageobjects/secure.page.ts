import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
abstract class SecurePage extends Page {
  /**
     * define selectors using getter methods
     */
  public static get flashAlert(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#flash');
  }
}

export default SecurePage;
