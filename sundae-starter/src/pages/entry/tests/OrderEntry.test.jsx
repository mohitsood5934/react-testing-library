import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from "../OrderEntry";

// test.only('', () => { }) => will run only this test if multiple tests are declared in file
// test.skip('', () => { }) => will skip only this test if multiple tests are declared in file

test("handles error for scoops and toppings routes" , async () => {
    // resets request handler to the initial list given to the setupServer call or to the new request handlers list , if given
    // overriding the actual handlers , which returns this data
    server.resetHandlers(
        http.get('http://localhost:3030/scoops', () => {
            return new HttpResponse(null, { status: 500 });
        }),
        http.get('http://localhost:3030/toppings', () => {
            return new HttpResponse(null, { status: 500 });
        }),
    );
    render(<OrderEntry />);
    const alerts = await screen.findAllByRole('alert');
    // const alerts = await screen.findAllByText('An unexpected error occurred. Please try again later.');
    expect(alerts).toHaveLength(2);
})