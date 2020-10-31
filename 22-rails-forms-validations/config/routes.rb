Rails.application.routes.draw do
  # tells my app what do do/ how to respond to HTTP requests
  resources :bagels, only: [:index, :new, :create]

  # when I receive a GET request to /bagels
  # go TO the bagels controller, for a method called index
  # construct a helper method called bagels_path

# helper method is bagels_path
  # get '/bagels', to: 'bagels#index', as: 'bagels'
  # get '/bagels/new', to: 'bagels#new', as: 'new_bagel'
  # post '/bagels', to: 'bagels#create', as: 'bagels'
  # get '/bagels/:id', to: 'bagels#show', as: 'bagel'
end

# SINATRA
# get '/bagels' do
#   #controller code
# end
