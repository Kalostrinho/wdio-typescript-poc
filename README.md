# Just another POC
##### _Now using a bit of Typescript :wink:_

## How to run
> _The usual Node project way :fire:_

1. Run `npm install`
1. After all dependencies get installed successfully, run `npm run wdio:test`
1. Enjoy the colors!

## Test suite
> _This is an end to end suite that handles the dreaded Google page and its complex locators_

##### Pre-requisite
> _Executes just once before the test suite starts_

* Loads `Google` website

##### Scenario 1
> _Validates that `Google` page opened properly_

* The page has a `Google` logo
* The page has an `I'm feeling lucky` button
  
##### Scenario 2
> _Executes a `Google search` and validates that results are shown_

* Enter `cats` within the `Google search input box`
* Results should be displayed
* Url now contains `/search`

##### Scenario 3
> _Extra validation that our term `cats` was the one actually searched for_

* Input box on top contains `cats` as a value

##### Scenario 4
> _Validates that after results are shown, `Images` and `Videos` tabs are available_

* The page displays `Images` tab
* The page displays `Videos` tab
  
##### Scenario 5
> _Clicks on the `Images` tab, clicks on the second result image and validates that there's a `Visit` button displayed_

* Click on the `Images` tab
* Select the second image
* Validate that the `Visit` button is displayed

##### Scenario 6 (forced failure)
> _Validate that the `"hypothetical" Open in new tab` button is displayed next to the `Visit` button_
> **This should fail**

* Validate that the `Open in new tab` button is displayed

