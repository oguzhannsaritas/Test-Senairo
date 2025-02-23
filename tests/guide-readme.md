# `General Test Scenarios`

## **Overview**

This document outlines general test scenarios along with their associated helper functions. Each section provides a description of the helper functions and the steps required for testing specific functionalities.

---

### **Login Page**
- **Description:** Allows navigation to the test branch or main branch.
- **Function:** `gotoLoginPage()`

---

### **Enter Email and Password**
- **Description:** Logs in using the provided email and password values. If no values are provided, default static values are used.
- **Function:** `gotoEmailandPasswordEntry()`

---

### **Exit**
- **Description:** Logs out of the application.
- **Function:** `closeBrowser()`

---

### **Signup Page**
- **Description:** Redirects the user to the signup page.
- **Function:** `gotoSignupUrl()`

---

### **Registration**
- **Description:** Registers a user based on provided values or defaults.
- **Function:** `gotoSignup()`

---

### **Onboarding Business**
- **Description:** Selects `webSiteValue`, `companyTypeValue`, and `roleValue` during onboarding. If no values are provided, defaults are used.
- **Function:** `gotoOnboardingBusinessOverview()`

---

### **Datasource Selection**
- **Description:** Selects a specific datasource (currently only supports Facebook).
- **Function:** `gotoSelectedDatasource()`

---

### **Selecting Priorities**
- **Description:** Chooses priority options.
- **Function:** `gotoSelectedPriorities()`

---

### **Onboarding Integration**
- **Description:** Connects only to a Facebook account (static configuration).
- **Function:** `gotoOnboardingIntegration()`

---

### **Onboarding Calendar**
- **Description:** Navigates through the calendar (no calendar-specific operations performed).
- **Function:** `gotoOnboardingBookingCalendar()`

---

### **Invitation Signup Page**
- **Description:** Redirects the user to the invitation signup page.
- **Function:** `gotoSignupWithInvitationUrl()`

---

### **Enter Email and Password on Invitation Page**
- **Description:** Registers a user on the invitation page with provided or default values.
- **Function:** `enterEmailandPasswordWithInvitation()`

---

### **New Client**
- **Description:** Creates a new client with a provided or default value.
- **Function:** `gotoAddNewClient()`

---

### **Premium Signup Page**
- **Description:** Redirects the user to the premium signup page.
- **Function:** `gotoSignupWithPremiumUrl()`

---

### **Premium Registration**
- **Description:** Registers a user on the premium page using provided or default values.
- **Function:** `gotoSignupPremium()`

---

### **Premium Onboarding Business Overview**
- **Description:** Manages business onboarding for premium users.
- **Function:** `gotoPremiumOnboardingBusinessOverview()`

---

### **Premium Onboarding Integration**
- **Description:** Connects only to a Facebook account, bypassing other datasources.
- **Function:** `gotoPremiumOnboardingIntegration()`

---

### **Run Report**
- **Description:** Opens a specified report.
- **Function:** `gotoRunReport()`

---

### **Report Active Button**
- **Description:** Clicks the active button for a specified report.
- **Function:** `gotoReportActivateButton()`

---

### **Go to Insight**
- **Description:** Navigates to a specified insight or the default insight.
- **Function:** `gotoInsight()`

---

### **Share Insight**
- **Description:** Enables sharing of insights.
- **Function:** `gotoShareInsight()`

---

### **Run Package**
- **Description:** Navigates to a specified analysis package.
- **Function:** `gotoRunPackages()`

---

### **Run Package Active Button**
- **Description:** Clicks the button to run a package.
- **Function:** `gotoPackageActivateButton()`

---

### **Track Package Group Flow**
- **Description:** Retrieves `packageGroupID` and `jobID`, and shows the response after package execution.
- **Function:** `trackPackageGroupFlow()`

---

### **Track Report Flow**
- **Description:** Retrieves `clientID` and `reportID` after running a package and displays the response.
- **Function:** `trackReportFlow()`

---

### **Navigation Sidebar**
- **Description:** Clicks the sidebar menu.
- **Function:** `getNavigation()`

---

### **Wait for Timeout**
- **Description:** Waits for a specified timeout duration.
- **Function:** `customWaitForTimeout()`

---

### **Wait for Load State**
- **Description:** Waits for the page to fully load.
- **Function:** `waitForLoadState()`

---

### **Custom Click**
- **Description:** Enables custom click actions.
- **Function:** `customClick()`

---

### **Custom Fill**
- **Description:** Performs custom text entry operations.
- **Function:** `customFill()`

---

### **Custom Placeholder**
- **Description:** Allows customized placeholder interactions.
- **Function:** `customPlaceholder()`

---

### **Custom Locator**
- **Description:** Enables selection of custom selectors.
- **Function:** `customLocator()`

---

### **Custom ByText**
- **Description:** Provides text-based element selection.
- **Function:** `customByText()`

---

### **Custom ByRole**
- **Description:** Detects elements based on specific roles.
- **Function:** `customByRole()`

---

### **Capture Success**
- **Description:** Takes screenshots at specified steps.
- **Function:** `captureSuccess()`

