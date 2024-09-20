
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user has not specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        given('a user is on the app.', () => {
        });
    
        let AppComponent;
        when('they have not changed any settings related to the number of events displayed.', () => {
          AppComponent = render(<App />);
        });
    
        then('the app should display a maximum of 32 events by default.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
             
            });
          });
      });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
      let NumberOfEventsComponent;
  
      given('a user is on the app.', () => {
        NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => {}} setErrorAlert={() => {}}/>);
      });
  
      when('they change the number of events displayed.', async () => {
        const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');  // Select the input field
        const user = userEvent.setup();  // Set up user interactions
        await user.type(numberOfEvents, '{backspace}{backspace}10');  // Simulate typing "10"
      });
  
      then('the app should update to show the specified number of events.', async () => {
        const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');  // Re-select the input field
        expect(numberOfEvents).toHaveValue('10');  // Check if the value is now "10"
      });
    });
  });