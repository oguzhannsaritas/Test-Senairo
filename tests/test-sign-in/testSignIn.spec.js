import { test } from "@playwright/test";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";
import NetworkTracking from "../../utilities/network/networkTracking";
import network from "../../utilities/network/network";


test('Test sign in', async ({ page, request }) => {
    const networkTracking = new NetworkTracking(page);
    await mongoDB.connect();

     const emailValue = "example@gmail.com";
     const requestUrl= '/v1/user/check/premium';
     const collectionName = 'user';

    await mongoDB.find( "insightProjects", {clientID: new ObjectId('66829ef583320a13585565d3')}, {sort: {_id: -1}} );
    await mongoDB.findOne( collectionName, {email: emailValue} );
    await mongoDB.findOneAndUpdate( collectionName, {email: emailValue}, {isPremium: false} );

    const login = new LoginPage(page, request);
    await login.gotoLoginPage();
    await captureSuccess(page, 'gotoLoginPage')
    await login.gotoEmailandPasswordEntry(emailValue, "12345");


    await login.closeBrowser();


    await network.getHeader(networkTracking, requestUrl, 'Accept');
    await network.getBaseUrl( networkTracking, requestUrl );

});
