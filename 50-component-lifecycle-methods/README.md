# React Component Lifecycle Methods

[Lifecycle Methods Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
[React Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

## What We Will Be Able To Do:
- Explain the main component lifecycle methods: componentDidMount, componentDidUpdate, componentWillUnmount
  - When do they happen? What code should you put in each?
- Fetch data and update state (in the right place)
- Clean up processes that should no longer be running
- Update the DOM when specific state changes happen

## componentDidMount()
Runs once when a component is first ready in the DOM. 

Great place to fetch!

## componentDidUpdate(prevProps, prevState)
Runs any time a component updates - e.g. state or props change.

Great place to run code that depends on specific state or prop changes: e.g. if this.state.puppies is more than the previous puppies, alert('yay more puppies').

## componentWillUnmount()
Runs once before a component is removed from the DOM. 

Great place to clean up after yourself! E.g. if a component uses a timer to regularly fetch data, clear that timer in here. No need to fetch data over and over when you don't need it anymore.

## Instructions

We'll continue working with our Pet Adoption app, but we'll build out some new features to make it more robust.

### Fetch the Pets Only Once

Fetch pets only once.

Show all of the pets by default (without needing to click anything).

Modify the app so that the filters change which pets are showing without re-fetching.

### Randomly Adopt a Pet Every 2 seconds
Make it look like other users are on the website adopting Pets.

Every 2 seconds, set a pet's isAdopted value to true. It doesn't matter if the pet is already adopted.
Just make it random.

Make sure to only target the pets in the PetBrowser.

If the user doesn't adopt a pet before all pets are adopted show an alert stating:
"You snooze you lose!"

This alert should only show up once after all pets are adopted.

### BONUS: Make a Gif Randomly Appear in the Browser Window
The user should click a button to show or hide the Cage component.

It should show up at a random location and then disappear and then reappear.
You already have the move() function and supporting code in the constructor.

This should happen every 1 second.