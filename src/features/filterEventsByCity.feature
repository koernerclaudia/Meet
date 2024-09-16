Feature: Filter events by city
    Scenario: When user has not searched for a city, show upcoming events from all cities.
        Given a user has opened the app.
        When they have opened the app, but not yet taken any action.
        Then the user should see a list of 32 upcoming events - across all locations.

    Scenario: User should see a list of suggestions when they search for a city.
        Given a user is on the app.
        When they have written the name of a city into the search box.
        Then a dropdown of matches to that city as well as an option to ‘see all cities’ should appear.

    Scenario: User can select a city from the suggested list.
        Given user was typing “Berlin” in the city textbox.
        And the list of suggested cities is showing.
        When the user selects a city (e.g., “Berlin, Germany”) from the list.
        Then their city should be changed to that city (i.e., “Berlin, Germany”).
        And the user should receive a list of upcoming events in that city.
