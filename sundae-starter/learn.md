# Code Organization

### Organise component by pages
  - tests directory for each page
  - Vitest will find and run any files that end in .test.js

### src/pages/summary
  - OrderSummary.jsx
  - SummaryForm.jsx
### src/pages/summary/tests
  - SummaryForm.test.jsx
  - OrderSummary.test.jsx


## Screen Query Methods

### command[All]ByQueryType

  #### commands:
  - get: expect element to be in the DOM 
  - query: expect element not to be in DOM
  - find: expect element to appear 

  [All]
  - (exclude) expect only one match
  - (include) expect more than one match

  #### Query Type
  - Role : most preferred
  - AltText: images
  - Text: display elements

  ### Form Element
  - PlaceholderText
  - LabelText
  - DisplayValue
  
## Mock Service Worker

 ### Purpose:

  - intercept network calls
  - return specified responses

### Prevents network calls during tests

### Set up test conditions using server response

## Mock Service Worker Setup

 - npm i msw
 - Create Handlers: This are the functions which will determine what will be returned for particular route/url
 - Create Test Server: To handle requests
 - Make sure test server listens during all requests
     - reset after each test

## Handlers

This are the functions which are going to handle incoming requests . They will match incoming url and will give mocked response.

```
  http.get('http://localhost:3030/scoops', () => {
        return HttpResponse.json(
            [
                { name: 'Chocolate', imagePath: '/images/chocolate.png' },
                { name: 'Vanilla', imagePath: '/images/vanilla.png' }
            ]
        )
}),
```

 - HandlerType: http or graphql
 - HTTP method to mock: GET / POST
 - URL to mock - http://localhost:3030/scoops
 - Response resolver function: 
     - returns response
     - can take arguments to get at request & params
     - we can also add delay in our mock service worker

## Tools for debug tests

  - We have test.skip / test.only option to test only particular tests.
  - We can run only one test file at a time.
  - We can log the roles of elements - 
    const { container} = render(<App/>);
    logRoles(container);

## Creating custom render to Wrap in Provider By Default



## Debugging Tips
  - screen.debug()
  - logRoles

    ```
    import  { logRoles } from '@testing-library/dom';

    test('button has correct initial color',  () => {
      const { container } = render(<App />);
      logRoles(container);
    })

    ```
  - does getBy fail when ther is any server call or other async action ?
    need to use await findBy
  - all user actions should use await because all user event method returns promise

## Standard Questions before writing a test

- What to render ?
- Pass props ?
- Wrap render ?
- Which file for tests ?
- What to test ?
- How to test ?
- Do we need to async / await ?

