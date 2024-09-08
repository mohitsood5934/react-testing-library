import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from "./mocks/server";

// establishing API mocking before all tests
beforeAll(() => server.listen());

// reset any request handlers that we may add during the tests
// so they do not affect other tests
afterEach(() => server.resetHandlers());

// clean up after the tests are finished
afterAll(() => server.close());