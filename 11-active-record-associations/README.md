# SWBATs 
 - Explain how ActiveRecord works for non-related models
 - Implement one-to-many relationships using ActiveRecord has_many and belongs_to
 - Implement many-to-many relationships using ActiveRecord has_many, :through
 - Describe the methods that the relationship macros add to a model
 - Practice looking up library documentation
    - Specifically, looking up documentation for ActiveRecord
    - Migrations
    - Association Macros
    - Rake tasks

# Project Setup 
## File structure 
Follow project setup from previous lectures, but go over them once more to explain what each file is doing, why we have each directory, and how everything fits together.

This is a time to go over the domain as well. Make a domain that has both types of relationships that we go over: one-to-many and many-to-many.

Patient -< Appointment >- Doctor >- Department

## Migrations 
 - syntax for creating a migration in the command line
 - writing out the actual migration in the migration file
 - start with models that don’t need foreign keys and migrate those
 - show the schema.rb after each migration
 - write out migrations that need foreign keys and question the class as to why they need them on those tables
 - run all migrations and check the schema before moving on
## Models 
 - setup your models one-on-one and test each
 - use ActiveRecord::Base.logger = Logger.new(STDOUT) to show sql queries from AR
# Our First ActiveRecord Relationships 
 - set up a belongs_to association and demo it in console doctor.department.name
 - set up a has_many association and demo it department.doctors
    - this is like an array, but inspect the class and view the methods
 - emphasize inverse relationships
 - set up a has_many through association and demo it patient.doctors
 - build out all relationships, test, and view sql queries
# Macros and Methods Created 
 - define macro as a method call that creates functions
 - show rails guide and how each association creates new methods for class
 - shovel items into a through collection and view sql
 - mass assignment with instances of other classes instead of native types
 - show how join instances are created automatically
# Wrap Up 
 - demonstrate what activerecord::base gives us
 - difference between new (+ save) and create
 - difference between changing attributes (+ save) and update
 - if something has a foreign_key it belongs to the table from the foreign key
 - if we do the belongs_to, we need to include the inverse has many
 - if you get an undefined method error, you need to include the macros
 - if there are linked relationships, you can use through as an option to has many
 - 1000 times easier than writing sql
