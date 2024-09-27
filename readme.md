# jsMeetUp - MeetApp built with React

WIP - currently being built!

## Table of Contents 

1. [Project Details](#projectdetails)
2. [Tech Stack & Methods](#techstack)
3. [Installation & Setup](#setup)
4. [Key Features](#features)
5. [Live App](#liveapp)
6. [Restrictions](#restrictions)
7. [User scenarios & stories](#userstories)

## 1. Project Details<a name="projectdetails"></a>

This was another assignment during my studies with CareerFoundry.

The purpose of this project was to 

- learn & use a test-driven development (TDD) technique and compare it to Behavioural-driven Development (BDD).
- learn about serverless deployment / set up an AWS serverless environment and learn how to setup AWS Lambda functions
- use Google Authentication (OAuth)
- work with the Google Calendar API
- learning to apply testing methods and continuous integration & delivery (CI / CD)
- looking into Application Performance Monitoring with Atatus
- looking into Object-oriented programming

The app shows a list of MeetUp Events happening in various cities - the events are loaded from a Google Calendar, using Google's API. Users are asked to authenticate via a Google Account to get access to the list of events and the stats around cities event distribution.

## 2. TechStack & Method<a name="techstack"></a>

- Testing methods applied (36 Tests in total):
    - Unit Testing (using Jest)
    - Integration Testing
    - Acceptance Testing (Jest-Cucumber)
    - EndtoEnd testing (Puppeteer)
- Built: ReactJS, Recharts AWS Lamda (serverless progressive web application (PWA).  
- User Authentication, API: Google, Google Developer Console
- Serverless: AWS, Lambda Functions 
- App is available for: Web, Mobile Browser, PWA

## 3. Installation & Setup<a name="setup"></a>

1. Download a zip of the main branch or clone the repository if you'd like to contribute
2. Set the project up in your prefered environment and start the app:

```
npm install
npm start
```

3. The project is set up as a CRA ('Create React App') so check the package.json file for info on the scripts.

4. For testing, run:

```
npm test run
```

## 4. Key Features of the app<a name="features"></a>

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.
- User is being alerted when
    - Info: an incorrect city is requested
    - Error: the number of events field is empty, does not contain a number 0< or has letters
    - Warning: they are offline and data shown might not be up to date


## 5. Live App<a name="liveapp"></a>

- Web: https://koernerclaudia.github.io/meet/
- PWA: This app is also available as a Progressive Web App - meaning on your mobile browser you can click on the download button and 'Add it to your home screen' as a standalone app.


## 6. Restrictions<a name="restrictions"></a>

Right now, only people who can authenticate themselves with a Google Account can use and browse on the app.


## User Stories & Scenarios, Gherkin<a name="userstories"></a>

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