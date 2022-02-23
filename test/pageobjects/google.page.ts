import { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio'

abstract class GooglePage {
  
  //  -----------------
  //  --- SELECTORS:
  //  -----------------
  public static get imgGoogleLogo(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('img[alt="Google"]')
  }

  public static get inputSearch(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('input[name="q"]')
  }

  public static get btnFeelingLucky(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#gbqfbb')
  }

  public static get divResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#rcnt')
  }

  public static get tabImages(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('=Images')
  }

  public static get tabVideos(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('=Videos')
  }

  public static get divImageResults(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('h2=Image Results')
  }

  public static get arrImageResults(): ChainablePromiseArray<WebdriverIO.ElementArray> {
    return $('div.islrc').$$('img')
  }

  public static get btnVisit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('=Visit')
  }

  /**
   * Executes a search within Google landing page.
   * @param {String} searchText - Value to search 
   */
  public static async search(searchText: string): Promise<void> {
    await this.inputSearch.setValue(searchText)
    await browser.keys("Enter")
  }

  /**
   * Clicks the "Feeling lucky" button.
   */
   public static async feelingLucky(): Promise<void> {
    await this.btnFeelingLucky.click()
  }

  /**
   * Opens Google website
   */
  public static open() {
    browser.url('https://www.google.com/')
  }
}

export default GooglePage
