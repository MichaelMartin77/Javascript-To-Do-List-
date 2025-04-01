# To-Do List App

## Description
The To-Do List App is a browser-based task tracker that allows users to add, complete, and delete daily tasks. It features persistent storage using the Web Storage API, enabling tasks to remain saved even after a page refresh. The app is built using vanilla JavaScript, HTML, and CSS, with a focus on DOM manipulation and clean user interaction.

## Features
- **Add Tasks**: Users can input and add tasks using the "Add" button or by pressing the Enter key.
- **Mark as Completed**: Click on any task to toggle its completed state with a visual check-off.
- **Delete Tasks**: Each task includes a delete ("\u00d7") button for easy removal.
- **Persistent Storage**: All tasks and their states are saved using localStorage, so they remain even after refreshing the page.

## Technologies
- **HTML**: Provides the structure of the application.
- **CSS**: Handles the visual layout and checked task styling.
- **JavaScript**:
  - DOM Manipulation
  - Event Listeners
  - Web Storage API (localStorage)

## Lessons Learned
- Developed a deeper understanding of how to work with the DOM to dynamically create and update elements.
- Practiced using event delegation to handle clicks efficiently on dynamically added items.
- Learned how to use the Web Storage API, specifically `localStorage`, to persist data across sessions.
- Improved my ability to write functions that separate logic (like `saveTask()` and `loadTasks()`) from event handling.
- Strengthened debugging skills through console logging, inspecting the DOM, and using DevTools.

## Future Improvements
- Add a "Clear All" button to remove all tasks at once.
- Add due dates or categories to tasks.
- Improve responsiveness and styling for mobile devices.
- Add tests to ensure localStorage and event handlers behave as expected.

