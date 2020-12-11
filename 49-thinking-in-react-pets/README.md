# Thinking in React

Let's figure out how to turn a set of requirements into a React app the React-ful way!

Resources: [Documentation](https://reactjs.org/docs/thinking-in-react.html)

1. Mock it up!

Start with a design: What are the different parts of the UI? 
  - Wireframes
  - Label the different parts of the UI
    - Draw boxes around each part
    - Add labels that match the component names you'd like to use
  - Create the hierarchy of components (like a tabbed list, or diagram if you prefer)

2. Plan out your data

Add static data: What data is required for the app to work?
  - Make sure the data matches the structure of the data you will be using
  - Store that static data in a file, or in variables or state in the relevant components
    - I know the docs say not to use state at this point, but if you know some piece of data is definitely going to live there, why not?
  - TIP: When working with third-party APIs, you will likely be limited to a certain number of calls per second/minute/hour: 
    - Copy the results of requests from their documentation or by making a fetch request.
    - Store that data in a file or variables or state
    - Use that static data to build your app until you're ready start fetching
    - If you make too many requests, you can be blocked from an API, so mocking w/ static data is very helpful, especially when working in a team or using hot reloading on save

3. Build a static version in React

Use the information you've collected to build a static version of your app. It should look like your wireframes and use the static data. It will not have any behavior.

4. Identify the minimal amount of state required

In other words, less is more when it comes to state. What is the least amount of data you can track for your app to work?

Let's say my app lists different colored shoes, which are fetched from an API. I want my users to be able to see all of the shoes or shoes of a certain color, such as yellow. Here are some options for tracking state in my app:

OPTION 1:
```
state = {
  allShoes: [/* all the shoes */],
  chosenColor: 'yellow',
  filteredShoes: [/* only chosenColor shoes */]
}
```

OPTION 2:
```
state = {
  allShoes: [/* all the shoes */],
  chosenColor: 'yellow'
}
```

OPTION 3:
```
state = {
  allShoes: [/* all the shoes */],
  filteredShoes: [/* only shoes of one color */]
}
```

Option 2 stores the least amount of state and will work for the requirements of this shoe app. We can filter allShoes on the fly any time the chosenColor value changes.

Next, or kind of at the same time really, decide where that state should live:
- put it as close to the components that require it as you can within the hierarchy
  - i.e. don't put state in App if none of its direct children use it, aka avoid needlessly passing state through components
  - group dependent state slices together: in the shoes example, we needed to know the chosen color in order to show the correct shoes, so it makes sense to keep those slices together instead of in separate components

5. Start hooking everything up! AKA Inverse data flow

Start passing down callbacks that manipulate the state of their parent components. Build in other complex functionality.