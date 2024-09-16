import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import { render, within, waitFor } from '@testing-library/react';
import Event from '../components/Event';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  const event = {
    summary: 'Test Event',
    location: 'Test Location',
    created: new Date().toISOString(),
    description: 'Test Description'
  };

  test('An event element is collapsed by default.', ({ given, when, then }) => {
  
    // given('a user is on the app.', () => {
      // This step is implicitly covered by rendering the component
    // });
    let AppComponent;
    when('they view the list of events.', () => {
      AppComponent = render(<Event event={event} />);
    });

    then('each event should be displayed in a collapsed state, showing only basic information like title, date, and location.', async () => {
      const { container } = AppComponent;
      const AppDOM = container.firstChild;

      await waitFor(() => {
        expect(AppDOM.querySelector('h2').textContent).toBe('Test Event');
        expect(AppDOM.querySelector('p').textContent).toBe('Test Location');
        expect(AppDOM.querySelector('.details')).toBeNull();
      });
    });
  });

  test('User can expand an event to see details.', ({ given, when, then }) => {
    let AppComponent;

    given('a user is on the app looking at the list of events.', () => {
      AppComponent = render(<Event event={event} />);
    });

    when('they click on the -Show Details- Button of a collapsed event.', async () => {
      const { container } = AppComponent;
      const AppDOM = container.firstChild;
      const button = within(AppDOM).queryByText('show details');
      button.click();
    });

    then('the event details should expand, showing additional information such as description, time, venue details, and any other relevant information.', async () => {
      const { container } = AppComponent;
      const AppDOM = container.firstChild;

      await waitFor(() => {
        const details = AppDOM.querySelector('.details');
        expect(details).not.toBeNull();
        expect(details.textContent).toBe('Test Description');
      });
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) => {
    let AppComponent;

    given('a user is viewing an expanded event.', async () => {
      AppComponent = render(<Event event={event} />);
      const { container } = AppComponent;
      const AppDOM = container.firstChild;
      const button = within(AppDOM).queryByText('show details');
      button.click();

      await waitFor(() => {
        expect(AppDOM.querySelector('.details')).not.toBeNull();
      });
    });

    when('they click on the -Hide Details- Button of the expanded event.', () => {
      const { container } = AppComponent;
      const AppDOM = container.firstChild;
      const button = within(AppDOM).queryByText('hide details');
      button.click();
    });

    then('the event should collapse, hiding the additional details and returning to its default state.', async () => {
      const { container } = AppComponent;
      const AppDOM = container.firstChild;

      await waitFor(() => {
        expect(AppDOM.querySelector('.details')).toBeNull();
      });
    });
  });
});