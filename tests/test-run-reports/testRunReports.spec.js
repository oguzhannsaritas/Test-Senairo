import { test } from "@playwright/test";
import { runReport } from "../../helpers/pages/run-package/runReportHelpers";
import NetworkTracking from "../../utilities/network/networkTracking";
import { trackReportFlow } from "../../utilities/utilities";

test.beforeEach(async ({ context }) => {
    // Granting read and write permissions directly, removing permission request when opening a new tab
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
});


test('Test Run Report', async ({ page, request }) => {
    const packages = new runReport(page);
    const networkTracking = new NetworkTracking(page);




    await packages.gotoLoginPage();
    await page.pause();
    await packages.gotoEmailandPasswordEntry("example@gmail.com", "12345");

    await packages.gotoRunReport("Channel Based Page Comparison");
    await networkTracking.get('API');
    console.log(networkTracking.get("API"))
    await packages.gotoReportActivateButton();
    await trackReportFlow(page, networkTracking);
    await packages.gotoInsight("Session comparison report for main channels is ready")
    await packages.gotoShareInsight();


    await page.pause();
});
