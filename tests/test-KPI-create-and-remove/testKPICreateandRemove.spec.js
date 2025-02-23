import { test  } from '@playwright/test';
import {KPIHelpers} from "../../helpers/pages/kpi/KPIHelpers";

test ('Test KPI create and remove', async ({ page , request, context }) => {
    const kpi = new KPIHelpers( page );
    const datasource = 'googleSearchConsole'

    await kpi.gotoLoginPage();
    await kpi.gotoEmailandPasswordEntry("example@gmail.com","test1234");
    await page.pause();
    await kpi.gotoOpenKpiPage();
    await kpi.gotoCreateNewKPIButton();
    await kpi.gotoAddYourGoalsDropDown();
    await kpi.gotoDataSourceGoals(datasource);
    await kpi.gotoGoals( datasource,  'searchConsoleImpression');
    await kpi.gotoTags( 2222222);
    await kpi.gotoAddFilter('page','NOT CONTAINING' );
    await kpi.gotoFillWriteYourValue(33333);
    await kpi.gotoFillEnterYourTarget( 444444);
    await kpi.gotoCreateKPIButton();
    await kpi.gotoResult();
    await kpi.gotoRemoveKPI();
    await kpi.gotoCloseKPIPage();
});