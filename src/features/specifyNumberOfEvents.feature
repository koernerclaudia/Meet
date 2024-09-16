Feature: Specify Number of Events

Scenario: When user has not specified a number, 32 events are shown by default.
    Given a user is on the app.
    When they have not changed any settings related to the number of events displayed.
    Then the app should display a maximum of 32 events by default.

Scenario: User can change the number of events displayed.
    Given a user is on the app.
    When they change the number of events displayed.
    Then the app should update to show the specified number of events.