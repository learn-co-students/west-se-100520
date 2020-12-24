Rails.application.routes.draw do
  resources :userarts
  resources :arts
  resources :artists
  resources :users

  post "/login", to: "users#login"
  get "/getuser", to: "users#getuser"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
