## Testing Notes

-   # Ezyme

    -   What does Enzyme do?
        -   Creates a virtual DOM for testing
        -   Allows testing without a browser
    -   Create React App (CRA) does not come with Enzyme. It comes with React Testing Library

        -   Both libraries create a virtual DOM
        -   Differences are mostly philosophical, about the **way** you should test

    -   Enzyme
        -   Enzyme supports isolated testing
            -   e.g. "shallow testing" - allows you it isolate a component from its children, where it only renders the component itself and not its children
        -   React Testing Library strongly prefers **functional** testing
