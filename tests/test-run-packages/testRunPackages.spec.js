import { test } from "@playwright/test";
import { runPackages } from "../../helpers/pages/run-package/runPackagesHelpers";
import {trackPackageGroupFlow} from "../../utilities/utilities";
import NetworkTracking from "../../utilities/network/networkTracking";

test.beforeEach(async ({ context }) => {
    // Granting read and write permissions directly, removing permission request when opening a new tab
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
});

test('Test Run Package', async ({ page, request }) => {
    const packages = new runPackages(page);
    const networkTracking = new NetworkTracking(page);




    await packages.gotoLoginPage();
    await page.pause();
    await packages.gotoEmailandPasswordEntry("example@gmail.com", "12345");

    await packages.gotoRunPackages("Daily/Weekly Performance Report");
    await networkTracking.get('API');
    console.log(networkTracking.get("API"))
    await packages.gotoPackageActivateButton();
    await trackPackageGroupFlow(page, networkTracking);
    await packages.gotoPackageInReport("Channel Performance Report");
    await packages.gotoReportInInsight("İnsightName")
    await packages.gotoPackageShareInsight();

    await page.pause();
});
