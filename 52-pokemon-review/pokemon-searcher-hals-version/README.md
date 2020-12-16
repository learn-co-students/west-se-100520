# React Pokemon Searcher

![Pokemon search screen recording](https://curriculum-content.s3.amazonaws.com/react/pokemon.gif)

(Note: If the gif isn't working, view it directly by navigating [here](https://curriculum-content.s3.amazonaws.com/react/pokemon.gif))

## React Code Challenge Practice

## Project Goals

- Create an index displaying pokemon 'cards'
  - Render each pokemon name, picture, and hp in a card
  - **When clicked, the card should toggle between displaying the front and back pictures**
- Allow users to search a pokemon by its name in order to narrow down the cards shown on the page
- Wire up the form to add a missing pokemon (bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a post request, etc. When a new pokemon is added, it should show on the page without having to refresh.

## Project Requirements

- components using state and props
- re-renders based on client-side events
- can both get data from, and post data to the json server/database

## Trying to Figure Out Where to Start

For the most part, the framework for this application is already made, with a
simple json server, and a react app, with all the components needed. When you
run `npm start` a json server will spin up and you can access the pokemon info
at http://localhost:3000/pokemon, and your react application will also start,
on port 3001. Given a list of deliverables, our goal is to navigate the
existing code base and implement several new features. Take some time to
familiarize yourself with the structure of the application, and think about
where you will be making changes in order to implement the new features. While
you could solve this lab without creating new components, or changing any
existing ones to be functional components, you are encouraged to do so if it
makes sense to do that at any point.

Be sure to use good programming practices, such as clear variable names and
single responsibility functions. We want our react app to be clean, easy to
read and understand, and of course, easy to to debug, or even add more
features to later.
