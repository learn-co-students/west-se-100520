## Rails Recipes Mini Project

In this project, we will be practicing object relationships in Rails. We will be building out a domain model in which a User can author a recipe. A single Recipe `belongs_to` a user. A Recipe also has many Ingredients, while a single Ingredient can be found in many Recipes. There are Ingredients that some Users may be allergic to. **Build out full CRUD functionality as well as validations for this app.** The minimum requirements are below, but once you reach MVP, you can continue to expand the app as you see fit. You may wish to create seed data as you build to help you test your app in development. BE SURE TO READ ALL THE DELIVERABLES CAREFULLY BEFORE YOU BEGIN TO CODE AND SKETCH OUT YOUR MODEL ASSOCIATIONS.

## Deliverables

### `Recipe`

- recipes must have at least a name(string) and a meal-type(string)
- meal-types can only be one of "Breakfast", "Lunch", "Dinner", "Appetizers", or "Sweets"

- `index`––show all recipe instances, with the ability to sort by number of ingredients. You can use a [search for this feature](http://guides.rubyonrails.org/form_helpers.html#a-generic-search-form)
- `new`––ability to create a new recipe and associate it with a particular user. You may want to look into [collection select](http://api.rubyonrails.org/v5.2.0/classes/ActionView/Helpers/FormBuilder.html#method-i-collection_select)
- `show`——show a recipe with all of its associated ingredients
- `edit`——ability to edit an existing recipe
- `delete`——ability to delete an existing recipe

### `Recipe-?`

- a user can add ingredients to a recipe, and indicate the amount (dropdown menus are ok for this)
- there should be at least one validation of your choice on this model

### `User`

- `show` page for a user. This should include all of the recipes that a user has authored, and a list of ingredients to which they are allergic.
- The ability to delete a user should also exist
- there should be at least one validation of your choice on this model

### `Ingredient-?/Allergies`

- a user can add an ingredient to the list of a users' allergies (an ingredient can also have many allergic users, but your app doesn't need to display that. Again, dropdowns are fine here.)
- a user can only add an ingredient to their allergy list once (it wouldn't make sense for 'peanut butter' to appear twice on a single user's list)
- a user should be able to click a 'Remove' button next to each listed allergy to delete it

### `Ingredient`

- `index` should show all ingredients, sorted by the number of users allergic to it. For example, if several users are allergic to peanut butter, it should appear higher on the list. You might want to look into [ActiveRecord Query Methods](https://guides.rubyonrails.org/active_record_querying.html)
- `show` a particular ingredient. I should be able to see all of the recipes that an ingredient appears in

### `Navigation`
Ideally, a user should be able to navigate to every app view by clicking on a link (not by entering URLs in the address bar).

### `**Bonus**`

- Add [bootstrap for styling](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
