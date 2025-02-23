# `HOW TO WRITE THE TEST?`

## Setting Up the File Structure

Before writing a test, we need to establish a proper file structure.

- Create a folder inside the `tests` directory for the test case you will implement. For example, if the test scenario involves sending an email, the folder name should be in kebab-case:
    - `test-send-email`
- Inside this folder, create the test file using camelCase:
    - `testSendEmail.spec.js`

```bash
tests (Main folder containing all tests)
  └── test-send-email (Folder for the specific test)
        ├── testSendEmail.spec.js (Test file)
        ├── readme.md (Step-by-step explanation of the test and its purpose)
```

Now, let's start building our test framework inside the created file.

---

## Step 1: Creating the Test Skeleton

```js
import { test } from "@playwright/test";

test('Test Signup Invitation with ref', async ({ page, request }) => {
    
});
```

- This step sets up a test framework using Playwright.
- The test framework is imported from Playwright.
- A test function is created.
- **NOTE:** Every test should start with this basic structure.

---

## Step 2: Integrating Test Helpers

In this step, we integrate test helpers into our test framework.

```js
import { test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";

test('Test Signup Invitation with ref', async ({ page, request }) => {
  const invitation = new signupInvitation(page, request);
  await invitation.gotoSignupWithInvitationUrl();
});
```

- Use appropriate helpers based on the test scenario.
- In this scenario, the test navigates to the signup page.
- `signupInvitation` is assigned to a variable `invitation` and used accordingly.
- The user can rename the `invitation` variable if needed.
- `gotoSignupWithInvitationUrl` is one of the functions in `signupInvitationHelpers`, which contains multiple helper functions.

---

## Step 3: Integrating Multiple Helpers

Additional helpers can be integrated similarly.

```js
import { test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";

test('Test Signup Invitation with ref', async ({ page, request }) => {
  const invitation = new signupInvitation(page, request);
  const login = new LoginPage(page, request);
  await invitation.gotoSignupWithInvitationUrl();
  await login.gotoEmailandPasswordEntry();
});
```

---

## Step 4: Assigning User-Defined Values

Users can set custom values in the helpers.

```js
import { test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";

test('Test Signup Invitation with ref', async ({ page, request }) => {
  const invitation = new signupInvitation(page, request);
  const login = new LoginPage(page, request);
  await invitation.gotoSignupWithInvitationUrl();
  await login.gotoEmailandPasswordEntry("example@gmail.com", "test1234");
});
```

- This example shows how to pass user-defined values (email and password).
- While helpers often have default values, users can override them if needed.

---

## Step 5: Assigning User Values to Variables

For a cleaner and more readable code structure, assign user values to variables.

```js
import { test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";

test('Test Signup Invitation with ref', async ({ page, request }) => {
  const emailValue = "example@gmail.com";
  const passwordValue = "test1234";  
  const invitation = new signupInvitation(page, request);
  const login = new LoginPage(page, request);
  await invitation.gotoSignupWithInvitationUrl();
  await login.gotoEmailandPasswordEntry(emailValue, passwordValue);
});
```

- Using variables enhances code readability and helps future developers understand the scenario more easily.

---

## **Important Notes**

- **Function names in scenarios should clearly represent their purpose.** For example:
    - `gotoSignupWithInvitationUrl();` → Navigates to the invitation signup page.
    - `gotoEmailandPasswordEntry();` → Enters email and password.

---

## Step 6: Complete Test Scenario Example

Here is a complete example incorporating all steps.

```js
import { test } from "@playwright/test";
import { signupInvitation } from "../../helpers/pages/signup-invitation/signupInvitationHelpers";
import { LoginPage } from "../../helpers/pages/signIn/signInHelpers";

test('Test Signup Invitation with ref', async ({ page, request }) => {

    // Assign user values to variables
    const emailValue = "example@gmail.com";
    const passwordValue = "test1234";
    const clientNameValue = "www.oguzhan.com";
    const invitation = new signupInvitation(page, request);
    const login = new LoginPage(page, request);
  
    // Test Scenario and Steps
    await invitation.gotoSignupWithInvitationUrl();
    await invitation.enterEmailandPasswordWithInvitation(emailValue, passwordValue);
    await invitation.gotoLoginPage();
    await login.gotoEmailandPasswordEntry(emailValue, passwordValue);
    await invitation.gotoAddNewClient(clientNameValue, "www.oguzhansaritas.com");
    await new Promise(resolve => setTimeout(resolve, 5000));
    await invitation.closeBrowser();
});
```

---

## **Final Note**

- **Always define variables at the top and write the test case below them.**

# **Test Registration in testList.yaml**

## **Note!!**

All tests you create must be saved in the `testList.yaml` file.

### **Why is this necessary?**

1. **Test Order Management** → Ensures the correct sequence of tests in the **Test Panel** (ID assignment).
2. **Visibility** → Displays the test name in the **Jenkins Panel** and **Test Panel**.
3. **File Path Reference** → Defines the exact file path for each test.
4. **Test Description** → Provides a brief explanation of what the test does.
5. **Test Steps** → Outlines the steps involved in the test execution.

By maintaining this structure, we ensure that all tests are properly organized, accessible, and easy to manage.

* For Example ;

```bash
  - id: 1
    name: Signup Invitation
    path: test-signup-invitation/testSignupİnvitation.spec.js
    description:
      Enter the email value you want to register.
      In the SignupComplete section, the required values (First and Last Name, Country, Business, Role, and the password for the registered email) need to be entered.
    test steps:
      - 1-) Connecting to mongodb.
      - 2-) Run query on mongodb. (The user must provide value)
      - 3-) Go to Signup page.
      - 4-) Enter Email and password. (User can give value)
      - 5-) Go to Login page.
      - 6-) Enter Email and password. (User can give value)
      - 7-) Add a new client. (User can give value)
      - 8-) Go to request the API you want to check. (The user can enter the API value he wants to check.)
      - 9-) Go to request the MONGO DB you want to check. (The user can enter the MONGO DB value he wants to check.)
      - 10-) Move mouse to sidebar.
      - 11-) Log out.
      - 12-) Delete specified values from mongo db. (User can give value)
      - 13-) Mongodb disconnect.
```