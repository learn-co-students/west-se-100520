Rails.application.routes.draw do
  resources :pokemons, only: [:create, :delete]
  resources :trainers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
