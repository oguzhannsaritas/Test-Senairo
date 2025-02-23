import {expect, request, test} from "@playwright/test";
import {signupInvitation} from "../../helpers/pages/signup/signupHelpers";
import {LoginPage} from "../../helpers/pages/signIn/signInHelpers";

test ('Test Signup', async ({page, request }) => {
  const emailValue = "example@gmail.com";
  const webSiteValue = "https://oguzhan-teste.com";
  const companyTypeValue = "Agency";
  const roleValue = "Marketing manager";



  const signup = new signupInvitation(page, request);
  const login = new LoginPage( page, request );
  await signup.gotoSignupUrl();
  await signup.gotoSignup ( emailValue ,"test1234");
  await signup.gotoLoginPage();
  await login.gotoEmailandPasswordEntry(emailValue,"test1234")
  await signup.gotoOnboardingBusinessOverview(webSiteValue, companyTypeValue,  roleValue);


  await new Promise(resolve => setTimeout(resolve, 2000));





  await signup.gotoSelectedDatasource();
  await signup.gotoSelectedPriorities();
  await signup.gotoOnboardingIntegration();
  await signup.gotoOnboardingBookingCalendar();



  await signup.closeBrowser();

});
