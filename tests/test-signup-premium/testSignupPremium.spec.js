import { request, test } from "@playwright/test";
import {LoginPage} from "../../helpers/pages/signIn/signInHelpers";
import {signupPremium} from "../../helpers/pages/signup-premium/signupPremiumHelpers";
import assert from "node:assert";

test ('Test Signup Premium with ref', async ({page }) => {
    await mongoDB.connect();

    const emailValue = "example@gmail.com";
    const passwordValue = "test1234";

    const premium = new signupPremium(page, request);
    const login = new LoginPage( page, request );
    await premium.gotoSignupWithPremiumUrl();
    await premium.gotoSignupPremium ( emailValue ,passwordValue);
    await premium.gotoLoginPage();
    await login.gotoEmailandPasswordEntry(emailValue ,passwordValue)
    await premium.gotoPremiumOnboardingBusinessOverview("https://oguzhan.com", "Agency", "Content", "Marketing Manager");


    await premium.gotoPremiumOnboardingIntegration();
    await premium.gotPremiumOnboardingBookingCalendar();



    await premium.closeBrowser();

});
