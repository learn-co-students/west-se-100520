## Task

It is the year 2100 and you run an interplanetary space travel agency.  You are building a website to book scientists on missions to other planets.  You already have built out your planetary database to perform all CRUD actions on the planets you travel to.  It is your job to build out Scientist and Mission models so that scientists can book their missions.  **In a given mission, one scientist will visit one planet**.  Over their careers, **scientists will visit many planets** and **planets will be visited by many scientists**.

## Instructions

- Sketch out the domain of the models of Planet, Scientist and Mission.  Think about what foreign keys should go on which models.  What are the relationships between the three?

- Once you are confident in your domain sketch, build out the models and migrations for your database. 
    - Your Scientist model should have a **name (string)** and **field_of_study (string)**.  
    - Your Mission model should have a **name (string)**.  
    - You will also need to include **foreign keys** on the appropiate models.  

- Test your models are set up correctly by running `rails db:seed` (hint: make sure you set up the relationships on your models!)

- Build the following features on your website:

    - A user should be able to see a list of all scientists

    - Clicking on a scientist should take you to a detail page about the scientist, including listing all the planets they have visited.

    - A user should be able to create a new scientist.
        - Scientists must have a name and a field of study
        - Scientists' names should be unique
        - If the user makes a mistake on the form, an error should display to the user

    - A user should be able to edit the details of a scientist

    - A user should be able to delete a scientist

    - A user should be able to create a new mission by choosing a scientist and a planet from dropdown menus.
        - A mission must have a unique name, a scientist, and a planet.
        - After the mission is created, the user should be redirect to the scientist's detail page
        - Check that this is working correctly by verifying the new planet appears on the scientist's detail page
        
 - Build an "about" page at "/about" which should list your name and the total number of scientists and planets in your database.
