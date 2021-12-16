## Testing Notes

-   # Jest

    -   **Jest Docs**
        -   https://jestjs.io/

-   # Ezyme

    -   **What does Enzyme do?**
        -   Creates a virtual DOM for testing
        -   Allows testing without a browser
    -   **Create React App (CRA) does not come with Enzyme. It comes with React Testing Library**

        -   Both libraries create a virtual DOM
        -   Differences are mostly philosophical, about the **way** you should test

    -   **Enzyme**
        -   **Enzyme Docs**
            -   https://enzymejs.github.io/enzyme/docs/api/
            -
        -   Enzyme supports isolated testing
            -   e.g. "shallow testing" - allows you it isolate a component from its children, where it only renders the component itself and not its children
        -   React Testing Library strongly prefers **functional** testing
            -   Interacting as a user would - a user would never see a parent component without its children
        -   Why Enzyme?
            -   More traditional testing style
                -   Instead of testing with user flows, the tests are more tightly coupled with the code itself - thus, tests are focused on an explicit area of code rather than a particular user flow
                -   Unit tests are very isolated - "shallow testing", mocks, etc. - only testing what you want to test and tests are not being polluted with other functionality or data processes
                -   Isolated code tests means it is easier to diagnose quickly what and where the problem is
                -   Code-based testing is possible with React Testing Library, however it is not recommended ("opinionated")
                -   There are also a lot of legacy code bases that were written before React Testing Library and Enzyme is usually a better fit for these
                -   More info:
                    -   Testing React: A Convert's journey from Enzyme to React Testing Library
                    -   https://bonniedotdev.medium.com/70f85eebb674
    -   _"Shallow Rendering"_

        -   Rendering components only one level deep
        -   Render Parent, but use placeholders for children
            -   Pros:
                -   Faster testing
                -   Any problems in the children components will not cause the Parent component to fail - while this makes more tests, it allows more precision of those tests

    -   # Enzme-adapter-react-17 not yet available

        -   IMPORTANT NOTE: enzyme-adapter-react-17 not yet available

            -   Create-React-App uses React 17, but Enzyme Adapter Not Yet Available
            -   On October 23, 2020, create-react-app updated to React 17. Since running npx create-react-app as recommended will use the latest version of create-react-app, your apps will be using React 17 as well.

            -   What this means
            -   **npm install --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17**

                -   Unfortunately, the official enzyme-adapter-react-17 is not yet available. Until the update, the unofficial adapter is @wojtekmaj/enzyme-adapter-react-17 adapter.

            -   Dependency issues

            -   There may be some dependency issues when installing the unofficial adapter (or when making installs afterward). Running the install with the --legacy-peer-deps flag should allow the install to continue.

    -   # Types of Tests

        -   **Unit Tests**

            -   Tests one piece of code - usually a single function

        -   **Integration Tests**

            -   How multiple units work together

        -   **Acceptance / End-to-end (E2E) Tests**

            -   Uses an actual browser and connections to servers
                -   From browser to user to browser to server to database and back again
                    -   Uses tools like Cypress or Selenium to simulate user browser experience

        -   **Functional Tests**

            -   Can be any of the above; focuses on user flow, user stories

        -   "Code-based tests" == testing code implementation
        -   "Functional tests" == testing application behavior
