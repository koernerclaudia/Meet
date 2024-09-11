// src/__tests__/Event.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';

// Mock event data (this should match the structure of your mock data)
const mockEvent = {
  summary: "Learn JavaScript",
  start: {
    dateTime: "2020-05-19T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  location: "London, UK",
  description: "Have you wondered how you can ask Google to show you the list...",
};

describe('Event Component', () => {
  // Test 1: Ensure the event details are hidden by default (collapsed state)
  test('should hide event details by default', () => {
    const { queryByText } = render(<Event />);
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
  });

  // Test 2: Ensure the event summary, date-time, and location are displayed in collapsed state
  test('should display the event summary, start date-time, location, and the "Show Details" button in collapsed state', () => {
    const { getByText } = render(<Event />);
    
    // Check if the summary is displayed
    expect(getByText(mockEvent.summary)).toBeInTheDocument();
    
    // Check if the start date-time and timezone are displayed
    expect(getByText(/Starts:/i)).toBeInTheDocument();
    expect(getByText(/5\/19\/2020/i)).toBeInTheDocument();
    expect(getByText(/Europe\/Berlin/i)).toBeInTheDocument();
    
    // Check if the location is displayed
    expect(getByText(mockEvent.location)).toBeInTheDocument();
    
    // Check if the "Show Details" button is rendered
    expect(getByText('Show Details')).toBeInTheDocument();
  });
  

  // Test 3: Ensure the event details are shown when the "Show Details" button is clicked
  test('should show event details when the "Show Details" button is clicked', () => {
    const { getByText } = render(<Event />);
    
    // Click the button to expand
    const showButton = getByText(/Show Details/i);
    fireEvent.click(showButton);
    
    // Now, the description should be visible
    expect(getByText(mockEvent.description)).toBeInTheDocument();
  });

  // Test 4: Ensure the event details are hidden again when "Hide Details" button is clicked
  test('should hide event details when the "Hide Details" button is clicked after being expanded', () => {
    const { getByText, queryByText } = render(<Event />);
    
    // Click to expand
    const showButton = getByText(/Show Details/i);
    fireEvent.click(showButton);
    
    // Click to collapse
    const hideButton = getByText(/Hide Details/i);
    fireEvent.click(hideButton);
    
    // Ensure the description is no longer visible
    expect(queryByText(mockEvent.description)).not.toBeInTheDocument();
  });

  // Test 5: Ensure the toggle button text changes correctly between "Show Details" and "Hide Details"
  test('should toggle button text between "Show Details" and "Hide Details"', () => {
    const { getByText } = render(<Event />);
    
    // Button initially says "Show Details"
    const showButton = getByText(/Show Details/i);
    expect(showButton).toBeInTheDocument();
    
    // Click to expand, button should change to "Hide Details"
    fireEvent.click(showButton);
    const hideButton = getByText(/Hide Details/i);
    expect(hideButton).toBeInTheDocument();
    
    // Click to collapse, button should change back to "Show Details"
    fireEvent.click(hideButton);
    expect(getByText(/Show Details/i)).toBeInTheDocument();
  });
});
