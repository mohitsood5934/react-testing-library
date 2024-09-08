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
 - Create Handlers: This are the functions which will determine what will be returned for particular route
 - Create Test Server: To handle requests
 - Make sure test server listens during all requests
     - reset after each test