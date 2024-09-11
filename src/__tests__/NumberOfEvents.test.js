// src/__tests__/NumberOfEvents.test.js

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders an element with the role of textbox and default value of 32', () => {
    const mockUpdateEventCount = jest.fn(); // Create a mock function
    render(<NumberOfEvents updateEventCount={mockUpdateEventCount} />);
    
    // Assert that the component contains an input element with role 'textbox'
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();


     // Assert that the input element has the default value of 32
     expect(inputElement.value).toBe('32');
    });

test('updates the value of the input field when user types into it', async () => {
        render(<NumberOfEvents />);
        
        // Get the input element
        const inputElement = screen.getByRole('textbox');
        
        // Simulate user typing and backspacing
        await userEvent.clear(inputElement); // Clears the input
        await userEvent.type(inputElement, '10'); // Types '10'
        
        // Assert that the input element has the value '10'
        expect(inputElement.value).toBe('10');
      });
});
