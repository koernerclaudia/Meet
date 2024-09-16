# Meet-App

WIP - currently being built!

## Live on Github Pages

https://koernerclaudia.github.io/meet/

## Project Details

This app will give users the ability to search & filter events by city. It will have offline capabilities to check back on events. 

## Stack

ReactJS, Bootstrap, AWS Lamda (serverless progressive web application (PWA). The purpose of this project is to learn & use a test-driven development (TDD) technique. The application uses the Google
Calendar API (OAuth2 authentication flow)  to fetch upcoming events. 

(This is another project I am setting up during my Full Stack Training with CareerFoundry.)

## Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.


## Project Features - Scenarios, User Stories, Gherkin

### ***Feature 1: Filter Events By City***

***User Story:** As a user, I should be able to filter events by city to see particular events in my location and see a shorter list, making it easier to browse location-based events.* 

***Scenario 1:** When user has not searched for a city, show upcoming events from all cities.*

- Given: A user has opened the app.
- When: They are on the app, but have not yet taken any action.
- Then: The user should see a list of 32 upcoming events - across all locations.

***Scenario 2:** User should see a list of suggestions when they search for a city.*
- Given: A user is on the app.
- When: They have written the name of a city into the search box
- Then: A dropdown of matches to that city as well as an option to ‘see all cities’ should appear.

***Scenario 3:** User can select a city from the suggested list.*
- Given: A user types a particular city in the city textbox.
- When: and picks the relevant option from the dropdown of choices that his input generated
- Then: the chosen city shall be highlighted and selected → output in the search field.

---

### *Feature 2: Show/Hide Event Details*

***User Story:** As a user, I want to be able to view and hide event details so that I can quickly scan through events and get more information for the events that I'm interested in.*

***Scenario 1:** An event element is collapsed by default*

- Given: A user is on the app
- When: They view the list of events
- Then: Each event should be displayed in a collapsed state, showing only basic information like title, date, and location

***Scenario 2:** User can expand an event to see details*

- Given: A user is on the app looking at the list of events
- When: They click on a collapsed event
- Then: The event details should expand, showing additional information such as description, time, venue details, and any other relevant information

***Scenario 3:** User can collapse an event to hide details*

- Given: A user is viewing an expanded event
- When: They click on the expanded event
- Then: The event should collapse, hiding the additional details and returning to its default state

---

### *Feature 3: Specify Number of Events*

***User Story:** As a user, I want to be able to control the number of events displayed so that I can customize my viewing experience based on my preferences and device capabilities.*

***Scenario 1:** When user hasn't specified a number, 32 events are shown by default*

- Given: A user is on the app and has selected a particular location from the list
- When: They haven't changed any settings related to the number of events displayed
- Then: The app should display a maximum of 32 events by default

***Scenario 2:** User can change the number of events displayed*

- Given: A user is on the app and has selected a particular location from the list
- When: They access the settings or use a control to change the number of events displayed
- Then: The app should update to show the specified number of events

---

### *Feature 4: Use the App When Offline*

***User Story:** As a user, I want to be able to access event information even when I'm offline, so that I can view event details without an internet connection.*

***Scenario 1:** Show cached data when there's no internet connection*

- Given: A user has previously loaded event data while online
- When: They open the app without an internet connection
- Then: The app should display the cached event data from their last online session

***Scenario 2:** Show error when user changes search settings (city, number of events)*

- Given: A user is offline and viewing cached data
- When: They attempt to change search settings such as city or number of events
- Then: The app should display an error message indicating that these changes require an internet connection

---

### *Feature 5: Add an App Shortcut to the Home Screen*

***User Story:** As a user, I want to be able to add a shortcut to the events app on my device's home screen for quick and easy access.*

***Scenario 1:** User can install the meet app as a shortcut on their device home screen*

- Given: A user has the events app open in their web browser
- When: They select the option to add the app to their home screen
- Then: A shortcut to the events app should be created on their device's home screen

---

### *Feature 6: Display Charts Visualizing Event Details*

***User Story:** As a user, I want to see visual representations of event data to quickly understand trends and make informed decisions about which events to attend.*

***Scenario 1:** Show a chart with the number of upcoming events in each city*

- Given: A user is on the app
- When: They navigate to the data visualization section
- Then: They should see a chart (e.g., bar chart or pie chart) displaying the number of upcoming events in each city