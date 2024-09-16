Feature: Show/Hide Event Details.

Scenario: An event element is collapsed by default.
# Given a user is on the app.
When they view the list of events.
Then each event should be displayed in a collapsed state, showing only basic information like title, date, and location.

Scenario: User can expand an event to see details.
Given a user is on the app looking at the list of events.
When they click on the -Show Details- Button of a collapsed event.
Then the event details should expand, showing additional information such as description, time, venue details, and any other relevant information.

Scenario: User can collapse an event to hide details.
Given a user is viewing an expanded event.
When they click on the -Hide Details- Button of the expanded event.
Then the event should collapse, hiding the additional details and returning to its default state.