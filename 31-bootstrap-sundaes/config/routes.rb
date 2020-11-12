Rails.application.routes.draw do
  root to: 'main#index'
  resources :sundaes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
