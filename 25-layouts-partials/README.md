### We gonna take a look at why and when we might want to use layouts, partials, and helpers?

#### Q: When do we use layouts?

    - Anything that is consistent across different views of a webpage (navbar, footer, etc)
    -  In some situations you may want different layouts on different controllers, ie. admin nav bar vs. user nav bar

- `app/views/layouts/application.html.erb` => Rails' default layout


- add `<h1>Hello</h1>` to the application.html.erb layout 

```ruby
class DogsController < ApplicationController
    layout false
```

_customize the layout for a single route by modifying the default render_

```Ruby
def show
    @dog = Dog.find(params[:id])
    render layout:false
  end
```

- change our `<h1>Hello</h1>` from application.html.erb to below.

```html
<nav>
    <%=link_to "Home", "/"%>
</nav>
```

_custom layouts_

- in app/views/layouts - create file sad_puppy.html.erb
- copy & paste code from our application.html.erb layout
- modify with the following:

```html
<!DOCTYPE html>
<html>
 <head>
   <title>FixMe</title>
   <%= csrf_meta_tags %>
   <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track': 'reload' %>
   <%= javascript_include_tag 'application', 'data-turbolinks-track': 'reload' %>
 </head>
 <body>
   <img src="/sad_boi.jpeg" alt="a sad puppy dog">
   <%= yield %>
 </body>
</html>

```

- modify SheltersController.rb

```ruby
class SheltersController < ApplicationController
 layout 'sad_puppy'
```

_More advanced example: using a grid system for Bootstrap maybe, you could define individual layout with entirely different grids_

## Partials

#### Q: What are partials and when might we want to use then?

    - minimize repetative view code that appears in more then one, but now all views. (usually is rendered much more dynamically than a layout.)
    - edit & new forms

_There are a handful of different ways to handle rendering partials, but generally speaking - especially in the labs - you'll see partials rendered with what are referred to as locals. Locals define data, or objects, that are used within the partial to dynamically render html. We'll see that in action in just a bit_

