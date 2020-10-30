Rails.application.routes.draw do
  resources :farmers, only: [:index]
end
