import GooglePage from '../pageobjects/google.page'

describe('Google search', () => {

    before(async () => {
        await GooglePage.open()
    })

    it('should load "Google" website properly', async () => {        
        await expect(GooglePage.imgGoogleLogo).toBeDisplayed()
        await expect(GooglePage.btnFeelingLucky).toBeDisplayed()
    })

    it('should run a search and show results', async () => {
        await expect(GooglePage.inputSearch).toBeDisplayed()
        await GooglePage.search('cats')
        await expect(GooglePage.divResults).toBeDisplayedInViewport()
    })

    it('should show "Images" and "Videos" tabs along with the results', async () => {
        await expect(GooglePage.tabImages).toBeDisplayed()
        await expect(GooglePage.tabVideos).toBeDisplayed()
    })

    it('should show resulting images and a "Visit" button once one result is selected', async () => {
        await GooglePage.tabImages.click()
        await expect(GooglePage.divImageResults).toBeExisting()
        const images = await GooglePage.arrImageResults
        await expect(images.length).toBeGreaterThan(0)
        await expect(images[1]).toBeDisplayedInViewport()
        await images[1].click() 
        await expect(GooglePage.btnVisit).toBeDisplayed()
    })

})
