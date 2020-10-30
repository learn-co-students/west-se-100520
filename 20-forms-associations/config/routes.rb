Rails.application.routes.draw do
  resources :cows, only: [:new, :show, :create]
  resources :farmers, only: [:index]
end