[PartialRenderer docs](https://api.rubyonrails.org/classes/ActionView/PartialRenderer.html)


### Stats

- point out repetitious code.
- Navigate to /shelters and then /shelters/3 looking at the 'dog stats' that are displayed for each shelter across both the index and show page.

#### Q: How do we get started writing a partial and where might we want to put it?

_I think we'll call it \_stats and because what we're referencing is stats related to dogs, we could make the argument for putting it in on /dogs directory_

these dog stats are also referred to on the owner view, not just shelter

- in app/views/dogs add \_stats.html.erb


- copy & paste the applicable chunks of code into our new partials view to review them side-by-side noting the similiarities and differences. These are in owners/index & show and shelters/index & show

in \_stats.html.erb we should now have:

```html
 <div>
      <p># of Puppies: <%= owner.dogs.count{|dog| dog.age <= 1}%></p>
      <p># of Mutts: <%= owner.dogs.count{|dog| dog.breed.downcase == 'mutt'}%></p>
      <p># of Males: <%= owner.dogs.count{|dog| dog.sex == 'M'}%></p>
      <p># of Females: <%= owner.dogs.count{|dog| dog.sex == 'F'}%></p>
    </div>

      <div>
    <p># of Puppies: <%= @owner.dogs.count{|dog| dog.age <= 1}%></p>
    <p># of Mutts: <%= @owner.dogs.count{|dog| dog.breed.downcase == 'mutt'}%></p>
    <p># of Males: <%= @owner.dogs.count{|dog| dog.sex == 'M'}%></p>
    <p># of Females: <%= @owner.dogs.count{|dog| dog.sex == 'F'}%></p>
  </div>

    <div>
    <p># of Puppies: <%= shelter.dogs.count{|dog| dog.age <= 1}%></p>
    <p># of Mutts: <%= shelter.dogs.count{|dog| dog.breed.downcase == 'mutt'}%></p>
    <p># of Males: <%= shelter.dogs.count{|dog| dog.sex == 'M'}%></p>
    <p># of Females: <%= shelter.dogs.count{|dog| dog.sex == 'F'}%></p>
</div>

<div>
    <p># of Puppies: <%= @shelter.dogs.count{|dog| dog.age <= 1}%></p>
    <p># of Mutts: <%= @shelter.dogs.count{|dog| dog.breed.downcase == 'mutt'}%></p>
    <p># of Males: <%= @shelter.dogs.count{|dog| dog.sex == 'M'}%></p>
    <p># of Females: <%= @shelter.dogs.count{|dog| dog.sex == 'F'}%></p>
</div>
```

_we have owner, shelter, @shelter, etc.. what are we really going to want to reference here? How can we make this code a little more flexible? Remember, the goal is to create a partial that we can use in all 4 of these views!_

_What we really just want here is an array of dog objects right?_

- update \_stats.html.erb

```html
<div>
 <p># of Puppies: <%= dogs.count{|dog| dog.age <= 1}%></p>
 <p># of Mutts: <%= dogs.count{|dog| dog.breed.downcase == 'mutt'}%></p>
 <p># of Males: <%= dogs.count{|dog| dog.sex == 'M'}%></p>
 <p># of Females: <%= dogs.count{|dog| dog.sex == 'F'}%></p>
</div>
```


- in owners/index.html.erb remove the existing dog stats div to be replaced by our new partial.

- add partial to owners/index.html.erb

```html
    <% end %>
  </table>
  <%=render partial: 'dogs/stats', locals: {dogs: owner.dogs}%>
<% end %>
```

- update owners/show and shelter/show & index similarly, redefining our locals as needed.

- looking back at \_stats.html.erb partial

### Owned/Shelter Dogs tables

- looking back in the browser - take a look at the dog tables - note differences between owned dogs and shelter dogs.

_lets first start by making two different partials and then maybe we can go back and refactor later._

- in views/dogs create partials for \_owned_dogs.html.erb and \_shelter_dogs.html.erb

- cut & paste `<table>` element from owners/index.html.erb and move to \_owned_dogs.html.erb

the owned_dogs.html.erb partial should now look like this:

```html
<table>
  <tr>
    <th>Name</th>
    <th>Breed</th>
    <th>Age</th>
    <th>Sex</th>
    <th>Owner</th>
    <th>Abandon</th>
  </tr>
  <% dogs.each do |dog|%>
    <% if dog.owner %>
      <tr>
        <td><strong><%=link_to dog.name, dog_path(dog)%></strong></td>
        <td><%=dog.breed%></td>
        <td><%= dog.age%></td>
        <% if dog.sex == 'M' %>
          <td>male</td>
        <% else %>
          <td>female</td>
        <% end %>
        <td><%= dog.owner.name%></td>
        <td><button><%= link_to "Abandon", "/dogs/#{dog.id}/abandon" %> </button> </td>
      </tr>
    <%end%>
  <% end %>
</table>
```

note that we also have to add this bit of logic for the partial to also work in dogs/index.html.erb, `<% if dog.owner %>` (and extra end!)

- looking in `views/dogs/index.html.erb`

- remove 'adopted dogs' table and replace with partial

```html 
<h1>Adopted Dogs:</h1>
<%= render partial: 'owned_dogs', locals: {dogs: Dog.all}%>
```

- update owners/index to also use partial

```html 
<h1>All Owners:</h1>
<% Owner.all.reject{|owner| owner.dogs.length == 0}.each do |owner| %>
 <h2><%= owner.name %>'s dogs:</h2>
 <%= render partial: 'dogs/owned_dogs', locals: {dogs: owner.dogs}%>
 <%=render partial: 'dogs/stats', locals: {dogs: owner.dogs}%>
<% end %>
```

- remove table from owners/show and render the partial

```html 
<h1><%= @owner.name %></h1>
<h3>Dogs:</h3>
<%=render partial: 'dogs/owned_dogs', locals: {dogs: @owner.dogs}%>
<%=render partial: 'dogs/stats', locals: {dogs: @owner.dogs}%>

```

- Follow similar steps - remove 'adoptable dogs' table from dogs/index and move into \_shelter_dogs.html.erb

\_shelter_dogs.html.erb

```html
<table>
  <tr>
    <th>Name</th>
    <th>Breed</th>
    <th>Age</th>
    <th>Sex</th>
    <th>Shelter</th>
    <th>Adopt</th>
  </tr>
  <% dogs.each do |dog|%>
    <% if !dog.owner %>
      <tr>
        <td><strong><%=link_to dog.name, dog_path(dog)%></strong></td>
        <td><%=dog.breed%></td>
        <td><%= dog.age%></td>
        <% if dog.sex == 'M' %>
          <td>male</td>
        <% else %>
          <td>female</td>
        <% end %>
        <td><%= link_to dog.shelter.name, shelter_path(dog.shelter) %></td>
        <td><button><a href="/dogs/<%=dog.id%>/adopt">Adopt Me!</a></button> </td>
      </tr>
    <% end %>
  <% end %>
</table>
```

dogs/index

```html
<h1>Dogs up for Adoption:</h1>
<%=render partial: 'shelter_dogs', locals: {dogs: Dog.all}%>
<h1>Adopted Dogs:</h1>
<%= render partial: 'owned_dogs', locals: {dogs: Dog.all}%>
```

shelter/show

```html
<h1><%= @shelter.name %></h1>
<%=render partial: 'dogs/shelter_dogs', locals: {dogs: @shelter.dogs}%>
<%=render partial: 'dogs/stats', locals: {dogs: @shelter.dogs}%>

```

shelter/index

```html
<h1>All Shelters</h1>
<% Shelter.all.each do |shelter| %>
  <h3><%= link_to shelter.name, shelter_path(shelter) %></h3>
  <%=render partial: 'dogs/shelter_dogs', locals: {dogs: shelter.dogs}%>
  <%=render partial: 'dogs/stats', locals: {dogs: shelter.dogs}%>
<% end %>
```

_Awesome. This is a great start and again, our partials are looking a lot more DRY.. however, they are honestly a little bit of a mess and could be cleaned up quite a bit using helpers._

_Which happens to be a perfect segway into our next topic!_

### Helpers

#### Q: What are view helpers and why do we use them?

- remove logic out of our views - views should be concerned with views!
- seperation of concerns/single responsibility
- iteration, if/else logic, manipulating or formatting data, etc. belong in helpers!

#### Q: Where do we define our helper methods?

- We define helpers methods inside our our Application Helper in app/helpers/application_helper.rb

_It's important to note that helpers defined here will be specific to your views and will not be accessible in your controllers unless we tell it otherwise_

_To make our helper methods accessible inside of our controllers, we have to 'include' them in our ApplicationController like so,_

```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include ApplicationHelper

  def welcome
    render :'layouts/welcome'
  end
end
```

#### Q: Another question that comes up a lot - How do you decide whether logic belongs in a Helper as opposed to being defined on your model?

- if the logic you're defining specifically involves querying or changing data from your database, it probably belongs on your model and not in a helper.

[Where do I put my Code](http://codefol.io/posts/Where-Do-I-Put-My-Code/)

looking back in `app/helpers/application_helper.rb`

_Keep in mind that even though we are writing code specific to views, helpers are defined using vanilla Ruby and shouldn't inlcude anything sort of HTML or ERB syntax. We can however use Rails helpers in here - because they are of course just plain ruby code. Things like link_to are form helpers are fair game._

_You can also use something like the Rail's content_tag helper that will generate html tags. This can be super helpful if you need to do something like return an h1 tag in some situations or a p tag in others. You can also do fun things like dynamically assigned class names which will in turn apply different CSS._

_You can check out more about content_tags here:_

[content tags](https://api.rubyonrails.org/v5.1.7/classes/ActionView/Helpers/TagHelper.html)

_So, with that in mind, lets start doing a little refactoring. We'll first start with our \_shelter_dogs partials and we're actually going to end up implementing both helper methods and class methods on our Dog model._

looking in views/dogs/\_shelter_dogs.html.erb

_Right off the bat, I really hate this `<% if !dog.owner %>` logic inside of our view. We should really only be passing in applicable data to this view and should have to make that check here._

#### Q: What do you think, is this going to be best solved by a helper method or a class method on our model?

- In this case, I think a class method on our model would actually be most appropriate. There we can write logic to customize how we're querying our database in the first place. Database querying = class method.

_Lets update our model to include:_

```ruby
def self.owned
    where(shelter_id: nil)
  end

  def self.adoptable
    where(owner_id: nil)
  end
```

_We can now use our Dog class methods to properly query the database and remove our if logic from the view_

updated \_owned_dog and \_shelter_dog partials should now look like this:

```html
  <% dogs.each do |dog|%>
    <tr>
      <td><strong><%=link_to dog.name, dog_path(dog)%></strong></td>
      <td><%=dog.breed%></td>
      <td><%= dog.age%></td>
      <% if dog.sex == 'M' %>
        <td>male</td>
      <% else %>
        <td>female</td>
      <% end %>
      <td><%= dog.owner.name%></td>
      <td><button><%= link_to "Abandon", "/dogs/#{dog.id}/abandon" %> </button> </td>
    </tr>
  <% end %>
```

_We'll also have to move our querying logic from the partial to the view where we set up our locals._

update dogs/index view to use the new Dog class method

```html
<h1>Dogs up for Adoption:</h1>
<%=render partial: 'dogs/shelter_dogs', locals: {dogs: Dog.adoptable}%>
<h1>Adopted Dogs:</h1>
<%= render partial: 'owned_dogs', locals: {dogs: Dog.owned}%>
```

- looking at owners/index:

- update the owner/index view to remove reject logic

```html
<h1>All Owners:</h1>
<% Owner.dog_owners.each do |owner| %>
  <h2><%= owner.name %>'s dogs:</h2>
  <%=render partial: 'dogs/owned_dogs', locals: {dogs: owner.dogs}%>
  <%=render partial: 'dogs/stats', locals: {dogs: owner.dogs}%>
<% end %>
```

- add that class method to the owner model

```ruby
class Owner < ApplicationRecord
  has_many :dogs
  has_many :shelters, through: :dogs
  validates :name, presence: true

  def self.dog_owners
    all.reject{|owner| owner.dogs.length == 0}
  end
end
```


- looking back at views/dogs/\_shelter_dogs.html.erb


- copy and paste the if/else logic and put it in a new 'display_gender' method inside of helpers/application_helper.rb

```ruby
module ApplicationHelper
    def display_gender(dog)
        <% if dog.sex == 'M' %>
            <td>male</td>
          <% else %>
            <td>female</td>
          <% end %>
    end
end
```

_lets go ahead and refactor this so that we're just working with ruby code. We'll remove our erb tags and return just a string here._

```ruby
module ApplicationHelper
    def display_gender(dog)
        if dog.sex == 'M'
            "male"
          else
            "female"
          end
    end
end
```

back in \_shelter_dogs remove if/else logic and replace with:

```html
      <td><%=display_gender(dog)%></td>
```

\_owned_dogs partial can now also be updated to use our new helper


- back in application_helper.rb:

```ruby

    def logged_in_link
        if logged_in?
            link_to("Logout", "/logout")
        else
            link_to("Login", "/login")
        end
    end
```
