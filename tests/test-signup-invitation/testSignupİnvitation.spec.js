import {  test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";
import assert from "node:assert";

test('Test Signup Invitation with ref', async ({ page, request }) => {

    await mongoDB.connect();
    const emailValue = "example@gmail.com";
    const passwordValue = "test1234";
    const clientNameValue = "www.oguzhan.com";

    const invitation = new signupInvitation(page, request);
    const login = new LoginPage(page, request);

    await invitation.gotoSignupWithInvitationUrl();
    await invitation.enterEmailandPasswordWithInvitation(emailValue, passwordValue);
    await invitation.gotoLoginPage();
    await login.gotoEmailandPasswordEntry(emailValue, passwordValue);
    await invitation.gotoAddNewClient(clientNameValue, "www.oguzhansaritas.com");

    await new Promise(resolve => setTimeout(resolve, 5000));

    const clientData = await mongoDB.findOne("client", { email: emailValue });


    assert(clientData, "Client data should not be null");
    assert.strictEqual(clientData.name, clientNameValue, "Name entered incorrectly, please correct it");

    await invitation.closeBrowser();


});
