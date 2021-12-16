## Testing Notes

-   # Ezyme

    -   **What does Enzyme do?**
        -   Creates a virtual DOM for testing
        -   Allows testing without a browser
    -   **Create React App (CRA) does not come with Enzyme. It comes with React Testing Library**

        -   Both libraries create a virtual DOM
        -   Differences are mostly philosophical, about the **way** you should test

    -   **Enzyme**
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
