import { test   } from '@playwright/test';
import {teammateHelpers} from "../../helpers/pages/settings/teammate/teammateHelpers";


test ('Test Add New Teammate', async ({ page , request }) => {
    const teammate = new teammateHelpers( page );
    await teammate.gotoLoginPage();
    await page.pause();
    await teammate.gotoEmailandPasswordEntry("example@gmail.com", "test1234");
    await teammate.gotoAddNewTeammate();
    await teammate.gotoAddTeammate("example@gmail.com", "PlaywrightDeneme.com", "Viewer");
    await teammate.gotoRemoveTeammate();
    await teammate.closePage();
});
