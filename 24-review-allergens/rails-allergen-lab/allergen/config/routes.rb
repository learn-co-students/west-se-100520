Rails.application.routes.draw do
  resources :allergies, only: [:new, :create, :destroy]
  resources :recipe_ingredients, only: [:new, :create]
  resources :ingredients, only: [:index, :show]
  resources :recipes
  resources :users, only: [:show, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
