Rails.application.routes.draw do
  resources :missions
  resources :scientists
  get "/about", to: 'application#about'
  # resources :planets
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
