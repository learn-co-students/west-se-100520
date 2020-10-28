 # rails-forms-rest

## SWBATs 
- Discuss and Review Forms
- form_for, form_tag, link_to, button_tag, submit_tag
- Strong params
- Checking information before creating

## Resources 
[Security](http://guides.rubyonrails.org/v3.2.8/security.html)
[Rails Guides](http://edgeguides.rubyonrails.org/active_record_validations.html)
[Form For](https://guides.rubyonrails.org/form_helpers.html#binding-a-form-to-an-object)
[Rails Strong Params](https://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters)

### Private Keyword
[Read this (very short) article](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)

#### Create a new application 
`rails new docoffice`

- Create a new model Doctor `rails g model Doctor name speciality`

- Create a new model Patient `rails g model Patient name condition`

- Create the routes for both

> You may use the resources keyword but use the only keyword to define only the actions you will be using

- Create your controllers
```ruby
class DoctorController < ApplicationController
  def index
    @doctors = Doctor.all
  end


  def show
    @doctor = Doctor.find(params[:id]
  end


  def new
    @doctor = Doctor.new
  end


  def create
    @doctor = Doctor.create(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end

  def edit
    @doctor = Doctor.find(params[:id])
  end


  def update
    @doctor = Doctor.find(params[:id])
    @doctor.update(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end
end
```
Create your corresponding views
```ruby
# new.html.erb
  <%= form_for @doctor do |f| %>
    <%= f.label :name %>
    <%= f.text_field :name %>


    <%= f.label :speciality %>
    <%= f.text_field :speciality %>

    <%= f.submit %>
  <% end %>
  ```
## Mass Assignment & Strong Params 
This lecture is also a good opportunity to dive into strong params. Because of issues with mass assignment Rails does not allow you to initialize with params therefore you must use strong params
```ruby
# doctors_controller.rb

  #...

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.valid?
      @doctor.save
    else
      render 'new'
    end
  end

  # ...

  private

  def doctor_params
    params.require(:doctor).permit(:name, :speciality)
  end

end
```
It could also be cool to show students how the return of `doctor_params`. Rails changes the params to `permitted:true`

#### Refactor with before_action 
Refactor your controllers Notice the number of times `Doctor.find(params[:id])` is used

We can make sure that block of code is executed before each of the controller#actions that need it like :show,:edit,:update,:destroy
```ruby
class DoctorController < ApplicationController

  def index
    @doctors = Doctor.all
  end

  def show
    find_doctor
  end

  def new
    @doctor = Doctor.new
  end

  def create
    @doctor = Doctor.create(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end

  def edit
    find_doctor
  end

  def update
    find_doctor
    @doctor.update(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end

  def destroy
    find_doctor
    @doctor.destroy
    redirect_to doctors_path
  end

  private

  def find_doctor
    @doctor = Doctor.find(params[:id]
  end
end
```
[Chapter 8 Filters] Or you can refactor into the `before_action :find_doctor`
```ruby
class DoctorController < ApplicationController
  before_action :find_doctor

  def index
    @doctors = Doctor.all
  end

  def show
  end

  def new
    @doctor = Doctor.new
  end

  def create
    @doctor = Doctor.create(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end

  def edit
  end

  def update
    @doctor.update(name: params[:doctor][:name], speciality: params[:doctor][:speciality])
  end

  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end

  private

  def find_doctor
    @doctor = Doctor.find(params[:id]
  end
end
```

Doctors resource
Action  method   path/url
INDEX  get      /doctors
SHOW   get      /doctors/:id
NEW    get      /doctors/new
CREATE post     /doctors
EDIT   get      /doctors/:id/edit
UPDATE patch    /doctors/:id
DELETE delete   /doctors/:id
