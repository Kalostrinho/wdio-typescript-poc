/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
abstract class Page {
  /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
  public static open(path: string): Promise<string> {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}

export default Page;
