Rails.application.routes.draw do
  resources :cows, only: [:show, :new, :create]
  resources :farmers, only: [:index]
end
