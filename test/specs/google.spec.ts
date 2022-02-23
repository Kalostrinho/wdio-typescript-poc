import GooglePage from '../pageobjects/google.page'
import * as Log from '../utils/coolLogs'

describe('Google search', () => {

    before(async () => {
        await GooglePage.open()
    })

    it('should load "Google" website properly', async () => {        
        await Log.step('Validating Google\'s langing page...')
        await expect(GooglePage.imgGoogleLogo).toBeDisplayed()
        await expect(GooglePage.btnFeelingLucky).toBeDisplayed()
        await Log.success('Google\'s langing page seems right!')
    })

    it('should run a search and show results', async () => {
        await Log.step('Validating "search" is available...')
        await expect(GooglePage.inputSearch).toBeDisplayed()
        await GooglePage.search('cats')
        await expect(GooglePage.divResults).toBeDisplayedInViewport()
        await expect(browser).toHaveUrlContaining('/search')
        await Log.success('Search was executed on Google!')
    })

    it('should show "Images" and "Videos" tabs along with the results', async () => {
        await Log.step('Validating available tabs after results are shown...')
        await expect(GooglePage.tabImages).toBeDisplayed()
        await expect(GooglePage.tabVideos).toBeDisplayed()
        await Log.success('"Images" and "Videos" tab were displayed properly!')
    })

    it('should show resulting images and a "Visit" button once one result is selected', async () => {
        await Log.step('Attempting to select "Images" tab...')
        await GooglePage.tabImages.click()
        await expect(GooglePage.divImageResults).toBeExisting()
        const images = await GooglePage.arrImageResults
        await expect(images.length).toBeGreaterThan(0)
        await Log.success('Image results are being displayed!')
        await Log.step('Attempting to select second image within the results...')
        await expect(images[1]).toBeDisplayed()
        await images[1].click() 
        await expect(GooglePage.btnVisit).toBeDisplayed()
        await Log.success('Second image information was displayed! (Visit button was available)')
    })

})
